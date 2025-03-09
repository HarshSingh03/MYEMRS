import { verifyToken } from "./jwt.js";
import User from "../user/userModel.js";

export const authMiddleware = async (req, res, next) => {
    const token = req.cookies.jwt;
    const userId = verifyToken(token)?.payload;
    if (userId) {
        const user = await User.findById(userId);
        console.log(user)
        if (!user) {
            throw new Error('User no longer exists');
        }
        else {
            req.user = user;
            next();
        }
    }
    else {
        throw new Error('Invalid token');
    }
    // next();
}

