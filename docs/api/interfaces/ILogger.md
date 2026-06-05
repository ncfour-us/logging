[@ncfour-us/logging](../index.md) / ILogger

# Interface: ILogger

Defined in: [logger-types.ts:98](https://github.com/ncfour-us/logging/blob/ad43756a6c03312bf4b97e2d9185fedf7972aa96/src/logger-types.ts#L98)

Interface which represents a logger instance.  Returned from call to `createLogger()`.

## Methods

### debug()

> **debug**(`message`, ...`rest`): `void`

Defined in: [logger-types.ts:164](https://github.com/ncfour-us/logging/blob/ad43756a6c03312bf4b97e2d9185fedf7972aa96/src/logger-types.ts#L164)

Create a log message with log level **debug**

#### Parameters

##### message

`string`

text of the log message

##### rest

...(`string` \| `number` \| `boolean` \| `object`)[]

additional information to log (this will be appended as a JSON string to the message)

#### Returns

`void`

***

### error()

> **error**(`message`, ...`rest`): `void`

Defined in: [logger-types.ts:140](https://github.com/ncfour-us/logging/blob/ad43756a6c03312bf4b97e2d9185fedf7972aa96/src/logger-types.ts#L140)

Create a log message with log level **error**

#### Parameters

##### message

`string`

text of the log message

##### rest

...(`string` \| `number` \| `boolean` \| `object`)[]

additional information to log (this will be appended as a JSON string to the message)

#### Returns

`void`

***

### fatal()

> **fatal**(`message`, ...`rest`): `void`

Defined in: [logger-types.ts:132](https://github.com/ncfour-us/logging/blob/ad43756a6c03312bf4b97e2d9185fedf7972aa96/src/logger-types.ts#L132)

Create a log message with log level **fatal**

#### Parameters

##### message

`string`

text of the log message

##### rest

...(`string` \| `number` \| `boolean` \| `object`)[]

additional information to log (this will be appended as a JSON string to the message)

#### Returns

`void`

***

### getName()

> **getName**(): `string`

Defined in: [logger-types.ts:103](https://github.com/ncfour-us/logging/blob/ad43756a6c03312bf4b97e2d9185fedf7972aa96/src/logger-types.ts#L103)

Return the name of the logger.

#### Returns

`string`

***

### getType()

> **getType**(): [`LoggerType`](../type-aliases/LoggerType.md)

Defined in: [logger-types.ts:108](https://github.com/ncfour-us/logging/blob/ad43756a6c03312bf4b97e2d9185fedf7972aa96/src/logger-types.ts#L108)

Return the logger type.

#### Returns

[`LoggerType`](../type-aliases/LoggerType.md)

***

### info()

> **info**(`message`, ...`rest`): `void`

Defined in: [logger-types.ts:156](https://github.com/ncfour-us/logging/blob/ad43756a6c03312bf4b97e2d9185fedf7972aa96/src/logger-types.ts#L156)

Create a log message with log level **info**

#### Parameters

##### message

`string`

text of the log message

##### rest

...(`string` \| `number` \| `boolean` \| `object`)[]

additional information to log (this will be appended as a JSON string to the message)

#### Returns

`void`

***

### log()

> **log**(`level`, `message`, ...`rest`): `void`

Defined in: [logger-types.ts:124](https://github.com/ncfour-us/logging/blob/ad43756a6c03312bf4b97e2d9185fedf7972aa96/src/logger-types.ts#L124)

Create a log message with the specified log level.

#### Parameters

##### level

[`LoggerLevel`](../type-aliases/LoggerLevel.md)

Log level for this log message

##### message

`string`

text of the log message

##### rest

...(`string` \| `number` \| `boolean` \| `object`)[]

additional information to log (this will be appended as a JSON string to the message)

#### Returns

`void`

***

### setLoggerProps()

> **setLoggerProps**(`props`): `void`

Defined in: [logger-types.ts:115](https://github.com/ncfour-us/logging/blob/ad43756a6c03312bf4b97e2d9185fedf7972aa96/src/logger-types.ts#L115)

Update the logger configuration.

#### Parameters

##### props

[`LoggerSetLoggerProps`](LoggerSetLoggerProps.md)

Adjustments to the logger configuration

#### Returns

`void`

#### See

[LoggerSetLoggerProps](LoggerSetLoggerProps.md)

***

### trace()

> **trace**(`message`, ...`rest`): `void`

Defined in: [logger-types.ts:172](https://github.com/ncfour-us/logging/blob/ad43756a6c03312bf4b97e2d9185fedf7972aa96/src/logger-types.ts#L172)

Create a log message with log level **trace**

#### Parameters

##### message

`string`

text of the log message

##### rest

...(`string` \| `number` \| `boolean` \| `object`)[]

additional information to log (this will be appended as a JSON string to the message)

#### Returns

`void`

***

### warn()

> **warn**(`message`, ...`rest`): `void`

Defined in: [logger-types.ts:148](https://github.com/ncfour-us/logging/blob/ad43756a6c03312bf4b97e2d9185fedf7972aa96/src/logger-types.ts#L148)

Create a log message with log level **warn**

#### Parameters

##### message

`string`

text of the log message

##### rest

...(`string` \| `number` \| `boolean` \| `object`)[]

additional information to log (this will be appended as a JSON string to the message)

#### Returns

`void`
