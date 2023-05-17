import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import image1 from "../images/slider.png";

const SliderProducts = ({ subcategoryType }) => {
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

  const [productCard, setProductCard] = useState([]);
  const [selectedSubcategoryType, setSelectedSubcategoryType] =
    useState(subcategoryType);

  const { category_id } = useParams();

  const getProduct = async (subcategoryType) => {
    const find = await axios.get(
      `http://localhost:2000/product?subcategory_type=${subcategoryType}`
    );
    let response = find.data.data;
    setProductCard(response);
    console.log(response);
  };

  const getSubCategory = async (subcategoryType) => {
    const find = await axios.get(
      `http://localhost:2000/subcategory?type=${subcategoryType}&category_id=${category_id}`
    );
    let response = find.data.data;
    setProductCard(response);
    console.log(response);
  };

  useEffect(() => {
    if (selectedSubcategoryType === "regular") {
      getProduct("regular");
    } else if (selectedSubcategoryType === "sacred") {
      getProduct("sacred");
    }
  }, [selectedSubcategoryType]);

  const handleSubcategoryTypeSelection = (subcategoryType) => {
    setSelectedSubcategoryType(subcategoryType);
    console.log("Selected subcategory type:", subcategoryType);
  };

  return (
    <div>
      <div className="whole-product">
        <div className="product-cards testimonial py-4 px-3">
          <Slider {...settings}>
            <div className="card">
              <div className="card-image">
                <img src={image1} alt=""></img>
              </div>
              <div className="title">
                <p>title</p>
              </div>
              <div className="category">
                <p>category</p>
              </div>

              <div className="heading">
                <p>description</p>
                <p>price</p>
              </div>
              <div />
            </div>
            <div className="card">
              <div className="card-image">
                <img src={image1} alt=""></img>
              </div>
              <div className="title">
                <p>title</p>
              </div>
              <div className="category">
                <p>category</p>
              </div>

              <div className="heading">
                <p>description</p>
                <p>price</p>
              </div>
              <div />
            </div>
            <div className="card">
              <div className="card-image">
                <img src={image1} alt=""></img>
              </div>
              <div className="title">
                <p>title</p>
              </div>
              <div className="category">
                <p>category</p>
              </div>

              <div className="heading">
                <p>description</p>
                <p>price</p>
              </div>
              <div />
            </div>
            <div className="card">
              <div className="card-image">
                <img src={image1} alt=""></img>
              </div>
              <div className="title">
                <p>title</p>
              </div>
              <div className="category">
                <p>category</p>
              </div>

              <div className="heading">
                <p>description</p>
                <p>price</p>
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
