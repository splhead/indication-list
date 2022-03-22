import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';
import {LinearGradient} from 'expo-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';

export const SafeWrapper = styled(SafeAreaView)`
  flex: 1;
`;

export const Content = styled.View`
  flex: 2;
  padding: 16px 24px;
`;

export const Shadow = styled(LinearGradient)`
  height: 200px;
  margin-top: -200px;
`;

export const ImageHeader = styled(FastImage)`
  height: 200px;
`;

export const LoadImageButton = styled.TouchableOpacity`
  height: 56px;
  width: 56px;
  background-color: #c4b5f7;
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
  margin-top: -45px;
`;

// #8479b4 #433576 #210a48
