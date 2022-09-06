const express = require('express');
const mongoose = require('mongoose')

const AdminJS = require('adminjs');
const AdminJSExpress = require('@adminjs/express');
const AdminJSMongoose = require('@adminjs/mongoose')
AdminJS.registerAdapter(AdminJSMongoose)
const {User} = require('./models/user');



const adminJs = new AdminJS({
    databases: [],
    rootPath: "/admin",
    resources: [User],
});

const router = AdminJSExpress.buildRouter(adminJs);
const app = express();

app.use(adminJs.options.rootPath, router);

mongoose.connect(`mongodb://adminPO:Jesuisunadmin123@localhost:27017/portfolio`, {useNewUrlParser: true,useUnifiedTopology: true});


app.listen(8000, () => console.log("AdminJS Server start"));