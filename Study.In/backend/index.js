const express = require('express');
require('./DB/config');
const cors = require('cors')
const student = require('./DB/student')

const app = express();
app.use = (cors());

app.post("/SignUp", async (req, resp) => {
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    resp.send(result);
  });

app.listen(5000,()=>{
    console.log('Successfully Run localhost:3000');
    
})