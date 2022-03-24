import styled from 'styled-components/native';
import {Switch} from 'react-native';
import {SwitchProps} from './index';

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-top: 4px;
  margin-bottom: 4px;
`;

type LabelProps = {
  isEnabled?: boolean;
};

export const Label = styled.Text<LabelProps>`
  color: ${props => (!props.isEnabled ? '#8479b4' : '#e0e0e0')};
  margin-right: 2px;
`;

export const StyledSwitch = styled(Switch).attrs<SwitchProps>(({value}) => ({
  trackColor: {
    false: '#767577',
    true: '#4e3c8b',
  },
  thumbColor: value ? '#f5dd4b' : '#4e3c8b',
}))`
  margin-right: -4px;
`;
