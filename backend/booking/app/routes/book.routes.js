const user = require("../controllers/book.controller");
module.exports = (app) => {
  const user = require("../controllers/book.controller.js");

  var router = require("express").Router();

  app.use("/api/booking", router);

  router.get("/", (req, res) => {
    return res.status(200).send({
      message: "Welcome to Booking API",
    });
  });

  router.get("/book", user.book);

};
