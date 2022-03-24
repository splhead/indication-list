import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MaterialIcons} from '@expo/vector-icons';

import * as S from './styles';
import {Container} from '@components/Container';
import {ListItem} from '@components/ListItem';
import {RootStackParamList} from 'App';
import {api} from '../../services/api';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export type Item = {
  id?: string;
  title: string;
  description?: string;
  imageUri?: string;
  sampleUrl?: string;
  status: boolean;
  createdAt?: Date;
  updatedAt?: Date;
};

export const Home = ({navigation}: HomeProps) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const loadItems = async () => {
      const response = await api.get('items');
      const {data} = response;
      if (data) {
        setItems(data);
      }
    };
    loadItems();
  }, []);

  return (
    <Container>
      <FlatList
        data={items}
        renderItem={({item}: {item: Item}) => {
          return (
            <ListItem
              item={item}
              onPress={() =>
                navigation.navigate('FormItem', {
                  id: item.id,
                })
              }
            />
          );
        }}
        numColumns={2}
      />

      <S.AddButton onPress={() => navigation.navigate('FormItem', {})}>
        <MaterialIcons name="add" size={32} color="#110624" />
      </S.AddButton>
    </Container>
  );
};
