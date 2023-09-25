const sequelize = require('./config/dbConfig');

let express = require('express');

let path = require('path');

let cors = require('cors');

let bodyParser = require('body-parser');

let app = express();

app.use(express.json());

app.use(cors());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/auth', require('./routes/auth_route'));

sequelize.sync(/*{force:true}*/).then(() => {

    console.log('tables created successfully!');

}).catch(err => {
    console.log(err);
});

app.listen(3000, () => {
    console.log("app is listening on port 3000");
});