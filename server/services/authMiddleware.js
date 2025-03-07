import { verifyToken } from "./jwt";
import User from "../user/userModel";

export const authMiddleware = (req, res, next) => {
    const token = req.cookies.jwt;
    const userId = verifyToken(token.payload);
    if (isValid) {
        const user = User.findById(userId);
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
    next();
}

