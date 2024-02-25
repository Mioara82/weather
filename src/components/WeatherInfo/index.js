import React from 'react';
import { InfoContainer, InfoItem, Title, NumberCont, FontCont, MiddleCont, Paragraph} from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWind,
  faCloud,
  faDroplet,
  faEye,
} from '@fortawesome/free-solid-svg-icons';

const WeatherInfo = ({ weatherData }) => {
  return (
    <div>
      <InfoContainer>
        <InfoItem>
          <FontCont>
            <FontAwesomeIcon icon={faEye} />
          </FontCont>
          <MiddleCont >
            <Title>
              Visibility{' '}
            </Title>
            <NumberCont>
              {weatherData.visibility} m
            </NumberCont>
          </MiddleCont>
          <Paragraph>
            The air quality is generally acceptable for most individuals.
            However, sensitive groups may experience minor to moderate symptoms
            from long-term exposure.
          </Paragraph>
        </InfoItem>
        <InfoItem>
          <FontCont>
            <FontAwesomeIcon icon={faCloud} />
          </FontCont>
          <MiddleCont>
            <Title>
              Clouds
            </Title>
            <NumberCont>
              {weatherData.clouds?.all} %
            </NumberCont>
          </MiddleCont>
          <Paragraph>
            The air quality is generally acceptable for most individuals.
            However, sensitive groups may experience minor to moderate symptoms
            from long-term exposure.
          </Paragraph>
        </InfoItem>
        <InfoItem>
          <FontCont>
            <FontAwesomeIcon icon={faDroplet} />
          </FontCont>
          <MiddleCont>
            <Title>
              Humidity
            </Title>
            <NumberCont>
              {weatherData.main?.humidity} %
            </NumberCont>
          </MiddleCont>
          <Paragraph>
            The air quality is generally acceptable for most individuals.
            However, sensitive groups may experience minor to moderate symptoms
            from long-term exposure.
          </Paragraph>
        </InfoItem>
        <InfoItem>
          <FontCont>
            <FontAwesomeIcon icon={faWind} />
          </FontCont>
          <MiddleCont>
            <Title>
              Wind
            </Title>
            <NumberCont>
              {weatherData.wind?.gust} m/s
            </NumberCont>
          </MiddleCont>
          <Paragraph>
            The air quality is generally acceptable for most individuals.
            However, sensitive groups may experience minor to moderate symptoms
            from long-term exposure.
          </Paragraph>
        </InfoItem>
      </InfoContainer>
    </div>
  );
};

export default WeatherInfo;
