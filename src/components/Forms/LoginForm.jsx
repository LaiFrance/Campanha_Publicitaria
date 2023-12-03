import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Button, TextField } from "@mui/material";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

function LoginForm() {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={LoginSchema}
      onSubmit={(values) => {
        console.log(values);
        // Send data to the API
      }}
    >
      {({ errors, touched }) => (
        <>
          <Form
            style={{
              display: "flex",
              color: "white",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%",
              padding: "20px",
              alignSelf: "center",
              backgroundImage:
                "url(https://bitbucket.org/ateliedepropaganda/atelie-frontend-teste/raw/c0262b0b69248c521eb2de860705e71e50962035/-%20ASSETS/background-marrom.png)",
              backgroundSize: "cover",
            }}
          >
            <Field
              style={{ width: "50%" }}
              variant="standard"
              name="email"
              as={TextField}
              label="Email"
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
              fullWidth
              margin="normal"
            />
            <Field
              style={{ width: "50%" }}
              variant="standard"
              name="password"
              as={TextField}
              label="Password"
              type="password"
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
              fullWidth
              margin="normal"
            />
            <br />
            <Button type="submit" variant="contained" color="primary">
              Login
            </Button>
          </Form>
        </>
      )}
    </Formik>
  );
}

export default LoginForm;
