import express from "express";
import {
  createTable,
  fetchTableData,
  filterTimeFrame,
} from "../controllers/report";

export const reportRouter = express.Router();

reportRouter
  .post("/create-table", createTable)
  .post("/fetch-table-data", fetchTableData)
  .post("/filter-time", filterTimeFrame);
