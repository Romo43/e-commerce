const User = require("../models/user");
const { generateJWT } = require("../helpers");

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user)
    return res.status(400).json({ message: "Invalid email or password" });
  const validPassword = await User.comparePassword(password, user.password);
  if (!validPassword)
    return res.status(400).json({ message: "Invalid email or password" });
  const token = await generateJWT(user.uid);
  res.json({
    token,
    role: user.role,
  });
};
const register = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    return res.status(400).json({
      message: "Email already exist",
    });
  } else {
    const newUser = new User({
      name,
      email,
      password: await User.encryptPassword(password),
    });
    await newUser.save();
    res.json({
      message: "User created successfully",
    });
  }
};
const google = async (req, res) => {
  // const user = await User.findById(req.userId);
  //     const roles = await Role.find({ _id: { $in: user.roles } });
  //     for (let i = 0; i < roles.length; i++) {
  //       if (roles[i].name === "ADMIN") {
  //         const { username, email, password, roles } = req.body;
  //         const rolesFound = await Role.find({ name: { $in: roles } });
  //         const user = new User({
  //           username,
  //           email,
  //           password,
  //           roles: rolesFound.map((role) => role._id),
  //         });
  //         user.password = await User.encryptPassword(user.password);
  //         const savedUser = await user.save();
  //         return res.status(200).json({
  //           uid: savedUser.uid,
  //           username: savedUser.username,
  //           email: savedUser.email,
  //           roles: savedUser.roles,
  //         });
  //       }
  //     }
  //     res.status(403).json({ message: "Require Admin Role!" });
};

module.exports = {
  login,
  register,
  google,
};

// const user ={
//     name : "",
//     email : "",
//     password : "",
//     role : "",
//     status : "",
//     google : "",
//     image : "",
//     address : "",
//     phone : "",
//     createdAt : "",
// }
// const admin = {
//     name : "",
//     email : "",
//     password : "",
//     role : "",
//     status : "",
//     google : "",
// }
// const seller = {
//     name : "",
//     email : "",
//     password : "",
//     role : "",
//     status : "",
//     google : "",
//     image : "",
//     score: "",
// }
