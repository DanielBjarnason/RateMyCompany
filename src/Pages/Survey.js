import React from 'react';
import { Formik, Field, Form } from 'formik';

function Survey() {
  return (
    <div>
      <h1>Undersøgelsen</h1>
      <p>
        Dine svar bliver behandlet fortroligt og anonymt. Dine svar vil ikke
        kunne genkendes, når undersøgelsens resultater præsenteres på
        virksomhedsprofilen. Dine svar, vil blive en del af en samlet evaluering
        for virksomhedens resultat.
      </p>
      <Formik
        initialValues={{ køn: '' }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ values }) => (
          <Form>
            <div>Hvilket køn identificerer du dig selv som?</div>
            <label>
              <Field type="radio" name="køn" value="Mand" />
              Mand
            </label>
            <label>
              <Field type="radio" name="køn" value="Kvinde" />
              Kvinde
            </label>
            <label>
              <Field
                type="radio"
                name="køn"
                value="Andet"
                className="text-pink-500 rounded"
              />
              Andet
            </label>
            <div>Picked: {values.køn}</div>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Survey;
