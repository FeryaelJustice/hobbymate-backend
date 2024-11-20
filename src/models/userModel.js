import pool from "../database/db.js";

const createUser = async (email, hashedPassword, fullName) => {
    const query = `
    INSERT INTO users (email, password, full_name) 
    VALUES ($1, $2, $3) RETURNING id, email
  `;
    const values = [email, hashedPassword, fullName];
    const result = await pool.query(query, values);
    return result.rows[0];
};

const getUserByEmail = async (email) => {
    const query = "SELECT * FROM users WHERE email = $1";
    const result = await pool.query(query, [email]);
    return result.rows[0];
};

export default { createUser, getUserByEmail };
