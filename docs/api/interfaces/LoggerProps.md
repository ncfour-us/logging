[@ncfour-us/logging](../index.md) / LoggerProps

# Interface: LoggerProps

Defined in: [logger-types.ts:19](https://github.com/ncfour-us/logging/blob/ad43756a6c03312bf4b97e2d9185fedf7972aa96/src/logger-types.ts#L19)

Options for creating/getting a logger.  Used when calling `createLogger()`.

## See

[createLogger](../functions/createLogger.md)

## Properties

### color?

> `optional` **color?**: `boolean`

Defined in: [logger-types.ts:43](https://github.com/ncfour-us/logging/blob/ad43756a6c03312bf4b97e2d9185fedf7972aa96/src/logger-types.ts#L43)

Use color in text output (default: `false`)

#### Default

```ts
false
```

***

### json?

> `optional` **json?**: `boolean`

Defined in: [logger-types.ts:37](https://github.com/ncfour-us/logging/blob/ad43756a6c03312bf4b97e2d9185fedf7972aa96/src/logger-types.ts#L37)

Use JSON or text output (default: `true`)

#### Default

```ts
true
```

***

### level?

> `optional` **level?**: [`LoggerLevel`](../type-aliases/LoggerLevel.md)

Defined in: [logger-types.ts:31](https://github.com/ncfour-us/logging/blob/ad43756a6c03312bf4b97e2d9185fedf7972aa96/src/logger-types.ts#L31)

The logging level to use, (default: `'error'`)

#### Default

```ts
'error'
```

***

### name?

> `optional` **name?**: `string`

Defined in: [logger-types.ts:25](https://github.com/ncfour-us/logging/blob/ad43756a6c03312bf4b97e2d9185fedf7972aa96/src/logger-types.ts#L25)

The name for the logger

#### Default

```ts
'default' (suppressed from log records)
```

***

### silent?

> `optional` **silent?**: `boolean`

Defined in: [logger-types.ts:49](https://github.com/ncfour-us/logging/blob/ad43756a6c03312bf4b97e2d9185fedf7972aa96/src/logger-types.ts#L49)

Suppress log output, regardless of level (default: `false`)

#### Default

```ts
false
```

***

### timestamp?

> `optional` **timestamp?**: `boolean`

Defined in: [logger-types.ts:55](https://github.com/ncfour-us/logging/blob/ad43756a6c03312bf4b97e2d9185fedf7972aa96/src/logger-types.ts#L55)

Include timestamps in text output (default: `true`)

#### Default

```ts
true
```
