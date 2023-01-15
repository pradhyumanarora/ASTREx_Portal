const db = require("../models");
const User = db.user;


exports.create = (req, res) => {
    if (!req.body.username) {
        res.statusCode = 400;
        return res.send({message: "Username cannot be empty!"});
    }


    const user = new User({
        username: req.body.username,
        imgurl: req.body.imgurl,
        name: req.body.name,
        registration_no: req.body.registration_no,
        email: req.body.email,
        contact : req.body.contact,
        gender: req.body.gender,
        hosteller: req.body.hosteller,
        department: req.body.department,
    });

    User.findOne({username: user.username})
        .then(
            data => {
                if (!data) {
                    user
                        .save(function (err, data) {
                            if (err) {
                                res.statusCode = 500;
                                return res.send({message: err});
                            }
                            return res.send({message: "Registered Successfully!"});
                        });
                } else {
                    res.statusCode = 203;
                    res.send({message: "User already exists with username " + user.username});
                }
            }
        )
};

exports.update = (req, res) => {
    const user = new User({
        username: req.body.username,
        imgurl: req.body.imgurl,
        name: req.body.name,
        registration_no: req.body.registration_no,
        email: req.body.email,
        contact : req.body.contact,
        gender: req.body.gender,
        hosteller: req.body.hosteller,
        department: req.body.department,
    });
    User.findOneAndUpdate({username: req.body.username}, {
        $set: {
            username: req.body.username,
            imgurl : req.body.imgurl,
        name: req.body.name,
        registration_no: req.body.registration_no,
        email: req.body.email,
        contact : req.body.contact,
        gender: req.body.gender,
        hosteller: req.body.hosteller,
        department: req.body.department,
        }
    })
        .then(res.send({"message" : "Updated Successfully!"}))
        .catch((err) => {
            res.statusCode = 501;
            res.send(err.message);
        })


};

exports.findOne = (req, res) =>{
    const user = req.body.username;
    if (!req.body.username) {
        res.statusCode = 400;
        return res.send({"message": "Username cannot be empty!"});
    }
    User.findOne({username: user})
    .then((data) => {
        if(!data){
            res.statusCode = 404;
            res.send({"message":"User not found"});
        }
        else{
            res.send(data);
        }
    })

}