const express = require('express')
const server = express()

server.use(express.static("public"))

const nunjucks = require('nunjucks')

nunjucks.configure("./", {
  express: server
})

server.get("/chama", (req, res) => {
  return res.send('ma nessa porra fdp')
})

server.listen(3030)