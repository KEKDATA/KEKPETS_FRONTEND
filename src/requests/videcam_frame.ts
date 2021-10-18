import { getUrlWithQs } from 'shared/lib/url/with_qs';

import { VidecamFrameResponse } from 'shared/typings/videcam_frame';

import { apiConfig } from './config';
import { Paths } from './paths';

export const videcamFrame = (params: string): Promise<VidecamFrameResponse> =>
  apiConfig
    .get(getUrlWithQs({ url: Paths.videcamframe, queryString: params }))
    .json();
