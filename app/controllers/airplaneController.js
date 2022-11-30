const { Airplane } = require('../../models');

const getIcao = async (code) => {
  const icao = await Airplane.findOne({ where: { icao: code } });
  return icao;
}

const getAirplanes = async (req, res) => {
  try {
    const airplane = await Airplane.findAll();
    res.status(200).json({ airplane })
  } catch (err) {
    res.status(422).json({
      error: {
        name: err.name,
        message: err.message,
      },
    });
  }
};

const getAirplane = async (req, res) => {
  try {
    const airplane = await Airplane.findByPk(req.params.id);
    res.status(200).json({ airplane });
  } catch (err) {
    res.status(422).json({
      error: {
        name: err.name,
        message: err.message,
      },
    });
  }
};

const createAirplane = async (req, res) => {
  try {
    const { icao, model } = req.body;
    const code = icao.toUpperCase();
    const check = await getIcao(code);
    if (check) {
      res.status(403).json({ message: 'icao exist' })
      return
    }
    const newData = await Airplane.create({
      icao: code, model,
    });
    res.status(201).json({ message: 'airline created', newData })
  } catch (err) {
    res.status(422).json({
      error: {
        name: err.name,
        message: err.message,
      },
    });
  }
};

const updateAirplane = async (req, res) => {
  try {
    const uId = parseInt(req.params.id, 10);
    const { icao, model } = req.body;
    const code = icao.toUpperCase();
    const check = await getIcao(code);
    if (check && check.id !== uId) {
      res.status(403).json({ message: 'icao existed' });
      return;
    }
    await Airplane.update(
      { icao: code, model },
      { where: { id: uId } },
    );
    res.status(201).json({ message: `data ${uId} updated` });
  } catch (err) {
    res.status(422).json({
      error: {
        name: err.name,
        message: err.message,
      },
    });
  }
};

const deleteAirplane = async (req, res) => {
  try {
    await Airplane.destroy({ where: { id: req.params.id } })
    res.status(202).json({ message: `data ${req.params.id} deleted` });
  } catch (err) {
    res.status(422).json({
      error: {
        name: err.name,
        message: err.message,
      },
    });
  }
};

module.exports = {
  getAirplanes,
  getAirplane,
  createAirplane,
  updateAirplane,
  deleteAirplane,
};
