import app from "./server";
import * as mongodb from "mongodb";
import * as dotenv from "dotenv";

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

const port = process.env.PORT || "8000"

const MongoClient = mongodb.MongoClient;

if (!process.env.RESTREVIEWS_DB_URI) {
  console.log("Fatal: RESTREVIEWS_DB_URI not defined");
  process.exit(1);
}

MongoClient.connect(process.env.RESTREVIEWS_DB_URI, {
  maxPoolSize: 50,
  writeConcern: {
    wtimeout: 2500,
  },
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as mongodb.ConnectOptions)

  .then(async (_) => {
    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  })

  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
