<!-- Copyright (C) 2026 Tim Hahn -->

# Example

The following steps show how to create a small Typescript
project, add/install the `@ncfour/logging` package,
and then run the example program.

Create a new Typescript project:

```bash
mkdir test-logger
cd test-logger
pnpm init --init-type module
pnpm add @ncfour-us/logging typescript
touch example.ts
```

Use your preferred editor to edit the `example.ts` file.
Cut an paste the following into `example.ts`:

```typescript
import { ILogger, createLogger } from '@ncfour-us/logging';

const myLogger: ILogger = createLogger('simple', {
    name: 'myLogger',
    level: 'debug',
    json: false,
    color: true,
    timestamp: true,
});

myLogger.log('debug', 'This is a debug message');

myLogger.debug('This is also a debug message');

const substitutionValue: string = 'hello there';
myLogger.error(`This is an error message with substitution ${substitutionValue}`);
```

After saving the file, run these commands to run
the example program:

```bash
pnpm tsc example.ts
node example.js
```

Much more can be done with the logger.  Different options
can be set using the `setLoggerProps()` method or specifying
additional options on the `createLogger()` call.

To clean up the example, run (from the `test-logger` folder):

```bash
cd ..
rm -rf test-logger
```
