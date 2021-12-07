import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Box,
} from "@chakra-ui/react";
import { Formik, Field, Form } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { useState } from "react";
import { setCookies } from "cookies-next";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8, "Password is too short")
    .max(30, "Password is too long")
    .required("Password required"),
});

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email && password) {
      axios
        .post("http://localhost:5000/api/v1/login", {
          password: email,
          email: email,
        })
        .then((res) => {
          console.log(res.data);

          setCookies("TOKEN", res.data.token);
          window.location.href = "/";
        });
    }
  };

  return (
    <Box m="1rem">
      <Box
        bgColor="white"
        maxW="60ch"
        p="1rem"
        m="1rem"
        shadow="lg"
        rounded="lg"
        mx="auto"
      >
        <Formik
          initialValues={{ name: "", email: "" }}
          validationSchema={SignupSchema}
          onSubmit={(values: any, actions: any) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }, 1000);
          }}
        >
          {(props: any) => (
            <Form>
              <Field name="email">
                {({ field, form }: any) => (
                  <FormControl
                    isInvalid={form.errors.email && form.touched.email}
                  >
                    <FormLabel htmlFor="email">Your email adress</FormLabel>
                    <Input
                      {...field}
                      id="email"
                      placeholder="someone@buymeajava.com"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      value={email}
                    />
                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="password">
                {({ field, form }: any) => (
                  <FormControl
                    isInvalid={form.errors.password && form.touched.password}
                  >
                    <FormLabel htmlFor="password">Your password</FormLabel>
                    <Input
                      {...field}
                      id="password"
                      type="password"
                      placeholder="This is a secret!"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      value={password}
                    />
                    <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Button
                mt={4}
                colorScheme="blue"
                type="submit"
                onClick={handleLogin}
              >
                Login
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default LoginForm;
