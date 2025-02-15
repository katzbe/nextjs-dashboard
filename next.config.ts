import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects: async () => {
    return [
      {
        source: "/",
        permanent: true,
        destination: "/dashboard",
      },
    ];
  },
};

export default nextConfig;
