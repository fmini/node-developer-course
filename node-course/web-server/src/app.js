const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

//Define paths for Express config
const publicPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views') //sets the path to the handlebars directory
const partialsPath = path.join(__dirname, '../templates/partials')

//Setup Handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath) //changes the name of the handlebars directory from views to templates (viewsPath variable)
hbs.registerPartials(partialsPath)

//Setup static directory to serve
app.use(express.static(publicPath))

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather',
    name: 'Frank Minichiello'
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About me',
    name: 'Frank Minichiello'
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help',
    name: 'Frank Minichiello'
  })
})

app.get('/weather', (req, res) => {
  res.send({
    forecast:'forecast',
    location:'location'
  })
})

app.get('/help/*', (req, res) => {
  res.render('404', {
    title: 'Help',
    errorMessage: 'Help article not found',
    name: 'Frank Minichiello'
  })
})

app.get('*', (req, res) => {
  res.render('404', {
    title: 'OOPS',
    errorMessage: 'Page not found',
    name: 'Frank Minichiello'
  })
})

app.listen(8080, () => {
  console.log('Server is up on port 8080.')
})