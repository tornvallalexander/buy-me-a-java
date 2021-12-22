import jwt from "jsonwebtoken";
import User from "../model/User";
import bcrypt from "bcrypt";
import { JWT_KEY } from "../constants";

const login = (req: any, res: any) => {
  const { email, password } = req.body;

  User.find({ email: email }, "", (err: any, usersList: any) => {
    if (usersList.length) {
      const token = jwt.sign(usersList[0].toJSON(), JWT_KEY);

      bcrypt.compare(password, usersList[0].password, (err, result) => {
        if (result) {
          res.json({
            token: token,
            type: usersList[0].userType,
            name: usersList[0].userName,
          });
        } else {
          res.json({
            error: "Incorrect password, try again ",
          });
        }
      });
    } else {
      res.json({
        error: "Email not registered yet",
      });
    }
  });
};

export default login;
