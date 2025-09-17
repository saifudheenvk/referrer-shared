import { ConfigService } from '@nestjs/config';

const getElasticConfig = (config: ConfigService) => {
  return {
    level: config.get('LOG_LEVEL'),
    serviceName: 'api-gateway',
    elastic:
      config.get('ENABLE_ELASTIC_LOGS') === 'true'
        ? {
            enabled: true,
            node: config.get('ELASTIC_NODE'),
            index: config.get('ELASTIC_INDEX'),
            username: 'user',
            password: 'password',
          }
        : { enabled: false, node: '', index: '' },
  };
};

export { getElasticConfig };