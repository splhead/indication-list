import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';

export const Container = styled.View`
  flex: 1;
  background-color: #131126;
  padding: 20px 0px;
`;

export const Image = styled(FastImage)`
  height: 200px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #e0e0e0;
  font-weight: bold;
`;
// #8479b4 #433576 #210a48
