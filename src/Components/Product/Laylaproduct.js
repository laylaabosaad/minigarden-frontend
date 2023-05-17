import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Home/Slider.css";
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
  const [categories, setCategries] = useState([]);
  const [selectedSubcategoryType, setSelectedSubcategoryType] =
    useState(subcategoryType);
  const { category_id } = useParams();

  const [selectedCategory, setSelectedCategory] = useState(null);

  const getProdofaSubCategory = async (id) => {
    const find = await axios.get(
      `http://localhost:2000/product/bycategory/${id}`
    );
    let response = find.data.data;
    setProductCard(response);
    console.log(response);
  };

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
    getProdofaSubCategory(categoryId);
  };

  useEffect(() => {
    getCategories();
  }, []);
  const getCategories = async () => {
    try {
      const response = await axios.get("http://localhost:2000/category");
      setCategries(response.data.data);
      setSelectedCategory(response.data.data[0]._id); // Set the first category as the default selected category
      console.log(response.data.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    if (selectedCategory) {
      getProdofaSubCategory(selectedCategory);
    }
  }, [selectedCategory]);

  return (
    <div>
      <nav>
        {/* add navbar */}
        <ul>
          {categories.map((category, index) => (
            <div key={index}>
              <li>
                <button
                  key={category._id}
                  onClick={() => handleCategoryClick(category._id)}
                >
                  {category.title}
                </button>
              </li>
            </div>
          ))}
        </ul>
      </nav>

      <div className="whole-product">
        <div className="product-cards testimonial py-4 px-3">
          {console.log(productCard)}
          {productCard.map((item, index) => (
            <div key={index} className={`slider-${Math.floor(index / 3)}`}>
              <div className="card">
                <div className="card-image">
                  {item.image && item.image.url ? (
                    <img src={item.image.url} alt={item.title} />
                  ) : (
                    <div>No image available</div>
                  )}
                </div>
                <div className="title">
                  <p>{item.title}</p>
                </div>
                <div className="category">
                  <p>{item.title}</p>
                </div>

                <div className="heading">
                  <p>{item.description}</p>
                  <p>{item.price}</p>
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
              {(index + 1) % 3 === 0 && <div></div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SliderProducts;
