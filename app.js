const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const exphbs = require('express-handlebars');
const express = require('express');
const expressSession = require('express-session');
const flash = require('connect-flash');
const methodOverride = require('method-override');


const app = express();

app.listen(8000);

app.engine('handlebars', exphbs({
  layoutsDir: './views',
  defaultLayout: 'main',
}));
app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/views/`);
// app.get('/', (req, res) => {
//   res.send("This is the home page");
// });
app.use(require('./controllers/'));