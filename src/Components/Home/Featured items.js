
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
import { useState } from "react";
import { Link} from "react-router-dom";

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


  const [showPopup, setShowPopup] = useState(false);

  const handleDetailClick = () => {
    setShowPopup(true);
  };


    const Popup = () => {
      return (
        <div className="popup">
          <p>This is the popup content.</p>
        </div>
      );
    };

  return (
    <Slider {...settings} className="whole-product">
      <div className="product-cards testimonial py-4 px-3">
        <div class="card">
          <div class="card-image">
            {/* <div className="image-product">
              <img src={image1} alt="" className="image-product" />
            </div> */}
          </div>
          <div class="category"> Illustration </div>
          <div class="heading">
            {" "}
            A heading that must span over two linesA heading that must span over
            two lines A heading that must span over two lines
          </div>
          <div className="product-buttons">
            <div>
              <button>Add to cart</button>
            </div>
            <Link to="/Description">
              <button>Description</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="product-cards testimonial py-4 px-3">
        <div class="card">
          <div class="card-image">
            {/* <div className="image-product">
              <img src={image1} alt="" className="image-product" />
            </div> */}
          </div>
          <div className="category"> Illustration </div>
          <div className="heading">
            {" "}
            A heading that must span over two linesA heading that must span over
            two lines A heading that must span over two lines
          </div>
          <div className="heading">Price:20$</div>
          <div className="product-buttons">
            <div>
              <button>Add to cart</button>
            </div>
            <Link to="/Description">
              <button>Description</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="product-cards testimonial py-4 px-3">
        <div class="card">
          <div class="card-image">
            {/* <div className="image-product">
              <img src={image1} alt="" className="image-product" />
            </div> */}
          </div>
          <div class="category"> Illustration </div>
          <div class="heading">
            {" "}
            A heading that must span over two linesA heading that must span over
            two lines A heading that must span over two lines
          </div>
          <div className="product-buttons">
            <div>
              <button>Add to cart</button>
            </div>
            <div>
              <button onClick={handleDetailClick}>Detail</button>
              {showPopup ? <Popup /> : null}
            </div>
          </div>
        </div>
      </div>

      <div className="product-cards testimonial py-4 px-3">
        <div class="card">
          <div class="card-image">
            {/* <div className="image-product">
              <img src={image1} alt="" className="image-product" />
            </div> */}
          </div>
          <div class="category"> Illustration </div>
          <div class="heading">A heading that must span over two lines</div>
          <div className="product-buttons">
            <div>
              <button>Add to cart</button>
            </div>
            <Link to="/Description">
              <button>Description</button>
            </Link>
          </div>
        </div>
      </div>

      {/* 
      <div className="product-cards testimonial py-4 px-3">
        <p className="section__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus magni
          explicabo molestias recusandae repudiandae, dolor, sapiente placeat
          ab, animi eum minima nulla facere aliquam aut vitae quo pariatur
          voluptate odit?
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={image1} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Jhon Doe</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className=" product-cardstestimonial py-4 px-3">
        <p className="section__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus magni
          explicabo molestias recusandae repudiandae, dolor, sapiente placeat
          ab, animi eum minima nulla facere aliquam aut vitae quo pariatur
          voluptate odit?
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={image1} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Jhon Doe</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="product-cards testimonial py-4 px-3">
        <p className="section__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus magni
          explicabo molestias recusandae repudiandae, dolor, sapiente placeat
          ab, animi eum minima nulla facere aliquam aut vitae quo pariatur
          voluptate odit?
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={image1} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Jhon Doe</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div> */}
    </Slider>
  );
};

export default SliderProducts;
