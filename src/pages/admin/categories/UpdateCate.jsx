import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import { useNavigate, useParams } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { detailCategory, updateCategory } from "../../../api/apiCategory";

const schema = z.object({
  title: z.string().min(3, "Tên danh mục phải ít nhất 3 ký tự"),
  slug: z.string().regex(/^\S+$/, "Slug không được chứa khoảng trắng"),
});

const UpdateCate = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  const handleReset = () => {
    reset();
  };
  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await detailCategory(id);
        reset(data);
      } catch (error) {
        alert("Loi khi tai chi tiet");
      }
    };
    fetch();
  }, [id, reset]);

  const onSubmit = async (data) => {
    await updateCategory(id, data);
    alert("Cap nhat thanh cong");
    navigate("/category");
  };

  return (
    <div className="container mt-3">
      <h2>Cap nhat danh muc</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Title</label>
        <input {...register("title")} />
        {errors.title && (
          <span className="text-danger">{errors.title.message}</span>
        )}
        <br />
        <label>Slug</label>
        <input {...register("slug")} />
        {errors.slug && (
          <span className="text-danger">{errors.slug.message}</span>
        )}
        <br />
        <button className="btn btn-primary mt-2">Cap nhat danh muc</button>
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

export default UpdateCate;
