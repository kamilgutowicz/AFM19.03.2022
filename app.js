//ctrl + c - kill terminal w node

/*console.log("Hello World");

const fromFunctionsJsFile = require("./functions");

console.log(fromFunctionsJsFile.sayHello());*/

/* 1 sposób postawienia serwera

const http = require('http');

const handler = (request, response) => {
    console.log("sample message");
    response.end("Hello World");
}

const server = http.createServer(handler);
const port = 3000;

server.listen(port, (err) =>{
    if (err) {return console.log(`Wystąpił błąd ${err.message}`);}
    return console.log(`Apka działa na porcie ${port}`);
}) */

// get - pobieramy dane, 
// end pointy przy app.get ('/omnie') - zmieniamy adresy przy koncowkach w adresie www


/*const express = require('express');
const app = express();
const port = 3000;
const imie = "wiola"

app.get('/', function(reg, res){
    res.send("<h2>Hello World</h2>");
})

app.get('/about', function(reg, res){
    res.send("<h2>about</h2>");
})

app.get('/pricing', function(reg, res){
    res.send("<h2>Cennik</h2>");
})

app.get('/imie', function(reg, res){
    res.send(`<h2>Imię ${imie}</h2>`);
})

app.listen(port, (err) =>{
    if (err) {return console.log(`Wystąpił błąd ${err.message}`);}
    return console.log(`Apka działa na porcie ${port}`);
}) */


const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const imie = "wiola";
const outsideTitle = 'podtytuł';
const dataFromFunctionsJS = require("./functions");

app.set('view engine', 'hbs');
app.use('/assets', express.static(path.join(__dirname, './assets')));
app.use('/js', express.static(path.join(__dirname, './js')));
app.get('/', function(reg, res){
    res.render('index', {
        pageTitle: "Zajęcia AFM 19.03.2022",
        subtitle: outsideTitle,
        example: dataFromFunctionsJS.sayHello2(),
    })
})

app.get('/about', function(reg, res){
    res.render('about')
})

app.get('/about2', function(reg, res){
    res.send("<h2>about</h2>");
})

app.get('/pricing', function(reg, res){
    res.send("<h2>Cennik</h2>");
})

app.get('/imie', function(reg, res){
    res.send(`<h2>Imię ${imie}</h2>`);
})

app.listen(port, (err) =>{
    if (err) {return console.log(`Wystąpił błąd ${err.message}`);}
    return console.log(`Apka działa na porcie ${port}`);
})