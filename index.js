const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('hello wow to learn express  hello nodmon from my second node server');
});

const users = [
    {id: 0, name:'Shabana', email:'Shabana@gmail.com', phone:'01788888888'},
    {id: 1, name:'Sabnur', email:'Sabnur@gmail.com', phone:'01788888888'},
    {id: 2, name:'Soniya', email:'Soniya@gmail.com', phone:'01788888888'},
    {id: 3, name:'Susmita', email:'Susmita@gmail.com', phone:'01788888888'},
    {id: 4, name:'Shrabonti', email:'Shrabonti@gmail.com', phone:'01788888888'},
    {id: 5, name:'Suchorita', email:'Suchorita@gmail.com', phone:'01788888888'},
    {id: 6, name:'Shathi', email:'Shathi@gmail.com', phone:'01788888888'}
]


app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user=> user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users);
    }
    
});

// app.Method
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body)
    // res.send(JSON.stringify(newUser));
    res.json(newUser)
})

// dynamic Api 
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user);
});

app.get('/fruits', (req, res) => {
    res.send(['mango', 'oranges', 'banana', 'apple']);
})

app.listen(port, () => {
    console.log('Listening to port', port);
})