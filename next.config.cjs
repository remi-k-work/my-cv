// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   experimental: {
//     outputFileTracingRoot: "./data/",
//   },
// };

// export default nextConfig;
module.exports = {
  experimental: {
    // includes files from the monorepo base two directories up
    outputFileTracingRoot: path.join(__dirname, "./data/"),
  },
};
