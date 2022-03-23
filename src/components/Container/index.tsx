import React, {ReactNode} from 'react';
import {StatusBar} from 'react-native';

import * as S from './styles';

type ContainerProps = {
  children: ReactNode[];
};

export const Container = ({children}: ContainerProps) => {
  return (
    <S.SafeArea>
      <S.Container colors={[]}>
        <StatusBar backgroundColor="transparent" translucent />
        {children}
      </S.Container>
    </S.SafeArea>
  );
};
