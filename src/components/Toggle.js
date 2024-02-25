import React from 'react';
import styled from 'styled-components';

const ToggleButton = styled.button`
  height:32px;
  border:none;
  color:#fff;
  border-radius:12px;
  padding:4px 12px;
  margin-top:auto;
  margin-bottom:20px;
  border:1px dotted #33383D;
  background-image: linear-gradient(to right top, #0e1116, #14171b, #181c20, #1d2126, #21262b);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px; 
  :hover {
    background: #277da1;
    cursor:pointer;
    transform:scale(1.1);
  }
`;

const Toggle = ({handleToggleUnit, unit}) => {
  return (
    <ToggleButton onClick={handleToggleUnit}>
      {unit === 'metric' ? 'Celsius' : 'Fahrenheit'}
    </ToggleButton>
  );
};

export default Toggle;
