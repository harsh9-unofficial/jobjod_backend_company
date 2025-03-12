const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/db"); // Import your Sequelize instance

const Culture = sequelize.define(
  "Culture",
  {
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
    companyEnvironment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    employeeBenefits: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    careerDevelopment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true, // Store the created and updated timestamps
    tableName: "cultures",
  }
);

module.exports = Culture;
