const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.get('/main_menu',function (req, res) {
res.render('pages/main_menu.ejs')
});
app.use(express.static(path.join(__dirname, 'public')));

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
