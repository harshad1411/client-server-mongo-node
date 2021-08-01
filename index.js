const express = require('express');
const app = express();
// const bodyParser = require('body-parser');
const port = 4000;

app.use(express.static('public'))
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.set('view engine','ejs')
require('./models/todo');

require('./routes.js')(app);

app.listen(port,()=>{
    console.log('Server is running');
})