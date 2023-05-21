import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";

import image1 from "../images/slider.png";

const SliderProducts = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="whole-product">
        <div className="featuredcard-title">
          <div>
            <h1>Latest Release</h1>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              lacinia Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Fusce lacinia Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Fusce lacinia{" "}
            </p>
          </div>
        </div>
        <div className="product-cards ">
          <Slider {...settings}>
            <div>
              <div className="featured-card-image">
                <img src={image1} alt=""></img>
              </div>

              <div />
            </div>
            <div>
              <div className="featured-card-image">
                <img src={image1} alt=""></img>
              </div>

              <div />
            </div>
            <div>
              <div className="featured-card-image">
                <img src={image1} alt=""></img>
              </div>

              <div />
            </div>
            <div>
              <div className="featured-card-image">
                <img src={image1} alt=""></img>
              </div>

              <div />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};


export default SliderProducts;
