import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import City from './pages/City';
import Navigation from './components/Navigation';
import styled from 'styled-components';
import './style.css';

const Wrapper = styled.div`
font-family: "Plus Jakarta Sans", sans-serif;
width:100vw;
margin:0;
padding:0;
display:flex;
border:5px dotted crimson;
background-color:#050608;
`;

const NavWrapper = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  width:30vw;
  color:white;
  border-radius:12px;
  background-image: linear-gradient(to right top, #0e1116, #14171b, #181c20, #1d2126, #21262b);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  `;

const MainWrapper = styled.div`
  display:flex;
  flex-direction:column;
  //width:70vw;
  border:1px solid orange;
  color:#D0D8E1;
`;

export default function App() {
  const [unit, setUnit] = useState('metric');

  const handleToggleUnit = () => {
    setUnit(unit === 'metric' ? 'imperial' : 'metric');
  };

  return (
    <Router>
      <Wrapper>
        <NavWrapper>
          <Navigation unit={unit} handleToggleUnit={handleToggleUnit} />
        </NavWrapper>
        <MainWrapper>
          <Switch>
            <Route exact path="/">
              <Home unit={unit} />
            </Route>
            <Route exact path="/city/:cityId">
              <City unit={unit} />
            </Route>
          </Switch>
        </MainWrapper>
      </Wrapper>
    </Router>
  );
}
