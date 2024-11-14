VKART: BookStore
a BookStore website where you can buy or read the books of all the genres.

Acknowledgements
React JS
Node JS
MongoDB
Features
Book Listings

premium access featurs

User Login with Session

Authentication

Profile Access with Authorization

User Logout

User Profile

Blogs reading

Blogs adding

Need Help Chatbot

Running the project
Prerequisites
Ensure you have the following installed on your local machine: Node.js MongoDB (if using locally or you can use Atlas)

Clone the Project
Go to any folder where you want to download the project.

Open the folder in the terminal.

Clone the repository:

git clone https://github.com/codingbyash/BookStore.git

cd BookStore

In the project directory, install the required Node.js dependencies: npm install

Set Up Environment Variables
PORT=4002
SESSION_SECRET=your-secret-key
DATABASE_URL=mongodb://localhost:27017/bookstoredb
Replace your-secret-key with a secure key of your choice. If you're using MongoDB Atlas, replace mongodb://localhost:27017/bookstoredb with your MongoDB Atlas connection string.

Run the Application
npm start

Example Workflow
Register a new user.

Log in to start a session.

Access profile information.

Log out to end the session.

Demo
[link](https://book-store-phi-blond.vercel.app/)
