import React from "react";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { loginPage } from "../../api/apiAuth";
const schemas = z.object({
  email: z.string().email(),
  password: z.string().min(6, "Password phai co it nhat 6 ky tu"),
});

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schemas) });
  const navigate = useNavigate();
  const onSubmit = async (values) => {
    try {
      const res = await loginPage(values);
      console.log("Response login:", res);
      localStorage.setItem("user", JSON.stringify(res.user));
      localStorage.setItem("accessToken", JSON.stringify(res.accessToken));
      alert("Dang nhap thanh cong");
      navigate("/product");
    } catch (error) {
      alert("Dang nhap that bai");
      reset();
    }
  };
  return (
    <div style={{ margin: "20px" }}>
      <form className="mb-3" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="">Email</label>
        <input type="email" {...register("email")} />
        {errors.email && (
          <span className="text-danger">{errors.email.message}</span>
        )}{" "}
        <br />
        <label htmlFor="">Password</label>
        <input type="password" {...register("password")} />
        {errors.password && (
          <span className="text-danger">{errors.password.message}</span>
        )}{" "}
        <br />
        <button className="wd-100 btn btn-primary">Dang nhap</button>
      </form>
    </div>
  );
};

export default LoginPage;
