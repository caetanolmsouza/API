const router = require("express").Router();

const books = [{ ID: "fisrtBook", name: "book1", author: "author1" }];
router.get("/books", (request, response) => {
  response.json({
    books: books,
  });
});

router.post("/", (request, response) => {
  books.push(request.body);
  response.status(201).json({
    message: "anything",
    body: request.body,
  });
});

router.get("/:name", (request, response, next) => {
  const name = request.params.name;
  const book = books.find((x) => x.name === name);

  if (!book) {
    next();
    return;
  }
  response.json(book);
});

module.exports = router;
