[@ncfour-us/logging](../index.md) / ILogger

# Interface: ILogger

Interface which represents a logger instance.  Returned from call to `createLogger()`.

## Methods

### debug()

> **debug**(`message`, ...`rest`): `void`

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

Return the name of the logger.

#### Returns

`string`

***

### getType()

> **getType**(): [`LoggerType`](../type-aliases/LoggerType.md)

Return the logger type.

#### Returns

[`LoggerType`](../type-aliases/LoggerType.md)

***

### info()

> **info**(`message`, ...`rest`): `void`

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
