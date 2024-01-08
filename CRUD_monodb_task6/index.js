const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/operations")
    .then(() => console.log("Database Connected"))
    .err((err) => console.log(err));

const userSchema = mongoose.Schema({
    name: {type: String, required: [true, "Name is mandatory"]},
    age: { type: Number, required: [true, "Age is mandatory"] },
    dept: { type: String, required: [true, "Department is mandatory"] },
    clg: { type: String, required: [true, "College is mandatory"]}
}, {timestamps:true});

const userModel = mongoose.model("samp",userSchema);

let userData = [
    {
        name: "Akanshh Hoshiyar",
        age: 23,
        dept: "EIE",
        clg: "SKCET"
    },
    {
        name: "Atharva Mithran",
        age: 27,
        dept: "Ph.d",
        clg: "IIT"
    }
]

userModel.create(userData)
    .then((data) => console.log("Data Inserted"))
    .catch((err) => console.log(err))

userModel.find()
    .then((data) => console.log(data))
    .catch((err) => console.log(err))

userModel.find({clg:"IIT"})
    .then((data) => console.log(data))
    .catch((err) => console.log(err))

userModel.find({age:{$gt:20}})
    .then((data) => console.log(data))
    .catch((err) => console.log(err))

userModel.updateOne({name:"Akanshh Hoshiyar"},{$set:{name:"Akansh Hoshiyar"}})
    .then((data) => console.log(data))
    .catch((err) => console.log(err))

userModel.updateMany({clg:"SREC"},{$set:{dept:"IT"}})
    .then((data) => console.log("Data Updated"))
    .catch((err) => console.log(err))

userModel.deleteOne({clg:"SREC"})
    .then(() => console.log("Data Deleted"))
    .catch((err) => console.log(err))

