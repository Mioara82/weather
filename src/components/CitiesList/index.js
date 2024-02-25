import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import {NumberCont, UnorderedList , ListItem, Img, Button, ButtonWrap, StyledLink} from './cityStyles'
import { UppercasedWord,  ConvertToFahrenheit} from '../../utils';

// export const StyledLink = styled(Link)`
// text-decoration:none;
// color:#fff;
// :hover {
//   color: #00b4d8;
// }
// `;

const City = ({ item, handleRemove, unit }) => {
  const unitAbbreviation = unit === 'metric' ? 'C' : 'F'
  const DisplayTempValue = (displayTemp) => {
    return unit === 'metric' ? displayTemp : ConvertToFahrenheit(displayTemp)
  }
  return (
    <ListItem>
      <Img src={`https://flagsapi.com/${item.country}/shiny/64.png`} />
      <Link style={{textDecoration:'none', color:'#00b4d8'}}
      to={`/city/${item.name}`}>
        {UppercasedWord(item.name)}
      </Link>
      <NumberCont>
        {DisplayTempValue(item.temp)}° {unitAbbreviation}
      </NumberCont>
      <ButtonWrap>
        <Button onClick={() => handleRemove(item)}>
          <FontAwesomeIcon style={{ margin: 'auto' }} icon={faTrash} />
        </Button>
      </ButtonWrap>
    </ListItem>
  );
};

const CitiesList = ({ cities, handleRemove, unit }) => {
  
  return (
    <UnorderedList col>
      {cities.map((city) => (
        <City
          key={city.id}
          item={city}
          unit = {unit}
          handleRemove={handleRemove}
          link={`/city/${city.name}`}
        />
      ))}
    </UnorderedList>
  );
};

export default CitiesList;
