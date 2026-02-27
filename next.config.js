const nextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/products/oando-chairs",
        destination: "/products/oando-seating",
        permanent: false,
      },
      {
        source: "/products/oando-chairs/:slug",
        destination: "/products/oando-seating/:slug",
        permanent: false,
      },
      {
        source: "/products/oando-other-seating",
        destination: "/products/oando-seating",
        permanent: false,
      },
      {
        source: "/products/oando-other-seating/:slug",
        destination: "/products/oando-seating/:slug",
        permanent: false,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "afcindia.in" },
      { protocol: "https", hostname: "static.wixstatic.com" },
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "cdn.prod.website-files.com" },
    ],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

module.exports = nextConfig;
