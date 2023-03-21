/* eslint-env node */
const { resolve } = require("node:path");

module.exports = {
    extends: resolve(__dirname, "index.js"),
    env: { node: true }
};
