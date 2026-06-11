module.exports = function tailwindLoader(context, options) {
  return {
    name: 'tailwind-loader',
    configurePostCss(postcssOptions) {
      postcssOptions.plugins.push(require('@tailwindcss/postcss'));
      return postcssOptions;
    },
  };
};
