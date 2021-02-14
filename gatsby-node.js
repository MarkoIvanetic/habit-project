const path = require("path")
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "src/components"),
        "@hooks": path.resolve(__dirname, "src/hooks"),
        "@config": path.resolve(__dirname, "config"),
        "@api": path.resolve(__dirname, "api"),
        "@actions": path.resolve(__dirname, "actions"),
        "@static": path.resolve(__dirname, "static"),
      },
    },
  })
}
