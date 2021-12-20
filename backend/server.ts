import express from "express";
import cors from "cors";

import connect from "./routes/connect.routes";
import signup from "./routes/signup.routes";
import login from "./routes/login.routes";
import getCreatorUsers from "./routes/getCreatorUsers.routes";
import getUser from "./routes/getUser.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/v1/connect", connect);
app.post("/api/v1/signup", signup);
app.post("/api/v1/login", login);
app.get("/api/v1/getCreators", getCreatorUsers);
app.post("/api/v1/getUser", getUser);

// for all routes that don't exist (yet)
app.use("*", (_, res) => res.status(404).json({ error: "Not found" }));

export default app;
