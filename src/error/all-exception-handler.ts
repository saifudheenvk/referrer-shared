import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Inject,
} from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { LoggerService } from '@nestjs/common';
import { throwError } from 'rxjs';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  constructor(
    @Inject('LoggerService') private readonly logger: LoggerService,
  ) {}

  catch(exception: unknown, host: ArgumentsHost) {
    const ctxType = host.getType();
    if (ctxType === 'http') {
      const ctx = host.switchToHttp();
      const response = ctx.getResponse();
      const request = ctx.getRequest();

      const status =
        exception instanceof HttpException
          ? exception.getStatus()
          : HttpStatus.INTERNAL_SERVER_ERROR;

      const responseBody: any =
        exception instanceof HttpException
          ? (exception.getResponse() as any)
          : { message: 'Internal server error' };

      this.logger.error(
        {
          message: responseBody?.message || responseBody,
          path: request.url,
          method: request.method,
          status,
        },
        exception instanceof Error ? exception.stack : undefined,
        'HTTP',
      );

      response.status(status).json({
        statusCode: status,
        path: request.url,
        message: responseBody?.message || responseBody,
      });
      return;
    }

    // Microservice context (Redis RPC)
    const errorMessage =
      exception instanceof RpcException
        ? (exception.getError() as any)
        : exception instanceof Error
          ? exception.message
          : 'Internal server error';

    this.logger.error({ message: errorMessage }, undefined, 'RPC');
    // In microservice context, rethrow; Nest will handle RPC error
    return throwError(() => new RpcException(errorMessage));
  }
}
