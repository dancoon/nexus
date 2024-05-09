/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { optimizeCss: true },
  images: {
    domains: ["localhost"],
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals.push(/@ckeditor\/ckeditor5-react/);
    }
    return config;
  },
};

export default nextConfig;
