import { createApiUrl } from 'requests/lib/create_api_url';

import { VidecamFrameResponse } from 'shared/typings/videcam_frame';

import { toJSON } from './lib/to_json';
import { Paths } from './paths';

export const videcamFrame = (params: string): Promise<VidecamFrameResponse> =>
  fetch(createApiUrl({ path: Paths.videcamframe, params })).then(toJSON);
