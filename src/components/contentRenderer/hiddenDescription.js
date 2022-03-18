
import { getDangerousHTML, uuidProvider } from '../../services/toolbox'
import React, { useState, useRef, useEffect } from 'react';
import ContentRenderer from './contentRenderer';

/*
     !!!!!  Give a maxHeight property to change defoult height of 60rem
*/

function LegendItem(props){
    const type = props.type;
    const classes = props.classes;
    const description = props.description;
    return (
        <div>
            <div className={`${classes} disabled mb-2`}>{type}</div>
            <span>{description}</span>
        </div>
    )
}

function Legend(props){
    const legendInputs = props.inputs;
    
    return (
        <>
        <h4>Legend</h4>
        {legendInputs.map((item)=>{
           return <LegendItem key={item.type} type={item.type} classes = {item.styleClasses} description={item.description}/>
        })}
        </>
    )
}

function SingleItem(props){
    const classes = props.classes;
    const title = props.title;
    let maxHeight = {maxHeight: props.maxHeight} || {maxHeight:'60rem'};
    const description = props.description;
    const [isExpanded, setIsExpanded] = useState(false);
    function toggleHiddenState(){
        setIsExpanded(!isExpanded);
    }
    const getMaxHeight  = () => {
        return isExpanded ? maxHeight : {maxHeight:'0px'};
    }
return(
        <div>
            <div className={classes} onClick={toggleHiddenState}>
                {title}
            </div>
            <div className={`alert alert-light ${isExpanded?'show-animate':'hide-animate'}`} style={getMaxHeight()}>
            
                <ContentRenderer content={description}/>
            </div>
        </div>
    )
}

function HiddenDescription(props){
    const legend = props.legend;
    const items = props.items;
    const showLegend = props.showLegend===undefined ? true : props.showLegend;
    const uuidProv = new uuidProvider();
    const classesMapping = extractClassesFromLegendDescriptor();
    function extractClassesFromLegendDescriptor(){
        let output = {};
        for (let item of legend){
            output[item.type] = item.styleClasses;
        }
        return output;
    }
    function allItems(){
        return (
            items.map((item=>{
                return <SingleItem classes={item.classes} 
                    title={item.title} 
                    maxHeight = {item.maxHeight}
                    description={item.description} 
                    classes={classesMapping[item.type]}
                    key={uuidProv.getNextUuid()} />
            }))
        )
    }
    return (
                <>
                    {showLegend ? <Legend inputs={legend} /> : null}
                    <hr></hr>
                    <i className="badge rounded-pill bg-secondary mb-2">Click an element to interact with it</i>
                    {allItems()}
                </>
            )        
}


export default HiddenDescription;