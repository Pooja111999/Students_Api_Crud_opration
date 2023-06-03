const mongooose = require('mongoose');

const studentSchema = new mongooose.Schema({
  name: {
    type: String,
    // required: true,
  },
  class: {
    type: String,
    required: true,
    unique: true,
  },
  subject:{
    type:String,
    require:true,
  }
  
},
  {
    timestamps: true,
  }

);

const Student = mongooose.model('Student', studentSchema);
module.exports = Student;