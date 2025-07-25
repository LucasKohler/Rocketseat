//const http = require('http')
import http from 'node:http'

// commonJS -> require
// ESModules -> import/export

// stateful - stateless

const users = []

const server = http.createServer((request, response) => {
  const { method, url } = request

  if (method === 'GET' && url === '/users') {
    return response
      .setHeader('Content-type', 'application/json')
      .end(JSON.stringify(users))
  }

  if (method === 'POST' && url === '/users') {
    users.push({
      id: 1,
      name: 'John Doe',
      email: 'Johndoe@example.com'
    })

    return response.writeHead(201).end()
  }

  return response.writeHead(404).end()
})

server.listen(3333)