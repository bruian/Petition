const helmet = require('helmet')
const express = require('express')
const favicon = require('serve-favicon')
const compression = require('compression')

const app = express()
const port = 3000

app.use(helmet())
app.use(compression({ threshold: 0 }))
app.use(favicon('./static/images/favicon/favicon.ico'))
app.use(express.static('static'))

app.get('/', (req, res) => {
  res.sendFile('./static/index.html')
})

app.listen(port, () => console.log(`Srv started on port ${port}`))
