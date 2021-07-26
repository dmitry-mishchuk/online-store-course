const ApiError = require('../error/apiError');

class UserController {
  async registation(req, res) {

  }
  async login(req, res) {

  }
  async check(req, res, next) {
    const {id} = req.query
    if (!id) {
      return next(ApiError.badRequest("Не задан ID"))
    }
    res.status(200).json(query)
  }
}
module.exports = new UserController()
