import { TypeScriptESMProject } from '@ncfour-us/projen-utils';
import { javascript } from 'projen';

const project = new TypeScriptESMProject({
  authorName: 'Tim Hahn',
  authorEmail: 'hahntj@gmail.com',
  defaultReleaseBranch: 'main',
  name: 'logging',
  projenrcTs: true,
  packageManager: javascript.NodePackageManager.PNPM,
  repository: 'git+https://github.com/ncfour-us/logging.git',

  // set up the package name in package.json
  packageName: '@ncfour-us/logging',

  // set up the project with a LICENSE and copyright info
  license: 'MIT',
  copyrightOwner: 'Tim Hahn',
  copyrightPeriod: '2024',

  // eslint options
  eslintOptions: {
    dirs: ['src'],
    prettier: true,
  },

  devDeps: ['@ncfour-us/projen-utils', '@jest/globals'],

  /* Runtime dependencies of this module. */
  deps: ['chalk', 'winston'],

  eslintFlatConfig: true,
  precommitConfig: true,
});

project.addFields({
  exports: {
    '.': './lib/logger.js',
  },
});

project.synth();
