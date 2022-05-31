const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
const booksRouter = require("./books.routes.js");
app.use("/", booksRouter);

app.use("/books", booksRouter);
app.listen(port, () => {
  console.log(`testing listen at ${port}`);
});
