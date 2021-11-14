import express from "express";
import cors from "cors";

import restaurants from "./api/restaurants.routes"

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/restaurants", restaurants)
// for all routes that don't exist (yet)
app.use("*", (_, res) => res.status(404).json({ error: "Not found"}))

export default app;