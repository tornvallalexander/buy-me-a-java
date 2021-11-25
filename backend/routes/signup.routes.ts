import * as express from "express";
const SignupTemplate = require("../models/signup");

const router = express.Router();

router.route("/").post((req, res) => {
  const password = req.body.password;
  const email = req.body.email;

  const userInfo = new SignupTemplate({
    email: email,
    password: password,
  });

  userInfo.save().then((data: object) => res.json(data));
});

export default router;
