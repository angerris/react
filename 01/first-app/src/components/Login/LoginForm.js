import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    login: yup.string().min(6).max(20),
    password: yup.string().min(6).max(20),
  })
  .required();

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <h1>log in</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="login">login</label>
          <input {...register("login")} />
          <p>{errors.login?.message}</p>
        </div>

        <div>
          <label htmlFor="password">password</label>
          <input {...register("password")} />
          <p>{errors.password?.message}</p>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
