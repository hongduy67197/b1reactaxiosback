const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors')
const port = 3100;
const Router = require('./routes')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())
app.use('/', Router)
app.listen(port, () => {
    console.log(`Server listern in localhost: ${port}`);
})