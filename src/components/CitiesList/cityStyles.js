import styled from 'styled-components';

export const UnorderedList = styled.ul`
list-style:none;
display:flex;
flex-direction:${(props) => (props.col ? 'column' : 'row')};
gap:20px;
padding:20px 0;
margin-top:60px;
`;

export const Img = styled.img`
width: 40px ;
height : 40px;
margin-right: auto;
padding:5px;
`;

export const ListItem = styled.li`
min-width:150px;
display:flex;
justify-content:center;
gap:20px;
align-items:center;
border-radius:12px;
border:1px dotted #33383D;
background-image: linear-gradient(to right top, #0e1116, #14171b, #181c20, #1d2126, #21262b);
box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
backdrop-filter: blur(5px);
padding:4px 12px;
width:100%;
:hover button {
  opacity: 1;
  left: 0;
}
`;

export const Button = styled.button`
border:none;
border-radius:4px;
cursor:pointer;
color:#000;
width:30px;
height:30px;
opacity: 0;
left: 20px;
transition: 0.3s ease-in-out;
position: relative;
&:hover {
  background-color: #c1121f;
}
`;

export const ButtonWrap = styled.div`
display:flex;
`;

export const NumberCont = styled.span`
font-family: "xenera", sans-serif;
font-weight: 400;
font-style: normal;
font-size:14px;
margin-left:auto;
`;