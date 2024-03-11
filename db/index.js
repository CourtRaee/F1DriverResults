// Import the pg (node-postgres) library
import pg from "pg";

// Retrieve the database connection string from environment variables
const connectionString = process.env.DB_CONNECTION_STRING;

// Check if the connection string is not defined, and if so, throw an error
if (!connectionString) {
  throw new Error(
    "No DB_CONNECTION_STRING defined. Did you load in your env variables?"
  );
}

// Export a new instance of pg.Pool, which will be used to interact with the PostgreSQL database
export const pool = new pg.Pool({
  // Pass the connection string to the pool, so it knows how to connect to your database
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Important for some cloud databases, use with caution
  },
});

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Run PostgreSQL
const { Client } = require("pg");

const client = new Client({
  user: "your_username",
  host: "localhost",
  database: "your_database",
  password: "your_password",
  port: 5432,
});

client
  .connect()
  .then(() => console.log("Connected to the database"))
  .catch((err) => console.error("Error connecting to the database", err))
  .finally(() => client.end());
