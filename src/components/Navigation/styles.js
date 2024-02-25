import styled from 'styled-components';

export const NavWrapper = styled.div`
display:flex;
flex-direction:column;
align-items:center;
width:30vw;
color:white;
border-radius:12px;
`;

export const Logo = styled.h3`
size:12px;
color: white;
margin-top:20px;
`;

export const Img = styled.img`
width: 40px;
height :40px;
padding:5px;
  `;

export const InputWrapper = styled.input`
height:40px;
margin-top:40px;
background-image: linear-gradient(to right top, #0e1116, #14171b, #181c20, #1d2126, #21262b);
box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
width:80%;
border-radius:8px;
border:none;
color:white;
padding:4px 8px;
:focus{
 outline:none;
--border-angle: 0turn; 
  --main-bg: conic-gradient(
      from var(--border-angle),
      #213,
      #112 5%,
      #112 60%,
      #213 95%
    );
  
  border: solid 5px transparent;
  border-radius: 2em;
  --gradient-border: conic-gradient(from var(--border-angle), transparent 25%, #08f, #f03 99%, transparent);
  
  background: 
    var(--main-bg) padding-box,
    var(--gradient-border) border-box, 
    var(--main-bg) border-box;
  
  background-position: center center;

  animation: bg-spin 3s linear infinite;
  @keyframes bg-spin {
    to {
      --border-angle: 1turn;
    }
  }

  &:hover {
    animation-play-state: paused;
  }
}

@property --border-angle {
  syntax: "<angle>";
  inherits: true;
  initial-value: 0turn;
}
`;