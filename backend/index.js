const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const MongoStore = require("connect-mongo");
const app = express();

// Global variable to hold the user ID
let globalUserId = null; // Global variable

// Import routes
const AdminCustomersManage = require("./routes/UserRouter");
const ImageHandling = require("./routes/ImageRouter");

// Middleware
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173', // Replace with your frontend URL
    credentials: true, // Allow credentials (cookies) to be sent
}));



app.use("/AdminCustomers", AdminCustomersManage);
app.use("/ImageUploads", ImageHandling);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI || "mongodb+srv://5gang:ocjaIzGYFjpYlih2@cluster0.zk7k9.mongodb.net/Wash_and_GO")
    .then(() => console.log("Connected to MongoDB"))
    .then(() => {
        app.listen(5000, () => {
            console.log("Server is running on port 5000");
        });
    })
    .catch((err) => console.log(err));

// Register route
require("./models/Register");
const User = mongoose.model("Register");

app.post("/register", async (req, res) => {
    const { FirstName, LastName, Address, MobileNumber, NIC, Email, Password } = req.body;

    try {
        const existingUser = await User.findOne({ Email });
        if (existingUser) {
            return res.send({ status: "error", message: "Email already registered" });
        }

        await User.create({ FirstName, LastName, Address, MobileNumber, NIC, Email, Password });
        res.send({ status: "ok" });
    } catch (err) {
        console.error(err);
        res.send({ status: "error", message: "An error occurred while registering. Please try again." });
    }
});

// Login route
require("./models/Admin");
const Admin = mongoose.model("Admin");

app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        let user = await User.findOne({ Email: email });

        if (!user) {
            user = await Admin.findOne({ email });
        }

        if (!user) {
            return res.json({ error: "User Not Found" });
        }

        // Check password directly
        if (user.Password === password) {

            globalUserId = user._id; // Set the global variable

            const role = user instanceof Admin ? 'admin' : 'customer';

            return res.send({
                status: "ok",
                role: role,
                redirect: role === 'admin' ? "/admin-dashboard" : "/customer-dashboard"
            });
        } else {
            return res.json({ status: "Incorrect Password" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server Error" });
    }
});

// Logout route
app.post("/logout", (req, res) => {
    globalUserId = null; // Reset the global variable on logout
    res.status(200).json({ message: 'Logout successful' });
});


// Session route
app.get("/Session", async (req, res) => {

    if (globalUserId) {
        try {
            const user = await User.findById(globalUserId);
            if (!user) {
                return res.status(404).json({ status: "error", message: "User not found" });
            }
            res.json({
                userId: globalUserId,
                Fname: user.FirstName,
                Lname: user.LastName,
                Address: user.Address,
                Email: user.Email,
                MobileNumber: user.MobileNumber,
                NIC: user.NIC,
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({ status: "error", message: "Failed to retrieve user data" });
        }
    } else {
        res.status(401).json({ status: "error", message: "Unauthorized" });
    }
});
