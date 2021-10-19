import { useStore } from 'effector-react';
import React from 'react';

import { useIsMobile } from 'shared/lib/screen_type/is_mobile';

import { NativeSelect } from 'shared/ui/native_select';
import { Select } from 'shared/ui/select';

import { SearchSettingsFieldsTranslates } from 'shared/enums/search_settings_fields/translates';

import { searchSettingsOptions } from 'shared/stubs/search_settings_options';

import { typeModel } from './model';

export const Type = () => {
  const value = useStore(typeModel.$value);

  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <NativeSelect
        value={value}
        label={SearchSettingsFieldsTranslates.Type}
        onChangeValue={typeModel.valueChanged}
        items={searchSettingsOptions.types}
        borderRadius="10px 10px 0 0"
      />
    );
  }

  return (
    <Select
      value={value}
      label={SearchSettingsFieldsTranslates.Type}
      onChangeValue={typeModel.valueChanged}
      items={searchSettingsOptions.types}
      isRequired
    />
  );
};
