const mongoose = require('mongoose');
const app = require('./app');
require('dotenv').config();

const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});

const db_url = process.env.DB_URL;

mongoose.connect(db_url,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log('DB is connected');
})