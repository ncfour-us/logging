<!-- Copyright (C) 2026 Tim Hahn -->

# Introduction

The `@ncfour/logging` package implements a thin proxy in front
of a number of other logging packages.

This package is defined to allow a layer of indirection between
code written in other packages and the actual logger implementation
that is used in each environment.

The `ILogger` interface and `createLogger()` functions work in
both Node and browser environments.  Depending on the environment,
different logger implementations are dynamically loaded.

When running in a browser environment, the `'simple'` type logger
is loaded.  This logger uses `console.log()` to send log messages
to the standard output (browser console).

When running in a Node environment, both the `'simple'` and `'winston'`
logger implementations are loaded.  If a requested logger type
is not available in the environment, a warning message is written
to the logger which is activated (fallback is to `'simple'` logger).

## Additional information

- [Installation](./install.md)
- [Usage](./usage.md)
- [Example](./example.md)
- [API Documentation](./api/index.md)
