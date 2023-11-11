const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userCredential = new mongoose.Schema({
    email:{
        type: String,
        required: [true, 'Please provide an email id']
    },
    password:{
      type: String,
      required: [true, 'Please provide a password']
  }
})

userCredential.pre('save', async ()=>{
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
})

userCredential.methods.creatJWT = ()=>{
  return jwt.sign(
    {userId: this._id, email: this.email},
    process.env.JWT_SECRET,
    {expiresIn:  process.env.JWT_LIFETIME}
  )
}

userCredential.methods.passwordValidator = (password) =>{
  let isMatch = bcrypt.compare(password, this.password);
  return isMatch;
}

module.exports = mongoose.model('User', userCredential);
