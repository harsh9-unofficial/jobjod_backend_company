const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Company = sequelize.define("Company", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  companyName: { type: DataTypes.STRING, allowNull: false },
  interviewerName: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  phone: { type: DataTypes.INTEGER, allowNull: false },
  location: { type: DataTypes.STRING, allowNull: false },
  yearEst: { type: DataTypes.DATEONLY, allowNull: false },
  website: { type: DataTypes.STRING, allowNull: false },
});

module.exports = Company;
