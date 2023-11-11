const express=require('express');
const cors=require('cors');
require('dotenv').config();
const Route = require('./router/route');
const connect = require('./db/connect');
const passport = require('passport');
const app = express();

const passportConfig = require('./controller/passport-config')

app.use(cors());
app.get('/', (req, res)=>{
  res.send('Authentication App');
})

app.use('/api/v1/auth', Route)

// app.get('/api/v1/google', passport.authenticate('google', {scope: ['profile']}))
// app.get('/api/v1/google/callback', passport.authenticate('google',
// {failureRedirect:'/'}), (req, res)=>{
//   res.redirect('/');
// })

// app.get('/api/v1/facebook', passport.authenticate('facebook'))
// app.get('/api/v1/facebook/callback', passport.authenticate('facebook',
// {failureRedirect:'/'}), (req, res)=>{
//   res.redirect('/');
// })

// app.get('/api/v1/twitter', passport.authenticate('twitter'))
// app.get('/api/v1/twitter/callback', passport.authenticate('twitter',
// {failureRedirect:'/'}), (req, res)=>{
//   res.redirect('/');
// })





const port=3000;


start= async ()=>{
  try{
    await connect(process.env.MONGO_URI);
    app.listen(port, ()=> {
      console.log(`server is listening on port ${port}`);
    })
  }
  catch(err){
    console.log(err)
  }

}
start();
