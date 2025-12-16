import pkg from "pg";
const { Pool } = pkg;

// Create pool lazily to ensure env vars are loaded

const pool = new Pool({
    user: "postgres",
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: String(process.env.DB_PASSWORD),
    port: process.env.DB_PORT,
})

pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error('Database connection error:', err);
    } else {
        console.log('✅ Database connected successfully:', res.rows[0]);
    }
});


export default pool