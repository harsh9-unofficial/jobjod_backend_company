const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const PersonalDetails = sequelize.define("PersonalDetails", {
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
  minAgeRequired: { type: DataTypes.INTEGER, allowNull: false },
  preferredLanguage: { type: DataTypes.STRING, allowNull: false },
  assets: { type: DataTypes.STRING, allowNull: false },
  degreeAndSpecialization: { type: DataTypes.STRING, allowNull: false },
  certification: { type: DataTypes.STRING, allowNull: false },
  preferredIndustry: { type: DataTypes.STRING, allowNull: false },
  securityDepositRequired: { type: DataTypes.BOOLEAN, allowNull: false },
},
{
  timestamps: true, // Store the created and updated timestamps
  tableName: "personaldetails",
});

module.exports = { PersonalDetails };
