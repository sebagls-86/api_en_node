const express = require('express')
require('dotenv').config()
const cors = require('cors')

require('./functions/database')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api', require('./routes/routerFacturas'))


app.listen(process.env.PORT, () => console.log("Listening on port "+process.env.PORT))

