import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Home/Slider.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Productsection = () => {
  const [productCard, setProductCard] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategoryId, setActiveCategoryId] = useState(null);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const {param}= useParams()

  const getProdofaSubCategory = async (id) => {
    try {
      const find = await axios.get(
        `http://localhost:2000/product/bycategory/${id}`
      );
      const response = find.data.data;
     
      setProductCard(response);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
    setActiveCategoryId(categoryId);
    getProdofaSubCategory(categoryId);
  };
 const addtoCart = async (productId, quantity, price, title) => {
  try {
    const data = {
      productId: productId,
      quantity: quantity,
      price: price,
      title: title,
    };

    const response = await axios.put(
      `http://localhost:2000/cart/64607f73b9808e0837852222`,
      data
    );

    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
 };


  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    try {
      const response = await axios.get("http://localhost:2000/category");
      setCategories(response.data.data);
      setSelectedCategory(response.data.data[0]._id); // Set the first category as the default selected category
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
        <ul>
          {categories.map((category) => (
            <div key={category._id} className="product-category-btn">
              <li className="li-Of-btns">
                <button
                  className={`product-category-btn ${
                    activeCategoryId === category._id ? "active" : ""
                  }`}
                  onClick={() => handleCategoryClick(category._id)}
                >
                  {category.title}
                </button>
              </li>
              <h1>Helloo {param} </h1>
            </div>
          ))}
        </ul>
      </nav>

      

      <div className="product-section">
        <div className="productsection-cards">
          {productCard.map((item) => (
            <div key={item._id} className="productsection">
              <div className="card">
                <div className="card-image-prod">
                  {/* Display the image here */}
                </div>
                <div className="category">
                  <p>{item.title}</p>
                </div>

                <div className="heading">
                  {/* <p>{item.description}</p> */}
                  <p>{item.price}$</p>
                </div>

                <div className="product-buttons">
                  <button
                    className="productbtnaddanddesc"
                    onClick={() =>
                      addtoCart(item._id, 1, item.price, item.title)
                    }
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flip-card-back">
          <h1>Hellooo</h1>
        </div>
      </div>
    </div>
  );
};

export default Productsection;
