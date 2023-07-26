const { Ticket } = require('../models/tickets');

const { HttpError } = require('../helpers');
const { ctrlWrapper: Function } = require('../helpers');

const getAll = async (req, res, next) => {
  const result = await Ticket.find();
  res.status(200).json(result);
};

const getById = async (req, res, next) => {
  const { ticketID } = req.params;
  const result = await Ticket.findById(ticketID);
  if (!result) {
    throw HttpError(404, 'Not found');
  }
  res.status(200).json(result.allplace);
};

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
};
