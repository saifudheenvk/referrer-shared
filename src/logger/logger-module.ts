import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { createWinstonLogger } from './create-winston';
import { getElasticConfig } from '../elastic/get-elastic-config';
import { NestWinstonLogger } from './nest-logger.adapter';

@Global()
@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: 'WinstonLogger',
      useFactory: (config: ConfigService) =>
        createWinstonLogger(getElasticConfig(config)),
      inject: [ConfigService],
    },
    {
      provide: 'LoggerService',
      useFactory: (logger: any) => new NestWinstonLogger(logger),
      inject: ['WinstonLogger'],
    },
  ],
  exports: ['LoggerService', 'WinstonLogger'],
})
export class LoggingModule {}
