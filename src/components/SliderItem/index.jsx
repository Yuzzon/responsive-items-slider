import React from 'react';
import './styles.css';

const SliderItem = ({ product_id, product_image_alt, brand_name, product_title, price, available, rating, rating_count }) => {
   const baseUrl = `https://img.dbroker.com.ua/images/card/product/0520/26/${product_id}_1.jpg`;
   function priceFormat(price) {
      return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
   }
   return (
      <div className="product__wrapper">
         <img src={baseUrl} alt={product_image_alt} className="product__image" />
         <h6 className="product__brand">{brand_name}</h6>
         <p className="product__title">{product_title}</p>
         { rating ? 
         <div className="product__rating">
            <span className={Number(rating) >= 1 ? "star-filled" : "star-empty"}></span>
            <span className={Number(rating) >= 2 ? "star-filled" : "star-empty"}></span>
            <span className={Number(rating) >= 3 ? "star-filled" : "star-empty"}></span>
            <span className={Number(rating) >= 4 ? "star-filled" : "star-empty"}></span>
            <span className={Number(rating) === 5 ? "star-filled" : "star-empty"}></span>
            <span className="product__rating--count">({rating_count} рекомендаций)</span>
         </div>
         :
         null
         }
         <div className="product__bottom">
            <div className="product__bottom--left">
               <p className="product__price">{priceFormat(price)} <span className="product__currency">грн</span></p>
               {available === "1" ?
                  <span className="product__availability product__availability--true">
                     Есть в наличии
                  </span>
                  :
                  <span className="product__availability product__availability--false">
                     Нет в наличии
                  </span>
               }
            </div>
            <div className="product__bottom--right">
               <button type="button" className="product__button--buy">Купить</button>
            </div>
         </div>
      </div>
   );
};

export default SliderItem;
