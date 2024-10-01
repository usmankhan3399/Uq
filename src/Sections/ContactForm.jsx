import React from "react";
import { Formik, Form, Field } from "formik";
import { TextField, Button, Box, Typography } from "@mui/material";
import "../assets/styles/ContactForm.css";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation();
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  };

  const handleSubmit = (values) => {
    console.log("Form Values:", values);
  };

  return (
    <Box className="contact-form-section" id="contact-form">
      <div className="contact-form-container">
        <div className="form-image"></div>
        <Box className="contact-form-content">
          <Typography variant="h1" className="form-heading">
            {t("contactForm.title")}
          </Typography>
          <Typography variant="body1" className="form-subheading">
            {t("contactForm.subheading")}
          </Typography>

          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            {({ handleChange, values }) => (
              <Form className="contact-form">
                <Box className="form-row">
                  <Field
                    as={TextField}
                    label={t("contactForm.fields.firstName")}
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                    fullWidth
                    variant="outlined"
                    className="form-input"
                  />
                  <Field
                    as={TextField}
                    label={t("contactForm.fields.lastName")}
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                    fullWidth
                    variant="outlined"
                    className="form-input"
                  />
                </Box>

                <Box className="form-row">
                  <Field
                    as={TextField}
                    label={t("contactForm.fields.email")}
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    fullWidth
                    variant="outlined"
                    className="form-input"
                  />
                  <Field
                    as={TextField}
                    label={t("contactForm.fields.subject")}
                    name="subject"
                    value={values.subject}
                    onChange={handleChange}
                    fullWidth
                    variant="outlined"
                    className="form-input"
                  />
                </Box>

                <Box className="form-row">
                  <Field
                    as={TextField}
                    label={t("contactForm.fields.message")}
                    name="message"
                    value={values.message}
                    onChange={handleChange}
                    multiline
                    rows={4}
                    fullWidth
                    variant="outlined"
                    className="form-textarea"
                  />
                </Box>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  className="submit-btn">
                  {t("contactForm.buttonText")}
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </div>
    </Box>
  );
};

export default ContactForm;
