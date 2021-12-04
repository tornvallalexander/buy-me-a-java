import * as express from "express";
import User from "../model/User";
// import jwt from "jsonwebtoken";

const router = express.Router();

router.route("/").post((req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400)
    res.send({error: "No email or password provided"})
    return;
  }

  const newUser = new User({
    // _id: new mongoose.Types.ObjectId(),
    email,
    password
  })

  newUser.save().then(() => {
    console.log("New user saved")
    res.status(204)
    res.send({ email: newUser.email })
  }).catch((err) => {
    console.log("New user could not be saved")
    res.status(400)
    res.send({ error: err.message })
  })

  // res.send(jwt.decode(token));
});

export default router;
