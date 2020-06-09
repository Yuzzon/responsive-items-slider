import React from 'react';
import SliderItem from '../SliderItem';
import SimpleSlider from 'react-slick';
import './styles.css';

const ProductsSlider = () => {
   const data = require('../../data.json');
   var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 4,
               slidesToScroll: 1,
               infinite: true
            }
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1
            }
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1
            }
         }
      ]
   };
   return (
      <div className="slider__wrapper">
         <SimpleSlider {...settings}>
            {data.map(el =>
               <SliderItem key={el.product_id} {...el} />
            )}
         </SimpleSlider>
      </div>
   );
};

export default ProductsSlider;
