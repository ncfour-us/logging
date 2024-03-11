// Copyright (c) 2024 Tim Hahn

export enum LogLevel {
  SEVERE = 10,
  ERROR = 20,
  INFO = 30,
  DEBUG = 40,
  ALL = 100,
}

const loggers: { [id: string]: Logger } = {};

export class Logger {
  // Factory method (static)
  static getLogger(component?: string): Logger {
    let logger: Logger = loggers.root;

    if (component) {
      if (!(component in loggers)) {
        loggers[component] = new Logger(component);
      }
      logger = loggers[component];
    }

    return logger;
  }

  private component: string;
  private logLevel: LogLevel;
  private insertPrefix: boolean;

  // callable only from static methods
  private constructor(component: string) {
    this.component = component;
    this.logLevel = LogLevel.INFO;
    this.insertPrefix = true;
  }

  public setLevel(logLevel: LogLevel) {
    this.logLevel = logLevel;
  }

  public setInsertPrefix(insertPrefix: boolean) {
    this.insertPrefix = insertPrefix;
  }

  public debug(message: string) {
    this.log(LogLevel.DEBUG, message);
  }

  public info(message: string) {
    this.log(LogLevel.INFO, message);
  }

  public error(message: string) {
    this.log(LogLevel.ERROR, message);
  }

  public severe(message: string) {
    this.log(LogLevel.SEVERE, message);
  }

  public log(level: LogLevel, message: string) {
    if (this.logLevel >= level) {
      this.emitMessage(message);
    }
  }

  private emitMessage(message: string) {
    let prefix = "";

    if (this.insertPrefix) {
      prefix = `(${this.component}): `;
    }

    console.log(`${prefix}${message}`);
  }
}

loggers.root = Logger.getLogger("root");
