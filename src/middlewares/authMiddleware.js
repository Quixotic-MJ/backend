import jwt from 'jsonwebtoken';

function authMiddleware(req, res, next) {
    // 1. Check if the Authorization header exists
    const authHeader = req.headers['authorization'];
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    // 2. Extract the token (Remove "Bearer " from the string)
    const token = authHeader.split(' ')[1];

    try {
        // 3. Verify the token using your secret key
        // This ensures the token was created by your 'login' function and hasn't expired
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        // 4. Attach the user info to the request so routes can use it
        req.user = decoded;
        
        next(); // Move to the next middleware or route handler
    } catch (err) {
        return res.status(403).json({ message: 'Invalid or expired token' });
    }
}

export default authMiddleware;