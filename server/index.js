const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const EmployeeModel = require('./models/Employee')


const app = express()
app.use(express.json()) // convert data we are passing from frontend to backend in JSON format
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/employee") //connecting the server to the database


app.post("/login", (req, res) => {
    const {email, password} = req.body;
    EmployeeModel.findOne({email: email}) //if the email passed in the login page is the same with the one on record in the employee table(register page)
    .then(user => {
        if(user){
            if(user.password === password){ // If the password passed in login page is the same with the one on record in the employee table(register page)
                res.json("Success")
            }else{
                res.json("the password is incorrect")
            }
        } else {
            res.json("No record existed") 
        }
    })
})



app.post('/register', (req, res) =>{
EmployeeModel.create(req.body)  //Created a table for the values of name, email and password
.then(employees => res.json(employees)) // Let everything on the table be on JSON format.
.catch(err => res.json(err))
})


app.listen(5001, () => {
    console.log("server is running")
})