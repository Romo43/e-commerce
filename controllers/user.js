const User = require("../models");

module.exports = class userCtrl {
  static async getAllUsers(req, res) {
    const { skip = 0, limit = 5 } = req.query;
    const query = { status: true };
    const [users, total] = await Promise.all([
      User.find(query),
      User.countDocuments(query).skip(Number(skip)).limit(Number(limit)),
    ]);
    res.json({
      total,
      users,
    });
  }
  // Find a single User with an id
  static async getOneUser(req, res) {}
  // Update a User with an id
  static async updateUser(req, res) {}
  // Update User information with an id
  static async updateUserInformation(req, res) {}
  // Delete a User with an id
  static async deleteUser(req, res) {}
};
