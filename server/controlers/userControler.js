class UserController {
  async registation(req, res) {

  }
  async login(req, res) {

  }
  async check(req, res) {
    res.status(200).json({message:"All WORKING"})
  }
}
module.exports = new UserController()
