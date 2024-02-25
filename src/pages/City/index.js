import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Heading from '../../components/Heading';
import Main from '../../components/Main';
import WeatherInfo from '../../components/WeatherInfo';
import ForecastList from '../../components/ForecastList';
import { MainWrapper, WeatherContainer, DivWrapper, MainDiv, ForecastDiv}  from './styles';
import {GetHours} from '../../utils';

const City = ({unit}) => {
  const {cityId} = useParams();
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [imageBG, setImageBG] = useState(null);
  const [forecast, setForecast] = useState([]);

  const getWeatherData = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityId}&appid=${apiKey}&units=metric`
      );

      const {data: imageData} = await axios(
        `https://api.unsplash.com/photos/random?query=${data.name}&client_id=${unsplashKey}`
      );

      const { data: forecastData } = await axios(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityId}&appid=${newApiKey}&units=metric`
      );

      const list = forecastData.list.slice(0,8);

      const item = list.map((i) => {
        return {
          hours: GetHours(i.dt_txt),
          weatherIcon: i.weather[0].icon,
          temperature: i.main.temp,
          id: `${Math.random()}-${Math.random()}`,
        };
      });

      const updatedForecastList = [...forecast, ...item];

      if (
        !data ||
        !data.name ||
        !data.sys.country ||
        !imageData ||
        !forecastData
      )
        return;

      setWeatherData(data);
      setImageBG(imageData.urls.regular);
      setForecast(updatedForecastList);
      setIsLoading(false);
    } catch (err) {
      setError(error);
      const defaultImage = 'https://images.unsplash.com/photo-1708721205323-98eaaa0482ac?q=80&w=3874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
      setImageBG(defaultImage);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getWeatherData(cityId);
    setIsLoading(true);
  }, [cityId]);

  return (
    <MainWrapper>
      <Heading />
      {isLoading && <div>Loading</div>}
      {error && <div>{error}</div>}
      {weatherData && forecast && (
        <WeatherContainer>
          <DivWrapper>
            <MainDiv>
              <Main weatherData={weatherData} imageBG={imageBG} unit={unit} />
            </MainDiv>
            <ForecastDiv>
              <ForecastList forecast={forecast} unit={unit} />
            </ForecastDiv>
          </DivWrapper>
          <DivWrapper>
            <WeatherInfo weatherData={weatherData} />
          </DivWrapper>
        </WeatherContainer>
      )}
    </MainWrapper>
  );
};

export default City;
