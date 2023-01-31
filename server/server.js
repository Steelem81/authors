const express = require('express');
const cors = require('cors');
const app = express();
const Port = 8000

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./config/mongoose.config')
require('./routes/author.routes')(app);

app.listen(Port, ()=> {
    console.log(`Listening at port ${Port}`)
})