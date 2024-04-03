import "dotenv/config";
import express, { Express } from "express";
import cors from "cors";
import { connectToMongoDB } from "./common/db";
import { reportRouter } from "./routes/report";

const PORT = process.env.PORT || 4000;
connectToMongoDB();

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/report", reportRouter);

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
