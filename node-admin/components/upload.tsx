import React from 'react';
import { EditPropertyPropsInArray} from 'adminjs';

import { Box, Input } from '@adminjs/design-system'


const UploadComponent: React.FC<EditPropertyPropsInArray> = (props) => {
    const { record, resource, onChange, property } = props
    

    const onUpload = (event) => {
        const files = event.target.files
        onChange(property.name, files)
    }
    
    return (
        <Box>
            <div className="form-group">
                <Input type="file" id="images" name="images" multiple onChange={onUpload}/>
            </div>
        </Box>
            
            
        )
    
}

export default UploadComponent