import * as express from "express";
import User from "../model/User";
const bcrypt = require("bcrypt")

// import jwt from "jsonwebtoken";

const router = express.Router();

router.route("/").post(async (req, res) => {
  const { email, password, username } = req.body;

  if (!(email && password)) {
    res.status(400)
    res.send({error: "No email or password provided"})
    return;
  }

  const newUser = new User({
    email,
    password,
    username
  })

  const salt = await bcrypt.genSalt(10);
  newUser.password = await bcrypt.hash(newUser.password, salt)
  console.log(newUser)

  newUser.save().then((doc) => {
    console.log("New user saved")
    res.status(201)
    res.send({ ...doc })
  }).catch((err) => {
    console.log(err.message)
    res.status(400)
    res.send(err.message)
  })

  // res.send(jwt.decode(token));
});

export default router;
