const express = require('express');
const mongoose = require('mongoose')
const bcrypt = require("bcryptjs")
const AdminJS = require('adminjs');
const AdminJSExpress = require('@adminjs/express');
const AdminJSMongoose = require('@adminjs/mongoose')
AdminJS.registerAdapter(AdminJSMongoose)
const {Admin} =  require('./models/user')
const {Project} = require('./models/project');



const adminJs = new AdminJS({
    databases: [],
    rootPath: "/admin",
    resources: [Project],
});

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

mongoose.connect(`mongodb://adminPO:Jesuisunadmin123@localhost:27017/portfolio`, {useNewUrlParser: true,useUnifiedTopology: true});


app.listen(8000, () => console.log("AdminJS Server start"));