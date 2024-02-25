import React, { useState } from 'react';
import ForecastItem from '../ForecastItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { ForecastSlider, IconButton, ButtonWrapper, DivWrapper} from './styles';

const ForecastList = ({ forecast, unit }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    if(slideIndex === forecast.length){
      return
    } else {
      setSlideIndex(slideIndex + 1)
    }
  };

  const prevSlide = () => {
    if(slideIndex === 0)return;
    setSlideIndex(slideIndex - 1);
  };

  return (
    <div>
      <DivWrapper>
        <button>List</button>
      <ButtonWrapper>
        <IconButton onClick={prevSlide}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </IconButton>
        <ForecastSlider>
          {forecast.map((item) => {
            return <ForecastItem key={item.id} item={item} unit={unit} />;
          })}
        </ForecastSlider>
        <IconButton onClick={nextSlide} mgLeft>
          <FontAwesomeIcon icon={faArrowRight} />
        </IconButton>
      </ButtonWrapper>
      </DivWrapper>
    </div>
  );
};

export default ForecastList;
