import React, {useState} from 'react';
import {
  launchImageLibrary,
  ImageLibraryOptions,
} from 'react-native-image-picker';
import FastImage from 'react-native-fast-image';
import {MaterialIcons} from '@expo/vector-icons';

import {useNavigation} from '@react-navigation/native';

import * as S from './styles';
import {Input} from '@components/Input';
import {Switch} from '@components/Switch';
import {Button} from '@components/Button';
import {Container} from '@components/Container';

export const FormItem = () => {
  const [image, setImage] = useState(
    'https://img.elo7.com.br/product/zoom/26BBFD5/big-poster-filme-marvel-fenix-negra-lo004-tamanho-90x60-cm-geek.jpg',
  );

  const navigation = useNavigation();

  const updateImage = async () => {
    const options: ImageLibraryOptions = {quality: 0.7, mediaType: 'photo'};
    const response = await launchImageLibrary(options);

    if (response.didCancel) {
      console.log('Cancelled');
    } else if (response.errorMessage) {
      console.log(`Error: ${response.errorMessage}`);
    } else {
      const uri = response?.assets && response.assets[0].uri;
      if (uri) {
        setImage(uri);
      }
    }
  };

  return (
    <Container>
      <S.ImageHeader
        source={{
          uri: image,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
      <S.Shadow colors={['#210a4811', '#210a48dd']} locations={[0.6, 0.95]} />

      <S.Content>
        <S.LoadImageButton onPress={updateImage}>
          <MaterialIcons name="add-a-photo" size={24} color="#110624" />
        </S.LoadImageButton>

        <S.Title>Nova Recomendação</S.Title>

        <Input label="Título" />

        <Input label="Descrição" multiline numberOfLines={4} />

        <Input label="Link de amostra" />

        <Switch label="assistido" />

        <Button type="secondary" onPress={() => navigation.goBack()}>
          Cancelar
        </Button>

        <Button>Salvar</Button>
      </S.Content>
    </Container>
  );
};
