const db = require("../db");

// Get all flashcards
const getAllFlashcards = (req, res) => {
  const query = "SELECT * FROM flashcards";

  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching flashcards:", err.message);
      return res.status(500).json({ error: true, message: "Server error" });
    }
    res.json(results);
  });
};

// Create a new flashcard
const createFlashcard = (req, res) => {
  const { question, answer } = req.body;

  if (!question || !answer) {
    return res.status(400).json({ error: "Question and answer are required" });
  }

  const query = "INSERT INTO flashcards (question, answer) VALUES (?, ?)";
  db.query(query, [question, answer], (err, results) => {
    if (err) {
      console.error("Error creating flashcard:", err.message);
      return res
        .status(500)
        .json({ error: true, message: "error creating a flashcard" });
    }
    res.status(201).json({
      message: "Flashcard created successfully",
      id: results.insertId,
    });
  });
};

// Update an existing flashcard
const updateFlashcard = (req, res) => {
  const { id } = req.params;
  const { question, answer } = req.body;

  const query = "UPDATE flashcards SET question = ?, answer = ? WHERE id = ?";
  db.query(query, [question, answer, id], (err, results) => {
    if (err) {
      console.error("Error updating flashcard:", err.message);
      return res
        .status(500)
        .json({ error: true, message: "error updating flashcard" });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ error: "Flashcard not found" });
    }
    res.json({ message: "Flashcard updated successfully" });
  });
};

// Delete a flashcard
const deleteFlashcard = (req, res) => {
  const { id } = req.params;

  const query = "DELETE FROM flashcards WHERE id = ?";
  db.query(query, [id], (err, results) => {
    if (err) {
      console.error("Error deleting flashcard:", err.message);
      return res
        .status(500)
        .json({ error: true, message: "error updating flashcard" });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ error: "Flashcard not found" });
    }
    res.json({ message: "Flashcard deleted successfully" });
  });
};

module.exports = {
  getAllFlashcards,
  createFlashcard,
  updateFlashcard,
  deleteFlashcard,
};
