// 
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import menu_1 from '../../assets/img/menu1.jpg';
import menu_2 from '../../assets/img/menu2.jpg';
import menu_3 from '../../assets/img/menu3.jpg';

export default function Menu() {
  const bgg = {
    backgroundColor: 'hsl(56, 42%, 84%)',
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  const imageStyle = {
    maxWidth: '50%', // Set maximum width to 100% of the container
    height: 'auto',   // Maintain aspect ratio
    borderRadius: '8px', // Add border-radius for rounded corners
  };

  return (
    <section id='Menu1'>
    <div className="container mx-auto h-[100%] " style={bgg}>
      <div className="text-center mb-[60px] mt-70px ">
        <h1 className="text-[42px] leading-[52px] font-bold font-head text-[#121110]">Menu</h1>
      </div>
      <Slider {...settings}>
        <div className="card card-compact w-96 bg-base-100 ">
          <figure className="px-10 pt-5 rounded-none" style={bgg}>
            <img src={menu_1} alt="menuhotgt" className="rounded-xl" style={imageStyle} />
          </figure>
          <div className="card-body items-center text-center rounded-b-lg" style={bgg}>
            <h2 className="card-title">Ice cream Matcha</h2>
            <p>Imagine a smooth and velvety ice cream base infused with premium matcha powder, creating a vibrant green color and a distinct, sophisticated taste.</p>
            <div className="card-actions rounded-2xl">
              <button className="btn btn-primary ">Delivery Now</button>
            </div>
          </div>
        </div>

        <div className="card card-compact w-96 bg-base-100 ">
          <figure className="px-10 pt-10 rounded-none" style={bgg}>
            <img src={menu_2} alt="menuhotgt" className="rounded-xl" style={imageStyle}/>
          </figure>
          <div className="card-body items-center text-center rounded-b-lg" style={bgg}>
            <h2 className="card-title">Matcha Churros</h2>
            <p>Imagine a smooth and velvety ice cream base infused with premium matcha powder, creating a vibrant green color and a distinct, sophisticated taste.</p>
            <div className="card-actions">
              <button className="btn btn-primary">Delivery Now</button>
            </div>
          </div>
        </div>

        <div className="card card-compact w-96 bg-base-100 ">
          <figure className="px-10 pt-10 rounded-none" style={bgg}>
            <img src={menu_1} alt="menuhotgt" className="rounded-xl" style={imageStyle}/>
          </figure>
          <div className="card-body items-center text-center rounded-b-lg" style={bgg}>
            <h2 className="card-title">Ice cream Matcha</h2>
            <p>Imagine a smooth and velvety ice cream base infused with premium matcha powder, creating a vibrant green color and a distinct, sophisticated taste.</p>
            <div className="card-actions">
              <button className="btn btn-primary">Delivery Now</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 ">
          <figure className="px-10 pt-10 rounded-none" style={bgg}>
            <img src={menu_3} alt="menuhotgt" className="rounded-xl" style={imageStyle}/>
          </figure>
          <div className="card-body items-center text-center rounded-b-lg" style={bgg}>
            <h2 className="card-title">Hot green tea latte</h2>
            <p>Imagine a smooth and velvety ice cream base infused with premium matcha powder, creating a vibrant green color and a distinct, sophisticated taste.</p>
            <div className="card-actions">
              <button className="btn btn-primary">Delivery Now</button>
            </div>
          </div>
        </div>
      </Slider>
    </div>
    </section>
  );
}
