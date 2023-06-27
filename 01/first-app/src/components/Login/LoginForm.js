import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const ErrorMessages = Yup.object().shape({
  login: Yup.string()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
});

export const LoginForm = (props) => (
  <div>
    <h1>login</h1>
    <Formik
      initialValues={{
        login: "",
        password: "",
      }}
      validationSchema={ErrorMessages}
      onSubmit={props.onSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <div>
            <Field name="login" type="text" placeholder="login" />
            {touched.login && errors.login && <div>{errors.login}</div>}
          </div>
          <div>
            <Field name="password" type="password" placeholder="password" />
            {touched.password && errors.password && (
              <div>{errors.password}</div>
            )}
          </div>
          <div>
            <Field name="rememberMe" type="checkbox" />
            remember me
          </div>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);
export default LoginForm;
