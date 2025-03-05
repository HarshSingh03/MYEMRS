import Patients from "./patientModel.js";

export const createPatient = async (req, res) => {
    try {
        const { name, dob, contact, address, condition, treatment, status } = req.body;
        if (!name || !dob || !contact || !address || !condition || !treatment || !status) {
            return Error('Please fill all the fields');
        }
        const newPatient = new Patients({
            name,
            dob,
            contact,
            address,
            condition,
            treatment,
            status
        });


        await newPatient.save();
        res.status(201).json(newPatient);
    }
    catch (error) {
        console.log(err.message);
        res.status(400).json({ message: error.message });
    }

}

export const getAllPatients = async (req, res) => {
    try {
        const patients = await Patients.find();
        res.status(200).json(patients);// return all patients
    }
    catch (err) {
        console.log(err.message);
        res.status(400).json({ message: error.message });
    }
}


export const getPatient = async (req, res) => {
    try {
        const { id } = req.params;
        const patient = await Patients.findById(id);
        if (!patient) {
            throw new Error('Patient not found');
        }
        res.status(200).json(patient);
    }
    catch (err) {
        console.log(err.message)
        res.status(400).json({ message: err.message })
    }
}