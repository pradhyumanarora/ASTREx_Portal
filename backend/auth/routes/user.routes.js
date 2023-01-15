const user = require("../controllers/user.controller");
module.exports = app => {
    const user = require("../controllers/user.controller.js");
  
    var router = require("express").Router();

    app.use("/api/user", router);

    router.get("/", user.findAll);

    router.get("/signin", user.findOne);

    // router.post("/signout", user.signOut);
    
  };