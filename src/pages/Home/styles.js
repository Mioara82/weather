import styled from 'styled-components';

export const MainWrapper = styled.div`
  display:flex;
  flex-direction:column;
  width:70vw;
  border:1px solid green;
  color:#D0D8E1;
`;

export const WeatherContainer = styled.div`
  display:flex;
  border:1px solid red;
  padding:20px 0;
`;

export const DivWrapper = styled.div`
display:flex;
gap:30px;
width:50%;
padding:30px;
flex-direction:${props => props.col ? 'column' : 'row'};
border:2px dashed white;
//height:100%;
`;

export const MainDiv = styled.div`
flex:1;
`;

export const ForecastDiv = styled.div`
flex:1;
`;