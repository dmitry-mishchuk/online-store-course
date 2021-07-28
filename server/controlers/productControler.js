const uuid = require('uuid');
const path = require('path');
const {Product} = require('../models/models');
const ApiError = require('../error/apiError');

class ProductController {
  async create(req, res, next) {
    try {
      const {title, price, idProduct, info} = req.body;
      const {img} = req.files;
      let fileName = uuid.v4() + '.jpg';
      img.mv(path.resolve(__dirname, '..', 'static', fileName));
      const product = await Product.create( {title, price, idProduct, img: fileName} );
      console.log(product);
      return res.json(product);
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }

  }
  async getAll(req, res) {
    const {brendId, typeId} = req.query;
    let profucts;
    if (!brendId && !typeId) {
      profucts = await Product.findAll();
    }
    if (brendId && !typeId) {
      profucts = await Product.findAll( {where: {brendId}} );
    }
    if (!brendId && typeId) {
      profucts = await Product.findAll( {where: {typeId}} );
    }
    if (brendId && typeId) {
      profucts = await Product.findAll( {where: {brendId, typeId}} );
    }
    return res.json(profucts)
  }
  async getById(req, res) {
    res.status(200).json({message:"All WORKING"})
  }
}
module.exports = new ProductController()
