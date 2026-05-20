// Copyright (c) 2024 Tim Hahn

export enum LogLevel {
  SEVERE = 10,
  ERROR = 20,
  INFO = 30,
  DEBUG = 40,
  ALL = 100,
}

const logLevelStrings: { [id: number]: string } = {
  10: 'SEV',
  20: 'ERR',
  30: 'INF',
  40: 'DEB',
  100: 'ALL',
};

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
  private insertTimestamp: boolean;
  private insertLevel: boolean;
  private useColor: boolean;

  // callable only from static methods
  private constructor(component: string) {
    this.component = component;
    this.logLevel = LogLevel.INFO;
    this.insertPrefix = true;
    this.insertTimestamp = false;
    this.insertLevel = false;
    this.useColor = false;
  }

  public setLevel(logLevel: LogLevel) {
    this.logLevel = logLevel;
  }

  public setInsertPrefix(insertPrefix: boolean) {
    this.insertPrefix = insertPrefix;
  }

  public setInsertTimestamp(insertTimestamp: boolean) {
    this.insertTimestamp = insertTimestamp;
  }

  public setInsertLevel(insertLevel: boolean) {
    this.insertLevel = insertLevel;
  }

  public setUseColor(useColor: boolean) {
    this.useColor = useColor;
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
      this.emitMessage(level, message);
    }
  }

  private emitMessage(level: LogLevel, message: string) {
    let prefixStr = '';
    let levelStr = '';
    let timestampStr = '';

    if (this.insertPrefix) {
      if (this.insertLevel) {
        levelStr = `[${logLevelStrings[level]}] `;
      }
      if (this.insertTimestamp) {
        const date: Date = new Date();
        timestampStr = `[${date.toISOString()}] `;
      }
      if (this.useColor) {
      }
      prefixStr = `${levelStr}${timestampStr}(${this.component}): `;
    }

    console.log(`${prefixStr}${message}`);
  }
}

loggers.root = Logger.getLogger('root');
