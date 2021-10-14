import { createEvent, restore } from 'effector';

export const createSettingModel = () => {
  const valueChanged = createEvent<string>();
  const $value = restore(valueChanged, '');

  return { valueChanged, $value };
};
