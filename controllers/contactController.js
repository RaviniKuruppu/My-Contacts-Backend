const asyncHandler = require("express-async-handler");
const mysql = require('mysql');

const pool = mysql.createPool({
	host: "localhost",
	user: "root",
	password: "root",
	database: "gfg" 
});

//@desc Get all contacts
//@ route GET /api/contacts
//@access public
const getContacts = asyncHandler( async (req,res) =>{
    query = "select * from contacts";

    pool.query(query,(err,results)=>{
        if(!err){
            console.log(results);
            res.status(200).json(results);         
        }else{
            console.log(err);
        }
    });
    //console.log(getConnection);
    //res.status(200).json({message: "Get all contacts"});

});

//@desc create new contacts
//@ route POST /api/contacts
//@access public
const createContact = asyncHandler( async (req,res) =>{
    console.log("The request body is : ",req.body);
    //res.status(201).json({message: "create contact"});
    const {name, email, phone} = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error ("All fields are mandatory");
    }
    const user = req.body;
    query =  "INSERT INTO contacts (name, "
    + "email,phone) VALUES ('"+user.name+"', "
    + "'"+user.email+"', '"+user.phone+"')";

    pool.query(query,(err,results)=>{
        if(!err){
            console.log(results);
            res.status(200).json({message: ` ${user.name} is successfully inserted to the database `});         
        }else{
            console.log(err);
        }
    });
});

//@desc Get contact
//@ route GET /api/contacts/:id
//@access public
const getContact = asyncHandler( async (req,res) =>{
    query = "select * from contacts where id='"+req.params.id+"'";

    pool.query(query,(err,results)=>{
        if(!err){
            //console.log(results);
            res.status(200).json(results);         
        }else{
            console.log(err);
        }
    });
    //res.status(200).json({message: `get contact for ${req.params.id} `});
});



//@desc Update contact
//@ route PUT /api/contacts/:id
//@access public
const updateContact = asyncHandler( async (req,res) =>{
    const { id } = req.params;
    const { name, email, phone } = req.body;
    if (name) {
        query = "update contacts set name='"+name+"' where id='"+id+"'";
        
    }
    if (email) {
        query = "update contacts set email='"+email+"' where id='"+req.params.id+"'";
        
    }
    if (phone) {
        query = "update contacts set name='"+phone+"' where id='"+req.params.id+"'";
    }
    pool.query(query,(err,results)=>{
        if(!err){
            
            res.status(200).json({message: `update contact for id: ${req.params.id} `});         
        }else{
            console.log(err);
        }
    });
});

//@desc delete contact
//@ route DELETE /api/contacts/:id
//@access public
const deleteContact = asyncHandler( async (req,res) =>{
    query = "delete from contacts where id='"+req.params.id+"'";

    pool.query(query,(err,results)=>{
        if(!err){
            //console.log(results);
            res.status(200).json({message: `delete contact for id: ${req.params.id} `});         
        }else{
            console.log(err);
        }
    });

});

module.exports = { getContacts, createContact, getContact, updateContact, deleteContact};