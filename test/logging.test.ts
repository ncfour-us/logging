// Copyright (c) 2024 Tim Hahn

import { test, expect } from "@jest/globals";

import { LogLevel, Logger } from "../src";

test("logger", () => {
  const logger = Logger.getLogger("test");

  expect(logger).toBeDefined();
});

test("logger-debug", () => {
  const logger = Logger.getLogger("test");
  logger.setLevel(LogLevel.DEBUG);
  logger.log(LogLevel.DEBUG, "test DEBUG message 1");
  logger.debug("test DEBUG message 2");
  logger.log(LogLevel.ERROR, "test ERROR message 1");

  expect(logger).toBeDefined();
});

test("logger-info", () => {
  const logger = Logger.getLogger("test");
  logger.setLevel(LogLevel.INFO);
  logger.log(LogLevel.DEBUG, "test DEBUG message 1");
  logger.debug("test DEBUG message 2");
  logger.log(LogLevel.ERROR, "test ERROR message 1");
  logger.log(LogLevel.INFO, "test INFO message 1");
  logger.info("test INFO message 2");

  expect(logger).toBeDefined();
});
