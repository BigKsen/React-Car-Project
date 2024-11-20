import express from "express"; // Remplace require par import
import cors from "cors";
import { readFileSync, writeFile, existsSync, writeFileSync } from "fs"; // Import pour lire et écrire des fichiers
import { join } from "path";

const app = express();
app.use(cors());
app.use(express.json()); // Middleware pour parser le JSON dans le corps des requêtes

const databasePath = join(process.cwd(), "database.json");
const userDataPath = join(process.cwd(), "userData.json");

// Vérifie si le fichier userData.json existe
if (!existsSync(userDataPath)) {
  // Si le fichier n'existe pas, crée un fichier avec un tableau vide
  writeFileSync(userDataPath, JSON.stringify([]));
  console.log("userData.json file created.");
}

// Charger le fichier database.json
const databaseJSON = JSON.parse(readFileSync(databasePath, "utf-8"));

// Route GET pour les options (déjà existante)
app.get("/options", (req, res) => {
  res.json(databaseJSON);
});

// Route POST pour enregistrer des données utilisateur dans userData.json
app.post("/users", (req, res) => {
  const newUser = req.body;

  try {
    let users = [];
    try {
      const userData = readFileSync(userDataPath, "utf-8");
      users = JSON.parse(userData);
    } catch (err) {
      if (err.code !== "ENOENT") {
        console.error("Error reading userData.json:", err);
        throw err;
      }
    }

    users.push(newUser);

    writeFile(userDataPath, JSON.stringify(users, null, 2), (err) => {
      if (err) {
        console.error("Error writing user data:", err);
        return res.status(500).json({ message: "Failed to save user data." });
      }

      console.log("User data saved successfully!");
      res.status(200).json({ message: "User data saved successfully!" });
    });
  } catch (err) {
    console.error("Error processing user data:", err);
    res.status(500).json({ message: "An error occurred." });
  }
});

// Lancer le serveur
app.listen(8000, () => {
  console.log("Server running on http://localhost:8000");
});
