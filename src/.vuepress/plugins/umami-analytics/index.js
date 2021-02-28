const path = require("path");

module.exports = (options = {}) => ({
  define() {
    const WEBSITE_ID = options.websiteId || false;
    const JS_URL = options.jsUrl || "";
    return { WEBSITE_ID, JS_URL };
  },

  enhanceAppFiles: path.resolve(__dirname, "enhanceAppFile.js"),
});
