import asyncHandler from 'express-async-handler'
import { verifyAdmin } from './services.js';
import User from '../user/userModel.js'

const errMessage = 'Admin credentials are wrong.';

export const createUser = asyncHandler(async (req, res) => {
    const { username, contact, address, dob, password } = req.body;
    if (!verifyAdmin(req)) {
        throw new Error()
    }
    const user = await User.create({ username, contact, address, dob, password });
    if (!user)
        throw new Error('User creation failed');
    return res.status(200).json({ data: user });
});

export const updateUser = asyncHandler(async (req, res) => {
    const { username, contact, address, dob, password } = req.body;
    const { id } = req.params;
    if (!verifyAdmin(req)) {
        throw new Error(errMessage);
    }
    const user = await User.findByIdAndUpdate(id, { username, contact, address, dob, password }, { new: true });
    if (!user)
        throw new Error("User update Failed");
    return res.status(200).json({ data: user });
});

export const deleteUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    if (!user)
        throw new Error('User does not exist');
    return res.status(200).json({ message: 'User deleted successfully' });
});

export const getUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    if (!verifyAdmin(req)) {
        throw new Error(errMessage)
    }
    const user = await User.findById(id);
    if (!user) {
        throw new Error('User does not Exist');
    }
    return res.status(200).json({ data: user })
});

export const getAllUser = asyncHandler(async (req, res) => {
    if (!verifyAdmin(req)) {
        throw new Error(errMessage)
    }
    const user = await User.find();
    if (user.length === 0) {
        throw new Error('No users exist');
    }
    return res.status(200).json({ count: user.length, data: user })
})