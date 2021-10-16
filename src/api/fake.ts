import { createServer } from 'miragejs';

import { getStubs } from 'shared/stubs';

import { prefixUrl } from './config';
import { Paths } from './paths';

export default function makeFakeServer() {
  return createServer({
    routes() {
      this.urlPrefix = prefixUrl;

      this.get(Paths.videcamframe, getStubs.results);
    },
  });
}
