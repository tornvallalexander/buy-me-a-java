import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { Formik, Field, Form } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { useState } from "react";
import Spacer from "../../components/Spacer";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .required("Password required")
    .min(8, "Password is too short")
    .max(30, "Password is too long"),
});

const SignUpForm = () => {
  const [userType, setUserType] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const SignUser = (token: string) => {
    axios
      .post(`http://localhost:5000/api/v1/auth/add`, {
        token: token,
      })
      .then((res) => {
        console.log(res.data);
      });
  };

  const handleRegister = () => {
    if (email && password && userType && userName) {
      axios
        .post("http://localhost:5000/api/v1/user", {
          password: password,
          email: email,
          userName: userName,
          userType: userType,
        })
        .then((res) => {
          console.log(res.data);

          // SignUser(res.data.token);
        })
        .catch((err) => {
          console.log(err)
        })

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
              <Spacer height={1} />

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
              <Spacer height={2} />

              <Field name="username">
                {({ field, form }: any) => (
                  <FormControl
                    isInvalid={form.errors.username && form.touched.username}
                  >
                    <FormLabel htmlFor="username">Your user name</FormLabel>
                    <Input
                      {...field}
                      id="username"
                      placeholder="username"
                      onChange={(e) => {
                        setUserName(e.target.value);
                      }}
                      value={userName}
                    />
                    {/*<FormErrorMessage>{form.errors.username}</FormErrorMessage>*/}
                  </FormControl>
                )}
              </Field>
              <Spacer height={2} />

              <Menu>
                <MenuButton as={Button}>
                  {userType ? userType : "Signup for ..."}
                </MenuButton>
                <MenuList>
                  <MenuItem
                    onClick={() => {
                      setUserType("creator");
                    }}
                  >
                    Creator
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      setUserType("supporter");
                    }}
                  >
                    Supporter
                  </MenuItem>
                </MenuList>
              </Menu>
              <Spacer height={2.5} />

              <Button
                mt={4}
                colorScheme="blue"
                isLoading={props.isSubmitting}
                type="submit"
                onClick={handleRegister}
              >
                Register
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default SignUpForm;
