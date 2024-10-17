const express = require('express');
const mysql = require('mysql2');
const cors= require('cors');
const app=express();


app.use(cors());
app.use(express.json());


const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'billing_system'
})


db.connect(err=>{
    if(err){
        console.error('Error Connecting to my sql:',err);
        return;
    }
    console.log('connected to mysql');
})


app.get('/api/customer_bills',(req,res)=>{
    const query =  `SELECT * FROM  customer_bills`;
    db.query(query,(err,result)=>{
        if (err){
            return res.status(500).send('Error fetching from database')
        }
        res.json(result);
    });
});
app.listen(3001,()=>{
    console.log('server running on  http://localhost:3001');
})