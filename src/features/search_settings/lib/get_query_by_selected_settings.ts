import { getQueryString } from 'shared/lib/url/query_string';

import { isSettingExist } from './is_setting_exist';

interface Arguments {
  type: string;
  tail: string;
  color: string;
  breed: string;
  page: string;
}

/**
 * Нормализуем объект в строку подобную серч параметрам урла
 * { hello: 'world', kekdata: 'strong' } -> hellow=world&kekdata=strong
 */
export const getQueryBySelectedSettings = (settings: Arguments) =>
  getQueryString(
    Object.fromEntries(
      Object.entries(settings).filter(([key, value]) => isSettingExist(value)),
    ),
  );
