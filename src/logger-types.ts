// Copyright (C) 2025 Tim Hahn

/**
 * Log level setting
 */
export type LoggerLevel = 'fatal' | 'error' | 'warn' | 'info' | 'debug' | 'trace';

/**
 * Logger type for {@link createLogger} to create
 */
export type LoggerType = 'simple' | 'winston';

/**
 * Options for creating/getting a logger.  Used when calling `createLogger()`.
 *
 * @see {@link createLogger}
 *
 */
export interface LoggerProps {
  /**
   * The name for the logger
   * @default 'default' (suppressed from log records)
   */
  name?: string;

  /**
   * The logging level to use, (default: `'error'`)
   * @default 'error'
   */
  level?: LoggerLevel;

  /**
   * Use JSON or text output (default: `true`)
   * @default true
   */
  json?: boolean;

  /**
   * Use color in text output (default: `false`)
   * @default false
   */
  color?: boolean;

  /**
   * Suppress log output, regardless of level (default: `false`)
   * @default false
   */
  silent?: boolean;

  /**
   * Include timestamps in text output (default: `true`)
   * @default true
   */
  timestamp?: boolean;
}

/**
 * Options for updating a logger configuration.  Used when calling `ILogger.setLoggerProps()`.
 * @see {@link ILogger.setLoggerProps}
 */
export interface LoggerSetLoggerProps {
  /**
   * The logging level to use, (default: `'error'`)
   * @default 'error'
   */
  level?: LoggerLevel;

  /**
   * Use JSON or text output (default: `true`)
   * @default true
   */
  json?: boolean;

  /**
   * Use color in text output (default: `false`)
   * @default false
   */
  color?: boolean;

  /**
   * Suppress log output, regardless of level (default: `false`)
   * @default false
   */
  silent?: boolean;

  /**
   * Include timestamps in text output (default: `true`)
   * @default true
   */
  timestamp?: boolean;
}

/**
 * Interface which represents a logger instance.  Returned from call to `createLogger()`.
 */
export interface ILogger {
  /**
   * Return the name of the logger.
   */
  getName(): string;

  /**
   * Return the logger type.
   */
  getType(): LoggerType;

  /**
   * Update the logger configuration.
   *
   * @param props Adjustments to the logger configuration @see {@link LoggerSetLoggerProps}
   */
  setLoggerProps(props: LoggerSetLoggerProps): void;

  /**
   * Create a log message with the specified log level.
   *
   * @param level Log level for this log message
   * @param message text of the log message
   * @param rest additional information to log (this will be appended as a JSON string to the message)
   */
  log(level: LoggerLevel, message: string, ...rest: (string | number | boolean | object)[]): void;

  /**
   * Create a log message with log level **fatal**
   *
   * @param message text of the log message
   * @param rest additional information to log (this will be appended as a JSON string to the message)
   */
  fatal(message: string, ...rest: (string | number | boolean | object)[]): void;

  /**
   * Create a log message with log level **error**
   *
   * @param message text of the log message
   * @param rest additional information to log (this will be appended as a JSON string to the message)
   */
  error(message: string, ...rest: (string | number | boolean | object)[]): void;

  /**
   * Create a log message with log level **warn**
   *
   * @param message text of the log message
   * @param rest additional information to log (this will be appended as a JSON string to the message)
   */
  warn(message: string, ...rest: (string | number | boolean | object)[]): void;

  /**
   * Create a log message with log level **info**
   *
   * @param message text of the log message
   * @param rest additional information to log (this will be appended as a JSON string to the message)
   */
  info(message: string, ...rest: (string | number | boolean | object)[]): void;

  /**
   * Create a log message with log level **debug**
   *
   * @param message text of the log message
   * @param rest additional information to log (this will be appended as a JSON string to the message)
   */
  debug(message: string, ...rest: (string | number | boolean | object)[]): void;

  /**
   * Create a log message with log level **trace**
   *
   * @param message text of the log message
   * @param rest additional information to log (this will be appended as a JSON string to the message)
   */
  trace(message: string, ...rest: (string | number | boolean | object)[]): void;
}
