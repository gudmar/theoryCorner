import getDangerousHTML from '../../services/toolbox'
import React, { useState, useRef } from 'react';

function CodeSection(props){
    const arrow = useRef();
    const [isExpanded, setIsExpanded] = useState(false);
    function toggleHiddenState(){
        setIsExpanded(!isExpanded);
    }
return(
        <div>
            <div className="bg-light" onClick={toggleHiddenState}>
                <span ref={arrow} className={`${isExpanded?'expanded':'collapsed'}`}>&#9658;</span>
                <span dangerouslySetInnerHTML={props.info}></span>
            </div>
            <div className={`alert alert-dark collapse ${isExpanded?'show':''}`} dangerouslySetInnerHTML={props.code}>
            </div>
        </div>
    )
}

function HiddenCode(props){
    let content = props.content;
    return (
        props.content.map((item, index)=>{
            return <CodeSection key = {index} info={item.info} code={item.code} />
        })
        
    )
}


export default HiddenCode;