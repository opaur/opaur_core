/** @type {import('next').NextConfig} */
const nextConfig = {images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
        pathname: "/api/portraits/**", // Permite todas las imágenes de este path
      },
    ],
  },};

export default nextConfig;
