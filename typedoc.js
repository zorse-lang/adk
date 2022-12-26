const fs = require("fs");
const path = require("path");
const { homepage, repository } = require("./package.json");
const DOCS_FOLDER = path.join(__dirname, "docs");
fs.rmSync(DOCS_FOLDER, { recursive: true, force: true });
/** @type {import('typedoc').TypeDocOptions} */
module.exports = {
  name: "ADK",
  entryPoints: ["./src/core/index.ts"],
  customCss: path.join(__dirname, "typedoc.css"),
  cleanOutputDir: true,
  titleLink: homepage,
  out: DOCS_FOLDER,
  includeVersion: true,
  hideGenerator: true,
  navigationLinks: {
    "GitHub Repository": repository.url,
  },
  plugin: ["typedoc-plugin-mermaid", "typedoc-plugin-mdn-links"],
};
