//importing express
const  express=require('express')
//importing cores
const cors=require('cors')
//creating server application
const server = express()                                                                                                                        
const logic=require('./services/logic')
//
server.use(cors({
    origin:'http://localhost:3000'
}))

//coverting json to javascript
server.use(express.json())

//port creating
server.listen(8000,()=>{
    console.log('EMS server started at port number 8000');
})

//get all employee
server.get('/get-all-employees',(req,res)=>{
    logic.allEmployees().then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

//add employee
server.post('/add-employee',(req,res)=>{
    logic.addEmployee(req.body.id,req.body.empName,req.body.emAge,req.body.emDesg,req.body.emSalary).then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

//delete employee
server.delete('/delete-employee/:id',(req,res)=>{
    logic.removeEmp(req.params.id).then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

//get an employee
server.get('/get-an-employee/:id',(req,res)=>{
    logic.getAnEmp(req.params.id).then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

//update employee
server.post('/update-employee',(req,res)=>{
    logic.editEmp(req.body.id,req.body.empName,req.body.emAge,req.body.emDesg,req.body.emSalary).then((result)=>{
        res.status(result.statusCode).json(result)
    })
})