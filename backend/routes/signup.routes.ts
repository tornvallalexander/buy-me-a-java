//import * as express from "express";
import User from "../model/User";
import jwt from "jsonwebtoken";
const bcrypt = require("bcrypt");
require("dotenv").config({
  path: `../.env.development`,
});
//const router = express.Router();
//router.route("/").post

const signup = async (req: any, res: any) => {
  const { email, password, userName, userType } = req.body;

  if (!(email && password)) {
    res.status(400);
    res.send({ error: "No email or password provided" });
    return;
  }

  const newUser = new User({
    email,
    password,
    userName,
    userType,
  });

  const salt = await bcrypt.genSalt(10);
  newUser.password = await bcrypt.hash(newUser.password, salt);
  const JWT_KEY = "BUY_ME_A_JAVA_KEY";

  newUser.save().then((_) => {
    const token = jwt.sign(newUser.toJSON(), JWT_KEY);
    res.status(201);

    res.json({ token: token });
    /*catch {
      res.status(400).send("error signing up !!");
    }*/
  });
};

export default signup;
