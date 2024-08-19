const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const flashcardRoute = require("./routes/FlashcardsRoute");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use("/api/flashcards", flashcardRoute);

app.get("/health", (req, res) => {
  res.send("Health ok!");
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));
