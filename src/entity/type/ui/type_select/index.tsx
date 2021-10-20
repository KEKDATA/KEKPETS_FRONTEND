import React from 'react';

import { useTheme } from '@mui/material';

import { SearchSettingsFieldsTranslates } from 'constants/search_settings_fields/translates';

import { useIsMobile } from 'shared/lib/screen_type/is_mobile';

import { searchSettingsOptionsMocks } from 'shared/mocks/search_settings_options';

import { NativeSelect } from 'shared/ui/native_select';
import { Select } from 'shared/ui/select';

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export const TypeSelect = ({ value, onChange }: Props) => {
  const theme = useTheme();
  const { borderRadius } = theme.shape;

  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <NativeSelect
        value={value}
        label={SearchSettingsFieldsTranslates.Type}
        onChangeValue={onChange}
        items={searchSettingsOptionsMocks.types}
        borderRadius={`${borderRadius}px ${borderRadius}px 0 0`}
      />
    );
  }

  return (
    <Select
      value={value}
      label={SearchSettingsFieldsTranslates.Type}
      onChangeValue={onChange}
      items={searchSettingsOptionsMocks.types}
      isRequired
    />
  );
};
