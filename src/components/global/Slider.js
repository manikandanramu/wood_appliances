import React from 'react';
import 'react-awesome-slider/dist/styles.css';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/fold-out-animation.css';

const SliderComponent = (props) => {
    const { data } = props;
  return (
    <AwesomeSlider animation="foldOutAnimation">
        {
            data?.map((src) => (
                <div data-src={src} />
            ))
        }
    </AwesomeSlider>
  );
};

export default SliderComponent;
