import app from "./server";
import * as dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config({
  path: `./.env.development`,
});

const port = process.env.PORT || "8000";

if (!process.env.USER_DB_URI) {
  console.log("Fatal: USER_DB_URI not defined");
  process.exit(1);
}

mongoose
  .connect(process.env.USER_DB_URI)
  .then(async (_) => {
    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
