import express from 'express';
import { createPatient, getAllPatients, getPatient } from "./patientControllers.js";


const router = express.Router();

router.post('/', createPatient);// create a new patient

router.get('/', getAllPatients);// get all patients

router.get('/:id', getPatient);// get a patient by id

export default router;