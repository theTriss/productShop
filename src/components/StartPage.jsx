import React, { useLayoutEffect, useState } from 'react';
import Slider from "react-slick";
import Product from './Product';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './StartPage.module.css';
import sheeseSale from '../common/img/sheeseSale.png';
import fishSale from '../common/img/fishSale.png';
import sausageSale from '../common/img/sausageSale.png';
import milkSale from '../common/img/milkSale.png';
import teaSale from '../common/img/teaSale.png';
import wafflesSale from '../common/img/wafflesSale.png';


const StartPage = ({ products }) => {

  const [slide, setSlide] = useState(1);

  let productSliderSettings = {
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: slide,
    slidesToScroll: 1
  };

  let imgSliderSettings = {
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  useLayoutEffect(() => {
    const updateSize = () => {
      window.innerWidth > 960 ? setSlide(4)
        : (window.innerWidth > 720 && window.innerWidth <= 960) ? setSlide(3)
          : (window.innerWidth > 470 && window.innerWidth <= 720) ? setSlide(2)
            : setSlide(1);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <>
      <div className={styles.imgSlider}>
        <Slider {...imgSliderSettings}>
          <div>
            <img
              className={styles.imgSlider__img}
              src={sheeseSale}
              alt="sheeseSale"
            />
          </div>
          <div>
            <img
              className={styles.imgSlider__img}
              src={fishSale}
              alt="fishSale"
            />
          </div>
          <div>
            <img
              className={styles.imgSlider__img}
              src={sausageSale}
              alt="sausageSale"
            />
          </div>
          <div>
            <img
              className={styles.imgSlider__img}
              src={milkSale}
              alt="milkSale"
            />
          </div>
          <div>
            <img
              className={styles.imgSlider__img}
              src={teaSale}
              alt="teaSale"
            />
          </div>
          <div>
            <img
              className={styles.imgSlider__img}
              src={wafflesSale}
              alt="wafflesSale"
            />
          </div>
        </Slider>
      </div>
      <div className={styles.productSlider}>
        <div className={styles.productSlider__title}>Популярные товары</div>
        <Slider {...productSliderSettings}>
          {products.map(product => <Product {...product} key={product._id} />)}
        </Slider>
      </div>
    </>
  )
}

export default StartPage;

