import mongoose from "mongoose";

const patientSchema = mongoose.Schema({
    name: String,
    dob: Date,
    doa: { type: Date, default: Date.now },
    contact: String,
    address: String,
    condition: String,
    treatment: String,
    status: String,

}, { timestamps: true });

export default mongoose.model('Patient', patientSchema);