import styled from 'styled-components';

export const CurrentLocationCont = styled.div`
display:flex;
color:white;
border:1px solid #33383D;
padding:4px;
border-radius:8px;
box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
`;

export const FlagCont = styled.div`
margin-left:5px;
 `;

 export const LocationHeader = styled.h3`
margin:0;
`; 

export const Span = styled.span`
 font-size: 10px;
 font-style:italic;
 font-weight: 400;
 `;

 export const LocationTextCont = styled.div`
 display:flex;
 flex-direction:column;
 align-items:flex-start;
 ${Span}{
   font-size:10px;
 };
 margin-left:10px;
 `;

 export const Img = styled.img`
width: 40px;
height :40px;
padding:5px;
  `;