import express from 'express';
import { getUser } from './userControllers.js';

const router = express.Router();

router.get('/', getUser);


export default router;