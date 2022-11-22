const mongoose = require('mongoose')
const AdminJS = require('adminjs');
const AdminJSMongoose = require('@adminjs/mongoose')
AdminJS.registerAdapter(AdminJSMongoose)
const app = require("./middleware");



mongoose.connect(`mongodb://adminPO:Jesuisunadmin123@localhost:27017/portfolio`, {useNewUrlParser: true,useUnifiedTopology: true});


