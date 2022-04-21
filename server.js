const express = require('express');
const app = express();
const connectDB = require("./config/db");
app.use(express.json({extended: true}));
// const mongodb = require('mongodb')



const db = connectDB();


app.use("/api/todo", require("./routes/todo"));

app.use("/api/users", require("./routes/users"));

app.use("/api/auth", require("./routes/auth"));



app.listen(5000, () => {
    console.log("Server is live at port 5000")
})