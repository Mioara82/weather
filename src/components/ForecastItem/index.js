import React from 'react';
import {WeatherIcon, NumberCont, ForecastLi} from './styles';
import { ConvertToFahrenheit} from '../../utils';

const ForecastItem = ({ item, unit }) => {
  const unitAbbreviation = unit === 'metric' ? 'C' : 'F';
  const DisplayTempValue = (displayTemp) => {
    return unit === 'metric' ? displayTemp : ConvertToFahrenheit(displayTemp);
  };
  const iconCode = item.weatherIcon;
  const iconURL = `https://openweathermap.org/img/wn/${iconCode}.png`;

  return (
    <ForecastLi>
      <NumberCont>{item.hours}</NumberCont>
      <hr></hr>
      {iconCode && <WeatherIcon src={iconURL} alt="weather icon"></WeatherIcon>}
      <NumberCont>{DisplayTempValue(item.temperature).toFixed(0)} °{unitAbbreviation}</NumberCont>
    </ForecastLi>
  );
};

export default ForecastItem;
