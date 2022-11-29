const { Airline } = require('../../models');
const cloudinary = require('../utils/cloudinary');

const checkIata = async (req, res, code) => {
  const iata = await Airline.findOne({ where: { iata: code } });
  const check = iata ? 1 : 0;
  return [check, iata];
};

const imageUploader = async (req, res, fileBase64) => {
  const file = `data:${req.file.mimetype};base64,${fileBase64}`;
  const imgCloud = await cloudinary.uploader.upload(file, { folder: 'airlines' });
  const image = imgCloud.url;
  const imageId = imgCloud.public_id;
  return [image, imageId];
};

const imageDeleter = async (req, res, imgId) => {
  await cloudinary.uploader.destroy(imgId);
};
//
const getData = async (unique) => {
  const data = await Airline.findByPk(unique);
  return data;
};

const getAirlines = async (req, res) => {
  try {
    const airlines = await Airline.findAll();
    res.status(201).json({ airlines });
  } catch (err) {
    res.status(422).json({
      error: {
        name: err.name,
        message: err.message,
      },
    });
  }
};

const getAirline = async (req, res) => {
  try {
    const airlines = await getData(req.params.id);
    res.status(201).json({ airlines });
  } catch (err) {
    res.status(422).json({
      error: {
        name: err.name,
        message: err.message,
      },
    });
  }
};

const createAirline = async (req, res) => {
  try {
    const { name } = req.body;
    const iata = req.body.iata.toUpperCase();
    const check = await checkIata(req, res, iata);
    if (check[0]) {
      res.status(304).json({ message: 'iata existed' });
      return
    }
    const fileBase64 = req.file.buffer.toString('base64');
    const img = await imageUploader(req, res, fileBase64);

    const airline = await Airline.create({
      iata,
      name,
      image: img[0],
      imageId: img[1],
    });

    res.status(201).json({
      message: 'airline added successfully',
      airline,
    });
  } catch (err) {
    res.status(422).json({
      error: {
        name: err.name,
        message: err.message,
      },
    });
  }
};

const deleteAirline = async (req, res) => {
  try {
    const img = await getData(req.params.id);
    await imageDeleter(req, res, img.imageId);
    await Airline.destroy({ where: { id: req.params.id } });
    res.status(201).json({ message: `deleted data id${req.params.id}` });
  } catch (err) {
    res.status(422).json({
      error: {
        name: err.name,
        message: err.message,
      },
    });
  }
};

const updateAirline = async (req, res) => {
  try {
    const { name } = req.body;
    const iata = req.body.iata.toUpperCase();

    const data = await getData(req.params.id);
    if (data && data.iata !== iata) {
      res.status(406).json({ message: 'iata existed' });
    }

    let img = data.image;
    let imgId = data.imageId;
    if (req.file !== undefined) {
      const fileBase64 = req.file.buffer.toString('base64');
      const imgCloud = await imageUploader(req, res, fileBase64);
      const url = imgCloud[0];
      const urlId = imgCloud[1];
      if (imgId) {
        await imageDeleter(req, res, imgId)
      }
      img = url;
      imgId = urlId;
    }
    await Airline.update(
      {
        name, iata, image: img, imageId: imgId,
      },
      { where: { id: req.params.id } },
    );
    res.status(202).json({ message: `updated data id ${req.params.id}` });
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
  getAirlines,
  getAirline,
  createAirline,
  deleteAirline,
  updateAirline,
};
