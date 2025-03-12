const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const JobDescription = sequelize.define("JobDescription", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "companyLogin", // The target model is 'Companies'
      key: "id",
    },
  },
  skills: {
    type: DataTypes.TEXT,
    allowNull: false,
    get() {
      return this.getDataValue("skills")
        ? this.getDataValue("skills").split(",")
        : [];
    },
    set(value) {
      this.setDataValue("skills", value.join(","));
    },
  },
  responsibility: { type: DataTypes.TEXT, allowNull: true },
});

module.exports = { JobDescription };
