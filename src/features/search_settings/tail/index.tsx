import { useStore } from 'effector-react';
import React from 'react';

import { SelectChangeEvent } from '@mui/material/Select';

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
    const handleChangeNative = (
      event: React.ChangeEvent<HTMLSelectElement>,
    ) => {
      tailModel.valueChanged(event.target.value);
    };

    return (
      <NativeSelect
        value={value}
        label={SearchSettingsFieldsTranslates.Tail}
        handleChange={handleChangeNative}
        items={searchSettingsOptions.tails}
      />
    );
  }

  const handleChange = (event: SelectChangeEvent) => {
    tailModel.valueChanged(event.target.value);
  };

  return (
    <Select
      value={value}
      label={SearchSettingsFieldsTranslates.Tail}
      handleChange={handleChange}
      items={searchSettingsOptions.tails}
    />
  );
};
