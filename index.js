const express = require('express');
const PORT = process.env.PORT || 8080;
const personRouter = require('./routes/person.routes.js');
const cursRoutes = require('./routes/curs.routes.js')
const app = express();

app.use(express.json());
app.use(personRouter);
app.use(cursRoutes)
app.use(express.static(__dirname));


app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/static/glava.html');
})
app.get('/person/:id', (req, res)=>{
    res.sendFile(__dirname + '/static/singlecar.html');
})
app.get('/help', (req, res)=>{
    res.send('Hello from help');
})
app.listen(PORT, ()=>console.log(`Сервер запущен на порту ${PORT}...`))