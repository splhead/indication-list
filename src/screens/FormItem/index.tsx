import React from 'react';

//import {} from 'react-native-image-picker';
import FastImage from 'react-native-fast-image';

import * as S from './styles';

export const FormItem = () => {
  return (
    <S.Container>
      <S.Image
        source={{
          uri: 'https://img.elo7.com.br/product/zoom/26BBFD5/big-poster-filme-marvel-fenix-negra-lo004-tamanho-90x60-cm-geek.jpg',
        }}
        resizeMode={FastImage.resizeMode.cover}
      />

      <S.Title>Nova Recomendação</S.Title>
    </S.Container>
  );
};
