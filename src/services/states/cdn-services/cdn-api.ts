import { Injectable } from '@angular/core';
import { Configuration, DefaultApi } from '../../cdn-services';

@Injectable({ providedIn: 'root' })
export class CdnApiService {
  getApi(): DefaultApi {
    return new DefaultApi(
      new Configuration({
        middleware: [
          {
            pre: context => {
              const token = localStorage.getItem('cdn_token');
              if (token) {
                context.headers = {
                  ...(context.headers || {}),
                  Authorization: `Bearer ${token}`,
                };
              }
              return context;
            },
          },
        ],
      })
    );
  }
}
