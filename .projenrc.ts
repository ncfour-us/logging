import { RepoBuildPackageModel, TypeScriptESMProject } from '@ncfour-us/projen-utils';
import { javascript } from 'projen';

const project = new TypeScriptESMProject({
  authorName: 'Tim Hahn',
  authorEmail: 'hahntj@gmail.com',
  defaultReleaseBranch: 'main',
  name: 'logging',
  projenrcTs: true,
  packageManager: javascript.NodePackageManager.PNPM,
  repository: 'https://github.com/ncfour-us/logging.git',

  // set up the package name in package.json
  packageName: '@ncfour-us/logging',

  // set up the project with a LICENSE and copyright info
  license: 'MIT',
  copyrightOwner: 'Tim Hahn',
  copyrightPeriod: '2024',

  devDeps: ['@ncfour-us/projen-utils', '@jest/globals'],

  /* Runtime dependencies of this module. */
  deps: ['chalk', 'winston'],

  eslintFlatConfig: true,
  prettierFlatConfig: true,
  precommitConfig: true,

  repoBuildPackageModel: RepoBuildPackageModel.LOCAL_DEV_BUILD_REGISTRY,
  localPackageArchiveDir: '~/.tjh-packages',

  // publishDryRun: true,
  releaseToGithub: false,
  releaseToNpm: false,
});

project.addFields({
  exports: {
    '.': './lib/logger.js',
  },
});

project.synth();
