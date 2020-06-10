import React from 'react';
import './App.css';
import ProductsSlider from './components/ProductsSlider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactGA from 'react-ga';

function initializeReactGA() {
   ReactGA.initialize('UA-169056750-1');
   ReactGA.pageview('/homepage');
}

function App() {
   return (
      <div className="App">
         <ProductsSlider />
      </div>
   );
}

export default App;
