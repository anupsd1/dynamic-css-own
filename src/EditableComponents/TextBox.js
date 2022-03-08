import React, { useEffect } from 'react'
// import { sizeOfText } from '../actions/textboxsize'

function TextBox(props) {
        
    return (
        <div>
            <input type="text" className={props.classValue} />
        </div>
    )
}

export default TextBox