const express= require("express");
const dotenv = require("dotenv").config();
//const connection = require("./database/db");
const errorHandler = require("./middleware/errorHandler");
const port = process.env.PORT || 5000;

const app= express();



app.use(express.json());
app.use("/api/contacts",require("./routes/contactRoutes") );
app.use(errorHandler);

app.listen(port,() =>{
    console.log(`Server running on port: http://localhost:${port}`);
})