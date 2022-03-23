import styled from 'styled-components/native';
import {LinearGradient, LinearGradientProps} from 'expo-linear-gradient';
import {SafeAreaView} from 'react-native';

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
`;

export const Container = styled(LinearGradient).attrs<LinearGradientProps>({
  colors: ['#210a48', '#110624'],
  start: {x: 0.2, y: 0},
  end: {x: 0, y: 0.9},
})`
  flex: 1;
`;
