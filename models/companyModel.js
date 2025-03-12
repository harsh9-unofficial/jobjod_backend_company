const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Company = sequelize.define("Company", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "companyLogin", // The target model is 'Companies'
      key: "id",
    },
  },
  companyName: { type: DataTypes.STRING, allowNull: false },
  interviewerName: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  yearEst: { type: DataTypes.DATEONLY, allowNull: false },
  phone: { type: DataTypes.BIGINT, allowNull: false },
  location: { type: DataTypes.STRING, allowNull: false },
  website: { type: DataTypes.STRING, allowNull: false },
  pincode: { type: DataTypes.INTEGER, allowNull: false },
},
{
  timestamps: true, // Store the created and updated timestamps
  tableName: "company",
});

module.exports = Company;
