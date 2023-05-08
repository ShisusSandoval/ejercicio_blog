const { Model, DataTypes } = require("sequelize");

class Comment extends Model {
  static initModel(sequelize) {
    Comment.init(
      {
        name: {
          type: DataTypes.STRING,
        },
        content: {
          type: DataTypes.TEXT,
        },
      },
      {
        sequelize,
        modelName: "comment",
      },
    );
    return Comment;
  }
}

module.exports = Comment;
