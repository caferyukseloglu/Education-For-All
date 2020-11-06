import styled from 'styled-components';

export const Body = styled.View`
  flex: 1;
`;

export const Form = styled.View`
  padding: ${(props) => props.paddings || '0 37px'};
  text-align: center;
`;

export const Line = styled.View`
  flex-direction: row;
  justify-content: ${(props) => props.justify || 'space-around'};
  alignItems: center;
  paddingVertical: 20px;
`;
