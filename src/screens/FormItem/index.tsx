import React from 'react';
//import {Text} from 'react-native';

//import {} from 'react-native-image-picker';
import FastImage from 'react-native-fast-image';
import {MaterialIcons} from '@expo/vector-icons';

import * as S from './styles';

export const FormItem = () => {
  return (
    <S.Wrapper
      colors={['#210a48', '#110624']}
      start={{x: 0.5, y: 0}}
      end={{x: 0, y: 0.5}}>
      <S.ImageHeader
        source={{
          uri: 'https://img.elo7.com.br/product/zoom/26BBFD5/big-poster-filme-marvel-fenix-negra-lo004-tamanho-90x60-cm-geek.jpg',
        }}
        resizeMode={FastImage.resizeMode.cover}
      />

      <S.Content>
        <S.LoadImageButton>
          <MaterialIcons name="add-a-photo" size={24} color="#110624" />
        </S.LoadImageButton>
        <S.Title>Nova Recomendação</S.Title>
        <S.Input placeholder="Título" />
        <S.InputArea placeholder="Descrição" multiline numberOfLines={4} />
      </S.Content>
    </S.Wrapper>
  );
};
