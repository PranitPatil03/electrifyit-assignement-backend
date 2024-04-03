import mongoose from "mongoose";

const ReportSchema = new mongoose.Schema({
    licensePlate: {
        type: Number,
        unique: true,
    },
    make: {
        type: String,
    },
    vinModel: {
        type: String,
    },
    model: {
        type: String,
    },
    carType: {
        type: String
    },
    date: {
        type: Date,
    },
    milesDriven: {
        type: Number,
    }
}, {
    timestamps: true,
});

export const Report = mongoose.model("Report", ReportSchema);

