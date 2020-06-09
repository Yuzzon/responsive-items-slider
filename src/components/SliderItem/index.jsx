import React from 'react';
import './styles.css';

const SliderItem = ({ product_id, product_image_alt, brand_name, product_title, price, available}) => {
   const baseUrl = `https://img.dbroker.com.ua/images/card/product/0520/26/${product_id}_1.jpg`;

   return (
      <div className="product__wrapper">
         <img src={baseUrl} alt={product_image_alt} className="product__image"/>
         <h6>{brand_name}</h6>
         <p>{product_title}</p>
         <span className="product__price">{price} грн</span>
         {available == "1" ?
         <span className="product__availability product__availability--true">
            Есть в наличии
         </span>
         :
         <span className="product__availability product__availability--false">
            Нет в наличии
         </span>
         }
         <button type="button" >Купить</button>
      </div>
   );
};

export default SliderItem;
