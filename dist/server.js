"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
// Serve static files from the root directory
app.use(express_1.default.static(path_1.default.join(__dirname, "../")));
// Serve index.html for any unmatched route (SPA fallback or homepage)
app.get("*", (req, res) => {
    const indexPath = path_1.default.join(__dirname, "../index.html");
    if (fs_1.default.existsSync(indexPath)) {
        res.sendFile(indexPath);
    }
    else {
        res.status(404).send("index.html not found");
    }
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
