/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // appDir: true,
    swcPlugins: ["next-superjson-plugin", { excluded: ["someProp"] }],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.googleusercontent.com",
        port: "",
        pathname: "**",
      },
    ],
  },
  images: {
    domains: [
      "res.cloudinary.com",
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com",
    ],
  },
};

export default nextConfig;

// module.exports = nextConfig;

//////////////////////

// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
