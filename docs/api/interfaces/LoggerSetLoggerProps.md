[@ncfour-us/logging](../index.md) / LoggerSetLoggerProps

# Interface: LoggerSetLoggerProps

Defined in: [logger-types.ts:62](https://github.com/ncfour-us/logging/blob/ad43756a6c03312bf4b97e2d9185fedf7972aa96/src/logger-types.ts#L62)

Options for updating a logger configuration.  Used when calling `ILogger.setLoggerProps()`.

## See

[ILogger.setLoggerProps](ILogger.md#setloggerprops)

## Properties

### color?

> `optional` **color?**: `boolean`

Defined in: [logger-types.ts:80](https://github.com/ncfour-us/logging/blob/ad43756a6c03312bf4b97e2d9185fedf7972aa96/src/logger-types.ts#L80)

Use color in text output (default: `false`)

#### Default

```ts
false
```

***

### json?

> `optional` **json?**: `boolean`

Defined in: [logger-types.ts:74](https://github.com/ncfour-us/logging/blob/ad43756a6c03312bf4b97e2d9185fedf7972aa96/src/logger-types.ts#L74)

Use JSON or text output (default: `true`)

#### Default

```ts
true
```

***

### level?

> `optional` **level?**: [`LoggerLevel`](../type-aliases/LoggerLevel.md)

Defined in: [logger-types.ts:68](https://github.com/ncfour-us/logging/blob/ad43756a6c03312bf4b97e2d9185fedf7972aa96/src/logger-types.ts#L68)

The logging level to use, (default: `'error'`)

#### Default

```ts
'error'
```

***

### silent?

> `optional` **silent?**: `boolean`

Defined in: [logger-types.ts:86](https://github.com/ncfour-us/logging/blob/ad43756a6c03312bf4b97e2d9185fedf7972aa96/src/logger-types.ts#L86)

Suppress log output, regardless of level (default: `false`)

#### Default

```ts
false
```

***

### timestamp?

> `optional` **timestamp?**: `boolean`

Defined in: [logger-types.ts:92](https://github.com/ncfour-us/logging/blob/ad43756a6c03312bf4b97e2d9185fedf7972aa96/src/logger-types.ts#L92)

Include timestamps in text output (default: `true`)

#### Default

```ts
true
```
