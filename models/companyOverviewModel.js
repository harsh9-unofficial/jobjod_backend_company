const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const CompanyOverview = sequelize.define(
  "CompanyOverview",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "companyLogin", // The target model is 'Companies'
        key: "id",
      },
    },
    companyIndustry: { type: DataTypes.STRING, allowNull: false },
    overview: { type: DataTypes.TEXT, allowNull: false },
    vision: { type: DataTypes.TEXT, allowNull: true },
    mission: { type: DataTypes.TEXT, allowNull: true },
  },
  {
    timestamps: true, // Store the created and updated timestamps
    tableName: "overview",
  }
);

module.exports = CompanyOverview;
