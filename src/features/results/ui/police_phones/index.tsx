import React from 'react';

import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';

import { Result } from 'shared/typings/results';

import policeMan from './police_man.png';

interface Props {
  ovdPhones: Result['ovd_phones'];
}

const Container = styled(Grid)(({ theme }) => ({
  margin: theme.spacing(0.7),
}));

const Phone = styled(Link)(({ theme }) => ({
  marginLeft: 12,
  '&:first-child': {
    marginLeft: 8,
  },
  [theme.breakpoints.up('sm')]: {
    marginLeft: 8,
  },
}));

const Phones = styled('div')`
  padding-top: 6px;
`;

const Image = styled('img')`
  width: 28px;
`;

export const PolicePhones = ({ ovdPhones }: Props) => {
  return (
    <Container container>
      <Image src={policeMan} alt="Милый полицейский" />
      <Phones>
        {ovdPhones.map(ovdPhone => (
          <Phone key={ovdPhone} href={`tel:${ovdPhone}`}>
            {ovdPhone}
          </Phone>
        ))}
      </Phones>
    </Container>
  );
};
