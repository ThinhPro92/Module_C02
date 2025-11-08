import React, { useEffect, useState } from "react";
import { deeleteProduct, getProduct } from "../../api/apiProduct";
import { Link, useNavigate } from "react-router-dom";
import { getCategory } from "../../api/apiCategory";

const Product = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState([]);
  const [filterCategory, setFilterCategory] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productData = await getProduct();
        const categoryData = await getCategory();
        setProducts(productData);
        setCategories(categoryData);
      } catch (error) {
        console.log("Loi khi tai du lieu");
      }
    };
    fetchData();
  }, []);
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    navigate("/login");
    return null;
  }
  if (user.role !== "admin") {
    return (
      <h2 style={{ textAlign: "center", margin: "50px" }}>
        Forbidden: You do not have access to this resource.
      </h2>
    );
  }
  const deleteProduct = async (id) => {
    const confirmDelete = window.confirm("Ban co chac muon xoa khong?");
    if (!confirmDelete) return;

    try {
      await deeleteProduct(id);
      alert("Xoa thanh cong");
      setProducts((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      alert("Xoa that bai");
    }
  };

  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const displayedProducts = filterCategory
    ? filteredProducts.filter((item) => item.categoryId == filterCategory)
    : filteredProducts;

  return (
    <div>
      <h1> Danh sach san pham</h1>

      <input
        type="text"
        placeholder="Tim kiem san pham..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginRight: "10px", padding: "5px" }}
      />

      <select
        value={filterCategory}
        onChange={(e) => setFilterCategory(e.target.value)}
        style={{ marginRight: "10px", padding: "5px" }}
      >
        <option value="">Tat ca danh muc</option>
        {categories.map((cate) => (
          <option key={cate.id} value={cate.id}>
            {cate.title}
          </option>
        ))}
      </select>

      <button className="wd-100 btn btn-primary">
        <Link style={{ textDecoration: "none", color: "black" }} to="create">
          Them
        </Link>
      </button>

      <table className="table table-striped table-inverse table-responsive">
        <thead className="thead-inverse">
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Thumbnail</th>
            <th>Stock</th>
            <th>CategoryId</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {displayedProducts.map((item, index) => (
            <tr key={index}>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>{item.description}</td>
              <td>
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  width="100px"
                  height="100px"
                />
              </td>
              <td>{item.stock}</td>
              <td>{item.categoryId}</td>
              <td>
                <button className="wd-100 btn btn-success">
                  <Link to={`/product/${item.id}`}>Xem</Link>
                </button>
                <button
                  className="wd-100 btn btn-warning"
                  onClick={() => navigate(`update/${item.id}`)}
                >
                  Sua
                </button>
                <button
                  className="wd-100 btn btn-danger"
                  onClick={() => deleteProduct(item.id)}
                >
                  Xoa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Product;
