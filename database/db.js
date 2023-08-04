const mysql = require('mysql');

const connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root",
	database: "gfg" 
});

connection.connect((err)=>{
    if(!err){
        console.log("Connected to database");
    }
    else{
        console.log("Error while connecting to the database"+err);
    }
});



module.exports=connection;
//module.exports=connect;
//module.exports={connect};