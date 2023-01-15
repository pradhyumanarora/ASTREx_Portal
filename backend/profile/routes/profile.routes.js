const user = require("../controllers/profile.controller");
module.exports = (app) => {
  const user = require("../controllers/profile.controller.js");

  var router = require("express").Router();

  app.use("/api/profile", router);

  router.get("/", (req, res) => {
    return res.status(200).send({
      message: "Welcome to Profile API",
    });
  });

  router.get("/create", user.create);

  router.get("/update", user.update);

  // router.get("/", user.findAll);

  // router.get("/signin", user.findOne);

  // router.post("/signout", user.signOut);
};
