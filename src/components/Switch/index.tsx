import React, {useState} from 'react';
import {SwitchProps as RNSwitchProps} from 'react-native';

import * as S from './styles';

export type SwitchProps = RNSwitchProps & {
  label: string;
};

export const Switch = ({
  label,
  value = false,
  onValueChange,
  ...props
}: SwitchProps) => {
  const [isEnabled, setIsEnabled] = useState(value);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <S.Wrapper>
      <S.Label isEnabled={isEnabled}>
        {!isEnabled
          ? `Não ${label}`
          : label.replace(label.charAt(0), label.charAt(0).toUpperCase())}
      </S.Label>
      <S.StyledSwitch
        value={isEnabled}
        onValueChange={() => {
          toggleSwitch();
          onValueChange && onValueChange(!isEnabled);
        }}
        {...props}
      />
    </S.Wrapper>
  );
};
