import { Field, Form, Formik, ErrorMessage } from 'formik';
import React from 'react';
import { useId } from "react";
import { v4 as uuidv4 } from "uuid";
import * as Yup from "yup";

export default function ContactForm({ addContact }) {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const initialValues = {
    name: "",
    number: "",
  };

  const Schema = Yup.object().shape({
    name: Yup.string().min(3, "name's too short").max(50, "name's too long").required("name field is required"),
    number: Yup.string().min(7, "number's too short").max(12, "number's too long"). required("number field is required")
  });

  const handleSubmit = (values, actions) => {
    const newContact = {
      id: uuidv4(), ...values,
    };

    addContact(newContact);
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={Schema}>
      <Form>
        <label htmlFor='nameFieldId'>name</label>
        <Field type="text" name="name" id={nameFieldId}></Field>
        <label htmlFor='numberFieldId'>number</label>
        <Field type="text" name="number" id={numberFieldId}></Field>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  )
};

// ____________________________________________________________________
              // <form onSubmit={handleSubmit}>
              //   <input type="text" name="name" />
              //   <button type="submit">Add contact</button>
              // </form>