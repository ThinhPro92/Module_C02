import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { detailProduct } from "../../../api/apiProduct";

const DetailPro = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const data = await detailProduct(id);
        setProduct(data);
      } catch (error) {
        console.log("khong tai duoc chi tiet");
      }
    };
    fetchDetail();
  }, [id]);
  if (!product) return <p>Dang tai...</p>;
  return (
    <div style={{ margin: "20px" }}>
      <h1>Chi tiet san pham {product.id}</h1>
      <h3>{product.title}</h3>
      <p>Price: {product.price}</p>
      <p>Mo ta: {product.description}</p>
      <img
        src={product.thumbnail}
        alt={product.title}
        width={"100px"}
        height={"100px"}
      />
      <p>So luong: {product.stock}</p>
      <p>Danh muc lien quan: {product.categoryId}</p>
    </div>
  );
};

export default DetailPro;
