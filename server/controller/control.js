const User = require('../models/user');
const {StatusCodes} = require('http-status-codes')
const Login = async (req, res)=>{
  console.log('login');
  const {email, password} = req.body;
  if(!email || !password){
    console.log('please provide email and password');
    res.status(StatusCodes.BAD_REQUEST).json({msg: "please provide email and password"})
  }
 let user = await User.findOne(req.body);
 if(!user) {
  console.log('no user exist, please register');
  res.status(StatusCodes.NOT_FOUND).json({msg: 'no user exist, please register'});
 }
 let isPasswordCorrect = user.passwordValidate(password);
 if(!isPasswordCorrect)  {
  console.log('password incorrect');
  res.status(StatusCodes.UNAUTHORIZED).json({msg: 'password incorrect'});
 }

 let token = user.creatJWT();
 res.status(StatusCodes.CREATED).json({msg: "user created successfully", token});
}

const Register = async (req, res)=>{
  console.log('register');
 let user = await User.findOne({req});
 if(user) {
  console.log('user already exist');
  res.status(StatusCodes.CONFLICT).json({msg: 'user already exist'});
 }
 let userCreated = await User.create(req.body);
 let token = userCreated.creatJWT();
 res.status(StatusCodes.CREATED).json({msg: "user created successfully", token});
}

module.exports = {
  Login,
  Register
}
