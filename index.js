const express = require('express');
const path = require('path');
const hbs = require('hbs');

let app = express();

app.set("view engine", "hbs");
hbs.registerPartials(path.join(__dirname,'views', 'partials'))
app.use(express.static(path.join(__dirname, 'public')))
app.get('/', (req, res) => {
    res.send('Hello from express');
})
app.get('/about', (req, res) => {
    res.send("About Section")
})
app.get('/user', (req,res) => {
    res.render('user.hbs');
})
app.get('/city/:cityName', (req,res) => {
    res.render('city.hbs', {
        cityName: req.params.cityName
    })
})

app.listen(3000, () => console.log('Listening to port 3000'));