import * as express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();

router.route("/").post((req, res) => {
  const { token } = req.body;

  res.send(jwt.decode(token));

  //add the user to the database
});

export default router;
