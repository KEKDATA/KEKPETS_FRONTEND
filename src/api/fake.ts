import { createServer } from 'miragejs';
import { getStubs } from 'shared/stubs';

import { prefixUrl } from './config';

export function makeFakeServer() {
  return createServer({
    routes() {
      this.urlPrefix = prefixUrl;

      this.get('/search', getStubs.search);
    },
  });
}
