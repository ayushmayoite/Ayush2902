const { chromium } = require("playwright");
const fs = require("fs");
const http = require("http");
const path = require("path");

const dir = "E:/max/converted";
const files = fs.readdirSync(dir).filter((f) => f.toLowerCase().endsWith(".glb"));

if (!files.length) {
  console.log("NO_GLB_FILES");
  process.exit(1);
}

function contentType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (ext === ".html") return "text/html; charset=utf-8";
  if (ext === ".js") return "text/javascript; charset=utf-8";
  if (ext === ".glb") return "model/gltf-binary";
  return "application/octet-stream";
}

const server = http.createServer((req, res) => {
  const requestPath = (req.url || "/").split("?")[0];
  const safePath = decodeURIComponent(requestPath.replace(/^\/+/, ""));
  const filePath = path.join(dir, safePath || "test-viewer.html");

  if (!filePath.startsWith(path.resolve(dir))) {
    res.statusCode = 403;
    res.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.statusCode = 404;
      res.end("Not found");
      return;
    }
    res.setHeader("Content-Type", contentType(filePath));
    res.end(data);
  });
});

function waitForServer() {
  return new Promise((resolve, reject) => {
    server.listen(8091, "127.0.0.1", (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
}

(async () => {
  const results = [];
  try {
    await waitForServer();
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();
    const pageErrors = [];

    page.on("pageerror", (e) => pageErrors.push(String(e.message || e)));

    for (const file of files) {
      const url = `http://127.0.0.1:8091/test-viewer.html?file=${encodeURIComponent(file)}`;
      await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });

      let status = "timeout";
      try {
        await page.waitForFunction(
          () =>
            window.__mv &&
            (window.__mv.status === "loaded" || window.__mv.status === "error"),
          null,
          { timeout: 45000 },
        );
        status = await page.evaluate(() => window.__mv.status);
      } catch (_) {
        // keep timeout status
      }

      const message = await page.evaluate(() => (window.__mv && window.__mv.message) || "");
      results.push({ file, status, message, pageErrors: [...pageErrors] });
      pageErrors.length = 0;
    }

    await browser.close();
    console.log("RESULTS_JSON_START");
    console.log(JSON.stringify(results, null, 2));
    console.log("RESULTS_JSON_END");
  } catch (e) {
    console.error("TEST_FAILED", e.message || String(e));
    process.exitCode = 1;
  } finally {
    try {
      server.close();
    } catch {}
  }
})();
