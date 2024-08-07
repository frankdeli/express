// Add Express
const express = require("express");

// Initialize Express
const app = express();
const cors = require("cors")
const c_main = require('./app/controllers/controller_main')

app.use(cors())
// Create GET request
app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

app.use('/api/v1', c_main)

// Initialize server
app.listen(5000, () => {
  console.log("Running on port 5000.");
});


// Export the Express API
module.exports = app;