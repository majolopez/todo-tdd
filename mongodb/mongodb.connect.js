const mongoose = require("mongoose");

const uri = "mongodb+srv://maria123:maria123@contactkeeper.toohj.mongodb.net/todoTdd?retryWrites=true&w=majority";

async function connect(){
  try {
    await mongoose.connect(uri);
  } catch (error) {
    console.error(error);
    console.log(error);
  }
  
}


module.exports = { connect };