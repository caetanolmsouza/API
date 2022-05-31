const express = require("express");
const app = express();
const port = 3000;

const books = [{ name: "book1", author: "author1" }];
app.get("/books", (request, response) => {
  response.json({ message: "onde test" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
