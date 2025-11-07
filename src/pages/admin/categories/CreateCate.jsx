import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { createCategory } from "../../../api/apiCategory";

const schema = z.object({
  title: z.string().min(3, "Title phải ít nhất 3 ký tự"),
  slug: z.string().regex(/^\S+$/, "Slug không được chứa khoảng trắng"),
});

const CreateCate = () => {
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
  const onSubmit = async (data) => {
    await createCategory(data);
    alert("Them thanh cong");
    navigate("/category");
  };

  return (
    <div className="mb-3">
      <h2>Them danh muc</h2>
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
        <button className="btn btn-primary mt-2">Them danh muc</button>
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

export default CreateCate;
