import { createServer } from 'miragejs';

import { prefixUrl } from '../config';
import { Paths } from '../paths';
import { getFakeResults } from './lib/fake_results';

export default function makeFakeServer() {
  return createServer({
    routes() {
      this.urlPrefix = prefixUrl;

      this.get(Paths.videcamframe, getFakeResults);
    },
  });
}
