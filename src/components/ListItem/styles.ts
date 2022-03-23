import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';
import {MaterialIcons} from '@expo/vector-icons';

export const Wrapper = styled.View`
  flex: 0.5;
  padding: 16px;
  justify-content: center;
  align-items: center;
`;

export const Image = styled(FastImage)`
  min-height: 224px;
  min-width: 174px;
  border-radius: 8px;
`;

export const Status = styled(MaterialIcons)`
  position: absolute;
  bottom: 8px;
  right: 8px;
`;

export const Title = styled.Text`
  align-self: flex-start;
  margin-top: 4px;
  color: #aa9df2;
  font-weight: bold;
`;
