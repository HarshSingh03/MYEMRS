import Patients from "./patientModel.js";

export const createPatient = async (req, res) => {
    try {
        const { name, dob, contact, address, condition, treatment, status } = req.body;
        if (!name || !dob || !contact || !address || !condition || !treatment || !status) {
            return Error('Please fill all the fields');
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
    }
    catch (err) {
        console.log(err.message);
        return res.status(400).json({ message: error.message });
    }

}

export const getAllPatients = async (req, res) => {
    try {
        const patients = await Patients.find();
        return res.status(200).json({ count: patients.length, patients });// return all patients
    }
    catch (err) {
        console.log(err.message);
        return res.status(400).json({ message: error.message });
    }
}


export const getPatient = async (req, res) => {
    try {
        const { id } = req.params;
        const patient = await Patients.findById(id);
        if (!patient) {
            throw new Error('Patient not found');
        }
        return res.status(200).json(patient);
    }
    catch (err) {
        console.log(err.message)
        return res.status(400).json({ message: err.message })
    }
}

export const deletePatientById = async (req, res) => {
    try {

        const { id } = req.params;
        const patient = await Patients.findByIdAndDelete(id);
        if (!patient) {
            throw new Error('Patient not found');
        }
        return res.status(200).json({ message: 'Patient deleted successfully' });
    }
    catch (err) {
        console.log(err.message);
        return res.status(400).json({ message: err.message });
    }

}

export const updatePatient = async (req, res) => {
    try {
        const { name, dob, contact, address, condition, treatment, status } = req.body;
        const { id } = req.params;
        const currentPatientInfo = await Patients.findById(id);
        if (!currentPatientInfo) {
            throw new Error("Patient does not exist.")
        }
        const newPatient = { ...currentPatientInfo.toObject(), name, dob, contact, address, condition, treatment, status };
        const updatePatient = await Patients.findOneAndReplace({_id:id}, newPatient, { new: true });
        return res.status(200).json(updatePatient);
    } catch (err) {
        console.log(err.message);
        return res.status(400).json({ message: err.message });
    }
}