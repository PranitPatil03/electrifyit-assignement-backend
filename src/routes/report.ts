import express from "express";
import { createTable } from "../controllers/report";

export const reportRouter = express.Router();

reportRouter.post("/create-table", createTable);
