const path =  require("path");
const fs = require('fs');

const getUploadedImages = (payload) => {
    const images = []
    Object.entries(payload).forEach(([key, value]) => {
        if(key.startsWith("images.")){
            images.push(value)
        }
    })

    return images

}

const clearUploadedImages = (payload) => {
    const newPayload = payload
    Object.entries(newPayload).forEach(([key, value]) => {
        if(key.startsWith("images.")){
            delete newPayload[key]
        }
    })
    return newPayload
}




const customBefore = (request, context) => {
    const { payload = {}, method } = request

    if (method !== 'post') return request
    
    context.images = getUploadedImages(payload);
    request.payload = clearUploadedImages(payload);
    return request;
}

const customAfter = async (response, request, context) => {
    const {record, images} = context

    if(record.isValid() && images) {
        const images_path = [];
        images.map(async image =>{
            const filepath =  path.join("upload", record.params._id, image.name)
            await fs.promises.mkdir(path.dirname(filepath), { recursive: true })
            await fs.promises.copyFile(image.path, filepath)
            images_path.push(`/${filepath}`)
            
        })
        await record.update({images: images_path})
    }

    return response

}


module.exports = {customBefore, customAfter}