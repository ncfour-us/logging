<!-- Copyright (C) 2026 Tim Hahn -->

# Usage

To use the logger, first create/get a logger instance:

```typescript
import { ILogger, createLogger } from '@ncfour/logging';

const myLogger: ILogger = createLogger('simple');
```

Once the logger is created/retrieved, use the logger methods
to write messages:

```typescript
myLogger.log('debug', 'This is a debug message');

myLogger.debug('This is also a debug message');

const substitutionValue: string = 'hello there';
myLogger.error(`This is an error message with substitution ${substitutionValue});
```
