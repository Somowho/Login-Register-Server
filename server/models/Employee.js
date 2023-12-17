const mongoose = require('mongoose')
// we are creating a table for our employee in the database
const EmployeeSchema = new mongoose.Schema({
    name: String,
    email: String, 
    password: String
})


const EmployeeModel = mongoose.model("employees", EmployeeSchema) //created employees table and we also hv d schema
module.exports = EmployeeModel