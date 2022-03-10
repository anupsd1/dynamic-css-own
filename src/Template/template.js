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

    increaseSize = (e) => {
        const id = e.target.id.replace('button-', '')
        const width = getComputedStyle(document.querySelector(`.${id}`)).getPropertyValue("--width")
        const width_without_unit = width.replace("%", "")
        const new_width = parseInt(width_without_unit) + 1;
        console.log(new_width)
        document.querySelector(`.${id}`).style.setProperty('--width', `${new_width}%`);
        
    }

    decreaseSize = (e) => {
        const id = e.target.id.replace('button-', '')
        const width = getComputedStyle(document.querySelector(`.${id}`)).getPropertyValue("--width")
        const width_without_unit = width.replace("%", "")
        const new_width = parseInt(width_without_unit) - 1;
        console.log(new_width)
        document.querySelector(`.${id}`).style.setProperty('--width', `${new_width}%`);
    }

    render() {
        return (
        <div>
            <div>
                <TextBox classValue="textbox-1" />
                <button id="button-textbox-1" onClick={this.increaseSize}>Size 1 Increase</button>
                <button id="button-textbox-1" onClick={this.decreaseSize}>Size 1 Decrease</button>
                
            </div>
            <div>
                <TextBox classValue="textbox-2" />
                <button id="button-textbox-2" onClick={this.increaseSize}> size 2</button>
            </div>
        </div>
        
        )
    }
}

export default Template