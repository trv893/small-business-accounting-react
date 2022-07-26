'use strict';
var debug = require('debug')('my express app');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var logger = require('morgan');

const cors = require('cors');

var apiRoutes = require('./controllers');
var app = express();

app.use(cors({
    origin: '*'
}));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', apiRoutes);

app.use(express.static(path.resolve(__dirname, "./ui/build")));

// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//     var err = new Error('Not Found');
//     err.status = 404;
//     next(err);
// });

// error handlers

// development error handler
// will print stacktrace
//if (app.get('env') === 'development') {
//    app.use(function (err, req, res, next) {
//        res.status(err.status || 500);
//        res.render('error', {
//            message: err.message,
//            error: err
//        });
//    });
//}

// production error handler
// no stacktraces leaked to user
//app.use(function (err, req, res, next) {
//    res.status(err.status || 500);
//    res.render('error', {
//        message: err.message,
//        error: {}
//    });
//});

// app.get('/', function (req, res) {
//     var options = {
//         root: path.join(__dirname)
//     };

//     var fileName = 'index.html';
//     res.sendFile(fileName, options, function (err) {
//         if (err) {
//             next(err);
//         } else {
//             console.log('Sent:', fileName);
//         }
//     });
// });

app._router.stack.forEach(function (r) {
    if (r.route && r.route.path) {
        console.log(r.route.path)
    }
});

app.set('port', process.env.PORT || 3001);

// var server = app.listen(app.get('port'), function () {
//     debug('Express server listening on port ' + server.address().port);
// });

const server = app.listen(process.env.PORT || 3001, () => {
    const port = server.address().port;
    console.log(`Express is working on port ${port}`);
  });