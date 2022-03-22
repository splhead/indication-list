import React from 'react';
//import {Text} from 'react-native';

//import {} from 'react-native-image-picker';
import FastImage from 'react-native-fast-image';
import {MaterialIcons} from '@expo/vector-icons';

import * as S from './styles';
import {Input} from '@components/Input';
import {Switch} from '@components/Switch';
import {Button} from '@components/Button';

export const FormItem = () => {
  return (
    <S.Wrapper
      colors={['#210a48', '#110624']}
      start={{x: 0.2, y: 0}}
      end={{x: 0, y: 0.9}}>
      <S.ImageHeader
        source={{
          uri: 'https://img.elo7.com.br/product/zoom/26BBFD5/big-poster-filme-marvel-fenix-negra-lo004-tamanho-90x60-cm-geek.jpg',
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
      <S.Shadow colors={['#210a4811', '#210a48dd']} locations={[0.6, 0.95]} />

      <S.Content>
        <S.LoadImageButton>
          <MaterialIcons name="add-a-photo" size={24} color="#110624" />
        </S.LoadImageButton>

        <S.Title>Nova Recomendação</S.Title>

        <Input label="Título" />

        <Input label="Descrição" multiline numberOfLines={4} />

        <Input label="Link de amostra" />

        <Switch label="assistido" />

        <Button type="secondary">Cancelar</Button>

        <Button>Salvar</Button>
      </S.Content>
    </S.Wrapper>
  );
};
