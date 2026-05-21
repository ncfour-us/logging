// Copyright (c) 2024 Tim Hahn

import { describe, test, expect } from '@jest/globals';
// import jest from "jest";

import { ILogger, createLogger } from '../src/logger.js';

describe('SimpleLogger tests', () => {
  test('SimpleLogger creation - un-named', async () => {
    const logger: ILogger = createLogger('simple', {
      level: 'debug',
    });

    logger.info('hello from SimpleLogger (unnamed)');

    expect(logger).toBeDefined();
  });

  test('SimpleLogger creation - named', async () => {
    const logger: ILogger = createLogger('simple', {
      name: 's1',
      level: 'debug',
    });

    logger.info('hello from SimpleLogger (named - s1)');

    expect(logger).toBeDefined();
  });

  test('SimpleLogger no timestamps - named', async () => {
    const logger: ILogger = createLogger('simple', {
      name: 's2',
      level: 'debug',
      timestamp: false,
    });

    logger.info('hello from SimpleLogger no timestamps (named - s2)');

    expect(logger).toBeDefined();
  });

  test('SimpleLogger text, no color - named', async () => {
    const logger: ILogger = createLogger('simple', {
      name: 's3',
      level: 'debug',
      json: false,
      color: false,
    });

    logger.info('hello from SimpleLogger text, no color (named - s3)');

    expect(logger).toBeDefined();
  });

  test('SimpleLogger text, color - named', async () => {
    const logger: ILogger = createLogger('simple', {
      name: 's4',
      level: 'debug',
      json: false,
      color: true,
    });

    logger.error('hello from SimpleLogger text, color (named - s4)');

    expect(logger).toBeDefined();
  });
});

describe('WinstonLogger tests', () => {
  test('WinstonLogger creation - un-named', async () => {
    const logger: ILogger = createLogger('winston', {
      level: 'debug',
    });

    logger.info('hello from WinstonLogger (unnamed)');

    expect(logger).toBeDefined();
  });

  test('WinstonLogger creation - named', async () => {
    const logger: ILogger = createLogger('winston', {
      name: 'w1',
      level: 'debug',
    });

    logger.info('hello from WinstonLogger (named - w1)');

    expect(logger).toBeDefined();
  });

  test('WinstonLogger no timestamps - named', async () => {
    const logger: ILogger = createLogger('winston', {
      name: 'w2',
      level: 'info',
      timestamp: false,
    });

    logger.info('hello from WinstonLogger no timestamps (named - w2)');

    expect(logger).toBeDefined();
  });

  test('WinstonLogger text, no color - named', async () => {
    const logger: ILogger = createLogger('winston', {
      name: 'w3',
      level: 'debug',
      color: false,
      json: false,
    });

    logger.info('hello from WinstonLogger text, no color (named - w3)');

    expect(logger).toBeDefined();
  });

  test('WinstonLogger text, color - named', async () => {
    const logger: ILogger = createLogger('winston', {
      name: 'w4',
      level: 'debug',
      json: false,
      color: true,
    });

    logger.error('hello from WinstonLogger text, color (named - w4)');

    expect(logger).toBeDefined();
  });
});
