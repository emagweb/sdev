import React from 'react'
//import Slider from 'react-slick'
import Title from './Title'
//import Slide from './Slide'
// import pic1 from '../assets/img/Screen_001.png'
// import pic2 from '../assets/img/Screen_002.png'
// import pic3 from '../assets/img/Screen_003.png'
// import pic4 from '../assets/img/Screen_004.png'
// import pic5 from '../assets/img/Screen_005.png'
// import pic6 from '../assets/img/Screen_006.png'
// import pic7 from '../assets/img/Screen_007.png'
// import pic8 from '../assets/img/Screen_008.png'
// import screenSlider from '../assets/img/screens-slider.svg'

function Product() {

  // const slides = [
  //   { id: 1, pic: pic1, title: 'Screen 1' },
  //   { id: 2, pic: pic2, title: 'Screen 2' },
  //   { id: 3, pic: pic3, title: 'Screen 3' },
  //   { id: 4, pic: pic4, title: 'Screen 4' },
  //   { id: 5, pic: pic5, title: 'Screen 5' },
  //   { id: 6, pic: pic6, title: 'Screen 6' },
  //   { id: 7, pic: pic7, title: 'Screen 7' },
  //   { id: 8, pic: pic8, title: 'Screen 8' }
  // ]

  // const settings = {
  //   dots: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   responsive: [
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 3
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1
  //       }
  //     }
  //   ]
  // }

  return (
    <section id="product_block">
      <Title
        type="section-title__default"
        text="Features & Screens"
      />
      <div className="container">
        {/* <Slider {...settings}>
          {slides.map(screen => (
            <Slide pic={screen.pic} order={screen.id} title={screen.title} />
          ))}
        </Slider> */}
        <div className="product">
          <div className="product__left">
            <h3 className="product__title">Automatic submission<span>of your location</span></h3>
            <p className="product__text">From here you can send a message to your boss, which will instantly appear in the application</p>
            <h3 className="product__title">Interact with colleagues<span>from different offices</span></h3>
            <p className="product__text">From here you can send a message to your boss, which will instantly appear in the application</p>
          </div>
          <div className="product__right">
            <h3 className="product__title">Full access from anywhere<span>in the world</span></h3>
            <p className="product__text">From here you can send a message to your boss, which will instantly appear in the application</p>
            <h3 className="product__title">Automatic calculation<span>your working hours</span></h3>
            <p className="product__text">From here you can send a message to your boss, which will instantly appear in the application</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product