import express from 'express'
import { createUser, deleteUser, getAllUser, getUser, updateUser } from './adminControllers.js';

const router = express.Router();


router.route('/').get(getAllUser).post(createUser);

router.route('/:id').get(getUser).delete(deleteUser).put(updateUser);



export default router;