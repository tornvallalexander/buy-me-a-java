import express from "express";
import cors from "cors";

import signup from "./routes/login.routes";
import connect from "./routes/connect.routes"
import addUser from "./routes/addUser.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/auth/signup", signup);
app.use("/api/v1/connect", connect)
app.use("/api/v1/auth/add", addUser);

// for all routes that don't exist (yet)
app.use("*", (_, res) => res.status(404).json({ error: "Not found" }));

export default app;
