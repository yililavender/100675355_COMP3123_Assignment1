const express = require('express');
const employeeModel = require('../models/Employee');
const app = express();

// {"username": "p@p.com",
// "password": "password$123" 
// }

// { "status": true,
// "username": "p@p.com", 
// "message": "User logged in successfully",
// "jwt_token": "Optional implementation"
// }

//sing up
app.post('/signup', async (req, res) => { 
    try {
      const new_user = await new userModel(req.body);
      await new_user.save();
      res.status(201).send(new_user);
    } catch (err) {
      res.status(500).send(err);
    }
  });


//login 
app.post('/login', async (req, res) => {
    try {
      const user = await userModel.findOne(req.params.id)
      if (!user){
        res.status(404).send("No User found")
      }
      res.status(204).send(user)
    } catch (err) {
      res.status(500).send(err)
    }
  })



module.exports = app
