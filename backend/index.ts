import app from "./server";
import * as mongodb from "mongodb";
import * as dotenv from "dotenv";

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`
})

const MongoClient = mongodb.MongoClient;

const port = process.env.PORT || 8000

if (process.env.RESTREVIEWS_DB_URI) {
  MongoClient.connect(
    process.env.RESTREVIEWS_DB_URI,
    {
      maxPoolSize: 50,
      writeConcern: {
        wtimeout: 2500,
      },
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as mongodb.ConnectOptions
  )

    .then(async(_) => {
      app.listen(port, () => {
        console.log(`Listening on port ${port}`)
      })
    })

    .catch((err) => {
    console.log(err)
    process.exit(1)
  })

} else {
  console.error("Fatal: could not find .env variable... exiting")
  process.exit(1)
}
