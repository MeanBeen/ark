/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = "";
let basePath = "";

if (isGithubActions) {
  // Assuming the repo name is 'your-repo'
  const repo = "http://MeanBeen.github.io/ark";
  assetPrefix = repo;
  basePath = repo;
}

const nextConfig = {
  output: "export", // Enables static export
  assetPrefix: assetPrefix,
  basePath: basePath,
  trailingSlash: true, // Ensures URLs end with a slash
  images: {
    unoptimized: true, // Disable Next.js image optimization
  },
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;
