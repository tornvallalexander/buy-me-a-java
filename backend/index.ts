import app from "./server";
import * as mongodb from "mongodb";
import * as dotenv from "dotenv";

//temporary variables for server until err fixed
const RESTREVIEWS_DB_URI = `mongodb+srv://tornvallalexander:HyF8U3sLABb$Ux!@cluster1.662tl.mongodb.net/sample_restaurants?retryWrites=true&w=majority`;
const PORT = 5000;

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});
console.log(PORT);
const MongoClient = mongodb.MongoClient;

/*if (!process.env.RESTREVIEWS_DB_URI) {
  console.log("Fatal: RESTREVIEWS_DB_URI not defined");
  process.exit(1);
}*/

MongoClient.connect(RESTREVIEWS_DB_URI, {
  maxPoolSize: 50,
  writeConcern: {
    wtimeout: 2500,
  },
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as mongodb.ConnectOptions)

  .then(async (_) => {
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  })

  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
