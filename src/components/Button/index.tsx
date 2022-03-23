import React from 'react';
import {TouchableOpacityProps} from 'react-native';

import * as S from './styles';

export type ButtonProps = TouchableOpacityProps & {
  type?: 'primary' | 'secondary';
};

export function Button({children, type = 'primary', ...props}: ButtonProps) {
  return (
    <S.StyledButton type={type} {...props}>
      <S.Label type={type}>{children}</S.Label>
    </S.StyledButton>
  );
}
