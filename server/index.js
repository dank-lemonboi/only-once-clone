require('dotenv').config()
const express = require('express'),
      sessions = require('express-session'),
      massive = require('massive'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      checkForSession = require('./middlewares/checkForSessions'),
      ctrl = require('./controllers/controller')

      const {
          SERVER_PORT,
          SESSION_SECRET,
          CONNECTION_STRING
      } = process.env

const app = express()


app.use(cors())
app.use(bodyParser.json())


app.use(sessions({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 366000
    }
}))

app.use(checkForSession)

app.get('/api/products', ctrl.getProducts);
app.put('/api/getProduct', ctrl.productDetails);
app.put('/api/addProduct', ctrl.addProduct);



massive(CONNECTION_STRING).then( db => {
    app.set('db', db)
    app.listen( SERVER_PORT, () => console.log(`It's going down on port ${SERVER_PORT}!`))
})


