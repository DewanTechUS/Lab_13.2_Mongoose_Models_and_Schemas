const express = require("express");
require("dotenv").config();

const connectDB = require("./db/connection");
const bookRoutes = require("./routes/bookRoutes");

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true })); // to parse URL-encoded bodies
//app.use(express.urlencoded()); // deprecated

// remove the deprecated line above and use the updated one
// Explanation of express.json() and express.urlencoded()
// Express.js provides built-in middleware functions to parse incoming request bodies in different formats.
//https://stackoverflow.com/questions/23259168/what-are-express-json-and-express-urlencoded#:~:text=If%20you%20are%20using%20Express%20%3E%3D%204.16.0%2C%20body%20parser%20has%20been%20re%2Dadded%20under%20the%20methods%20express.json()%20and%20express.urlencoded().
// Now lets understand express.urlencoded with an example 
//https://www.geeksforgeeks.org/web-tech/express-js-express-urlencoded-function/#:~:text=Now%20lets%20understand%20express.urlencoded%20with%20an%20example

console.log("JSON parsing middleware set up");

app.get("/", (req, res) => {
  res.send("Lab2 Dewan Mahmud's Digital Bookshelf API is running");
});

// Routes
app.use("/api/books", bookRoutes);
console.log("Book routes set up at /api/books");

// Start server after DB connects
(async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`The Rock is cooking at http://localhost:${PORT}`);
  });
})();
