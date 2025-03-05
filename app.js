const express = require("express");
const app = express();
const sequelize = require("./config/db");

// Import routes
const companyRoutes = require("./routes/companyRoutes");
const aboutRoutes = require("./routes/aboutRoutes");
const recognitionRoutes = require("./routes/recognitionRoutes");
const cultureRoutes = require("./routes/culturesRoutes");
const legalRoutes = require("./routes/legalRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/company", companyRoutes); // Public routes for company login
app.use("/api/about", aboutRoutes); // Protected routes for abouts
app.use("/api/recognition", recognitionRoutes); // Protected routes for recognition
app.use("/api/culture", cultureRoutes); // Protected routes for cultures
app.use("/api/legal", legalRoutes); // Protected routes for legals

// Sync database
sequelize.sync({ force: false }).then(() => {
  console.log("Database synced");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
