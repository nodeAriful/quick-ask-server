const userService = require("../../../../lib/User/index.js");
const { hashing } = require("../../../../utils/hashing.js");

const createUser = async(req, res, next) => {

    const {name, email, password, role, status, avatar}=req.body;

   try {
    const hash = await hashing(password, 10);
    const user = await userService.createUser(name, email, hash, role, status, avatar);
    user.link = req.path

    
      
    res.status(201).json({
      code: 201,
      message: "Create a user Successful",
      data: user,
    });
   } catch (error) {
        next(error)
   }
  }

module.exports = createUser;