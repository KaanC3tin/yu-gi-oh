/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "images.ygoprodeck.com",
      },
    ],
  },
};

export default nextConfig;
