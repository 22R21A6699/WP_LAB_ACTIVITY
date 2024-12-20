# WP_LAB_ACTIVITY
PORTFOLIO PAGE CONNECTED TO MONGO DB
# Portfolio Page
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
push.js for pushing data .
Installation
1. Clone the Repository
bash
```
git clone https://github.com/22R21A6699/WP_LAB_ACTIVITY.git
cd <project_folder>
```
3. Backend Setup
a. Install Dependencies
Inside the server directory, install the required npm packages:
bash
```
cd project
npm install
```
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
You can now use push.js to send data to the backend.

Here’s how to set up push.js:

a. For push.js
bash
```
node push.js
```
5.Image
replace your own image in the image url in the new.html file

Troubleshooting
If you're not seeing the profile image, ensure that the image URL stored in MongoDB is correct and publicly accessible.
If you're getting a 404 or 500 error when fetching data, check if the backend server is running and MongoDB is connected properly.
If push notifications are not appearing, check that your browser supports notifications and permissions are enabled.
