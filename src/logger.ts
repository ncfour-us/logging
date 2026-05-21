// Copyright (C) 2025 Tim Hahn

import {
  ILogger,
  LoggerType,
  LoggerLevel,
  LoggerProps,
  LoggerSetLoggerProps,
} from './logger-types.js';

export { ILogger, LoggerLevel, LoggerProps, LoggerSetLoggerProps };

type LoggerClass = { type: LoggerType; loggerCreator: (props?: LoggerProps) => ILogger };

// const isBrowser = typeof window !== 'undefined' && globalThis === window;
const isNode = typeof process !== 'undefined' && globalThis.process === process;

const loggerClasses: LoggerClass[] = [];

const loggers: ILogger[] = [];

async function initializeLoggerClasses() {
  let createWinstonLogger;
  let createSimpleLogger;

  ({ createSimpleLogger } = await import('./simple-logger.js'));

  loggerClasses[0] = {
    type: 'simple',
    loggerCreator: createSimpleLogger,
  };

  if (isNode) {
    ({ createWinstonLogger } = await import('./winston-logger.js'));

    loggerClasses[1] = {
      type: 'winston',
      loggerCreator: createWinstonLogger,
    };
  }
}

export function createLogger(type: LoggerType, props?: LoggerProps): ILogger {
  const loggerName = props?.name ?? 'default'; // covers case where props.name === ''

  const existingLogger: ILogger | undefined = loggers.find(
    (logger) => logger.getName() === loggerName,
  );

  if (existingLogger) {
    if (existingLogger.getType() !== type) {
      existingLogger.warn(
        `createLogger: existing Logger found does not match type requested: ${type}`,
      );
    }
    if (props) {
      existingLogger.warn(
        'createLogger: existing Logger found, supplied props ignored, use setLoggerProps()',
      );
    }
    return existingLogger;
  }

  const newLoggerProps: LoggerProps = { ...props };
  newLoggerProps.name = loggerName;

  let loggerClass: LoggerClass | undefined = loggerClasses.find((item) => item.type === type);
  let newLogger: ILogger | undefined = undefined;
  if (loggerClass) {
    newLogger = loggerClass.loggerCreator(newLoggerProps);
  } else {
    newLogger = loggerClasses[0].loggerCreator(newLoggerProps);
    newLogger.log('warn', `loggerType: ${type} not found, falling back to SimpleLogger`);
  }

  loggers.push(newLogger);

  return newLogger;
}

await initializeLoggerClasses();
