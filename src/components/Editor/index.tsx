
import {useState, useRef} from 'react';
import JoditEditor from 'jodit-react';
import './style.css'


export default function EditoField({propsEditor}:any) {
    const editor = useRef(null);
	const [content, setContent] = useState('');
    const config = {
        height: '60vh',
        removeButtons: ['file', 'image', 'video', 'classSpan', 'spellcheck', 'ul', 'ol'],
        className : "text-black"
      
    }
    return (
      <JoditEditor
            ref={editor}
            config={config}
            {...propsEditor}
			
		/>
    )
}