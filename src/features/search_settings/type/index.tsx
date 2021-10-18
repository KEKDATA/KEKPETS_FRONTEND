import { useStore } from 'effector-react';
import React from 'react';

import { SelectChangeEvent } from '@mui/material/Select';

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
    const handleChangeNative = (
      event: React.ChangeEvent<HTMLSelectElement>,
    ) => {
      typeModel.valueChanged(event.target.value);
    };

    return (
      <NativeSelect
        value={value}
        label={SearchSettingsFieldsTranslates.Type}
        handleChange={handleChangeNative}
        items={searchSettingsOptions.types}
      />
    );
  }

  const handleChange = (event: SelectChangeEvent) => {
    typeModel.valueChanged(event.target.value);
  };

  return (
    <Select
      value={value}
      label={SearchSettingsFieldsTranslates.Type}
      handleChange={handleChange}
      items={searchSettingsOptions.types}
      isRequired
    />
  );
};
