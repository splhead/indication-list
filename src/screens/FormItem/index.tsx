import React, {useEffect, useState} from 'react';
import {
  launchImageLibrary,
  ImageLibraryOptions,
} from 'react-native-image-picker';
import FastImage from 'react-native-fast-image';
import {MaterialIcons} from '@expo/vector-icons';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useForm} from 'react-hook-form';
import 'react-native-get-random-values';
import {nanoid} from 'nanoid';
import Snackbar from 'react-native-snackbar';
import AwesomeAlert from 'react-native-awesome-alerts';

import * as S from './styles';
import {Input} from '@components/Input';
import {Switch} from '@components/Switch';
import {Button} from '@components/Button';
import {Container} from '@components/Container';
import {RootStackParamList} from 'App';
import {Item} from '@screens/Home';
import {api} from '../../services/api';

type FormItemProps = NativeStackScreenProps<RootStackParamList, 'FormItem'>;

export const FormItem = ({route, navigation}: FormItemProps) => {
  const {item} = route.params;
  const [showAlert, setShowAlert] = useState(false);
  const [imageHeader, setImageHeader] = useState('');

  const {register, setValue, handleSubmit} = useForm<Item>({});

  const onSubmit = handleSubmit(async data => {
    try {
      if (!item) {
        const newItem = {
          id: nanoid(),
          title: data.title,
          description: data.description,
          imageUri: data.imageUri,
          sampleUrl: data.sampleUrl,
          status: data.status ?? false,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };

        api.post('items', newItem);

        Snackbar.show({
          text: 'Nova indicação salva',
          duration: Snackbar.LENGTH_SHORT,
        });
      } else {
        api.patch(`items/${item.id}`, {
          ...data,
          updatedAt: new Date().toISOString(),
        });

        Snackbar.show({
          text: 'A indicação foi atualizada',
          duration: Snackbar.LENGTH_SHORT,
        });
      }
      navigation.navigate('Home', {update: true});
    } catch (error) {
      console.error(error);
    }
  });

  const onDelete = async () => {
    try {
      if (!item) {
        throw Error('Erro ao apagar');
      }

      await api.delete(`items/${item.id}`);

      Snackbar.show({
        text: 'Indicação apagada',
        duration: Snackbar.LENGTH_SHORT,
      });

      navigation.navigate('Home', {update: true});
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    register('title');
    register('description');
    register('imageUri');
    register('sampleUrl');
    register('status');
  }, [register]);

  const updateImage = async () => {
    const options: ImageLibraryOptions = {
      quality: 0.7,
      mediaType: 'photo',
      maxWidth: 480,
      maxHeight: 720,
    };
    const response = await launchImageLibrary(options);

    if (response.didCancel) {
      console.log('Cancelled');
    } else if (response.errorMessage) {
      console.log(`Error: ${response.errorMessage}`);
    } else {
      const uri = response?.assets && response.assets[0].uri;
      if (uri) {
        setValue('imageUri', uri);
        setImageHeader(uri);
      }
    }
  };

  return (
    <Container>
      <S.ImageHeader
        source={{
          uri: item?.imageUri ?? imageHeader,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
      <S.Shadow colors={['#210a4811', '#210a48dd']} locations={[0.6, 0.95]} />

      <S.Content>
        <S.LoadImageButton onPress={updateImage}>
          <MaterialIcons name="add-a-photo" size={24} color="#110624" />
        </S.LoadImageButton>

        <S.Title>{`${!item ? 'Nova' : 'Atualizando'}  recomendação`}</S.Title>

        <Input
          label="Título"
          onChangeText={value => setValue('title', value)}
          defaultValue={item?.title}
        />

        <Input
          label="Descrição"
          multiline
          numberOfLines={4}
          onChangeText={value => setValue('description', value)}
          defaultValue={item?.description}
        />

        <Input
          label="Link de amostra"
          onChangeText={value => setValue('sampleUrl', value)}
          defaultValue={item?.sampleUrl}
        />

        <Switch
          label="assistido"
          onValueChange={value => setValue('status', value)}
          value={item?.status}
        />

        <AwesomeAlert
          show={showAlert}
          showProgress={false}
          title="Aviso"
          message="A ação de apagar não pode ser desfeita. Tem certeza?"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={true}
          showConfirmButton={true}
          cancelText="Não, vou checar"
          confirmText="Sim, apague logo!"
          confirmButtonColor="#ED67C0"
          onCancelPressed={() => setShowAlert(false)}
          onConfirmPressed={() => {
            onDelete();
          }}
        />

        {item && (
          <Button
            type="secondary"
            color="#ED67C0"
            onPress={() => setShowAlert(true)}>
            Apagar
          </Button>
        )}

        <Button type="secondary" onPress={() => navigation.pop()}>
          Cancelar
        </Button>

        <Button onPress={onSubmit}>Salvar</Button>
      </S.Content>
    </Container>
  );
};
