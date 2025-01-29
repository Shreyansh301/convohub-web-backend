// // Import required libraries
// const express = require("express"); // Framework for handling HTTP requests
// const http = require("http"); // Core Node.js module for creating an HTTP server
// const socketIo = require("socket.io"); // Library for real-time, bidirectional communication
// const dotenv = require("dotenv"); // Library to load environment variables from a .env file
// const { createClient } = require("@supabase/supabase-js"); // Supabase client for interacting with the database

// // Load environment variables from .env file
// dotenv.config();

// // Create an Express app
// const app = express();

// // Create an HTTP server using the Express app
// const server = http.createServer(app);

// // Configure Socket.IO to allow cross-origin requests (CORS)
// const io = socketIo(server, {
//   cors: {
//     origin: ["http://localhost:3000", "https://convohub-web-front.vercel.app"], // Allow both local and deployed frontend
//     methods: ["GET", "POST"], // Allow only GET and POST requests
//   },
// });

// // Define the port for the server to listen on (use environment variable or default to 5000)
// const PORT = process.env.PORT || 5000;

// // Initialize Supabase client using environment variables
// const supabaseUrl = process.env.SUPABASE_URL; // Supabase project URL
// const supabaseKey = process.env.SUPABASE_KEY; // Supabase API key
// const supabase = createClient(supabaseUrl, supabaseKey); // Supabase client

// // Middleware to parse JSON data in requests
// app.use(express.json());

// // Basic route to check if the server is running
// app.get("/", (req, res) => {
//   res.send("Server is running"); // Send a response when someone visits the root URL
// });

// // Variable to keep track of the number of active users
// let activeUsers = 0;

// // Handle Socket.IO connections
// io.on("connection", async (socket) => {
//   console.log("A user connected"); // Log when a user connects
//   activeUsers++; // Increment the active users count

//   // Broadcast the updated active users count to all connected clients
//   io.emit("active_users", activeUsers);

//   // Fetch chat history from Supabase when a user connects
//   const { data: messages, error } = await supabase
//     .from("messages") // Select the "messages" table
//     .select("*") // Select all columns
//     .order("id", { ascending: true }); // Order messages by ID (oldest first)

//   // Handle errors when fetching messages
//   if (error) {
//     console.error("Error fetching messages:", error.message);
//   } else {
//     // Send the chat history to the newly connected client
//     socket.emit("chat_history", messages);
//   }

//   // Listen for "chat_message" events from clients
//   socket.on("chat_message", async (msg) => {
//     // Save the message to Supabase
//     const { error: insertError } = await supabase
//       .from("messages") // Insert into the "messages" table
//       .insert([{ name: "User", message: msg }]); // Insert the message with a default name "User"

//     // Handle errors when saving the message
//     if (insertError) {
//       console.error("Error saving message:", insertError.message);
//     } else {
//       // Broadcast the message to all connected clients
//       io.emit("chat_message", msg);
//     }
//   });

//   // Handle disconnection
//   socket.on("disconnect", () => {
//     console.log("A user disconnected"); // Log when a user disconnects
//     activeUsers--; // Decrement the active users count
//     console.log("Active users after disconnection:", activeUsers); // Debug log
//     io.emit("active_users", activeUsers); // Broadcast the updated active users count
//   });
// });

// // Start the server and listen on the specified port
// server.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`); // Log when the server starts
// });



// // Import required libraries
// const express = require("express"); // Framework for handling HTTP requests
// const http = require("http"); // Core Node.js module for creating an HTTP server
// const socketIo = require("socket.io"); // Library for real-time, bidirectional communication
// const dotenv = require("dotenv"); // Library to load environment variables from a .env file
// const { createClient } = require("@supabase/supabase-js"); // Supabase client for interacting with the database

// // Load environment variables from .env file
// dotenv.config();

// // Create an Express app
// const app = express();

// // Create an HTTP server using the Express app
// const server = http.createServer(app);

// // Configure Socket.IO to allow cross-origin requests (CORS)
// const io = socketIo(server, {
//   cors: {
//     origin: ["http://localhost:3000", "https://convohub-web-front.vercel.app"], // Allow both local and deployed frontend
//     methods: ["GET", "POST"], // Allow only GET and POST requests
//   },
// });

// // Define the port for the server to listen on (use environment variable or default to 5000)
// const PORT = process.env.PORT || 5000;

// // Initialize Supabase client using environment variables
// const supabaseUrl = process.env.SUPABASE_URL; // Supabase project URL
// const supabaseKey = process.env.SUPABASE_KEY; // Supabase API key
// const supabase = createClient(supabaseUrl, supabaseKey); // Create Supabase client

// // Middleware to parse JSON data in requests
// app.use(express.json());

// // Basic route to check if the server is running
// app.get("/", (req, res) => {
//   res.send("Server is running"); // Send a response when someone visits the root URL
// });

// // Variable to keep track of the number of active users
// let activeUsers = 0;

// // Handle Socket.IO connections
// io.on("connection", async (socket) => {
//   console.log("A user connected"); // Log when a user connects
//   activeUsers++; // Increment the active users count

//   // Broadcast the updated active users count to all connected clients
//   io.emit("active_users", activeUsers);

//   // Fetch chat history from Supabase when a user connects
//   const { data: messages, error } = await supabase
//     .from("messages") // Select the "messages" table
//     .select("*") // Select all columns
//     .order("id", { ascending: true }); // Order messages by ID (oldest first)

//   // Handle errors when fetching messages
//   if (error) {
//     console.error("Error fetching messages:", error.message);
//   } else {
//     // Send the chat history to the newly connected client
//     socket.emit("chat_history", messages);
//   }

//   // Listen for "chat_message" events from clients
//   socket.on("chat_message", async (msg) => {
//     // Save the message to Supabase
//     const { error: insertError } = await supabase
//       .from("messages") // Insert into the "messages" table
//       .insert([{ name: "User", message: msg }]); // Insert the message with a default name "User"

//     // Handle errors when saving the message
//     if (insertError) {
//       console.error("Error saving message:", insertError.message);
//     } else {
//       // Broadcast the message to all connected clients
//       io.emit("chat_message", msg);
//     }
//   });

//   // Handle disconnection
//   socket.on("disconnect", () => {
//     console.log("A user disconnected"); // Log when a user disconnects
//     activeUsers--; // Decrement the active users count
//     console.log("Active users after disconnection:", activeUsers); // Debug log
//     io.emit("active_users", activeUsers); // Broadcast the updated active users count
//   });
// });

// // Start the server and listen on the specified port
// server.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`); // Log when the server starts
// });







// Import required libraries
const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const dotenv = require("dotenv");
const { createClient } = require("@supabase/supabase-js");

// Load environment variables from .env file
dotenv.config();

// Create an Express app
const app = express();

// Create an HTTP server using the Express app
const server = http.createServer(app);

// Configure Socket.IO
const io = socketIo(server, {
  cors: {
    origin: ["http://localhost:3000", "https://convohub-web-front.vercel.app"],
    methods: ["GET", "POST"],
  },
});

// Define the port for the server to listen on
const PORT = process.env.PORT || 5000;

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Middleware to parse JSON data in requests
app.use(express.json());

// Basic route to check if the server is running
app.get("/", (req, res) => {
  res.send("Server is running");
});

// Variable to keep track of the number of active users
let activeUsers = 0;

// Handle Socket.IO connections
io.on("connection", async (socket) => {
  console.log("A user connected");
  activeUsers++;

  // Broadcast the updated active users count to all connected clients
  io.emit("active_users", activeUsers);

  // Fetch chat history from Supabase when a user connects
  const { data: messages, error } = await supabase
    .from("messages")
    .select("*")
    .order("id", { ascending: true });

  if (error) {
    console.error("Error fetching messages:", error.message);
  } else {
    // Send the chat history to the newly connected client
    socket.emit("chat_history", messages);
  }

  // Listen for "chat_message" events from clients
  socket.on("chat_message", async (msg) => {
    const { error: insertError } = await supabase
      .from("messages")
      .insert([{ name: msg.name, message: msg.message }]);

    if (insertError) {
      console.error("Error saving message:", insertError.message);
    } else {
      // Broadcast the message to all connected clients
      io.emit("chat_message", msg);
    }
  });

  // Listen for "edit_message" events from clients
  socket.on("edit_message", async ({ id, newMessage }) => {
    const { error: updateError } = await supabase
      .from("messages")
      .update({ message: newMessage })
      .eq("id", id);

    if (updateError) {
      console.error("Error updating message:", updateError.message);
    } else {
      // Broadcast the updated message to all connected clients
      io.emit("message_updated", { id, newMessage });
    }
  });

  // Listen for "delete_message" events from clients
  socket.on("delete_message", async (id) => {
    const { error: deleteError } = await supabase
      .from("messages")
      .delete()
      .eq("id", id);

    if (deleteError) {
      console.error("Error deleting message:", deleteError.message);
    } else {
      // Broadcast the deleted message ID to all connected clients
      io.emit("message_deleted", id);
    }
  });

  // Handle disconnection
  socket.on("disconnect", () => {
    console.log("A user disconnected");
    activeUsers--;
    io.emit("active_users", activeUsers);
  });
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});