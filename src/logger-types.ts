// Copyright (C) 2025 Tim Hahn

export type LoggerLevel = 'fatal' | 'error' | 'warn' | 'info' | 'debug' | 'trace';

export type LoggerType = 'simple' | 'winston';

export interface LoggerProps {
  name?: string;
  level?: LoggerLevel;
  json?: boolean;
  color?: boolean;
  silent?: boolean;
  timestamp?: boolean;
}

export interface LoggerSetLoggerProps {
  level?: LoggerLevel;
  json?: boolean;
  color?: boolean;
  silent?: boolean;
  timestamp?: boolean;
}

export interface ILogger {
  getName(): string;

  getType(): LoggerType;

  setLoggerProps(props: LoggerSetLoggerProps): void;

  log(level: LoggerLevel, message: string, ...rest: (string | number | boolean | object)[]): void;

  fatal(message: string, ...rest: (string | number | boolean | object)[]): void;

  error(message: string, ...rest: (string | number | boolean | object)[]): void;

  warn(message: string, ...rest: (string | number | boolean | object)[]): void;

  info(message: string, ...rest: (string | number | boolean | object)[]): void;

  debug(message: string, ...rest: (string | number | boolean | object)[]): void;

  trace(message: string, ...rest: (string | number | boolean | object)[]): void;
}
