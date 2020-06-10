const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

//app.get('/', (req,res) => {
  //  res.sendFile(path.join(__dirname, 'public', 'index.html'));
//})

//set static server
app.use(express.static(path.join(__dirname, 'public')));

//set route

const members = [
    {
        id : 1,
        name : "john doe",
        email: "john@email.com",
        status: 'active'
    },
    {
        id : 1,
        name : "jane doe",
        email: "jane@email.com",
        status: 'active'
    },
    {
        id : 1,
        name : "mariam doe",
        email: "mariam@email.com",
        status: 'active'
    }
];

app.get('/api/members', (req,res) => {
    res.json(members);
})




app.listen(PORT, () => console.log(`server listening on port ${PORT}`));