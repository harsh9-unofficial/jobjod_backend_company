const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const JobBasicInfo = sequelize.define("JobBasicInfo", {
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
  jobTitle: { type: DataTypes.STRING, allowNull: false },
  interviewPersonName: { type: DataTypes.STRING, allowNull: false },
  industry: { type: DataTypes.STRING, allowNull: false },
  jobRole: { type: DataTypes.STRING, allowNull: false },
  expiryTime: { type: DataTypes.DATE, allowNull: false },
  joiningDate: { type: DataTypes.DATE, allowNull: false },
  minSalary: { type: DataTypes.FLOAT, allowNull: false },
  maxSalary: { type: DataTypes.FLOAT, allowNull: false },
  noOfOpenings: { type: DataTypes.INTEGER, allowNull: false },
},
{
  timestamps: true, // Store the created and updated timestamps
  tableName: "basicinfo",
});

module.exports = { JobBasicInfo };
