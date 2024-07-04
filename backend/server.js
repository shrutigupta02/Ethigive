const express = require('express');
const cors = require('cors');
const { connectToDB } = require('./database/db');
const projectController = require('./controllers/project');
const app = express();

//DB connection
connectToDB();

//Middle to parse JSON
app.use(express.json());

//cors
app.use(cors());
 
//index route
app.get('/projects', async(req, res)=>{
    try{
        let result = await projectController.getAll();
    res.json(result);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching projects, please try again later' });
    }
    // console.log(result); 
});

//create route
app.post('/projects', (req, res)=>{
    //console.log(req.body);
    projectController.addNew(req,res);

});

//show route 
app.get('/projects/:id', (req, res)=>{
    res.send();
});

app.listen(1234, ()=>{
    console.log("App is listening on port 1234");
});