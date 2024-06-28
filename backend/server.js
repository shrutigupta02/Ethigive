const express = require('express');
const cors = require('cors');

const app = express();

app.listen(1234, ()=>{
    console.log("App is listening on port 1234");
})