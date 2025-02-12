/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.css$/,
      use: ["style-loader", "css-loader"],
      include: /node_modules\/odometer/,
    });
    return config;
  },
};

module.exports = nextConfig;
