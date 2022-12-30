const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello Argo CD with github action!' + process.env.MY_TEST_PASSWORD + 'password'))
app.listen(3000, () => console.log('Server ready'))