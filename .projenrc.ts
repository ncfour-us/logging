import { RepoBuildPackageModel, TypeScriptESMProject } from '@ncfour-us/projen-utils';
import { javascript, JsonFile, JsonPatch } from 'projen';

const project = new TypeScriptESMProject({
  authorName: 'Tim Hahn',
  authorEmail: 'hahntj@gmail.com',
  defaultReleaseBranch: 'main',
  name: 'logging',
  projenrcTs: true,
  packageManager: javascript.NodePackageManager.PNPM,
  repository: 'https://github.com/ncfour-us/logging.git',
  keywords: ['logging', 'winston', 'browser', 'node'],

  // set up the package name in package.json
  packageName: '@ncfour-us/logging',

  // set up the project with a LICENSE and copyright info
  license: 'MIT',
  copyrightOwner: 'Tim Hahn',
  copyrightPeriod: '2024',

  devDeps: ['@ncfour-us/projen-utils', '@jest/globals', 'typedoc', 'typedoc-plugin-markdown'],

  /* Runtime dependencies of this module. */
  deps: ['chalk', 'winston'],

  eslintFlatConfig: true,
  prettierFlatConfig: true,
  precommitConfig: true,

  repoBuildPackageModel: RepoBuildPackageModel.LOCAL_DEV_BUILD_REGISTRY,
  localPackageArchiveDir: '~/.tjh-packages',

  // publishDryRun: true,
  releaseToGithub: true,
  releaseToNpm: true,
});

project.addFields({
  exports: {
    '.': './lib/logger.js',
  },
});

project.addScripts({
  'build:docs': 'pnpm typedoc',
});

project.addPackageIgnore('docs');

new JsonFile(project, 'typedoc.json', {
  obj: {
    $schema: 'https://typedoc.org/schema.json',
    plugin: ['typedoc-plugin-markdown'],
    entryPoints: ['./src/logger.ts'],
    out: 'docs/api',
    cleanOutputDir: true,
    readme: 'none',
    // typedoc-plugin-markdown options
    entryFileName: 'index',
    mergeReadme: false,
    hidePageHeader: true,
  },
  marker: false,
});

const precommitConfig = project.tryFindObjectFile('.pre-commit-config.yaml');
precommitConfig?.patch(
  JsonPatch.replace(
    '/repos/1/hooks/1/exclude',
    '^(\.pre-commit-config\.yaml|\.gitignore|\.gitattributes|\.projen/.*|\.github/.*|.*\.svg|\.yarn/.*|LICENSE|.mergify.yml|tsconfig.json|tsconfig.dev.json|.npmignore|API.md|CHANGELOG.md|typedoc.json)$',
  ),
);

const postCompileTask = project.tasks.tryFind('post-compile');

postCompileTask?.addSteps({
  name: 'Generate Typedoc documentation',
  exec: 'pnpm build:docs',
});

project.synth();
