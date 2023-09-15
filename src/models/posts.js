const { sequelize } = require("../../database");
const { DataTypes } = require("sequelize");

const PostModel = sequelize.define("posts", {
    titulo: DataTypes.TEXT,
    contenido: DataTypes.STRING,
    linkImg: DataTypes.STRING,
});

module.exports = { PostModel };