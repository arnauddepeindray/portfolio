const express = require('express');
const AdminJS = require('adminjs');
const AdminJSExpress = require('@adminjs/express')
const {Admin} =  require("../models/user")
const bcrypt = require('bcryptjs');
const {adminJs} = require("./admin")

const router = AdminJSExpress.buildAuthenticatedRouter(adminJs, {
    authenticate: async(username, password) => {
        const user = await Admin.findOne({username})
        if(user) {
            const matched = await bcrypt.compare(password, user.password)
            if(matched) {
                return user;
            }
        }
        return false;
    },
    cookiePassword: 'secret-cookie-56454521-okozez'
});

const app = express();

app.use(adminJs.options.rootPath, router);
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send("Welcome !")
})



app.listen(8000, () => console.log("AdminJS Server start"));

module.exports = {app}