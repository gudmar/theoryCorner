import { useEffect, useState, useRef } from 'react';

function StyleExplanationLabel(props){
    const isVisible = props.isVisible;
    const content = props.content || {};

    function getContent(){
        return Object.keys(content).map((item, index)=>{
            return (
                <div key={item}><span className="bold">{item}</span>: <i>{content[item]}</i></div>
            )
        })
    }

    return (
        <div className="style-explanation-label" style={isVisible?{display:'inline-block'}:{}}>
            {getContent()}
        </div>
    )
}


export default StyleExplanationLabel;