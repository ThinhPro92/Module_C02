import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, useParams } from "react-router-dom";
import { detailProduct, updateProduct } from "../../../api/apiProduct";
import { getCategory } from "../../../api/apiCategory";

const schemas = z.object({
  title: z.string().min(3),
  price: z.number().min(0),
  categoryId: z.string().min(1),
  description: z.string().optional(),
  thumbnail: z.string().optional(),
  stock: z.number().min(0),
});
const UpdatePro = () => {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schemas) });
  const handleReset = () => {
    reset();
  };

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategory().then(setCategories);
  }, []);
  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const data = await detailProduct(id);
        reset(data);
      } catch (error) {
        alert("Loi khi tai chi tiet");
      }
    };
    fetchDetail();
  }, [id, reset]);

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await updateProduct(id, data);
      alert("Cap nhat san pham thannh cong");
      reset();
      navigate("/product");
    } catch (error) {
      alert("Cap nhat san pham that bai");
    }
  };
  return (
    <div>
      <h1>Cap nhat San pham</h1>
      <form className="mb-3" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="">Title</label>
        <input type="text" {...register("title")} />
        {errors.title && (
          <span className="text-danger">{errors.title.message}</span>
        )}{" "}
        <br />
        <label htmlFor="">Description</label>
        <input type="text" {...register("description")} />
        {errors.description && (
          <span className="text-danger">{errors.description.message}</span>
        )}{" "}
        <br />
        <label htmlFor="">Price</label>
        <input type="number" {...register("price", { valueAsNumber: true })} />
        {errors.price && (
          <span className="text-danger">{errors.price.message}</span>
        )}{" "}
        <br />
        <label>Category</label>
        <select {...register("categoryId")}>
          <option value="">Chon danh muc</option>
          {categories.map((c) => (
            <option key={c.id} value={c.id}>
              {c.title}
            </option>
          ))}
        </select>
        {errors.categoryId && (
          <span className="text-danger">{errors.categoryId.message}</span>
        )}{" "}
        <br />
        <label>Thumbnail</label>
        <input type="text" {...register("thumbnail")} />
        {errors.thumbnail && (
          <span className="text-danger">{errors.thumbnail.message}</span>
        )}{" "}
        <br />
        <label>Stock</label>
        <input type="number" {...register("stock", { valueAsNumber: true })} />
        {errors.stock && (
          <span className="text-danger">{errors.stock.message}</span>
        )}{" "}
        <br />
        <button className="wd-100 btn btn-primary">Cap nhat</button>
        <button
          type="button"
          onClick={handleReset}
          className="wd-100 btn btn-success"
        >
          Reset
        </button>
      </form>
    </div>
  );
};

export default UpdatePro;
