import React from 'react';
import { v4 as uuidv4 } from "uuid";
import { Formik } from 'formik';

export default function Test(props) {
return (
    <div>
                <p>test2</p>
      <Formik initialValues={{}} onSubmit={() => { }}>
        <Form>
          <button type="submit">Wyślij</button>
              </Form>


      </Formik>
    </div>
)
}