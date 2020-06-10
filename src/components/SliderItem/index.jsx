import React from 'react';
import './styles.css';
import favorite from '../../assets/heart-icon.svg';

const SliderItem = ({ image_url, product_image_alt, brand_name, product_title, price, available, rating, rating_count, url_direct }) => {
   function priceFormat(price) {
      return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
   }
   return (
      <div className="product__wrapper">
         <div className="product__image--block">
         <img src={image_url} alt={product_image_alt} className="product__image" />
         <img src={favorite} alt="" className="product__image--favorite"/>
         </div>
         <h6 className="product__brand">{brand_name}</h6>
         <p className="product__title">{product_title}</p>
         {rating ?
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
               <a href={`https://dok.dbroker.com.ua/${url_direct.substr(1)}`} target="_blank" className="product__button--buy">Купить</a>
            </div>
         </div>
      </div>
   );
};

export default SliderItem;
