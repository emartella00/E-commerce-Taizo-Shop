const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//REGISTER
router.post("/register", async (req, res) => {

  if(req.body.password === req.body.ppassword){
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    tel: req.body.tel,
    name: req.body.name,
    surname: req.body.surname,

    password: CryptoJS.AES.encrypt(
      req.body.password,
      "lama"
    ).toString(),
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
}else{
  res.status(500).json("Errore");

}
});

//LOGIN

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(401).json("Wrong credentials!");

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
     "lama"
    );
    const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
console.log(OriginalPassword);
    OriginalPassword !== req.body.password &&
      res.status(401).json("Wrong credentials!");

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      "lama",
      {expiresIn:"3d"}
    );

    const { password, ...others } = user._doc;

    res.status(200).json({...others, accessToken});
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;