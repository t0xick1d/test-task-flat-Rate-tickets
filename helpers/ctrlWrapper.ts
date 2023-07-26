const ctrlWrapper = (getAll: any): Function => {
  const func = async (req, res, next) => {
    try {
      await getAll(req, res, next);
    } catch (error) {
      next(error);
    }
  };
  return func;
};

module.exports = { ctrlWrapper };
