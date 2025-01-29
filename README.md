# ConvoHub Web Backend

This is the backend for the ConvoHub web application, built with Node.js, Express, Socket.io, and Supabase. It provides real-time chat functionality and integrates with Supabase for message storage.

## Features

- Real-time messaging with Socket.io
- Active user count tracking
- Chat history stored in Supabase
- Simple authentication using NextAuth.js

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.x or higher)
- [Supabase account](https://supabase.io/) for message storage

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Shreyansh301/convohub-web-backend.git
   npm install
2. Create a .env file in the root directory and add your Supabase credentials:
   ```bash
   SUPABASE_URL=your-supabase-url
   SUPABASE_KEY=your-supabase-api-key
3. Start the server:
   ```bash
   npm start
The server will be running on http://localhost:5000
4.Endpoints
- GET /: A simple route to check if the server is running.
- Socket.io connection at http://localhost:5000 for real-time messaging.

### Deployment
This backend is deployed on Railway. You can access it at the following URL:
- https://convohub-web-backend-production.up.railway.app
### Screenshot
<img width="1440" alt="Screenshot 2025-01-29 at 3 56 06 PM" src="https://github.com/user-attachments/assets/d882ae0e-787a-401e-a65c-4cd68229b61a" />

