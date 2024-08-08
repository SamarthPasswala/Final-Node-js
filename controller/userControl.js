const userDB = require("../models/User");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const signup = async (req, res) => {
    const { username, email, password } = req.body;
    const newPassword = await bcrypt.hash(password , 10)
    try {
        await userDB.create({ username, email, password:newPassword });
        res.redirect('/login');
    } catch (error) {
        console.log(error);
        return false;
    }
};

const signupPage = (req, res) => {
    return res.render('signup');
};

const loginPage = (req, res) => {
    return res.render('login');
};

const login = async (req, res) => {
    try {
      const { username, password } = req.body;
      let user = await userDB.findOne({ username: username });
  
      if (!user) {
        console.log('Invalid User');
        console.log('Invalid username or password');
        return;
      }
  
      const isVerify = await bcrypt.compare(password, user.password);
  
      if (!isVerify) {
        console.log('Write Correct password');
        console.log('Invalid username or password');
        return;
      }
  
      let payload = {
        id: user._id,
        username: user.username
      };
      let token = jwt.sign(payload, "secret-key");
      res.cookie("token", token);
      res.redirect('/');
    } catch (error) {
      console.log(error);
      console.log('Internal Server Error');
    }
  };

const logout = async (req, res) => {
    res.clearCookie('token');
    return res.redirect('/login');
};

const profile = async (req, res) => {
    try {
        let data = await userDB.find({});
        res.send(data);
    } catch (error) {
        console.log(error);
    }
};

module.exports = {signup,signupPage,login,loginPage,logout,profile}