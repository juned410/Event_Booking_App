import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Caros = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1536 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1280, min: 641 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 640, min: 376 },
      items: 3,
      
    },
    mobile: {
      breakpoint: { max: 375, min: 0 },
      items: 2.5,
      
    },
  };
 
  return (
    <div>
      <Carousel  responsive={responsive}>
        <div className="caro_img">
          <img
            src="/images/carousel/Rectangle 11.png"
            alt=""
            width="200px"
            height="200px"
          />
        </div>
        <div className="caro_img">
          <img
            src="/images/carousel/Rectangle 12.png"
            alt=""
            width="200px"
            height="200px"
          />
        </div>
        <div className="caro_img">
          <img
            src="/images/carousel/Rectangle 13.png"
            alt=""
            width="200px"
            height="200px"
          />
        </div>
        <div className="caro_img">
          <img
            src="/images/carousel/Rectangle 14.png"
            alt=""
            width="200px"
            height="200px"
          />
        </div>
        <div className="caro_img">
          <img
            src="/images/carousel/Rectangle 16.png"
            alt=""
            width="200px"
            height="200px"
          />
        </div>
        <div className="caro_img">
          <img
            src="/images/carousel/Rectangle 15.jpg"
            alt=""
            width="200px"
            height="200px"
          />
        </div>
        <div className="caro_img">
          <img
            src="/images/carousel/Rectangle 17.webp"
            alt=""
            width="200px"
            height="200px"
          />
        </div>
        <div className="caro_img">
          <img
            src="/images/carousel/Rectangle 18.jpg"
            alt=""
            width="200px"
            height="200px"
          />
        </div>
        <div className="caro_img">
          <img
            src="/images/carousel/Rectangle 19.jpg"
            alt=""
            width="200px"
            height="200px"
          />
        </div>
        <div className="caro_img">
          <img
            src="/images/carousel/Rectangle 20.jpg"
            alt=""
            width="200px"
            height="200px"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Caros;
