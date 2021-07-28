const ApiError = require('../error/apiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {User, Basket} = require('../models/models');

const generateJWT = (id, email, role) => {
  return jwt.sign(
    {id, email, role},
    process.env.SECRET_KEY,
    {expiresIn: '2h'})
}

class UserController {
  async registation(req, res, next) {
    const {email, password, role} = req.body;
    if(!email || !password) {
      return next(ApiError.badRequest("Не коректный email или password"));
    }
    const candidate = await User.findOne({where: {email} });
    if (candidate){
      return ext(ApiError.badRequest("Пользователь с таким email уже существует"));
    }
    const hashPasword = await bcrypt.hash(password, 5);
    const user = await User.create({email, role, password: hashPasword});
    const backet = await Basket.create({userId: user.id})
    const token = generateJWT(user.id, user.email, user.role);
    return res.json({token})
  }
  async login(req, res, next) {
    const {email, password, role} = req.body;
    const user = await User.findOne( {where:{email}} )
    if (!user) {
      return next(ApiError.internal("Пользователь не найден"));
    }
    let comparePass = bcrypt.compareSync(password, user.password)
    if(!comparePass){
      return next(ApiError.internal("Пароль не верный"));
    }
    const token = generateJWT(user.id, user.email, user.role);
    return res.json({token})
  }
  async getAllUser(req, res){
    const users = await User.findAll();
    return res.json(users);

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
