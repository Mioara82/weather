import React from 'react';
import { Title, Text, LocationContainer, DataContainer, SecondaryInfo, WeatherIcon, NumberCont} from './styles';
import { CurrentDateInfo, ConvertToFahrenheit  } from '../../utils';

const Main = ({ weatherData, imageBG, unit }) => {
  const unitAbbreviation = unit === 'metric' ? 'C' : 'F'
  const DisplayTempValue = (temp) => {
    return unit === 'metric' ? temp : ConvertToFahrenheit(temp)
  }
  const iconCode = weatherData.weather?.icon;
  const iconURL = `https://openweathermap.org/img/wn/${iconCode}.png`;
 
  return (
    <div>
      <LocationContainer style={{backgroundImage:`url(${imageBG})`, backgroundSize:'cover'}}>
        <DataContainer>
          <NumberCont>
            <CurrentDateInfo />
          </NumberCont>
          <hr style={{ opacity: '0.4' }}></hr>
        </DataContainer>
        <DataContainer>
          <Title>{weatherData.name}</Title>
          <Title>
            <NumberCont>{DisplayTempValue(weatherData.main?.temp)}°{unitAbbreviation}</NumberCont>
          </Title>
          {iconCode && <WeatherIcon src={iconURL}></WeatherIcon>}
        </DataContainer>
        <SecondaryInfo>
          <Title small>
            Feels like:{' '}
            <NumberCont small>{DisplayTempValue(weatherData.main?.feels_like)}°{unitAbbreviation}</NumberCont>
          </Title>
          <Title small>
            Sunrise:{' '}
            <NumberCont small>
              {new Date(weatherData.sys?.sunrise * 1000).toLocaleTimeString(
                'en'
              )}
            </NumberCont>
          </Title>
          <Title small>
            Sunset:{' '}
            <NumberCont small>
              {new Date(weatherData.sys?.sunset * 1000).toLocaleTimeString(
                'en'
              )}
            </NumberCont>
          </Title>
        </SecondaryInfo>
      </LocationContainer>
    </div>
  );
};

export default Main;
