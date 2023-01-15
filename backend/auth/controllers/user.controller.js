const db = require("../models");
const User = db.user;

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

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  // const id = req.body.id;
  // const pass = req.body.password;

  const authHeader = req.headers.authorization;
  const credentials = Buffer.from(authHeader.split(" ")[1], "base64").toString(
    "ascii"
  );
  console.log(credentials);
  const [id, pass] = credentials.split(":");

  console.log(req.headers);

  User.findOne({ username: id })
    .then((data) => {
      console.log(data)
      if (!data)
        res
          .status(404)
          .send({ message: "No User found with Registration Id " + id });
      else {
        if (data.password == pass) {
          res.statusCode = 200;
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
