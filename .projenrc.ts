import { TypeScriptESMProject } from "@ncfour/projen-utils";
import { javascript } from "projen";

const project = new TypeScriptESMProject({
  authorName: "Tim Hahn",
  authorEmail: "hahntj@gmail.com",
  defaultReleaseBranch: "main",
  name: "logging",
  projenrcTs: true,
  packageManager: javascript.NodePackageManager.PNPM,
  repository: "https://github.com/hahntj/ncfour/logging.git",

  // set up the package name in package.json
  packageName: "@ncfour/logging",

  // set up the project with a LICENSE and copyright info
  license: "MIT",
  copyrightOwner: "Tim Hahn",
  copyrightPeriod: "2024",

  // eslint options
  eslintOptions: {
    dirs: ["src"],
    prettier: true,
  },

  devDeps: [
    "@ncfour/projen-utils@file:/home/tjh/Projects/repos/ncfour/projen-utils/dist/js/projen-utils@0.0.0.jsii.tgz",
    "@jest/globals",
  ],

  /* Runtime dependencies of this module. */
  deps: [],

  eslintFlatConfig: true,
  precommitConfig: true,
});

project.addFields({
  exports: {
    '.': './lib/loggers.js',
  },
});

project.synth();
