import * as mongoose from "mongoose"

export interface IUser extends mongoose.Document {
  email: string;
  password: string;
  username?: string;
}

export const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  username: { type: String, default: ""},
})

const User = mongoose.model<IUser>("User", UserSchema)
export default User;


