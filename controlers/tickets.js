const { HttpError } = require('../helpers');
const { ctrlWrapper } = require('../helpers');

const getAll = async (req, res, next) => {
  console.log('Get all');
  res.json({ message: 'Get all' });
};

const getById = async (req, res, next) => {
  res.json({ message: 'Get by ID' });
};

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
};
