// Copyright (C) 2025 Tim Hahn

// import { Date } from 'date';
import chalk, { Chalk } from 'chalk';

import {
  ILogger,
  LoggerType,
  LoggerLevel,
  LoggerProps,
  LoggerSetLoggerProps,
} from './logger-types.js';

const logLevels: { [key: string]: { numericLevel: number; colorizer: Chalk } } = {
  fatal: {
    numericLevel: 10,
    colorizer: chalk.magenta,
  },
  error: {
    numericLevel: 20,
    colorizer: chalk.red,
  },
  warn: {
    numericLevel: 30,
    colorizer: chalk.yellow,
  },
  info: {
    numericLevel: 40,
    colorizer: chalk.green,
  },
  debug: {
    numericLevel: 50,
    colorizer: chalk.white,
  },
  trace: {
    numericLevel: 60,
    colorizer: chalk.gray,
  },
};

export class SimpleLogger implements ILogger {
  name: string;
  level: string;
  json: boolean;
  color: boolean;
  silent: boolean;
  timestamp: boolean;

  private numericLevel: number;

  constructor(props?: LoggerProps) {
    this.name = props?.name ?? 'default';
    this.level = props?.level ?? 'error';
    this.json = props?.json ?? true;
    this.color = props?.color ?? false;
    this.silent = props?.silent ?? false;
    this.timestamp = props?.timestamp ?? true;

    this.numericLevel = logLevels[this.level].numericLevel;
  }

  private stringifyLogRecord(
    level: LoggerLevel,
    message: string,
    ...rest: (string | number | boolean | object)[]
  ): string {
    let messageString = '';

    if (this.json) {
      messageString = JSON.stringify({
        level: level,
        timestamp: new Date(Date.now()).toISOString(),
        name: this.name,
        message: message,
        ...rest,
      });
    } else {
      // messageString = messageString + this.timestamp ? '[' + new Date(Date.now()).toISOString() : "[";

      messageString =
        messageString + (this.timestamp ? `[${new Date(Date.now()).toISOString()} ` : '[');
      messageString = messageString + (this.name !== 'default' ? `${this.name} ` : '');
      messageString =
        messageString + `(${this.color ? logLevels[level].colorizer(level) : level})]`;
      messageString =
        messageString + ` ${this.color ? logLevels[level].colorizer(message) : message}`;
      messageString =
        rest.length > 0 ? messageString + ` ${JSON.stringify({ ...rest })}` : messageString;
    }

    return messageString;
  }

  public getName(): string {
    return this.name;
  }

  public getType(): LoggerType {
    return 'simple';
  }

  public setLoggerProps(props: LoggerSetLoggerProps) {
    this.level = props?.level ?? this.level;
    this.json = props?.json ?? this.json;
    this.color = props?.color ?? this.color;
    this.silent = props?.silent ?? this.silent;
    this.timestamp = props?.timestamp ?? this.timestamp;

    this.numericLevel = logLevels[this.level].numericLevel;
  }

  public log(
    level: LoggerLevel,
    message: string,
    ...rest: (string | number | boolean | object)[]
  ): void {
    if (!this.silent && logLevels[level].numericLevel <= this.numericLevel) {
      console.log(this.stringifyLogRecord(level, message, ...rest));
    }
  }

  public fatal(message: string, ...rest: (string | number | boolean | object)[]): void {
    this.log('fatal', message, ...rest);
  }

  public error(message: string, ...rest: (string | number | boolean | object)[]): void {
    this.log('error', message, ...rest);
  }

  public warn(message: string, ...rest: (string | number | boolean | object)[]): void {
    this.log('warn', message, ...rest);
  }

  public info(message: string, ...rest: (string | number | boolean | object)[]): void {
    this.log('info', message, ...rest);
  }

  public debug(message: string, ...rest: (string | number | boolean | object)[]): void {
    this.log('debug', message, ...rest);
  }

  public trace(message: string, ...rest: (string | number | boolean | object)[]): void {
    this.log('trace', message, ...rest);
  }
}

export function createSimpleLogger(props?: LoggerProps): ILogger {
  return new SimpleLogger(props);
}
