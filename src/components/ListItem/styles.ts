import styled from 'styled-components/native';
import {View, Text, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {MaterialIcons} from '@expo/vector-icons';
import {ListItemProps} from '.';

type WrapperProps = Pick<ListItemProps, 'onPress'>;

export const Wrapper = styled(TouchableOpacity)<WrapperProps>`
  flex: 0.5;
  padding: 16px;
  justify-content: center;
  align-items: center;
`;

export const Image = styled(FastImage)`
  min-height: 224px;
  min-width: 174px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

type OverlayProps = {
  status: boolean;
};

export const Overlay = styled(View)<OverlayProps>`
  min-height: 224px;
  min-width: 174px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.status ? '#00000088' : 'none')};
`;

export const MaterialIcon = styled(MaterialIcons).attrs({
  name: 'done',
  size: 32,
  color: '#f5dd4b',
})``;

export const StatusText = styled(Text)`
  color: #e0e0e0;
`;

export const Title = styled.Text`
  align-self: flex-start;
  margin-top: 4px;
  color: #aa9df2;
  font-weight: bold;
`;
