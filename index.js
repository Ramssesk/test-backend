const express = require ('express')
const cors = require('cors')
const app = express()
const { connect } = require('./config/db')

connect();

app.use(cors());
app.use(express.json({extended: true}));

app.use('/api/users', require('./routes/users'));

const port = process.env.port || 4000

app.listen(port, async () => {
    console.log(`puerto ${port}`)
})