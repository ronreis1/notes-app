require('dotenv').config({
    path:(__dirname, 'src/.env')
});

const app = require('./server');
require('./database');


app.listen(app.get('port'), () => {
    console.log('Server on port:', app.get('port'))
})    