import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';
import {LinearGradient} from 'expo-linear-gradient';

export const Wrapper = styled(LinearGradient)`
  flex: 1;
`;

export const Content = styled.View`
  flex: 2;
  padding: 16px 24px;
`;

export const ImageHeader = styled(FastImage)`
  flex: 0.5;
`;

export const LoadImageButton = styled.TouchableOpacity`
  height: 56px;
  width: 56px;
  background-color: #8479b4;
  position: absolute;
  right: 24px;
  top: -28px;
  padding: 8px 16px;
  border-radius: 28px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #e0e0e0;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const Input = styled.TextInput`
  height: 40px;
  background-color: #4e3c8b;
  border-radius: 4px;
  padding-left: 16px;
  padding-right: 8px;
  color: #d2cbee;
  font-size: 16px;
  margin: 8px 0px;
`;

export const InputArea = styled(Input)`
  height: auto;
`;
// #8479b4 #433576 #210a48
