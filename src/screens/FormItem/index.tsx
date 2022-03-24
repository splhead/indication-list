import React, {useState, useEffect} from 'react';
import {
  launchImageLibrary,
  ImageLibraryOptions,
} from 'react-native-image-picker';
import FastImage from 'react-native-fast-image';
import {MaterialIcons} from '@expo/vector-icons';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useForm} from 'react-hook-form';

import * as S from './styles';
import {Input} from '@components/Input';
import {Switch} from '@components/Switch';
import {Button} from '@components/Button';
import {Container} from '@components/Container';
import {RootStackParamList} from 'App';
import {Item} from '@screens/Home';

type FormItemProps = NativeStackScreenProps<RootStackParamList, 'FormItem'>;

export const FormItem = ({route, navigation}: FormItemProps) => {
  const [item, setItem] = useState<Item>({} as Item);
  const {id} = route.params;

  const {register, setValue, handleSubmit} = useForm<Item>();

  const onSubmit = handleSubmit(data => console.log(data));

  useEffect(() => {
    register('title');
    register('description');
    register('sampleUrl');
    register('status');
  }, [register]);

  const [image, setImage] = useState(
    'https://img.elo7.com.br/product/zoom/26BBFD5/big-poster-filme-marvel-fenix-negra-lo004-tamanho-90x60-cm-geek.jpg',
  );

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

        <Input
          label="Título"
          onChangeText={value => setValue('title', value)}
        />

        <Input
          label="Descrição"
          multiline
          numberOfLines={4}
          onChangeText={value => setValue('description', value)}
        />

        <Input
          label="Link de amostra"
          onChangeText={value => setValue('sampleUrl', value)}
        />

        <Switch
          label="assistido"
          onValueChange={value => setValue('status', value)}
        />

        <Button type="secondary" onPress={() => navigation.pop()}>
          Cancelar
        </Button>

        <Button onPress={onSubmit}>Salvar</Button>
      </S.Content>
    </Container>
  );
};
