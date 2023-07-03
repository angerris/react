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
    <div>
      <h1>log in</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">email</label>
          <input
            type="email"
            {...register("email")}
            onFocus={() => clearErrors(["email", "server"])}
          />
        </div>
        <div>
          {errors.email && <span>{(errors.email?.message, "Error!")}</span>}
        </div>

        <div>
          <label htmlFor="password">password</label>
          <input
            type="password"
            {...register("password")}
            onFocus={() => clearErrors(["password", "server"])}
          />
        </div>
        <div>
          {errors.password && (
            <span>{(errors.password.message, "Error!")}</span>
          )}
        </div>
        <button type="submit" disabled={!isValid}>
          Submit
        </button>
        {errors.server && (
          <div>
            <span>{errors.server.message}</span>
          </div>
        )}
      </form>
    </div>
  );
}
