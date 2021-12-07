//import * as express from "express";
const bcrypt = require("bcrypt");
import jwt from "jsonwebtoken";
import User from "../model/User";
//const router = express.Router();

const login = (req: any, res: any) => {
  const password = req.body.password;
  const email = req.body.email;

  User.find({ email: email }, "", (err: any, usersList: any) => {
    // res.json(usersList);
    if (usersList !== null) {
      if (bcrypt.compare(password, usersList[0].password)) {
        const token = jwt.sign(usersList[0].toJSON(), "BUY_ME_A_JAVA");
        res.status(200).json({ token: token });
      } else {
        res.status(400).json({ text: "there was an error", err: err });
      }
    }
  });
};

export default login;
