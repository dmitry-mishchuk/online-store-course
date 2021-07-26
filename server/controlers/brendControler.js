const {Brend} = require('../models/models');
const ApiError = require('../error/apiError');


class BrendController {
  async create(req, res) {
    const {name} = req.body;
    const brend = await Type.create({Brend});
    return res.json(brend);
  }

  async getAll(req, res) {
    const brends = await Brend.findAll();
    return res.json(brends);
  }

}
module.exports = new BrendController()
