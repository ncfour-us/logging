# @cnfour-us/logging

This project implements a simple logger and a proxy for winston logger.

The package exports an `ILogger` interface along with a `createLogger()` function.

The return value from `createLogger()` is a `ILogger` which can then be used
to log activities in the application.

The package can be used in either browser-based or Node-based runtime environments.

To use the logger, call `createLogger()`:

```typescript
import { ILogger, createLogger } from '@ncfour-us/logging';

const myLogger: ILogger = createLogger('simple');
```
