import styled from 'styled-components';

 export const ForecastSlider = styled.ul`
  display:flex;
  gap:20px;
  padding:20px 0;
  margin:0;
  overflow-x:scroll;
  white-space:nowrap;
  `;

export const IconButton = styled.button`
width:20px;
height:20px;
cursor:pointer;
margin-left:${(props) => (props.mgLeft ? 'auto' : '')}
:hover {
  transform:scale(1.1);
}
`;

export const ButtonWrapper = styled.div`
display:flex;
justify-content:space-between;
margin:auto;
padding: 12px;
border:1px solid white;
`;

export const DivWrapper = styled.div`
display:flex;
flex-direction:column;
`;
