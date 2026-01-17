const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      
    },
    author: {
      type: String,
      required: [true, "Author is required"],
      
    },
    isbn: {
      type: String,
      unique: true,
      sparse: true, // allows multiple docs with missing isbn
    },
    publishedDate: {
      type: Date,
    },
    inStock: {
      type: Boolean,
      default: true,
    },
  },
);

module.exports = mongoose.model("Book", bookSchema);
