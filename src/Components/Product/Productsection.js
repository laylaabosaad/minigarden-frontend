
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Home/Slider.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link} from "react-router-dom";



const SliderProducts = () => {
  
 

  const [productCard, setProductCard] = useState([]);
  const [categories, setCategries] = useState([]);
 

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
        <ul>
          {categories.map((category, index) => (
            <div key={index} className="product-category-btn">
              <li>
                <button
                  className="product-category-btn"
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

      <div className="product-section">
        <div className="productsection-cards">
          {console.log(productCard)}
          {productCard.map((item, index) => (
            <div key={index} className="productsection">
              <div className="card">
                <div className="card-image">
                  {item.image && item.image.url ? (
                    <img src={item.image.url} alt={item.title} />
                  ) : (
                    <div>No image available</div>
                  )}
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
