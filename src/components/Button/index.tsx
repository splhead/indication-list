import React from 'react';
import {TouchableOpacityProps} from 'react-native';

import * as S from './styles';

export type ButtonProps = TouchableOpacityProps & {
  type?: 'primary' | 'secondary';
  color?: string;
};

export function Button({
  children,
  type = 'primary',
  color,
  ...props
}: ButtonProps) {
  return (
    <S.StyledButton type={type} color={color} {...props}>
      <S.Label type={type} color={color}>
        {children}
      </S.Label>
    </S.StyledButton>
  );
}
