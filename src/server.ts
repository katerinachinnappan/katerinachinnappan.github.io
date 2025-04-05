import express from "express";
import path from "path";
import fs from "fs";

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the root directory
app.use(express.static(path.join(__dirname, "../")));

// Serve index.html for any unmatched route (SPA fallback or homepage)
app.get("*", (req, res) => {
    const indexPath = path.join(__dirname, "../index.html");
    if (fs.existsSync(indexPath)) {
        res.sendFile(indexPath);
    } else {
        res.status(404).send("index.html not found");
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});