import jwt from 'jsonwebtoken'

export const generateToken = (userId) => {
    const token = jwt.sign({ payload: userId }, process.env.JWT_SECRET, { expiresIn: '1d' });
    return token;
}

export const verifyToken = (token) => {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded;
}


