// const express = require('express');
// const app = express();
// const port = 8000;
    
// app.listen(port, () => console.log(`Listening on port: ${port}`) );

const express = require('express');
const cors = require('cors');
const app = express();
require('../server/config/mongoose.config'); 
app.use(cors())
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); // This is new

require('./routes/product.routes')(app); // This is new
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})
