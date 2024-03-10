import { TypeScriptESMProject } from '@ncfour/projen-utils';
const project = new TypeScriptESMProject({
  authorName: "Tim Hahn",
  authorEmail: "hahntj@gmail.com",
  defaultReleaseBranch: "main",
  name: "projen-utils",
  projenrcTs: true,
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

  devDeps: ['@ncfour/projen-utils@file:../projen-utils/dist/js/projen-utils-0.0.0.jsii.tgz'],

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();