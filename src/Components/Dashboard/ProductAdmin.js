import axios from "axios";
import { useState, useEffect } from "react";
import "../Dashboard/Productadmin.css";

function ProductAdmin() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [stock, setStock] = useState("");
   const [editIndex, setEditIndex] = useState(null);
  const [productimage, setproductimage] = useState([]);
  const [image, setImage] = useState("");
  const [product, setProduct] = useState([]);

  const getProduct = async () => {
    const res = await axios.get("http://localhost:2000/product");
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

      const response = await axios.post(
        "http://localhost:2000/product/add",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const [images, setImages] = useState([]);

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
      `http://localhost:2000/product/${_id}`
    );

    console.log("check", _id);
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="inputsall-admin">
            <input
              type="text"
              value={title}
              placeholder="title"
              required
              onChange={(e) => setTitle(e.target.value)}
            ></input>
            <input
              type="text"
              value={stock}
              placeholder="stock"
              required
              onChange={(e) => setStock(e.target.value)}
            ></input>
            <input
              type="text"
              value={description}
              placeholder="description"
              required
              onChange={(e) => setDescription(e.target.value)}
            ></input>
            <input
              type="number"
              value={price}
              placeholder="number"
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
                <option value="64634e12b6db9bd04a4e167d">
                  Sacred Geometry
                </option>
                <option value="64634ddeb6db9bd04a4e167b">Regular</option>
              </select>
            </label>
            <button className="add-btn" type="submit" value="Submit">
              Add
            </button>
          </div>
        </form>
        <div>
          {product.map((prod, index) => (
            <div key={index}>
              <div>
                <p>{prod.title}</p>
                <p>{prod.price}</p>
                <img src={prod.image.url}></img>
              </div>

              <button
                className="admin-testi-buttons"
                onClick={() => deleteprod(prod._id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductAdmin;
