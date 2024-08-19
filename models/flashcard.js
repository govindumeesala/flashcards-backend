const db = require("../db");

// Function to create the flashcards table
const createFlashcardsTable = () => {
  const createTableQuery = `
        CREATE TABLE IF NOT EXISTS flashcards (
            id INT AUTO_INCREMENT PRIMARY KEY,
            question TEXT NOT NULL,
            answer TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `;

  db.query(createTableQuery, (err, results) => {
    if (err) {
      console.error("Error creating flashcards table:", err.message);
    }
  });
};

// Call the function to create the table when the server starts
createFlashcardsTable();
