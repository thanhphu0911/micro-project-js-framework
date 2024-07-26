// Import the express module
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

import data from "./data/mock_data.json" assert { type: "json" };

// __dirname and __filename are not available in ES modules, so we need to construct them
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create an instance of express
const app = express();

// Define the port number
const PORT = 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// API endpoint to send JSON data
app.get("/api/games", (req, res) => {
  res.json(data);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
