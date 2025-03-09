import asyncHandler from 'express-async-handler';
import User from './userModel.js';
import { generateToken } from '../services/jwt.js';

export const login = asyncHandler(async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        throw new Error(`Invalid User Credentials`);
    }
    const validUser = await User.findOne({ username: username });
    if (!validUser) {
        throw new Error(`Invalid User Credentials ${username} is not a user.`)
    }
    const passMatch = validUser.matchPassword(password);
    if (!passMatch) {
        throw new Error(`Invalid Password`);
    }

    const token = generateToken(validUser._id);
    res.cookie('jwt', token, { maxAge: 24 * 60 * 60 * 1000, httpOnly: true });
    return res.status(200).json({ message: "Logged In Successfully", token })

})

export const logout = asyncHandler(async (req, res) => {
    res.clearCookie('jwt');
    return res.status(200).json({ message: "Logged Out Successfully" });
})