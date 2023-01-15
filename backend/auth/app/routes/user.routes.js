const user = require("../controllers/user.controller");
module.exports = app => {
    const user = require("../controllers/user.controller.js");
  
    var router = require("express").Router();

    app.use("/api/user", router);

    router.get("/", user.findAll);

    router.get("/signup", user.create);

    router.get("/signin", user.findOne);
    
  };