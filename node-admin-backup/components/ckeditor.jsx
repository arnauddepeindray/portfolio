import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
const Ckeditor = (props) => {
    
    return (
            <CKEditor editor={ClassicEditor}/> 
    )
}

export default Ckeditor
