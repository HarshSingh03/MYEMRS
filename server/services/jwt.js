import jwt from 'jsonwebtoken'

export const generateToken = (userId) => {
    try {
        const token = jwt.sign({ payload: userId }, process.env.JWT_SECRET, { expiresIn: '1d' });
        return token;
    } catch (error) {
        throw new Error('JWT Token Generation Failed')
    }
}

export const verifyToken = (token) => {
        if (!token){
            throw new Error('Token not found');
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        return decoded;
    
}


