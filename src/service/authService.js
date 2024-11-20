import bcrypt from "bcryptjs";
import jwtUtil from "../util/jwtUtil.js";
import userModel from "../models/userModel.js";

const registerUser = async (email, password, fullName) => {
    const hashedPassword = bcrypt.hashSync(password, 10);
    const user = await userModel.createUser(email, hashedPassword, fullName);
    return user;
};

const loginUser = async (email, password) => {
    const user = await userModel.getUserByEmail(email);
    if (!user) throw new Error("User not found");

    const isValidPassword = bcrypt.compareSync(password, user.password);
    if (!isValidPassword) throw new Error("Invalid credentials");

    const token = jwtUtil.generateToken({ userId: user.id });
    return { user, token };
};

export default { registerUser, loginUser };
