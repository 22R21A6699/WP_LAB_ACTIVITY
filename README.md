# WP_LAB_ACTIVITY
PORTFOLIO PAGE CONNECTED TO MONGO DB
Portfolio Page
This is a simple portfolio webpage that dynamically fetches data from a backend API and displays it in an organized format. The page includes sections for Summary, Skills, Experience, Education, Languages, and a Profile Image.

Features
Fetches portfolio data from a Node.js backend API using MongoDB.
Displays sections like summary, skills, experience, education, languages.
Displays the profile image (or a placeholder if no image is available).
Responsive design that works on both desktop and mobile screens.
Uses push.js for pushing new data to the backend.
Tech Stack
Frontend: HTML, CSS, JavaScript
Backend: Node.js, Express
Database: MongoDB (MongoDB Compass for local management)
Push Notifications: push.js
Prerequisites
Before running the project, make sure you have the following installed:

Node.js (version 12.x or higher)
MongoDB (installed locally or use MongoDB Atlas for cloud storage)
MongoDB Compass (GUI tool for managing MongoDB databases)
npm (Node package manager, comes with Node.js)
push.js for pushing data notifications.
Installation
1. Clone the Repository
bash
Copy code
git clone <repository_url>
cd <project_folder>
2. Backend Setup
a. Install Dependencies
Inside the server directory, install the required npm packages:

bash
Copy code
cd server
npm install
b. Use MongoDB Compass
Install MongoDB Compass from here if you haven't already.
Launch MongoDB Compass and connect to your local MongoDB instance using mongodb://localhost:27017.
Create a new database named Portfolio_db.
Insert a document into the portfolio collection (make sure to include the necessary fields such as summary, skills, experience, education, languages, and image).
c. Start the Backend Server
To start the backend server, run the following command in the server directory:

bash
Copy code
node server.js
The backend will now be running at http://localhost:3000.

3. Frontend Setup
The frontend is located in the root directory of the project.

Open new.html in a browser (e.g., Chrome, Firefox).
4. Using push.js to Push Data
You can now use push.js to send notifications when new data is pushed to the backend.

Here’s how to set up push.js:

a. Install push.js
bash
```
node push.js
```
b. Example push.js Implementation
In your new.html file, you can add a script to trigger notifications when data is updated or pushed:

javascript
Copy code
import Push from 'push.js';

// Push a notification when new portfolio data is available
function notifyNewPortfolioData() {
    Push.create("New Portfolio Data", {
        body: "Your portfolio has been updated!",
        timeout: 4000, // Auto-close after 4 seconds
        onClick: function() {
            window.focus();
        }
    });
}
c. Trigger Notification after Data Push
You can modify the backend server (in server.js) to send a notification when the data is successfully pushed or updated. After the data is saved, you can call the notifyNewPortfolioData() function.

javascript
Copy code
app.post("/api/portfolio", async (req, res) => {
    try {
        const portfolio = new Portfolio(req.body);
        await portfolio.save();

        // Trigger push notification
        Push.create("New Portfolio Data", {
            body: "Your portfolio has been successfully updated!",
            timeout: 4000,
            onClick: function() {
                window.focus();
            }
        });

        res.status(201).json(portfolio);
    } catch (err) {
        console.error("Error saving portfolio data:", err);
        res.status(500).json({ message: "Server error" });
    }
});
5. Push Data with push.js
To push data to the backend, you can send a POST request using the following format (from the frontend or API):

javascript
Copy code
async function pushPortfolioData() {
    const data = {
        summary: "New portfolio summary",
        skills: ["Skill 1", "Skill 2"],
        experience: [{ role: "Developer", period: "2022-2023", organization: "Company", details: ["Detail 1", "Detail 2"] }],
        education: [{ institute: "Institute", graduationDate: "2024", details: ["Detail 1"] }],
        languages: [{ language: "English", proficiency: "Fluent" }],
        image: "http://path-to-image.jpg"
    };

    const response = await fetch('http://localhost:3000/api/portfolio', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    const result = await response.json();
    if (response.ok) {
        console.log("Portfolio data pushed:", result);
        // Trigger push notification after data push
        notifyNewPortfolioData();
    } else {
        console.error("Failed to push portfolio data:", result);
    }
}
6. Trigger Data Push
To trigger the data push (e.g., on form submission or any button click), call the pushPortfolioData() function.

html
Copy code
<button onclick="pushPortfolioData()">Push New Data</button>
API Endpoints
GET /api/portfolio
This endpoint returns the portfolio data in JSON format, including the following fields:

summary: The brief introduction about the person.
skills: An array of skills.
experience: An array of experience objects, each with role, period, organization, and details.
education: An array of education objects, each with institute, graduation date, and details.
languages: An array of language proficiency.
POST /api/portfolio
This endpoint allows you to send new portfolio data to the backend. Use this to push updated data to MongoDB.

Troubleshooting
If you're not seeing the profile image, ensure that the image URL stored in MongoDB is correct and publicly accessible.
If you're getting a 404 or 500 error when fetching data, check if the backend server is running and MongoDB is connected properly.
If push notifications are not appearing, check that your browser supports notifications and permissions are enabled.
