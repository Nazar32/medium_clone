const AuthStrategy = require('../../../services/AuthStrategy.service');
const UserModel = require('../../../models/user.model');

module.exports = async (_, args, request) => {
  const token = request.token;
  if (!token) {
    return null;
  }

  const userId = await AuthStrategy.verifyToken(token);
  const user = await UserModel.findById(userId).exec();
  if (!user) {
    throw new Error('Invalid token');
  }

  request.user = user;
  const { id, firstName, lastName } = user;

  return { id, firstName, lastName };
};
