import React, {ReactNode} from 'react';

import * as S from './styles';

type ContainerProps = {
  children: ReactNode[];
};

export const Container = ({children}: ContainerProps) => {
  return (
    <S.SafeArea>
      <S.Container colors={[]}>{children}</S.Container>
    </S.SafeArea>
  );
};
