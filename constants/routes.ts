import { getCookie } from "cookies-next";
import jwt from "jsonwebtoken";

const userToken = getCookie("TOKEN");
let userID: any;
let USER = "/";

if (userToken) {
  console.log(jwt.decode(userToken.toString()));
  userID = jwt.decode(userToken.toString());

  USER = `/${userID.userType}/${userID.userName}`;
}

export const HOME = userToken ? USER : "/";

//auth
export const LOGIN = userToken ? USER : "/login";
export const REGISTER = userToken ? USER : "/register";

//creator screens
export const CREATOR = USER;
export const CREATOR_SUPPORTERS = "/creator/creator-supporters";

//supporter screens
export const DONATOR = USER;
export const DONATOR_CREATORS = "/donator/donator-creators";
