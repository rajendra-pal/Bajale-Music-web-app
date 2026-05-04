console.log("🚀 Starting server...");
const express = require("express");
const multer = require("multer");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const upload = multer({ dest: "../Music_page/assets/songs/" });

// 👉 upload route
app.post("/upload", upload.single("song"), (req, res) => {
    const { artist, genre } = req.body;
    const file = req.file;

    if (!file) {
        return res.status(400).send("No file uploaded");
    }

    const newEntry = {
        file: `assets/songs/${file.filename}`,
        artist: artist || "Unknown",
        genre: genre || "unknown"
    };

    const jsonPath = "../Music_page/assets/songs.json";

    let songs = [];

    if (fs.existsSync(jsonPath)) {
        songs = JSON.parse(fs.readFileSync(jsonPath));
    }

    songs.push(newEntry);

    fs.writeFileSync(jsonPath, JSON.stringify(songs, null, 2));

    res.send("Upload successful");
});

app.listen(5000, () => console.log("Server running on port 5000"));