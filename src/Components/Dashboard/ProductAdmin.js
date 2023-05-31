import axios from "axios";
import { useState, useEffect } from "react";
import "../Dashboard/Productadmin.css";
import swal from "sweetalert";

function ProductAdmin() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [stock, setStock] = useState("");
  const [images, setImages] = useState([]);

  const [product, setProduct] = useState([]);
  const [editProductId, setEditProductId] = useState(null);
  const [editProduct, setEditProduct] = useState({});

  const getProduct = async () => {
    const res = await axios.get("https://mini-garden.onrender.com/product");
    const getpro = res.data.data;
    setProduct(getpro);
    // console.log(getpro);
  };

  useEffect(() => {
    getProduct();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("price", price);
      formData.append("description", description);
      formData.append("category", category);
      formData.append("subcategory", subcategory);
      formData.append("stock", stock);
      for (let i = 0; i < images.length; i++) {
        formData.append("image", images[i]);
      }
      console.log("formData ", formData);

      if (!formData) {
        swal({
          title: "Please Fill all the fields",
          text: "For a better service fill the fields",
          icon: "error",
          button: "ok",
        });
      } else {
        swal({
          title: "Product addition was successful",
          icon: "success",
          button: "ok",
        });

        const response = await axios.post(
          "https://mini-garden.onrender.com/product/add",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        getProduct();
        setCategory("");
        setTitle("");
        setDescription("");
        setPrice("");
        setSubcategory("");
        setStock("");
        setImages("");
        console.log(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleImagesChange = (event) => {
    const files = event.target.files;
    const imagesArray = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      imagesArray.push(file);
    }
    setImages(imagesArray);
  };

  const deleteprod = async (_id) => {
    const removeprod = await axios.delete(
      `https://mini-garden.onrender.com/product/${_id}`
    );
    getProduct();
    console.log("check", _id);
  };

  const handleEditProduct = async () => {
    const data = {
      title: editProduct.title,
      price: editProduct.price,
      image: editProduct.image,
      stock: editProduct.stock,
      category: editProduct.category,
      subcategory: editProduct.subcategory,
      description: editProduct.description,
    };
    const change = await axios.put(
      `https://mini-garden.onrender.com/product/${editProductId}`,
      data
    );
    getProduct(change);
    console.log(data);
    setEditProductId(null);
    setEditProduct({});
  };

  const handleCancelEdit = () => {
    setEditProductId(null);
    setEditProduct({});
  };

  const handleEditButtonClick = (prod) => {
    setEditProductId(prod._id);
    setEditProduct(prod);
  };

  return (
    <div>
      <div className="backgrnd">
        <h1 className="prodtitle-admin">Products</h1>
      </div>

      <div className="whole-admin-product">
        <form onSubmit={handleSubmit}>
          <div className="inputsall-admin">
            <label>Product name:</label>
            <input
              className="input-admin"
              type="text"
              value={title}
              required
              onChange={(e) => setTitle(e.target.value)}
            ></input>
            <label>Stock</label>
            <input
              className="input-admin"
              type="text"
              value={stock}
              required
              onChange={(e) => setStock(e.target.value)}
            ></input>
            <label>Description</label>
            <input
              className="input-admin"
              type="text"
              value={description}
              required
              onChange={(e) => setDescription(e.target.value)}
            ></input>
            <label>Price</label>
            <input
              className="input-admin"
              type="number"
              value={price}
              required
              onChange={(e) => setPrice(e.target.value)}
            ></input>
            <label>Choose Images:</label>
            <input
              type="file"
              name="file"
              onChange={handleImagesChange}
              multiple
            />

            <label htmlFor="category">
              Category:
              <select
                name="category"
                id="category"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option>Select Category</option>
                <option value="64634d90b6db9bd04a4e1674">
                  Closed Terrarium
                </option>
                <option value="64634d99b6db9bd04a4e1676">Open Terrarium</option>
                <option value="64634da6b6db9bd04a4e1678">Solo Product</option>
              </select>
            </label>
            <label htmlFor="subcategory">
              Subategory:
              <select
                name="subcategory"
                id="subcategory"
                onChange={(e) => setSubcategory(e.target.value)}
              >
                <option>Select Subategory</option>
                <option value="64634e12b6db9bd04a4e167d">Sacred</option>
                <option value="64634ddeb6db9bd04a4e167b">Regular</option>
              </select>
            </label>
            <button className="submit-btn" type="submit" value="Submit">
              Add
            </button>
          </div>
        </form>
        <div>
          {editProductId ? (
            <div>
              <h2>Edit Product Details</h2>
              <form className="editform-admin" onSubmit={handleEditProduct}>
                <div>
                  <input
                    type="text"
                    value={editProduct.title}
                    placeholder="title"
                    required
                    onChange={(e) =>
                      setEditProduct({
                        ...editProduct,
                        title: e.target.value,
                      })
                    }
                  ></input>
                  <input
                    type="text"
                    value={editProduct.stock}
                    placeholder="stock"
                    required
                    onChange={(e) =>
                      setEditProduct({
                        ...editProduct,
                        stock: e.target.value,
                      })
                    }
                  ></input>
                  <input
                    type="text"
                    value={editProduct.description}
                    placeholder="description"
                    required
                    onChange={(e) =>
                      setEditProduct({
                        ...editProduct,
                        description: e.target.value,
                      })
                    }
                  ></input>
                  <input
                    type="number"
                    value={editProduct.price}
                    placeholder="number"
                    required
                    onChange={(e) =>
                      setEditProduct({
                        ...editProduct,
                        price: e.target.value,
                      })
                    }
                  ></input>
                  <label>Choose Images:</label>
                  <input
                    type="file"
                    name="file"
                    onChange={handleImagesChange}
                    multiple
                  />

                  <label htmlFor="category">
                    Category:
                    <select
                      name="category"
                      id="category"
                      value={editProduct.category}
                      onChange={(e) =>
                        setEditProduct({
                          ...editProduct,
                          category: e.target.value,
                        })
                      }
                    >
                      <option>Select Category</option>
                      <option value="64634d90b6db9bd04a4e1674">
                        Closed Terrarium
                      </option>
                      <option value="64634d99b6db9bd04a4e1676">
                        Open Terrarium
                      </option>
                      <option value="64634da6b6db9bd04a4e1678">
                        Solo Product
                      </option>
                    </select>
                  </label>
                  <label htmlFor="subcategory">
                    Subategory:
                    <select
                      name="subcategory"
                      id="subcategory"
                      value={editProduct.subcategory}
                      onChange={(e) =>
                        setEditProduct({
                          ...editProduct,
                          subcategory: e.target.value,
                        })
                      }
                    >
                      <option>Select Subategory</option>
                      <option value="64634e12b6db9bd04a4e167d">
                        Sacred Geometry
                      </option>
                      <option value="64634ddeb6db9bd04a4e167b">Regular</option>
                    </select>
                  </label>
                  <div className="btn-admin savecancle">
                    <button className="submit-btn" type="submit" value="Submit">
                      Save
                    </button>
                    <button
                      className="submit-btn"
                      type="button"
                      onClick={handleCancelEdit}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </form>
            </div>
          ) : (
            <div className="product-admin-view">
              {product.map((prod, index) => (
                <div className="editanddeletewithinputs" key={index}>
                  <div className="admin-product">
                    <img src={prod.image.url}></img>
                    <p> {prod.title}</p>
                    <p> {prod.price} $</p>
                    <p> {prod.category.title}</p>
                    <p>{prod.subcategory.title}</p>
                    {/* {console.log(prod.category.title)} */}
                  </div>
                  <div className="btn-admin">
                    <button
                      className="submit-btn"
                      onClick={() => deleteprod(prod._id)}
                    >
                      Delete
                    </button>
                    <button
                      className="submit-btn"
                      onClick={() => handleEditButtonClick(prod)}
                    >
                      Edit
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductAdmin;
