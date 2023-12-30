import React, { useState } from "react";
import './Panel.css';
import Nav from './Nav';
function Panel(){
    const [content, setContent] = useState('');

    const submit = () => {
        const fieldElement = document.querySelector('.field');
        const fieldText = fieldElement.value;
        const processedText = processText(fieldText);
        fieldElement.value = processedText;
    };

    const processText = (inputText) => {
        const regex = /\*\[(.*?)\]\*/g;
        return inputText.replace(regex, '👉$1👈');
    };
    return(
        <div className="panel">
            <Nav/>
            <textarea className="field"/>
            <button className="submit" onClick={submit}>Go</button>
        </div>
    )
}
export default Panel;