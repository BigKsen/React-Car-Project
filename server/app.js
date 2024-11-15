import express from "express"; // Remplace require par import
import cors from "cors";
import { readFileSync } from "fs";
import { join } from "path";

const app = express();
app.use(cors());

const databasePath = join(process.cwd(), "database.json");
const databaseJSON = JSON.parse(readFileSync(databasePath, "utf-8"));

app.get("/options", (req, res) => {
  res.json(databaseJSON);
});

app.listen(8000, () => {
  console.log("Server running on http://localhost:8000");
});
