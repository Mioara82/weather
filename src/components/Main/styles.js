import styled from 'styled-components';

export const Title = styled.h3`
flex:1;
color:white;
font-size:${(props) => (props.small ? '10px' : '32px')};
width:${(props) => (props.percentage ? '50%' : '')};
flex:${(props) => (props.flex ? '1' : '')};
`;

export const Text = styled.h5`
flex:1;
margin:0;
`;

export const LocationContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
border-radius:12px;
padding:20px;
color:white;
flex:1;
`;

export const DataContainer = styled.div`
display:flex;
justify-content:center;
margin-bottom:20px;
gap:12px;
`;

export const SecondaryInfo = styled.div`
display:flex;
flex-direction:column;
align-items:flex-start;
`;

export const WeatherIcon = styled.img`
  width:60px;
  height:60px;
  margin:auto;
`;

export const NumberCont = styled.span`
font-family: "xenera", sans-serif;
font-weight: 400;
font-style: normal;
font-size:${(props) => (props.small ? '14px' : '26px')};
margin:auto;
width:${(props) => (props.percentage ? '30%' : '')};
text-align:${(props) => (props.right ? 'right' : '')};
`;