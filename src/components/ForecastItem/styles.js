import styled from 'styled-components';

export const WeatherIcon = styled.img`
  width:60px;
  height:60px;
  margin:auto;
`;
export const NumberCont = styled.span`
font-family: "xenera", sans-serif;
font-weight: 400;
font-style: normal;
font-size:14px;
margin:auto;
`;

export const ForecastLi = styled.li`
 width:25%;
 display:flex;
 flex-direction:column;
 border-radius:12px;
 padding:10px;
 background-image: linear-gradient(to right top, #277da1,#30b5e1);
 box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
`;