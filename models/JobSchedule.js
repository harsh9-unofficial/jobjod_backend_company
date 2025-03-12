const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const JobSchedule = sequelize.define("JobSchedule", {
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
  jobTiming: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  interviewTiming: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  interviewLocation: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  instructions: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

module.exports = JobSchedule;
