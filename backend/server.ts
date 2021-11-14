import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json())

// for all routes that don't exist (yet)
app.use("*", (_, res) => res.status(404).json({ error: "Not found"}))

export default app