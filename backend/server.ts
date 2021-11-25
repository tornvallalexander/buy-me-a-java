import express from "express";
import cors from "cors";

import hello from "./routes/hello.routes";
import login from "./routes/login.routes";
import signup from "./routes/login.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/auth/login", login);
app.use("/api/v1/auth/signup", signup);
app.use("/api/v1/greeting/hello", hello);

// for all routes that don't exist (yet)
app.use("*", (_, res) => res.status(404).json({ error: "Not found" }));

export default app;
