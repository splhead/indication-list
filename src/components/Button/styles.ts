import styled, {css} from 'styled-components/native';
import {TouchableOpacity, Text} from 'react-native';

import {ButtonProps} from './index';

export const StyledButton = styled(TouchableOpacity)<ButtonProps>`
  height: 44px;
  background-color: #f5dd4b;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin-top: 24px;

  ${props =>
    props.type === 'secondary'
      ? css`
          border-width: 1px;
          border-color: #f5dd4b;
          background-color: initial;
        `
      : ''}
`;

export const Label = styled(Text)<ButtonProps>`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 18px;
  ${props =>
    props.type === 'secondary'
      ? css`
          color: #f5dd4b;
          font-weight: 400;
          text-transform: none;
        `
      : css`
          color: #210a48;
        `};
`;
