import express from 'express';
import { createPatient, getAllPatients } from "./patientControllers.js";


const router = express.Router();

router.post('/', createPatient);// create a new patient

router.get('/', getAllPatients);// get all patients

export default router;