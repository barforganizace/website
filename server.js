const express = require('express');
const fs = require('fs');
const marked = require('marked');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse markdown files
app.use('/privacy', (req, res) => {
    const filePath = path.join(__dirname, 'privacy.md');
    if (fs.existsSync(filePath)) {
        const markdown = fs.readFileSync(filePath, 'utf8');
        const html = marked.parse(markdown);
        res.send(`<html><body>${html}</body></html>`);
    } else {
        res.status(404).send('Privacy policy not found');
    }
});

app.use('/terms', (req, res) => {
    const filePath = path.join(__dirname, 'obchodni-podminky.md');
    if (fs.existsSync(filePath)) {
        const markdown = fs.readFileSync(filePath, 'utf8');
        const html = marked.parse(markdown);
        res.send(`<html><body>${html}</body></html>`);
    } else {
        res.status(404).send('Terms and conditions not found');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});