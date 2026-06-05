[@ncfour-us/logging](../index.md) / LoggerSetLoggerProps

# Interface: LoggerSetLoggerProps

Options for updating a logger configuration.  Used when calling `ILogger.setLoggerProps()`.

## See

[ILogger.setLoggerProps](ILogger.md#setloggerprops)

## Properties

### color?

> `optional` **color?**: `boolean`

Use color in text output (default: `false`)

#### Default

```ts
false
```

***

### json?

> `optional` **json?**: `boolean`

Use JSON or text output (default: `true`)

#### Default

```ts
true
```

***

### level?

> `optional` **level?**: [`LoggerLevel`](../type-aliases/LoggerLevel.md)

The logging level to use, (default: `'error'`)

#### Default

```ts
'error'
```

***

### silent?

> `optional` **silent?**: `boolean`

Suppress log output, regardless of level (default: `false`)

#### Default

```ts
false
```

***

### timestamp?

> `optional` **timestamp?**: `boolean`

Include timestamps in text output (default: `true`)

#### Default

```ts
true
```
