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
      INSERT INTO drivers (id, driver_name, driver_team)
      VALUES
          ('1', 'Max Verstappen', 'RED BULL RACING HONDA RBPT'),
          ('2', 'Sergio Perez', 'RED BULL RACING HONDA RBPT'),
          ('3', 'Carlos Sainz', 'FERRARI'),
          ('4', 'Charles Leclerc', 'FERRARI'),
          ('5', 'George Russell', 'MERCEDES'),
          ('6', 'Lando Norris', 'MCLAREN MERCEDES'),
          ('7', 'Lewis Hamilton', 'MERCEDES'),
          ('8', 'Oscar Piastri', 'MCLAREN MERCEDES'),
          ('9', 'Fernando Alonso', 'ASTON MARTIN ARAMCO MERCEDES'),
          ('10', 'Lance Stroll', 'ASTON MARTIN ARAMCO MERCEDES'),
          ('11', 'Zhou Guanyu', 'KICK SAUBER FERRARI'),
          ('12', 'Kevin Magnussen', 'HAAS FERRARI'),
          ('13', 'Daniel Ricciardo', 'RB HONDA RBPT'),
          ('14', 'Yuki Tsunoda', '	RB HONDA RBPT'),
          ('15', 'Alexander Albon', 'WILLIAMS MERCEDES'),
          ('16', 'Nico Hulkenberg', '	HAAS FERRARI'),
          ('17', 'Esteban Ocon', 'ALPINE RENAULT'),
          ('18', 'Pierre Gasly', 'ALPINE RENAULT'),
          ('19', 'Valtteri Bottas', 'KICK SAUBER FERRARI'),
          ('20', 'Logan Sargeant', 'WILLIAMS MERCEDES'),
`);

// Seed the results table - fill in the data
await pool.query(`
      INSERT INTO results (id, date, race_location, race_result, timing)
      VALUES
          ('1', '02.03.24', 'Bahrain', '1', '1:31:44.742'),
          ('2', '02.03.24', 'Bahrain', '2', '1:31:67.199'),
          ('3', '02'03'24', 'Bahrain', '3', '1:31:69.852'),
          ('4', '02.03.24', 'Bahrain', '4', '1:31:84.411'),
          ('5', '02.03.24', 'Bahrain')
`);
