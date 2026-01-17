const router = require("express").Router();
const Book = require("../models/Book");

// CREATE: POST /
router.post("/", async (req, res) => {
  try {
    const created = await Book.create(req.body);
    return res.status(201).json(created);
  } catch (error) {
    return res.status(400).json({
      message: "Failed to create book",
      error: error.message,
    });
  }
});

// READ ALL: GET /
router.get("/", async (req, res) => {
  try {
    const books = await Book.find({});
    return res.json(books);
  } catch (error) {
    return res.status(500).json({
      message: "Failed to fetch books",
    });
  }
});

// READ ONE: GET /:id
router.get("/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    return res.json(book);
  } catch (error) {
    return res.status(400).json({ message: "Invalid book ID" });
  }
});

// UPDATE: PUT /:id
router.put("/:id", async (req, res) => {
  try {
    const updated = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,         // return updated doc // not original //
        runValidators: true, // enforce schema validators //
    });

    if (!updated) {
      return res.status(404).json({ message: "Book not found" });
    }

    return res.json(updated);
  } catch (error) {
    return res.status(400).json({
      message: "Failed to update book",
      error: error.message,
    });
  }
});

// DELETE: DELETE /:id
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Book.findByIdAndDelete(req.params.id); 

    if (!deleted) {
      return res.status(404).json({ message: "Book not found" }); // 404 if no book to delete //
    }

    return res.json({ message: "Book deleted successfully" });
  } catch (error) {
    return res.status(400).json({ message: "Invalid book ID" }); // 400 if invalid ID //
  }
});

module.exports = router;
