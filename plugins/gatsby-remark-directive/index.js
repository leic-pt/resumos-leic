const toGatsbyRemarkPlugin = require('to-gatsby-remark-plugin');
const remarkDirective = require('remark-directive');

module.exports = toGatsbyRemarkPlugin(remarkDirective);
