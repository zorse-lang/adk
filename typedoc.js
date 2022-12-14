const fs = require("fs");
const path = require("path");
const { homepage, repository } = require("./package.json");
const DOCS_FOLDER = path.join(__dirname, "docs");
fs.rmSync(DOCS_FOLDER, { recursive: true, force: true });
/** @type {import('typedoc').TypeDocOptions} */
module.exports = {
  name: "ADK",
  theme: "hierarchy",
  entryPoints: ["./src/core/index.ts", "./src/scenes/index.ts"],
  entryPointStrategy: "expand",
  cleanOutputDir: true,
  titleLink: homepage,
  out: DOCS_FOLDER,
  includeVersion: true,
  hideGenerator: true,
  navigationLinks: { "GitHub Repository": repository.url.split("+").pop() },
  plugin: [
    "typedoc-theme-hierarchy",
    "typedoc-plugin-mermaid",
    "typedoc-plugin-mdn-links",
    "typedoc-umlclass",
    "typedoc-plugin-no-inherit",
  ],
  sort: "kind",
  treatWarningsAsErrors: true,
  excludePrivate: true,
  umlClassDiagram: {
    type: "detailed",
    location: "local",
    format: "svg",
  },
};
