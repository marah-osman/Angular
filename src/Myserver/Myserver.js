//import packages
const express = require('express');
const bodyParser= require('body-parser');
const cors= require('cors');

const PORT =3000; //اعرف البورت براحتي

const app = express();    //create instance from express

app.use(bodyParser.json()); //tranforme data to json
app.use(cors()); //to handel data 


app.get('/',function(req,res){  //test api 
    res.send("hello from node server");
})

app.listen(PORT,function(){  //app lisen or work on port 3000
    console.log("Server running on port "+PORT)
})

app.post('/save',function(req,res){ //post port to client ts to sent data in form to my server
    console.log(req.body)
    res.status(200).send({"data":"Recieved successfully"})
    //Save data into database
    //mongoDb
    //save data into file 
})


