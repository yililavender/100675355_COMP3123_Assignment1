const express = require('express');
const employeeModel = require('../models/Employee');
const app = express();

//Get ALL
// localhost:8081/api/emp/employees/
app.get('/', async (req, res) => {
  try {
    const employees = await employeeModel.find();
    res.status(200).send(employees);
  } catch (err) {
    res.status(500).send(err);
  }
})

//Create New Record
// {
// "first_name": "Tam",
// "last_name": "Harrow",
// "email": "tam@hollywood.com",
// "gender": "Male",
// "salary": 125500.00
// }
// localhost:8081/api/emp/employees/
app.post('/', async (req, res) => { 
    try {
      const employee = new employeeModel(req.body);
      await employee.save();
      res.status(201).send(employee);
    } catch (err) {
      res.status(500).send(err);
    }
  });

  // localhost:8081/api/emp/employees/63475e8aa3de814fd819209a
app.get('/:id', async (req, res) => {
    try {
      const employee = await employeeModel.findById(req.params.id)
      res.status(200).send(employee)
    } catch (err) {
      res.status(500).send(err)
    }
  })

//Update Record
// localhost:8081/api/emp/employees/63475e8aa3de814fd819209a
app.put('/:id', async (req, res) => {
    try {
      const updatedEmployee = await employeeModel.findByIdAndUpdate(req.params.id, req.body)
      const ne = await updatedEmployee.save()
      res.status(200).send(ne)
    } catch (err) {
      res.status(500).send(err)
    }
  })

//Delete Record
//localhost:8081/api/emp/employees?id=63475e8aa3de814fd819209a
app.delete('/', async (req, res) => {
    try {
      const employee = await employeeModel.findByIdAndDelete(req.query.id)
  
      if (!employee){
        res.status(404).send("No item found")
      }
      res.status(204).send(employee)
    } catch (err) {
      res.status(500).send(err)
    }
  })

module.exports = app