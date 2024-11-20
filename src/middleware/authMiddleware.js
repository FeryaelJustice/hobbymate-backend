import jwtUtil from "../util/jwtUtil.js";

const authenticate = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ error: "Unauthorized" });

    try {
        const decoded = jwtUtil.verifyToken(token);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(403).json({ error: "Invalid token" });
    }
};

export default authenticate;
