const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Company = require("./companyModel");

const About = sequelize.define(
  "About",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "companyLogin", // The target model is 'Companies'
        key: "id",
      },
    },
    overview: { type: DataTypes.STRING, allowNull: false },
    vision: { type: DataTypes.STRING, allowNull: false },
    mission: { type: DataTypes.STRING, allowNull: false },
  },
  {
    timestamps: true, // Store the created and updated timestamps
    tableName: "about",
  }
);

About.belongsTo(Company, { foreignKey: "userId" });
Company.hasMany(About, { foreignKey: "userId" });

module.exports = About;
