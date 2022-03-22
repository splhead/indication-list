import React from 'react';
import {Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import * as S from './styles';
import {Container} from '@components/Container';

export const Home = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Text>home</Text>
      <S.AddButton onPress={() => navigation.navigate('FormItem')}>
        <S.AddButtonText>+</S.AddButtonText>
      </S.AddButton>
    </Container>
  );
};
