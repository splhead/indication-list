import React from 'react';
import {TouchableOpacityProps} from 'react-native';

import * as S from './styles';

export type ButtonProps = TouchableOpacityProps & {
  type?: 'primary' | 'secondary';
};

export function Button({children, type = 'primary'}: ButtonProps) {
  return (
    <S.StyledButton type={type}>
      <S.Label type={type}>{children}</S.Label>
    </S.StyledButton>
  );
}
