import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      {
        pathname: "/auth/captcha/**",
      },
      {
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
