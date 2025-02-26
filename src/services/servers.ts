export const API_CONFIG = {
  // TODO : Use Dynamic Url config from .env
  basePath: 'http://localhost:8000',
};

export class ServerConfiguration<T extends Record<string, string>> {
  public constructor(
    private url: string,
    private variableConfiguration: T,
    private description: string
  ) {}

  public setVariables(variableConfiguration: Partial<T>) {
    Object.assign(this.variableConfiguration, variableConfiguration);
  }

  public getConfiguration(): T {
    return this.variableConfiguration;
  }

  public getDescription(): string {
    return this.description;
  }

  public getUrl(): string {
    let replacedUrl = this.url;
    for (const key in this.variableConfiguration) {
      if (this.variableConfiguration.hasOwnProperty(key)) {
        const re = new RegExp('{' + key + '}', 'g');
        replacedUrl = replacedUrl.replace(re, this.variableConfiguration[key]);
      }
    }
    return replacedUrl;
  }
}

const server1 = new ServerConfiguration<{}>(
  API_CONFIG.basePath,
  {},
  'My API Server'
);

export const servers = [server1];
