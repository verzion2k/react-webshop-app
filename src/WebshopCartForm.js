import React, { Component } from "react";
import "./WebshopCartForm.scss";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Formik, Form as FormikForm, Field } from "formik";
import * as Yup from "yup";
import WebshopCartFormSuccess from "./WebshopCartFormSuccess";

const OrderSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  address: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  city: Yup.string()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  zip: Yup.number().required("Required"),
  payment: Yup.boolean().required("Required")
});

const customInputForm = ({ field, form: { touched, errors }, ...props }) => (
  <div>
    <Form.Control
      invalid={!!(touched[field.name] && errors[field.name])}
      {...field}
      {...props}
    />
    {touched[field.name] && errors[field.name] && (
      <Form.Control.Feedback>{errors[field.name]}</Form.Control.Feedback>
    )}
  </div>
);

const customRadioForm = ({ field, form: { touched, errors }, ...props }) => (
  <div>
    <Form.Check
      label="Card"
      invalid={!!(touched[field.name] && errors[field.name])}
      {...field}
      {...props}
    />
    <Form.Check
      label="Cash"
      invalid={!!(touched[field.name] && errors[field.name])}
      {...field}
      {...props}
    />
    {touched[field.name] && errors[field.name] && (
      <Form.Control.Feedback>{errors[field.name]}</Form.Control.Feedback>
    )}
  </div>
);

class WebshopCartForm extends Component {
  render() {
    return (
      <Formik
        initialValues={{
          name: "",
          email: "",
          address: "",
          city: "",
          zip: "",
          payment: ""
        }}
        validationSchema={OrderSchema}
      >
        {({ errors, touched }) => (
          <FormikForm>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Field
                name="name"
                component={customInputForm}
                placeholder="Enter your name"
              />
              {errors.name && touched.name ? <div>{errors.name}</div> : null}
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Field
                name="email"
                type="email"
                component={customInputForm}
                placeholder="Enter your email address"
              />
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
            </Form.Group>

            <Form.Group>
              <Form.Label>Address</Form.Label>
              <Field
                name="address"
                component={customInputForm}
                placeholder="Enter your address"
              />
              {errors.address && touched.address ? (
                <div>{errors.address}</div>
              ) : null}
            </Form.Group>

            <Form.Group>
              <Form.Label>City</Form.Label>
              <Field name="city" component={customInputForm} />
              {errors.city && touched.city ? <div>{errors.city}</div> : null}
            </Form.Group>

            <Form.Group>
              <Form.Label>Zip</Form.Label>
              <Field name="zip" component={customInputForm} />
              {errors.zip && touched.zip ? <div>{errors.zip}</div> : null}
            </Form.Group>

            {/* <Form.Group>
              <Form.Label>Payment</Form.Label>
              <Field name="payment" type="radio" component={customRadioForm} />
              {errors.payment && touched.payment ? (
                <div>{errors.payment}</div>
              ) : null}
            </Form.Group> */}

            <Button type="submit">Submit</Button>
          </FormikForm>
        )}
      </Formik>
    );
  }
}

export default WebshopCartForm;
