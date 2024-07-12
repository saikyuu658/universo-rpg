
import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';


export default function EditoField() {
    const editor = useRef(null);
	const [content, setContent] = useState('');
    const config = {
        height: '500px',
        removeButtons: ['file', 'image', 'video', 'classSpan'],
        className : 'text-black border-orange-700',
        theme: 'dark'
    }
    return (
      <JoditEditor
            ref={editor}
            config={config}
			value={content}
			onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
			onChange={(newContent) => {}}
		/>
    )
}