const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');

const app = express();




app.use(logger);
//app.get('/', (req,res) => {
  //  res.sendFile(path.join(__dirname, 'public', 'index.html'));
//})

//set static server
app.use(express.static(path.join(__dirname, 'public')));

//get members route
app.use('/api/members',require('./router/api/members'));

//set route
//we set a route using the object members created in members.js
app.get('/api/members', (req,res) => {
    res.json(members);
});

//get single member
app.get('/api/members/:id', (req,res) => {
const found = members.some(member => member.id === parseInt(req.params.id));
if(found){
    res.json(members.filter(member => member.id === parseInt(req.params.id)));
}else {
    res.status(400).json({msg: `no member with the id ${req.params.id}`})
}

    
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server listening on port ${PORT}`));