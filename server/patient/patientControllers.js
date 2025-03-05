import Patients from "./patientModel.js";
import asyncHandler from 'express-async-handler';

export const createPatient = asyncHandler(async (req, res) => {

    const { name, dob, contact, address, condition, treatment, status } = req.body;
    if (!name || !dob || !contact || !address || !condition || !treatment || !status) {
        throw new Error('Please fill all the fields');
    }
    const newPatient = await Patients.create({
        name,
        dob,
        contact,
        address,
        condition,
        treatment,
        status
    });

    return res.status(201).json(newPatient);


})

export const getAllPatients = asyncHandler(async (req, res) => {

    // ---> implementing pagination for future purposes
    // const {page, limit} = req.query;
    // const skip = (page-1) * limit;
    // const patients = await Patients.find().skip(skip).limit(limit);



    const patients = await Patients.find();
    return res.status(200).json({ count: patients.length, patients });// return all patients

})


export const getPatient = asyncHandler(async (req, res) => {

    const { id } = req.params;
    const patient = await Patients.findById(id);
    if (!patient) {
        throw new Error('Patient not found');
    }
    return res.status(200).json(patient);

})

export const deletePatientById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const patient = await Patients.findByIdAndDelete(id);
    if (!patient) {
        throw new Error('Patient not found');
    }
    return res.status(200).json({ message: 'Patient deleted successfully' });


})

export const updatePatient = asyncHandler(async (req, res) => {
    const { name, dob, contact, address, condition, treatment, status } = req.body;
    const { id } = req.params;
    const currentPatientInfo = await Patients.findById(id);
    if (!currentPatientInfo) {
        throw new Error("Patient does not exist.")
    }
    const newPatient = { ...currentPatientInfo.toObject(), name, dob, contact, address, condition, treatment, status };
    const updatePatient = await Patients.findOneAndReplace({ _id: id }, newPatient, { new: true });
    return res.status(200).json(updatePatient);
})