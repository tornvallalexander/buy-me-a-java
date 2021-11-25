import * as express from "express";

const router = express.Router();

router.route("/").post((req, res) => {
  const password = req.body.password;
  const email = req.body.email;

  res.send({ password: password, email: email });
});

export default router;
