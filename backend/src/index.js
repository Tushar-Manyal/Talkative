// import express from "express";
// import dotenv from "dotenv";
// import cookieParser from "cookie-parser";
// import cors from "cors";


// import { connectDB } from "./lib/db.js";
// import authRoutes from "./routes/auth.routes.js";
// import messageRoutes from "./routes/message.routes.js"

// dotenv.config();

// const PORT=3000;
// const app=express();

// app.use(express.json());
// app.use(cookieParser());
// app.use(cors({
//     origin:["http://localhost:5173",""],
//     credentials:true
// })
// )

// app.use("/api/auth",authRoutes)
// app.use("/api/messages" , messageRoutes);

// app.listen(PORT,()=>{
//     console.log(`server is running at the port ${PORT}`)
//     connectDB()
// })



import express from "express";
import dotenv from "dotenv";
import cookieparser from "cookie-parser";
import cors from "cors";


import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";

import { app,server } from "./lib/socket.js";


dotenv.config();

const PORT = process.env.PORT || 3000;




app.use(express.json());
app.use(cookieparser());
app.use(
    cors({
        origin:["http://localhost:5173" , "http://localhost:5174"],
        credentials:true,
       
    })
)


// Routes
app.use("/api/auth" , authRoutes);
app.use("/api/messages" , messageRoutes);

server.listen(PORT , ()=>{
    console.log(`Server is running on port ${PORT}`);
    connectDB();
})
