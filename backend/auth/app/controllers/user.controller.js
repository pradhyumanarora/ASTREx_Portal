const db = require("../models");
const User = db.user;

exports.create = (req, res) => {
  if (!req.body.username) {
    res.statusCode = 400;
    return res.send({ message: "Username cannot be empty!" });
  }
  if (!req.body.password) {
    res.statusCode = 400;
    return res.send({ message: "Password cannot be empty!" });
  }
  const user = new User({
    username: req.body.username,
    password: req.body.password,
  });
  User.findOne({ username: user.username }).then((data) => {
    if (!data) {
      user.save(function (err, data) {
        if (err) {
          res.statusCode = 500;
          return res.send({ message: err.message });
        }
        return res.send({ message: "Registered Successfully!" });
      });
    } else {
      res.statusCode = 203;
      res.send({
        message: "User already exists with username " + user.username,
      });
    }
  });
};

exports.findAll = (req, res) => {
  const username = req.query.username;
  var condition = username
    ? { username: { $regex: new RegExp(title), $options: "i" } }
    : {};

  User.find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving users.",
      });
    });
};

exports.findOne = (req, res) => {
  const authHeader = req.headers.authorization;
  const credentials = Buffer.from(authHeader.split(" ")[1], "base64").toString(
    "ascii"
  );
  console.log(credentials);
  const [id, pass] = credentials.split(":");

  console.log(req.headers);

  User.findOne({ username: id })
    .then((data) => {
      console.log(data);
      if (!data)
        res
          .status(404)
          .send({ message: "No User found with Registration Id " + id });
      else {
        if (data.password == pass) {
          res.statusCode = 200;
          window.localStorage.setItem("username", username);
          return res.send({
            message: "Verified",
          });
        } else {
          res.statusCode = 203;
          return res.send({ message: "Incorrect Username/Password" });
        }
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving User with id= " + id });
    });
};
