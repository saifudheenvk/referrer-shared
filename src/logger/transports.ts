import winston from 'winston';
import Elasticsearch from 'winston-elasticsearch';
import type { LoggerConfig } from './logger.types';

export function createWinstonTransports(config: LoggerConfig): winston.transport[] {
  const transports: winston.transport[] = [
    new winston.transports.Console({
      level: config.level,
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
      ),
    }),
  ];

  if (config.elastic?.enabled) {
    const esTransport = new (Elasticsearch as any)({
      level: config.level,
      index: config.elastic.index,
      clientOpts: {
        node: config.elastic.node,
        auth:
          config.elastic.username && config.elastic.password
            ? {
                username: config.elastic.username,
                password: config.elastic.password,
              }
            : undefined,
      },
    });
    transports.push(esTransport);
  }
  return transports;
}


