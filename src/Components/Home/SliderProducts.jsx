import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
import axios from "axios";
import { useState, useEffect } from "react";

const SliderProducts = () => {
  const [filtercat, setFilterCat] = useState([]);

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
        breakpoint: 852,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 676,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const getProdAll = async () => {
    try {
      const find = await axios.get(`https://mini-garden.onrender.com/product`);
      const response = find.data.data;
      console.log(find.data.data);
      // Sort the products by the earliest time they were added
      response.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));

      setFilterCat(response.slice(-5)); // Slice the last 5 products
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    getProdAll();
  }, []);

  return (
    <div>
      <div className="whole-product">
        <div className="featuredcard-title">
          <div>
            <h1 className="latestrelease">Latest Release</h1>
          </div>
          <div>
            <p className="prod-descr-p">
              Enhance your living or working space with our latest mesmerizing
              terrariums and immerse yourself in the beauty of nature.
            </p>
          </div>
        </div>
        <div className="product-cards">
          <Slider {...settings}>
            {/* Pass the settings object to the Slider component */}
            {filtercat.map((item, index) => (
              <div key={index}>
                <div className="featured-card-image">
                  <img className="image-featured" src={item.image.url} alt="" />

                  {console.log(item.image.url)}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SliderProducts;
