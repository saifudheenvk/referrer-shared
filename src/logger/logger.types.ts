export type ElasticConfig = {
  enabled: boolean;
  node: string;
  index: string;
  username?: string;
  password?: string;
};

export type LoggerConfig = {
  level: string;
  elastic?: ElasticConfig;
  serviceName?: string;
};


