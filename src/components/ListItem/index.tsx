import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Item} from '@screens/Home';

import * as S from './styles';

export type ListItemProps = TouchableOpacityProps & {
  item: Item;
};

export const ListItem = ({item, onPress}: ListItemProps) => {
  if (item.imageUri === '') {
    item.imageUri =
      'https://img.elo7.com.br/product/zoom/26BBFD5/big-poster-filme-marvel-fenix-negra-lo004-tamanho-90x60-cm-geek.jpg';
  }
  return (
    <S.Wrapper onPress={onPress}>
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
