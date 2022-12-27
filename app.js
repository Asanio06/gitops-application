const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello Argo CD new version 2!'))
app.listen(3000, () => console.log('Server ready'))