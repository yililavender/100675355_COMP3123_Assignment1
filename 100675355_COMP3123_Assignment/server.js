const express = require('express');
const mongoose = require('mongoose');
const employeeRouter = require('./routes/EmployeeRoutes.js');

const app = express();
app.use(express.json()); 


mongoose.connect('mongodb+srv://yililavender:wVdh5ZSRzsyc2Kl8@cluster0.asthkb5.mongodb.net/assignment?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use("/api/emp/employees/", employeeRouter);

app.listen(process.env.PORT || 8081, () => { console.log('Server is running...') });