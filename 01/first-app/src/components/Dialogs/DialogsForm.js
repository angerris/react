import React from "react";
import { Formik, Form, Field } from "formik";

export default function DialogsForm(props) {
  return (
    <Formik
      initialValues={{
        message: "",
      }}
      onSubmit={() => {
        props.sendMessage();
      }}
    >
      <Form>
        <Field
          value={props.newMessageText}
          component="textarea"
          name="message"
          type="text"
          onChange={props.onMessageChange}
          placeholder="enter your message..."
        />
        <button type="submit">send!</button>
      </Form>
    </Formik>
  );
}
