const express = require('express');
const cors = require('cors');
const { connectToDB } = require('./database/db');
const projectController = require('./controllers/project');
const app = express();

//DB connection
connectToDB();
 
//index route
app.get('/projects', async(req, res)=>{
    let result = await projectController.getAll();
    res.json(result);
    // console.log(result);
});

//create route
app.post('/projects', (req, res)=>{
    res.send();
});

//show route
app.get('/projects/:id', (req, res)=>{
    res.send();
});

app.listen(1234, ()=>{
    console.log("App is listening on port 1234");
});