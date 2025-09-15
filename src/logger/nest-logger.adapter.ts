import { LoggerService } from '@nestjs/common';
import type winston from 'winston';

export class NestWinstonLogger implements LoggerService {
  constructor(private readonly logger: winston.Logger) {}

  log(message: any, context?: string) {
    this.logger.info(message, { context });
  }
  error(message: any, trace?: string, context?: string) {
    this.logger.error(message, { trace, context });
  }
  warn(message: any, context?: string) {
    this.logger.warn(message, { context });
  }
  debug(message:   any, context?: string) {
    this.logger.debug(message, { context });
  }
  verbose(message: any, context?: string) {
    this.logger.verbose(message, { context });
  }
}


