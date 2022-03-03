import { useEffect, useState, useRef } from 'react';

function StyleExplanationLabel(props){
    const isVisible = props.isVisible;
    const content = props.content || {};
    const [shouldDisplay, setShouldDisplay] = useState(false);
    const displayDelay = props.displayDelay || 400
    useEffect(()=>{
        setTimeout(()=>{setShouldDisplay(isVisible)}, displayDelay);
    }, [props.isVisible])

    function getContent(){
        return Object.keys(content).map((item, index)=>{
            return (
                <div key={item}><span className="bold">{item}</span>: <i>{content[item]}</i></div>
            )
        })
    }

    return (
        <div className={`style-explanation-label ${isVisible?'show-explanation':''}`}
            style={shouldDisplay?{display:'inline-block'}:{}}
        >
            {getContent()}
        </div>
    )
}


export default StyleExplanationLabel;