import React from 'react';

import {TextInputProps} from 'react-native';

import * as S from './styles';

type InputProps = TextInputProps & {
  label: string;
};

export const Input = ({label, ...props}: InputProps) => {
  return (
    <S.Wrapper>
      <S.Label>{label}</S.Label>
      <S.Field {...props} />
    </S.Wrapper>
  );
};
