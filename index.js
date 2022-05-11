const express = require('express');
const {addDate} = require('./middelware/Date')
//init express bi une const app 

const app = express();

const Port = 5001;
//lina el mochkel ely heka todkhel b3athha el api , les fichiers lezem yt7atou fi route mou3yna 
//exemple ena 3ndi fichier esmou users w route ismha users twli mochkel , 
//w el api mnin t3ref 3leya no9sed file wela route mani nwli nsl7ha bil façon hehdi , n7ot les fichiers el kolla fo path mo3yen .


//nzidou argument slach static 
app.use('/static',express.static(__dirname+"/Public"))

app.get('/withnomidelware',(req,res)=>{
    res.send('the time is '+req.date)

})
//ici nous ajoutons le midelware 
app.get('/withmidelware',addDate,(req,res)=>{
   res.send('the time is '+req.date)
})


app.listen(Port,(err)=>{
    err?console.log(err):console.log(`go to the port ${Port}`)
})