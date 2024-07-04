const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const port = 3000;

//static files
app.use(express.static('public'));
app.use('/css',express.static(__dirname + 'public/css'));
app.use('/img',express.static(__dirname + 'public/img'));
app.use('/js',express.static(__dirname + 'public/.js'));

//templating engine 
app.set('views','./src/views/partials')
app.set('view engine','ejs')
app.set('/')

app.use(bodyParser.urlencoded({ extended : true }))

//routes
const newsRouter = require('./src/routes/news')

app.use('/',newsRouter)
app.use('/article',newsRouter)

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

//listen on port 3000
app.listen(port, () => console.log(`Listening on port ${port}`));
