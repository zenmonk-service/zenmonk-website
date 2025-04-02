const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  require("postcss-nested"),
                  require("postcss-custom-properties"), 
                ],
              },
            },
          },
        ],
      }
    );
    return config;
  },
  experimental: {
    turbo: {},
  },
};

export default nextConfig;
