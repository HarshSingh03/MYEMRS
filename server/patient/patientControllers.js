import Patients from "./patientModel.js";

export const createPatient = async (req, res) => {
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

    try {
        await newPatient.save();
        res.status(201).json(newPatient);
    }
    catch (error) {
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
    }
}