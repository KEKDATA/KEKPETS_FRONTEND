import { createServer } from 'miragejs';
import { getStubs } from 'shared/stubs';

import { prefixUrl } from './config';
import { Paths } from './paths';

export function makeFakeServer() {
  return createServer({
    routes() {
      this.urlPrefix = prefixUrl;

      this.get(Paths.Search, getStubs.search);
    },
  });
}
