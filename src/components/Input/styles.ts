import styled from 'styled-components/native';
import {TextInput} from 'react-native';

export const Wrapper = styled.View``;

export const Label = styled.Text`
  margin-top: 4px;
  color: #8479b4;
`;

export const Field = styled(TextInput)`
  height: ${props => (props.multiline ? 'auto' : '44px')};
  background-color: #4e3c8b;
  border-radius: 8px;
  padding-left: 16px;
  padding-right: 8px;
  color: #c4b5f7;
  font-size: 16px;
  margin: 4px 0px;
`;
