import * as express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();
//temporary
const KEY = "BUY_ME_A_JAVA";

router.route("/").post((req, res) => {
  const { email, password, userName, userType } = req.body;

  res.json({
    token: jwt.sign(
      { username: userName, email: email, password: password, type: userType },
      KEY
    ),
  });
});

export default router;
