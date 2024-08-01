/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "wry-ibis-923.convex.cloud",
      },
    ],
  },
};

export default nextConfig;
