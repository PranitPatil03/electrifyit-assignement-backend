import { Report } from "../models/ReportModel";
import { Request, Response } from "express";

export const createTable = async (req: Request, res: Response) => {
  const { reportName, tableData } = req.body;

  try {
    let report = await Report.findOne({ reportName: reportName });

    if (!report) {
      const newTableData = tableData.map(
        (item: {
          LicensePlate: string;
          Make: string;
          VIN: string;
          Model: string;
          Type: string;
          Date: string;
          MilesDriven: number;
        }) => ({
          licensePlate: item.LicensePlate,
          make: item.Make,
          vin: item.VIN,
          model: item.Model,
          carType: item.Type,
          date: new Date(),
          milesDriven: item.MilesDriven,
        })
      );

      const newReport = new Report({
        reportName,
        tableData: newTableData,
      });
      await newReport.save();
      return res.status(201).json({ status: "success", data: newReport });
    } else {
      report.tableData = tableData.map(
        (item: {
          LicensePlate: string;
          Make: string;
          VIN: string;
          Model: string;
          Type: string;
          Date: string;
          MilesDriven: number;
        }) => ({
          licensePlate: item.LicensePlate,
          make: item.Make,
          vin: item.VIN,
          model: item.Model,
          carType: item.Type,
          date: new Date(),
          milesDriven: item.MilesDriven,
        })
      );
      await report.save();
      return res.status(200).json({ status: "success", data: report });
    }
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

export const fetchTableData = async (req: Request, res: Response) => {
  const { reportName } = req.body;
  try {
    const report = await Report.findOne({ reportName: reportName });

    if (!report) {
      return res.status(500).json({ error: "No such report found" });
    }

    return res.status(200).json({ status: "success", data: report.tableData });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};
