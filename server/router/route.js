const router = require('express').Router();
const {Login, Register}= require('../controller/control')

router.route('/login').post(Login);
router.route('/register').post(Register);

module.exports=router;
