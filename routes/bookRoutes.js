const router = require("express").Router();
const Book = require("../models/Book");

// CREATE: POST /
router.post("/", async (req, res) => {
  console.log("POST /api/books called");
  console.log("Request body:", req.body);

  try {
    const created = await Book.create(req.body);
    console.log("Book created:", created);

    return res.status(201).json(created);
  } catch (error) {
    console.error("Error creating book:", error.message);

    return res.status(400).json({
      message: "Failed to create book",
      error: error.message,
    });
  }
});

// READ ALL: GET /
router.get("/", async (req, res) => {
  console.log("GET /api/books called");

  try {
    const books = await Book.find({});
    console.log(`${books.length} books found`);

    return res.json(books);
  } catch (error) {
    console.error("Error fetching books:", error.message);

    return res.status(500).json({
      message: "Failed to fetch books",
    });
  }
});

// READ ONE: GET /:id
router.get("/:id", async (req, res) => {
  console.log("GET /api/books/:id called");
  console.log("Book ID:", req.params.id);

  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      console.warn("Book not found");
      return res.status(404).json({ message: "Book not found" });
    }

    console.log("Book found:", book);
    return res.json(book);
  } catch (error) {
    console.error("Invalid book ID:", error.message);

    return res.status(400).json({ message: "Invalid book ID" });
  }
});

// UPDATE: PUT /:id
router.put("/:id", async (req, res) => {
  console.log("PUT /api/books/:id called");
  console.log("Book ID:", req.params.id);
  console.log("Update data:", req.body);

  try {
    const updated = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,           // return updated doc
      runValidators: true, // enforce schema validators
    });

    if (!updated) {
      console.warn("Book not found for update");
      return res.status(404).json({ message: "Book not found" });
    }

    console.log("Book updated:", updated);
    return res.json(updated);
  } catch (error) {
    console.error("Error updating book:", error.message);

    return res.status(400).json({
      message: "Failed to update book",
      error: error.message,
    });
  }
});

// DELETE: DELETE /:id
router.delete("/:id", async (req, res) => {
  console.log("DELETE /api/books/:id called");
  console.log("Book ID:", req.params.id);

  try {
    const deleted = await Book.findByIdAndDelete(req.params.id);

    if (!deleted) {
      console.warn("Book not found for deletion");
      return res.status(404).json({ message: "Book not found" });
    }

    console.log("Book deleted:", deleted._id);
    return res.json({ message: "Book deleted successfully" });
  } catch (error) {
    console.error("Invalid book ID:", error.message);

    return res.status(400).json({ message: "Invalid book ID" });
  }
});

module.exports = router;
