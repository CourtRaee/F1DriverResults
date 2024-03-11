import { pool } from "../index.js";

// >>> MAKE SURE YOU UNDERSTAND THIS FILE AND WHAT IT'S DOING <<<
// >>> FEEL FREE TO CHANGE IT TO MAKE YOUR OWN RESOURCES (TABLES AND PROPERTIES) - YOU DON'T HAVE TO USE ALBUMS AND ARTISTS <<<

async function resetDatabase() {
  try {
    await pool.query(`
        DROP TABLE IF EXISTS drivers CASCADE;
        DROP TABLE IF EXISTS results CASCADE;
        `);
  } catch {}
}

// Create the drivers table

await pool.query(`
  CREATE TABLE drivers (
    id INT GENERATED ALWAYS AS IDENTIFY PRIMARY KEY,
    driver_name VARCHAR(255) NOT NULL,
    driver_team VARCHAR(255) NOT NULL
  );
`);

// Create the results table with a foreign key to the artist table

await pool.query(`
    CREATE TABLE results (
      id INT GENERATED ALWAYS AS IDENTIFY PRIMARY KEY,
      date VARCHAR(255) NOT NULL,
      race_location VARCHAR(255) NOT NULL,
      race_result VARCHAR(255) NOT NULL,
      timing VARCHAR(255) NOT NULL
    );
`);

// Seed the drivers table - fill in the data
await pool.query(`
      INSERT INTO drivers (driver_name, driver_team)
      VALUES
          ('Max Verstappen', 'RED BULL RACING HONDA RBPT'),
          ('Sergio Perez', 'RED BULL RACING HONDA RBPT'),
          ('Carlos Sainz', 'FERRARI'),
          ('Charles Leclerc', 'FERRARI'),
          ('George Russell', 'MERCEDES'),
          ('Lando Norris', 'MCLAREN MERCEDES'),
          ('Lewis Hamilton', 'MERCEDES'),
          ('Oscar Piastri', 'MCLAREN MERCEDES'),
          ('Fernando Alonso', 'ASTON MARTIN ARAMCO MERCEDES'),
          ('Lance Stroll', 'ASTON MARTIN ARAMCO MERCEDES'),
          ('Zhou Guanyu', 'KICK SAUBER FERRARI'),
          ('Kevin Magnussen', 'HAAS FERRARI'),
          ('Daniel Ricciardo', 'RB HONDA RBPT'),
          ('Yuki Tsunoda', '	RB HONDA RBPT'),
          ('Alexander Albon', 'WILLIAMS MERCEDES'),
          ('Nico Hulkenberg', '	HAAS FERRARI'),
          ('Esteban Ocon', 'ALPINE RENAULT'),
          ('Pierre Gasly', 'ALPINE RENAULT'),
          ('Valtteri Bottas', 'KICK SAUBER FERRARI'),
          ('Logan Sargeant', 'WILLIAMS MERCEDES'),
`);