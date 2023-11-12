const { join } = require('path');

/**
 * @type {import("puppeteer").Configuration}
 */
module.exports = {
  // Changes the cache location for Puppeteer.
  // This is because when deploying to Vercel, ~/.cache isn't cached between builds.
  cacheDirectory: process.env['PUPPETEER_IN_PROJECT_DIRECTORY']
    ? join(__dirname, 'node_modules', '.cache-puppeteer')
    : undefined,
};
