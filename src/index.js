import "dotenv/config";
import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import mainRoutes from "./routes/mainRoutes.js";
import pool from "./config/db.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {res.sendStatus(200);});
app.use("/auth", authRoutes);
app.use("/main", mainRoutes);

// BDD
pool.query("SELECT NOW()", (err, res) => {
    if (err) {
        console.log(err);
    } else {
        console.log("PostgreSQL connected:", res.rows[0].now);
    }
});

// Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
