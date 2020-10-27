module.exports = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.html$/i,
      use: [
        {
          loader: "html-loader",
        },
      ],
    })

    return config
  },
}
