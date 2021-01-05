import styled from 'styled-components';

export const Body = styled.View`
  flex: 1;
  padding: ${(props) => props.paddings || '0'};
`;

export const Form = styled.View`
  flex: 1;
  padding: ${(props) => props.paddings || '0 37px'};
  text-align: center;
`;

export const Line = styled.View`
  flex-direction: row;
  justify-content: ${(props) => props.justify || 'space-around'};
  alignItems: ${(props) => props.alignItems || 'center'};
  margin-left: ${(props) => props.marginLeft || '0'}px;
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

export const PopView = styled.View`
  padding: 20px;
  border-bottom-width: 1px;
  border-bottom-color:#ccc;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Avatar1 = styled.View`
  width:64px;
  height:64px;
  background:#219653 ;
  border-radius:30px;
  margin-right: 12px;
  padding top:12px;
  padding:20px;
  align-items: flex-end;
  justify-content: center;
  borderBottomLeftRadius: 20px;
  borderBottomRightRadius: 20px;
  borderTopLeftRadius: 20px;
  borderTopRightRadius: 20px;
`;

export const Avatar2 = styled.View`
  width:64px;
  height:64px;
  background:#F2C94C ;
  border-radius:30px;
  margin-right: 12px;
  padding top:12px;
  padding:20px;
  align-items: flex-end;
  justify-content: center;
  borderBottomLeftRadius: 20px;
  borderBottomRightRadius: 20px;
  borderTopLeftRadius: 20px;
  borderTopRightRadius: 20px;
`;

export const LessonView = styled.View``;