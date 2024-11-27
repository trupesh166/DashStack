const { httpErrors, httpSuccess } = require('../constents')
const userModel = require('../models/UserModel')
const societyHandlerModel = require('../models/SocietyHandlerModel')
const bcrypt = require("bcrypt")

class SocietyHandlerController {

  async createChairman(req, res) {
    try {
      const { firstName, lastName, email, phoneNumber, password, confirmPassword, selectSociety } = req.body
      if (!firstName || !lastName || !email || !phoneNumber || !password || !confirmPassword || !selectSociety){
        return res.status(400).json({message : "Missing required fiels, Please provide it all fields"})
      }

      if (password !== confirmPassword) return res.status(400).json({message : "Password do not match"})
      const encryptedPass = bcrypt.hashSync(password, 5)
      if (!encryptedPass) return res.status(500).json({message : "Password encrypt failed."})
      const userName = `${firstName} ${lastName}`
      const user = await userModel.model.create({ fullName: userName, email, phoneNumber, password: encryptedPass, role: "Chairman" })
      if (!user) return res.status(500).json({message : "Failed to  create User. Try Again"})
      delete req.body.password
      delete req.body.confirmPassword
      const data = {
        selectSociety,
        userId: user._id
      }
      const result = await societyHandlerModel.model.create({ ...data })
      if (!result) return res.status(500).json({message : "Failed tp asign society. Try Again"})
      return res.status(200).send({ message: httpSuccess, data: result })
    } catch (error) {
      console.log(error)
      return res.status(500).json({message : "Server error" , error : error.message})
    }
  }


}

const societyHandlerController = new SocietyHandlerController()
module.exports = societyHandlerController