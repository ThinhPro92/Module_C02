import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  deeleteCategory,
  getCategory,
  getProductsByCategory,
} from "../../api/apiCategory";

const Category = () => {
  const [categories, setCategories] = useState([]);

  const fetchCategory = async () => {
    const data = await getCategory();
    setCategories(data);
  };
  const navigate = useNavigate();
  useEffect(() => {
    fetchCategory();
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
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Ban co chac muon xoa khong?");
    if (!confirmDelete) return;

    const products = await getProductsByCategory(id);
    if (products.length > 0) {
      alert("Khong the xoa vi danh muc con san pham ");
      return;
    }

    await deeleteCategory(id);
    alert("Xoa thanh cong");
    fetchCategory();
  };

  return (
    <div className="container mt-3">
      <h2>Danh sach danh muc</h2>
      <Link to="/category/create" className="btn btn-success mb-3">
        Them danh muc
      </Link>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Title</th>
            <th>Slug</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((cate) => (
            <tr key={cate.id}>
              <td>{cate.title}</td>
              <td>{cate.slug}</td>
              <td>
                <Link to={`update/${cate.id}`} className="btn btn-warning me-2">
                  Sua
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(cate.id)}
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

export default Category;
