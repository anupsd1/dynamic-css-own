import React, { Component } from 'react'
import TextBox from '../EditableComponents/TextBox'
import "./template.css"

class Template extends Component {
    state = {
        sizeOfTextBox : '' 
        // getComputedStyle(document.getElementById("textbox-1")).getPropertyValue("width")

    }

    changeSize = (e) => {
        console.log(e.target.id)
        const id = e.target.id.replace('button-', '')
        console.log("After replace")
        console.log(id)
        // const width = getComputedStyle(document.getElementsByClassName(id)).getPropertyValue("--width")
        const width = getComputedStyle(document.querySelector(`.${id}`)).getPropertyValue("--width")
        console.log("width")
        console.log(width)
        document.querySelector(`.${id}`).style.setProperty('--width', "100px")
    }

    render() {
        return (
        <div>
            <div>
                <TextBox classValue="textbox-1" />
                <button id="button-textbox-1" onClick={this.changeSize}>Size 1</button>
            </div>
            <div>
                <TextBox classValue="textbox-2" />
                <button id="button-textbox-2" onClick={this.changeSize}> size 2</button>
            </div>
        </div>
        
        )
    }
}

export default Template