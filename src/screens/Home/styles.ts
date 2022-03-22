import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #131126;
  padding: 32px 24px;
`;

export const AddButton = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: #f5dd4b;
  position: absolute;
  bottom: 24px;
  right: 24px;
  align-items: center;
  justify-content: center;
`;

export const AddButtonText = styled.Text`
  font-size: 28px;
  color: #131126;
  font-weight: bold;
`;
