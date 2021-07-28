const {Brend} = require('../models/models');
const ApiError = require('../error/apiError');


class BrendController {
  async create(req, res) {
    const {title} = req.body;
    const brend = await Brend.create({title});
    return res.json(brend);
  }

  async getAll(req, res) {
    const brends = await Brend.findAll();
    return res.json(brends);
  }

}
module.exports = new BrendController()
