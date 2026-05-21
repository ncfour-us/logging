// Copyright (c) 2024 Tim Hahn

import { describe, jest, test, expect } from '@jest/globals';
// import jest from "jest";

import { LogLevel, Logger } from '../src';

describe('old logger tests', () => {
  test('logger', () => {
    const logger = Logger.getLogger('test');

    expect(logger).toBeDefined();
  });

  test('logger-debug', () => {
    const logSpy = jest.spyOn(global.console, 'log');

    const logger = Logger.getLogger('test1');
    logger.setLevel(LogLevel.DEBUG);

    logger.log(LogLevel.DEBUG, 'test DEBUG message 1');
    logger.debug('test DEBUG message 2');
    logger.log(LogLevel.ERROR, 'test ERROR message 1');

    expect(logger).toBeDefined();
    expect(logSpy.mock.calls[0][0]).toMatch(/^\(test1\): test DEBUG message 1$/);
    expect(logSpy.mock.calls[1][0]).toMatch(/^\(test1\): test DEBUG message 2$/);
    expect(logSpy.mock.calls[2][0]).toMatch(/^\(test1\): test ERROR message 1$/);

    logSpy.mockRestore();
  });

  test('logger-info', () => {
    const logSpy = jest.spyOn(global.console, 'log');

    const logger = Logger.getLogger('test2');
    logger.setLevel(LogLevel.INFO);
    logger.log(LogLevel.DEBUG, 'test DEBUG message 1');
    logger.debug('test DEBUG message 2');
    logger.log(LogLevel.ERROR, 'test ERROR message 1');
    logger.log(LogLevel.INFO, 'test INFO message 1');
    logger.info('test INFO message 2');

    expect(logger).toBeDefined();
    expect(logSpy.mock.calls[0][0]).toMatch(/^\(test2\): test ERROR message 1$/);
    expect(logSpy.mock.calls[1][0]).toMatch(/^\(test2\): test INFO message 1$/);
    expect(logSpy.mock.calls[2][0]).toMatch(/^\(test2\): test INFO message 2$/);

    logSpy.mockRestore();
  });

  test('logger-prefixes', () => {
    const logSpy = jest.spyOn(global.console, 'log');

    const logger = Logger.getLogger('test3');
    logger.setLevel(LogLevel.INFO);
    logger.setInsertLevel(true);

    logger.log(LogLevel.DEBUG, 'test DEBUG message 1');
    logger.debug('test DEBUG message 2');
    logger.log(LogLevel.ERROR, 'test ERROR message 1');
    logger.log(LogLevel.INFO, 'test INFO message 1');
    logger.info('test INFO message 2');

    expect(logger).toBeDefined();
    expect(logSpy.mock.calls[0][0]).toMatch(/^\[ERR\] \(test3\): test ERROR message 1$/);
    expect(logSpy.mock.calls[1][0]).toMatch(/^\[INF\] \(test3\): test INFO message 1$/);
    expect(logSpy.mock.calls[2][0]).toMatch(/^\[INF\] \(test3\): test INFO message 2$/);

    logSpy.mockRestore();
  });

  test('logger-timestamps', () => {
    const logSpy = jest.spyOn(global.console, 'log');

    const logger = Logger.getLogger('test4');
    logger.setLevel(LogLevel.INFO);
    logger.setInsertTimestamp(true);

    logger.log(LogLevel.DEBUG, 'test DEBUG message 1');
    logger.debug('test DEBUG message 2');
    logger.log(LogLevel.ERROR, 'test ERROR message 1');
    logger.log(LogLevel.INFO, 'test INFO message 1');
    logger.info('test INFO message 2');

    expect(logger).toBeDefined();
    expect(logSpy.mock.calls[0][0]).toMatch(/^\[[0-9-:.TZ]*\] \(test4\): test ERROR message 1$/);
    expect(logSpy.mock.calls[1][0]).toMatch(/^\[[0-9-:.TZ]*\] \(test4\): test INFO message 1$/);
    expect(logSpy.mock.calls[2][0]).toMatch(/^\[[0-9-:.TZ]*\] \(test4\): test INFO message 2$/);

    logSpy.mockRestore();
  });
});
