import React from 'react';
import SliderItem from '../SliderItem';
import SimpleSlider from 'react-slick';
import './styles.css';

const ProductsSlider = () => {
   const data = require('../../data.json');

   const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
         {
            breakpoint: 1280,
            settings: {
               slidesToShow: 4
            }
         },
         {
            breakpoint: 1023,
            settings: {
               slidesToShow: 3
            }
         },
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 2.5,
               arrows: false
            }
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 2,
               arrows: false
            }
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 1.5,
               arrows: false
            }
         }
      ]
   };
   return (
      <>
      <div className="slider__block">
      <h3 className="slider__heading">Бестселлеры в категории автотовары и автохимия</h3>
      <div className="slider__wrapper">
         <SimpleSlider {...settings}>
            {data.map(el =>
               <SliderItem key={el.product_id} {...el} />
            )}
         </SimpleSlider>
      </div>
      </div>
      <div className="slider__block">
      <h3 className="slider__heading">Что-то новенькое</h3>
      <div className="slider__wrapper">
         <SimpleSlider {...settings}>
            {data.sort( () => Math.random() - 0.5).map(el =>
               <SliderItem key={el.product_id} {...el} />
            )}
         </SimpleSlider>
      </div>
      </div>
      </>
   );
};

export default ProductsSlider;
