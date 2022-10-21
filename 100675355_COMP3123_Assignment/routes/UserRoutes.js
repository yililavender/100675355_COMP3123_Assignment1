const express = require('express');
const userModel = require('../models/User');
const app = express();

// {"username": "p@p.com",
// "password": "password$123" 
// }

// { "status": true,
// "username": "p@p.com", 
// "message": "User logged in successfully",
// "jwt_token": "Optional implementation"
// }



//http://localhost:8081/api/user/signup
app.post('/signup', async (req, res) => { 
    try {
      const new_user = await new userModel(req.body);
      await new_user.save();
      res.status(201).send(new_user);
    } catch (err) {
      res.status(500).send(err);
    }
  });


//http://localhost:8081/api/user/login
app.post('/login', async (req, res) => {
    try {
      const user = await userModel.findOne({username: req.body.user.username})
      if (!user){
        res.status(404).send("No User found")
      }
      res.status(204).json({
            "status": true,
            "email": user.email, 
            "message": "User logged in successfully",
            "jwt_token": "Optional implementation"
          })
    } catch (err) {
      res.status(500).send(err)
    }
  })

module.exports = app
