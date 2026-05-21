// Copyright (C) 2025 Tim Hahn

import winston from 'winston';

import {
  ILogger,
  LoggerType,
  LoggerLevel,
  LoggerProps,
  LoggerSetLoggerProps,
} from './logger-types.js';

const logLevels: { [key: string]: number } = {
  fatal: 0,
  error: 1,
  warn: 2,
  info: 3,
  debug: 4,
  trace: 5,
};

const logLevelColors: { [key: string]: string } = {
  fatal: 'magenta',
  error: 'red',
  warn: 'yellow',
  info: 'green',
  debug: 'white',
  trace: 'gray',
};

class WinstonLogger implements ILogger {
  private logger: winston.Logger;

  name: string;
  level: string;
  json: boolean;
  color: boolean;
  silent: boolean;
  timestamp: boolean;

  // private numericLevel: number;

  constructor(props?: LoggerProps) {
    this.name = props?.name ?? 'default';
    this.level = props?.level ?? 'error';
    this.json = props?.json ?? true;
    this.color = props?.color ?? false;
    this.silent = props?.silent ?? false;
    this.timestamp = props?.timestamp ?? true;

    this.logger = winston.createLogger(); // create an initial in the constructor, overwritten by initializeWinstonLogger()
    this.initializeWinstonLogger();
  }

  public getName() {
    return this.name;
  }

  public getType(): LoggerType {
    return 'winston';
  }

  public setLoggerProps(props: LoggerSetLoggerProps) {
    this.level = props?.level ?? this.level;
    this.json = props?.json ?? this.json;
    this.color = props?.color ?? this.color;
    this.silent = props?.silent ?? this.silent;
    this.timestamp = props?.timestamp ?? this.timestamp;

    // Replace the logger completely, using the new configuration
    this.initializeWinstonLogger();
  }

  private initializeWinstonLogger() {
    winston.addColors(logLevelColors); // set colors for the custom levels defined in the logger

    // Build the output log format specification
    // Order of how formats are combined matters here!!
    let format: winston.Logform.Format = winston.format.combine();

    if (this.timestamp) {
      format = winston.format.combine(format, winston.format.timestamp());
    }
    if (this.json) {
      format = winston.format.combine(format, winston.format.json());
    } else {
      if (this.color) {
        format = winston.format.combine(format, winston.format.colorize({ all: true }));
      }
      format = winston.format.combine(
        format,
        winston.format.printf(
          (info) =>
            `[${info.timestamp as string} ${this.name !== 'default' ? `${this.name} ` : ''}(${info.level})] ${info.message as string}`,
        ),
      );
    }

    // Now create the logger

    this.logger = winston.createLogger({
      levels: logLevels,
      level: this.level ?? 'error',
      format: format,
      transports: [new winston.transports.Console()],
    });
  }

  public log(
    level: LoggerLevel,
    message: string,
    ...rest: (string | number | boolean | object)[]
  ): void {
    this.logger.log(level, message, ...rest);
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

export function createWinstonLogger(props?: LoggerProps): ILogger {
  return new WinstonLogger(props);
}
