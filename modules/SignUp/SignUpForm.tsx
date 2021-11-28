import {Button, FormControl, FormErrorMessage, FormLabel, Input} from "@chakra-ui/react";
import {Formik, Field, Form} from "formik";
import axios from "axios";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .required("Password required")
    .min(8, "Password is too short")
    .max(30, "Password is too long")
});

const SignUpForm = () => {

  // TODO: add later after design
  const handleRegister = (email: string, password: string) => {
    if (email && password) {
      axios
        .post("http://localhost:5000/api/v1/auth/signup", {
          password: email,
          email: email,
        })
        .then((res) => console.log(res.data));
    }
  };

  return (
    <Formik
      initialValues={{ name: "", email: "" }}
      validationSchema={SignupSchema}
      onSubmit={(values: any, actions: any) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          actions.setSubmitting(false)
        }, 1000)
      }}
    >
      {(props: any) => (
        <Form>
          <Field name="email">
            {({ field, form }: any) => (
              <FormControl isInvalid={form.errors.email && form.touched.email}>
                <FormLabel htmlFor="email">Your email adress</FormLabel>
                <Input {...field} id="email" placeholder="email" />
                <FormErrorMessage>{form.errors.email}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="password">
            {({ field, form }: any) => (
              <FormControl isInvalid={form.errors.password && form.touched.password}>
                <FormLabel htmlFor="password">Your password</FormLabel>
                <Input {...field} id="password" placeholder="password" />
                <FormErrorMessage>{form.errors.password}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Button
            mt={4}
            colorScheme='teal'
            isLoading={props.isSubmitting}
            type='submit'
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  )
}

export default SignUpForm;