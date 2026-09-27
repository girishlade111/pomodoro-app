/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/pomodoro-app",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
