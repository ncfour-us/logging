# @ncfour-us/logging

This project implements a simple logger and a proxy for winston logger.

## Badges

![GitHub top language](https://img.shields.io/github/languages/top/ncfour-us/logging?logo=typescript)
![GitHub License](https://img.shields.io/github/license/ncfour-us/logging?logo=github)
![GitHub Release](https://img.shields.io/github/v/release/ncfour-us/logging?logo=github)
![GitHub commit activity](https://img.shields.io/github/commit-activity/t/ncfour-us/logging?logo=github)
![GitHub Issues or Pull Requests](https://img.shields.io/github/issues-raw/ncfour-us/logging?logo=github)
![GitHub Issues or Pull Requests](https://img.shields.io/github/issues-pr/ncfour-us/logging?logo=github)

<!--
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/ncfour-us/logging/release.yml?label=release&logo=github)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/ncfour-us/logging/upgrade-main.yml?label=upgrade-main&logo=github)
-->

![NPM Version](https://img.shields.io/npm/v/%40ncfour-us%2Flogging?logo=npm)
![NPM Last Update](https://img.shields.io/npm/last-update/%40ncfour-us%2Flogging?logo=npm)
![NPM Downloads](https://img.shields.io/npm/dw/%40ncfour-us%2Flogging?logo=npm)

## Table of Contents

- [Installation](#installation)
- [Getting Started](#getting-started)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)
- [Authors](#authors)
- [Acknowledgements](#acknowledgements)

## Installation

Install using `npm`, `yarn`, or `pnpm` (preferred).

```bash
pnpm add @ncfour-us/logging
```

## Getting Started

The package exports an `ILogger` interface along with a `createLogger()` function.

The return value from `createLogger()` is a `ILogger` which can then be used
to log activities in the application.

The package can be used in either browser-based or Node-based runtime environments.

To use the logger, call `createLogger()`:

```typescript
import { ILogger, createLogger } from '@ncfour-us/logging';

const myLogger: ILogger = createLogger('simple');
```

## API Documentation

The API is documented at the [API documentation](./docs/api/index.md) page.

## Contributing

Fork this repository and submit a PR.

## Authors

- Tim Hahn ([hahntj@gmail.com](mailto:hahntj@gmail.com), github: @climbertjh)

## License

The project is covered by the MIT license, see [LICENSE](./LICENSE).

## Acknowledgements
