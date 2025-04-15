# Finance Tracker Auth System
A client-side React application for the Finance Tracker authentication system. This app handles user authentication features like sign-up, login, and session management. It is designed to work with the backend authentication service of the Finance Tracker project.

## Project Structure
    finance-tracker-auth-system-client/
    ├── public/
    ├── src/
    │   ├── assets/
    │   ├── components/
    │   ├── redux/ 
    │   │   └── user/
    │   ├── pages/
    │   │   └── auth/
    │   ├── axios/
    │   ├── App.jsx
    │   └── main.jsx
    ├── .env
    ├── .gitignore
    ├── package.json
    └── README.md

## Features
- User registration and login
- Secure authentication flow
- JWT token handling
- Basic user profile access
- Route protection based on authentication state

## Tech Stack
- **React** (with functional components and hooks)
- **React Router DOM** for routing
- **Redux** for global state management
- **Axios** for HTTP requests
- **LocalStorage** for token persistence
- **JWT** (used in backend, consumed here)
- **Bootstrap** for styling

## Live Demo Link
> [https://finance-tracker-auth-system-client.vercel.app/](http://ft-client-bucket.s3-website-ap-southeast-2.amazonaws.com)

## Setup Instruction
### 1. Clone the Repository
> `git clone https://github.com/diwakarstha997/finance-tracker-auth-system-client.git`

> `cd finance-tracker-auth-system-client`

### 2. Install Dependencies
> `yarn install`

### 3. Create .env File
Create a .env file at the root level and add your API URL:
> `VITE_API_URL=<API URL>`



### 4. Run the Development Server
> `yarn dev`

## API Integration
Ensure the backend server is running and accessible.

Bankend Repo Link: [https://github.com/diwakarstha997/finance-tracker-auth-system-api](https://github.com/diwakarstha997/finance-tracker-auth-system-api)
