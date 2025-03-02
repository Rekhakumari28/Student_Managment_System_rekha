const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email:String,
  phone:String,
  subject: String,
  gender: String,
  experience: Number, 
});

const Teacher = mongoose.model("Teacher", teacherSchema);


module.exports = {Teacher} 