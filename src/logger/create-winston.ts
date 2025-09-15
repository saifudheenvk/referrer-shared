import winston from 'winston';
import { createWinstonTransports } from './transports';
import type { LoggerConfig } from './logger.types';

export function createWinstonLogger(config: LoggerConfig): winston.Logger {
  return winston.createLogger({
    level: config.level,
    defaultMeta: { service: config.serviceName || 'app' },
    transports: createWinstonTransports(config),
  });
}


