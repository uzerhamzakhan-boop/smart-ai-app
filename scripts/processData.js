const fs = require("fs");
const path = require("path");

// Read raw data
const rawPath = path.join(__dirname, "../data/raw/data.json");
const rawData = JSON.parse(fs.readFileSync(rawPath, "utf-8"));

// Simple cleaning function
function cleanData(data) {
  return data.map((item) => ({
    title: item.title.trim(),
    content: item.content.trim(),
  }));
}

// Process data
const processed = cleanData(rawData);

// Save processed data
const outputPath = path.join(
  __dirname,
  "../data/processed/data.json"
);

fs.writeFileSync(outputPath, JSON.stringify(processed, null, 2));

console.log("✅ ETL complete! Processed data saved.");