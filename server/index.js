require('dotenv').config()
const express = require('express'),
      sessions = require('express-session'),
      massive = require('massive'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      checkForSession = require('./middlewares/checkForSessions'),
      stripe = require('stripe')(process.env.STRIPE_SECRET_KEY),
      ctrl = require('./controllers/controller'),
      adminCtrl = require('./controllers/adminController')

      const {
          SERVER_PORT,
          SESSION_SECRET,
          CONNECTION_STRING,
          STRIPE_SECRET_KEY 
      } = process.env

const app = express()


app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static(`${__dirname}/../build`))


app.use(sessions({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 366000
    }
}))

app.use(checkForSession)



// product endpoints
app.get('/api/products', ctrl.getProducts);
app.put('/api/navNumbers', ctrl.navNumbers)
app.put('/api/getProduct', ctrl.productDetails);
app.put('/api/cartAdd', ctrl.addProduct);
app.post('/api/deletePhotos', ctrl.deletePhotos)
app.post('/api/deleteItem', ctrl.deleteItem)
app.put('/api/getItemPhotos', ctrl.productDetailPhotos)

// checkout process endpoints
app.post('/api/charge', ctrl.payment)
app.post('/api/confirmationEmail', ctrl.sendEmail)
app.post('/api/sendText', ctrl.sendText)
app.get('/api/end', ctrl.endSession )

// admin endpoints
app.post('/api/auth/login', adminCtrl.login)
app.get('/api/auth/me', adminCtrl.validate)
app.post('/api/auth/register', adminCtrl.register)
app.post('/api/auth/logout', adminCtrl.logout)
app.post('/api/sold', adminCtrl.sold)




massive(CONNECTION_STRING).then( db => {
    app.set('db', db)
    app.listen( SERVER_PORT, () => console.log(`It's going down on port ${SERVER_PORT}!`))
})


