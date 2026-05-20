// Copyright (C) 2025 Tim Hahn

export type LoggerLevels = 'fatal' | 'error' | 'warn' | 'info' | 'debug' | 'trace';

export interface LoggerProps {
  name?: string;
  level?: LoggerLevels;
  json?: boolean;
  color?: boolean;
  silent?: boolean;
  timestamp?: boolean;
}

export interface LoggerSetLoggerProps {
  level?: LoggerLevels;
  json?: boolean;
  color?: boolean;
  silent?: boolean;
  timestamp?: boolean;
}

export interface ILogger {
  setLoggerProps(props: LoggerSetLoggerProps): void;

  log(level: LoggerLevels, message: string, ...rest: (string | number | boolean | object)[]): void;

  fatal(message: string, ...rest: (string | number | boolean | object)[]): void;

  error(message: string, ...rest: (string | number | boolean | object)[]): void;

  warn(message: string, ...rest: (string | number | boolean | object)[]): void;

  info(message: string, ...rest: (string | number | boolean | object)[]): void;

  debug(message: string, ...rest: (string | number | boolean | object)[]): void;

  trace(message: string, ...rest: (string | number | boolean | object)[]): void;
}
