import { useStore } from 'effector-react';
import React from 'react';

import { SearchSettingsFieldsTranslates } from 'constants/search_settings_fields/translates';

import { useIsMobile } from 'shared/lib/screen_type/is_mobile';

import { searchSettingsOptionsMocks } from 'shared/mocks/search_settings_options';

import { NativeSelect } from 'shared/ui/native_select';
import { Select } from 'shared/ui/select';

import { tailModel } from './model';

export const Tail = () => {
  const value = useStore(tailModel.$value);

  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <NativeSelect
        value={value}
        label={SearchSettingsFieldsTranslates.Tail}
        onChangeValue={tailModel.valueChanged}
        items={searchSettingsOptionsMocks.tails}
      />
    );
  }

  return (
    <Select
      value={value}
      label={SearchSettingsFieldsTranslates.Tail}
      onChangeValue={tailModel.valueChanged}
      items={searchSettingsOptionsMocks.tails}
    />
  );
};
