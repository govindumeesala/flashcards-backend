const express = require("express");
const {
  getAllFlashcards,
  createFlashcard,
  updateFlashcard,
  deleteFlashcard,
} = require("../controllers/FlashcardController");

const router = express.Router();

// api/flashcards
router.get("/", getAllFlashcards);
router.post("/create", createFlashcard);
router.patch("/:id", updateFlashcard);
router.delete("/:id", deleteFlashcard);

module.exports = router;
