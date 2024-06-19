const User = require("../Models/userModel");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

exports.createUser = async (req, res) => {
  const { name, email, password, confirm_password } = req.body;
  if(name === '' || email === '' || password === '' || confirm_password === '') {
    return res.status(200).json({
       result: false,
       message: "requied fillerd : name , email , password, confirm_password",
     })
   }
   if(password !== confirm_password) {
    return res.status(400).json({
      result: false,
      message: "password not match",
    });
   }

  try {
  const user = await User.findOne({ email: email})
  if(user) {
   return res.status(400).json({
      result: false,
      message: "user already exist",
    });
  }
 
  if (confirm_password === password) {
    const hasPassword = await bcrypt.hash(password,10)
      const newUser = new User({
        name : name,
        email : email,
        password : hasPassword
      });
      
     
      const data = await newUser.save();
    return  res.status(200).json({
        result: true,
        message: "User signup successfully",
        data : data
      });
    }

      return res.status(400).json({
        result: false,
        message: "Signup failed",
      });
   


  } catch (error) {
    res.status(500).json({
      result: false,
      message: error.message,
    });
  }
};

// get all users 
exports.getAllUsers = async (req,res)=>{
  try {
    const users = await User.find();
    res.status(200).json({
      result: true,
      message: users,
    });
  } catch (error) {
    res.status(500).json({
      result: false,
      message: error.message,
    });
  }

}

// login user
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  if(email === null && password === null) {
    return res.status(200).json({
       result: false,
       message: "requied fillerd : email, password",
     })
   }
   try {

     const user  = await User.findOne({email : email})
     if(!user) {
      return res.status(404).json({
        result: false,
        message: "user not found",
      })
     }
     const secretkey = 'JWT Secret Key'
     const isMatch = await bcrypt.compare(password, user.password);
     const token = jwt.sign({user_id : user._id, email: user.email},secretkey, {expiresIn: '10d'})
     if(!isMatch) {
      return res.status(404).json({
        result: false,
        message: "password not match",

      })
     }

     
     res.status(200).json({
       result: true,
       message: "user login successfully",
       data : {
        _id : user._id,
        token : token
       }
     })

   } catch (error) {
     res.status(500).json({
       result: false,
       message: error.message,
     });
    
   }

}