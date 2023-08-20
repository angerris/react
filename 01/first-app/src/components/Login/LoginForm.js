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

export default function LoginForm({ loginThunk }) {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    clearErrors,
    setError,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    loginThunk(data.email, data.password, setError);
    reset(
      {
        email: "",
        password: "",
      },
      { keepErrors: true }
    );
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="loginFormContainer">
      <h2>Log in</h2>
      <input
        className="loginInput"
        placeholder="Email"
        type="email"
        {...register("email")}
        onFocus={() => clearErrors(["email", "server"])}
      />
      {errors.email && <span>{(errors.email?.message, "Error!")}</span>}
      <input
        className="loginInput"
        placeholder="Password"
        type="password"
        {...register("password")}
        onFocus={() => clearErrors(["password", "server"])}
      />
      {errors.password && <span>{(errors.password.message, "Error!")}</span>}
      <button className="btn btn-primary" type="submit" disabled={!isValid}>
        Log in
      </button>
      {errors.server && (
        <div>
          <span>{errors.server.message}</span>
        </div>
      )}
    </form>
  );
}
