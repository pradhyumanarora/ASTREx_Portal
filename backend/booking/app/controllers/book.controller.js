const db = require("../models");
const Book = db.book;

exports.book = (req, res) => {
  if (!req.body.username) {
    res.statusCode = 400;
    return res.send({ message: "Username cannot be empty!" });
  }
  console.log(req.body.fromTime)
  a = req.body.date_requested.split("-")
  a= parseInt(a)
  console.log(a[0],a[1],a[2])
  v = req.body.fromTime;
  v.split(":")
  k = Date.UTC(a[0],a[1],a[2],v[0],v[1],v[2])
  // v = req.body.date_requested+"T"+v+"Z";
  console.log(k);
  // v = toUTCString(v); 
  const book = new Book({
    username: req.body.username,
    name: req.body.name,
    registration_no: req.body.registration_no,
    email: req.body.email,
    contact: req.body.contact,
    gender: req.body.gender,
    hosteller: req.body.hosteller,
    department: req.body.department,
    date_requested: req.body.date_requested,
    fromTime: v,
    toTime: req.body.toTime,
    purpose: req.body.purpose,
  });

  book.save(function (err, data) {
    // console.log(data.date_requested)
    if (err) {
      res.statusCode = 500;
      return res.send({ message: err,tip:"close" });
    }
    return res.send({ message: "Booked Successfully!",
                // d : toString(data.date_requested)+" "+toString(data.fromTime)+" "+toString(data.toTime),
                z : v,
               });
  });
};
