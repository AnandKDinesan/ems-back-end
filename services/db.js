const mongoose=require('mongoose')
//connection
mongoose.connect('mongodb://localhost:27017/ems')

//model 
const Employee=mongoose.model('Employee',{
    id:String,
    uname:String,
    age:String,
    desg:String,
    salary:Number
    
})

module.exports={
    Employee 
}