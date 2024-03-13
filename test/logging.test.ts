// Copyright (c) 2024 Tim Hahn

import { jest, test, expect } from "@jest/globals";
// import jest from "jest";

import { LogLevel, Logger } from "../src";

test("logger", () => {
  const logger = Logger.getLogger("test");

  expect(logger).toBeDefined();
});

test("logger-debug", () => {
  const logSpy = jest.spyOn(global.console, "log");

  const logger = Logger.getLogger("test");
  logger.setLevel(LogLevel.DEBUG);

  logger.log(LogLevel.DEBUG, "test DEBUG message 1");
  logger.debug("test DEBUG message 2");
  logger.log(LogLevel.ERROR, "test ERROR message 1");

  expect(logger).toBeDefined();
  expect(logSpy.mock.calls[0][0]).toMatch(/^\(test\): test DEBUG message 1$/);
  expect(logSpy.mock.calls[1][0]).toMatch(/^\(test\): test DEBUG message 2$/);
  expect(logSpy.mock.calls[2][0]).toMatch(/^\(test\): test ERROR message 1$/);

  logSpy.mockRestore();
});

test("logger-info", () => {
  const logSpy = jest.spyOn(global.console, "log");

  const logger = Logger.getLogger("test");
  logger.setLevel(LogLevel.INFO);
  logger.log(LogLevel.DEBUG, "test DEBUG message 1");
  logger.debug("test DEBUG message 2");
  logger.log(LogLevel.ERROR, "test ERROR message 1");
  logger.log(LogLevel.INFO, "test INFO message 1");
  logger.info("test INFO message 2");

  expect(logger).toBeDefined();
  expect(logSpy.mock.calls[0][0]).toMatch(/^\(test\): test ERROR message 1$/);
  expect(logSpy.mock.calls[1][0]).toMatch(/^\(test\): test INFO message 1$/);
  expect(logSpy.mock.calls[2][0]).toMatch(/^\(test\): test INFO message 2$/);

  logSpy.mockRestore();
});
