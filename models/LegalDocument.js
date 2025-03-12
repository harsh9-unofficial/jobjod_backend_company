const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const LegalDocument = sequelize.define('LegalDocument', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "companyLogin", // The target model is 'Companies'
        key: "id",
      },
    },
    companyId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    gstNumber: {
        type: DataTypes.STRING,
        allowNull: true
    },
    panNumber: {
        type: DataTypes.STRING,
        allowNull: true
    },
    fssaiNumber: {
        type: DataTypes.STRING,
        allowNull: true
    },
    documents: {
        type: DataTypes.JSON,  // Store all uploaded documents dynamically
        allowNull: true
    }
}, {
    timestamps: true
});

module.exports = LegalDocument;
