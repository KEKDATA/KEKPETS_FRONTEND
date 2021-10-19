import { useStore } from 'effector-react';
import React from 'react';

import { useIsMobile } from 'shared/lib/screen_type/is_mobile';

import { NativeSelect } from 'shared/ui/native_select';
import { Select } from 'shared/ui/select';

import { SearchSettingsFieldsTranslates } from 'shared/enums/search_settings_fields/translates';

import { searchSettingsOptions } from 'shared/stubs/search_settings_options';

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
        items={searchSettingsOptions.tails}
        borderRadius="0 0 10px 10px"
      />
    );
  }

  return (
    <Select
      value={value}
      label={SearchSettingsFieldsTranslates.Tail}
      onChangeValue={tailModel.valueChanged}
      items={searchSettingsOptions.tails}
    />
  );
};
