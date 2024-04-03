const mongoose = require("mongoose");

const TableDataSchema = new mongoose.Schema({
  licensePlate: String,
  make: String,
  vin: String,
  model: String,
  carType: String,
  date: String,
  milesDriven: Number,
});

const ReportSchema = new mongoose.Schema(
  {
    reportName: String,
    tableData: [TableDataSchema],
  },
  {
    timestamps: true,
  }
);

export const Report = mongoose.model("Report", ReportSchema);
