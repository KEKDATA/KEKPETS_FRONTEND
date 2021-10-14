import { attach, combine, createEvent, createStore, guard } from 'effector';

import { api } from 'api/index';

import { getQueryString } from 'shared/lib/query_string';

import { breedModel } from './breed/model';
import { shadeModel } from './shade/model';
import { tailModel } from './tail/model';
import { typeModel } from './type/model';

const isSettingExist = (setting?: string) => setting && setting.length > 0;

const formSubmitted = createEvent();
const formActivated = createEvent();

const $isDisabledForm = createStore(true).on(formActivated, () => false);
const $selectedSettings = combine({
  type: typeModel.$value,
  tail: tailModel.$value,
  shade: shadeModel.$value,
  breed: breedModel.$value,
}).map(settings => {
  const selectedSettings = Object.fromEntries(
    Object.entries(settings).filter(([key, value]) => isSettingExist(value)),
  );

  return selectedSettings;
});
const $requiredSettings = combine({
  type: typeModel.$value,
});

const startSearch = attach({
  source: $selectedSettings,
  effect: selectedSettings => api.search(getQueryString(selectedSettings)),
});

startSearch.doneData.watch(console.log);

guard({
  clock: formSubmitted,
  source: $isDisabledForm,
  filter: isDisabled => !isDisabled,
  target: startSearch,
});

guard({
  clock: $requiredSettings,
  filter: requiredSettings =>
    Object.values(requiredSettings).every(isSettingExist),
  target: formActivated,
});

export const model = {
  formSubmitted,
  $isDisabledForm,
};
