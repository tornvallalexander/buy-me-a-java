import User from "../model/User";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { JWT_KEY } from "../constants";

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

  bcrypt.genSalt(4, (err, salt) => {
    bcrypt.hash(password, salt, async (err, hash) => {
      newUser.password = await hash;

      newUser.save().then((_) => {
        const token = jwt.sign(newUser.toJSON(), JWT_KEY);
        res.status(201);

        res.json({ token: token, type: newUser.userType });
      });
    });
  });
};

export default signup;
