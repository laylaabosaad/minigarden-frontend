import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Home/Slider.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Productsection = () => {
  let location = useLocation();
  let catid;
  if (location.state) {
    catid = location.state.id;
  }

  let userId = localStorage.getItem("userId");

  const [productCard, setProductCard] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategoryId, setActiveCategoryId] = useState(null);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const { categoryID } = useParams();
  console.log("selected", selectedCategory);

  const getProdofaSubCategory = async (_id) => {
    try {
      const find = await axios.get(
        `https://mini-garden.onrender.com/product/bycategory/${_id}`
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
      if (!userId) {
        swal({
          title: "Login to add to cart",
          text: "You need to login!",
          icon: "warning",
          button: "Login",
        }).then(() => {
          window.location.href = "/login";
        });
      } else {
        const response = await axios.put(
          `https://mini-garden.onrender.com/cart/${userId}`,
          data
        );
        swal({
          title: "Item added to cart",
          text: "Item Added Successfully",
          icon: "success",
          button: "Continue Shopping",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);
  // const addtoCart = async (productId, quantity, price, title) => {
  //   try {
  //     const data = {
  //       productId: productId,
  //       quantity: quantity,
  //       price: price,
  //       title: title,
  //     };

  //     const response = await axios.put(
  //       `https://mini-garden.onrender.com/cart/${userId}`,
  //       data
  //     );

  //     console.log(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   getCategories();
  // }, []);

  const getCategories = async () => {
    try {
      const response = await axios.get(
        "https://mini-garden.onrender.com/category"
      );
      setCategories(response.data.data);
      setSelectedCategory(response.data.data[0]._id); // Set the first category as the default selected category
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const getProducts = async () => {
    try {
      const response = await axios.get(
        "https://mini-garden.onrender.com/product"
      );
      const res = response.data.data;
      setProductCard(res);
      console.log(response.data);
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
          {/* <button
            className="product-category-btn"
            onClick={() => getProducts()}
          >
            All
          </button> */}
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
                  <div className="image-fit">
                    <Link to={`/singleproduct/${item._id}`}>
                      <img
                        src={item.image.url}
                        className="product-img"
                        alt=""
                      />
                    </Link>
                  </div>
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
      </div>
    </div>
  );
};

export default Productsection;
