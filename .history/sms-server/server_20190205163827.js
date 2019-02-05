const express = require("express"),
    bodyParser = require("body-parser"),
    morgan = require("morgan"),
    mongoose = require('mongoose');
    jwt = require("jsonwebtoken"),
    expjwt = require("express-jwt"),
    cors = require('cors'),
    app = express();

// const { port, mongodbURI } = require("./config");

// mongoose
//   .connect(mongodbURI, {
//     useMongoClient: true
//   })
//   .then(_ => {
//     console.log("mongodb connection connected");
//     //listen server
//    app.listen(port  || 3000, function() {
//         console.log("sms app listening on port : " + port);
//     });
//   })
//   .catch(error => {
//     console.error("mongodb connection error: ", error, error.stack);
//   });

app.use(cors())


app.use(morgan("dev"));
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json());

const authenticationRoutes = require("./app/routes/auth")(app , jwt);
const grnumber = require("./app/routes/gr-number")(app);
const users = require("./app/routes/user")(app);
const feeRoutes = require("./app/routes/fee")(app);
const setupRoutes = require("./app/routes/setups")(app);
const dashboardRoutes = require("./app/routes/dashboard")(app);
const fileRoutes = require("./app/routes/file")(app);
const feeVoucherRoutes = require("./app/routes/feeVouchers")(app);


app.use("/auth"  , authenticationRoutes);
app.use("/grnumber" , grnumber);
app.use("/users" , users);
app.use("/fee" , feeRoutes);
app.use("/setup" , setupRoutes);
app.use("/dashboard" , dashboardRoutes);
app.use("/file" , fileRoutes);
app.use("/voucher" , feeVoucherRoutes);



// Handle Unwanted Requests
app.get("*", function(req, res) {
    res.send("sms app server status: RUNNING");
})

// Catch unauthorised errors
app.use(function(err, req, res, next) {
    console.log(err);
    res.status(500).json(err);
});

//authentication middleware
function authenticate(req, res, next) {

    try {
        var user = jwt.verify(req.query['token'], 'mysecret');

        if (user) {
            req.user = user;
            next();
        } else {
            throw 'unauthorised';
        }
    } catch (err) {
        next({
            code: 401,
            message: 'invalid token'
        });
    }

}