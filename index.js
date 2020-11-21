const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/main_menu',(req, res) => res.render('pages/main_menu'))
  .get('/display_student_detail',(req, res) => res.render('pages/display_student_detail'))
  .get('/classify',(req, res) => res.render('pages/category'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
