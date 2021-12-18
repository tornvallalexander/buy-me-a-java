import crypto from "crypto";

export const IV = crypto.randomBytes(16);
export const KEY = crypto.randomBytes(32);
export const JWT_KEY = "BUY_ME_A_JAVA_KEY";
