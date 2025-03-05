import express from 'express';
import { createPatient, getAllPatients, getPatient, deletePatientById, updatePatient } from "./patientControllers.js";


const router = express.Router();

router.post('/', createPatient);// create a new patient

router.get('/', getAllPatients);// get all patients

router.get('/:id', getPatient);// get a patient by id

router.delete('/:id', deletePatientById);// delete a patient by id

router.patch('/:id',updatePatient);// update a patient by id

export default router;