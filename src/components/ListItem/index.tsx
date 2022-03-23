import React from 'react';
import FastImage from 'react-native-fast-image';
import {Item} from '@screens/Home';

import * as S from './styles';

export type ListItemProps = {
  item: Item;
};

export const ListItem = ({item}: ListItemProps) => {
  if (item.imageUri === '') {
    item.imageUri =
      'https://img.elo7.com.br/product/zoom/26BBFD5/big-poster-filme-marvel-fenix-negra-lo004-tamanho-90x60-cm-geek.jpg';
  }
  return (
    <S.Wrapper>
      <S.Image
        source={{
          uri: item.imageUri,
        }}
        resizeMode={FastImage.resizeMode.cover}>
        {item.status && <S.Status name="done" size={32} color="#72feb7" />}
      </S.Image>

      <S.Title>{item.title}</S.Title>
    </S.Wrapper>
  );
};
