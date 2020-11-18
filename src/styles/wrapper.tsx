import styled from 'styled-components';

export const Body = styled.View`
  flex: 1;
`;

export const Form = styled.View`
  flex: 1;
  padding: ${(props) => props.paddings || '0 37px'};
  text-align: center;
`;

export const Line = styled.View`
  flex-direction: row;
  justify-content: ${(props) => props.justify || 'space-around'};
  alignItems: center;
`;
export const Start = styled.View`
  flex: 1;
  flexDirection: column;
  justifyContent: flex-start;
  padding: ${(props) => props.paddings || '0 37px'};
`;
export const Bottom = styled.View`
  flex: 1;
  width: 100%;
  position: absolute;
  bottom: 20px;
  padding: ${(props) => props.paddings || '0 0 0 0'};
`;

