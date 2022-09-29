const AdminJS = require('adminjs');
const {Project} = require('../models/project');


const {customBefore, customAfter} = require("./upload-hooks")


const adminJs = new AdminJS({
    databases: [],
    rootPath: "/admin",
    resources: [
        {
        resource:Project,
        options: {
            actions: {
                new: {
                    before: [customBefore],
                    after : [customAfter]
                },
                edit: {
                    before: [customBefore],
                    after : [customAfter]
                }, 

                
            }, 
            properties: {
                content: {
                    components: {edit:AdminJS.bundle("../components/ckeditor.jsx")},
                },

                images: {
                    components: {edit:AdminJS.bundle("../components/upload.tsx")},
                }
            }
            
        }
        }
    ],
});

module.exports = {adminJs}