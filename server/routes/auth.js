const router = require("express").Router();
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const auth=require('../middleware/auth');
//user model

const User = require("../models/User");

router.get('/',auth,async (req,res) => {
  try {
    console.log(req.user);
    const user = await User.findById(req.user.id).select("-password");
    if(!user){
      res.status(404).json({err:"No users found"});
    }
    console.log("in get route "+user);
    res.status(200).json({user:user});
  } catch (error) {
    res.status(500).json({err:error})
  }
});

router.post(
  "/",
  [
    check("email", "Please provide a valid email").isEmail(),
    check("password", "Please at least 6").exists()
  ],
  async (req, res,next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array() });
    }

    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ msg: "Invalid Credentials" });
      }

      const match= await bcrypt.compare(password,user.password);
      if(!match){
        return res.status(400).json({ msg: "Invalid Credentials" });
      }

      const payload = {
        
        user: {
           id: user.id, // tokenın içinde sadece id var 
         
         }
      };
      jwt.sign(
        payload,
        process.env.SECRET,
        {
          expiresIn: 3600
        },
        (err, token) => {
          if (err) throw err;
          res.send({ token });
        }
      );
    } catch (error) {
      console.log(error.message);
      return next(error);
    }
  }
);

module.exports = router;
