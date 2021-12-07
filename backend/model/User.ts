import * as mongoose from "mongoose";

export interface IUser extends mongoose.Document {
  email: string;
  password: string;
  userName: string;
  userType: string;
}

const validateEmail = (email: string): boolean => {
  const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailReg.test(email);
};

export const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    min: 4,
    max: 200,
    unique: true,
    validate: [validateEmail, "Fill out a valid email address"],
  },
  password: { type: String, min: 4, max: 200, required: true },
  userName: { type: String, required: true },
  userType: { type: String, required: true },
});

const User = mongoose.model<IUser>("User", UserSchema);
export default User;
