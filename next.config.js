const nextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/products/oando-chairs",
        destination: "/products/chairs-others",
        permanent: false,
      },
      {
        source: "/products/oando-chairs/:slug",
        destination: "/products/oando-seating/:slug",
        permanent: false,
      },
      {
        source: "/products/oando-other-seating",
        destination: "/products/chairs-others",
        permanent: false,
      },
      {
        source: "/products/oando-other-seating/:slug",
        destination: "/products/oando-seating/:slug",
        permanent: false,
      },
      {
        source: "/products/oando-seating",
        destination: "/products/chairs-others",
        permanent: false,
      },
      {
        source: "/products/oando-workstations",
        destination: "/products/workstations",
        permanent: false,
      },
      {
        source: "/products/oando-tables",
        destination: "/products/meeting-conference-tables",
        permanent: false,
      },
      {
        source: "/products/oando-storage",
        destination: "/products/storages",
        permanent: false,
      },
      {
        source: "/products/oando-soft-seating",
        destination: "/products/soft-seating",
        permanent: false,
      },
      {
        source: "/products/oando-collaborative",
        destination: "/products/others-1",
        permanent: false,
      },
      {
        source: "/products/oando-educational",
        destination: "/products/education",
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
