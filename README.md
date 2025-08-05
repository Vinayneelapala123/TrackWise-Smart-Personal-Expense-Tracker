# 💸 TrackWise – Smart Personal Expense Tracker

TrackWise is a full stack web application designed to help users effortlessly manage and track their personal expenses. With a clean UI and powerful backend, users can add, view, and delete expenses while monitoring their total spending.

## 🚀 Features

- 📅 Add daily expenses with title, amount, and date  
- 📋 View all expenses in a list  
- ❌ Delete an expense anytime  
- 💰 See real-time total expense summary  
- 🎯 Simple and intuitive user interface  

## 🧱 Tech Stack

### Frontend
- HTML5  
- CSS3  
- JavaScript (Vanilla)  
- Bootstrap (optional)  

### Backend
- Node.js  
- Express.js  

### Database
- MongoDB  
- Mongoose  


## ⚙️ Setup Instructions

### Prerequisites
- Node.js and npm  
- MongoDB installed and running locally (or MongoDB Atlas)  

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/trackwise-expense-tracker.git
   cd trackwise-expense-tracker
Install dependencies

bash
npm install
Set up environment variables
Create a .env file in the root and add:

bash
MONGO_URI=mongodb://localhost:27017/expense_tracker
Start the backend server

bash
node backend/server.js
Open the app
Open frontend/index.html in your browser.

🧪 API Endpoints
Method	Endpoint	Description
GET	/api/expenses	Get all expenses
POST	/api/expenses	Add a new expense
DELETE	/api/expenses/:id	Delete an expense
