import express from "express";
import { createTable, fetchTableData } from "../controllers/report";

export const reportRouter = express.Router();

reportRouter
  .post("/create-table", createTable)
  .post("/fetch-table-data", fetchTableData);
