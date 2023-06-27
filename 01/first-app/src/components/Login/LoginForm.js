import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Field should contain a valid e-mail")
      .max(255)
      .required("e-mail is required"),
    password: yup.string().min(6).max(20).required("password is required"),
  })
  .required();

export default function LoginForm(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => props.onSubmit(data);
  return (
    <div>
      <h1>log in</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">email</label>
          <input type="email" {...register("email")} />
          <p>{errors.email?.message}</p>
        </div>

        <div>
          <label htmlFor="password">password</label>
          <input type="password" {...register("password")} />
          <p>{errors.password?.message}</p>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
