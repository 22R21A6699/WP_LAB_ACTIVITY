const mongoose = require("mongoose");

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/Portfolio_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// Schema with explicit collection name
const portfolioSchema = new mongoose.Schema({
    summary: String,
    skills: [String],
    experience: [
        {
            role: String,
            period: String,
            organization: String,
            details: [String],
        },
    ],
    education: [
        {
            institute: String,
            graduationDate: String,
            details: [String],
        },
    ],
    languages: [
        { language: String, proficiency: String }
    ],
}); // Explicitly set collection name

const Portfolio = mongoose.model("Portfolio", portfolioSchema);

// Populate Database
async function populateDatabase() {
    try {
        const portfolio = new Portfolio({
            summary: "An innovative tech enthusiast with a keen knack for problem-solving.",
            skills: ["Advanced Data Analytics with Python", "Database Development with SQL"],
            experience: [
                {
                    role: "AI Developer",
                    period: "04/2024 - 07/2024",
                    organization: "Indian Air Force",
                    details: ["Developed YOLO models for FOD detection"],
                },
            ],
            education: [
                {
                    institute: "MLR Institute of Technology",
                    graduationDate: "Expected 08/2026",
                    details: ["CGPA: 9.09"],
                },
            ],
            languages: [
                { language: "English", proficiency: "Advanced" },
            ],
        });

        await portfolio.save();
        console.log("Portfolio data saved to Portfolio_data collection!");
        mongoose.connection.close();
    } catch (err) {
        console.error("Error populating database:", err);
    }
}

populateDatabase();
