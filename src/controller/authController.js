import authService from "../service/authService.js";

const register = async (req, res) => {
    try {
        const { email, password, fullName } = req.body;
        const user = await authService.registerUser(email, password, fullName);
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const { user, token } = await authService.loginUser(email, password);
        res.json({ user, token });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export default { register, login };
