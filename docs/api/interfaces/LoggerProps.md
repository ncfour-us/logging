[@ncfour-us/logging](../index.md) / LoggerProps

# Interface: LoggerProps

Options for creating/getting a logger.  Used when calling `createLogger()`.

## See

[createLogger](../functions/createLogger.md)

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

### name?

> `optional` **name?**: `string`

The name for the logger

#### Default

```ts
'default' (suppressed from log records)
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
