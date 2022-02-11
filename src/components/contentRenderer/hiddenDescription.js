
import { getDangerousHTML, uuidProvider } from '../../services/toolbox'
import React, { useState, useRef } from 'react';
import ContentRenderer from './contentRenderer';

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
    console.dir()
    const classes = props.classes;
    const title = props.title;
    const description = props.description;
    const [isExpanded, setIsExpanded] = useState(false);
    function toggleHiddenState(){
        setIsExpanded(!isExpanded);
    }
return(
        <div>
            <div className={classes} onClick={toggleHiddenState}>
                {title}
            </div>
            <div className={`alert alert-light ${isExpanded?'show-animate':'hide-animate'}`}>
            
                <ContentRenderer content={description}/>
            </div>
        </div>
    )
}

// {
//     elementType: 'HiddenDescription',
//     content: {

//         items:[
//             {
//                 type: 'One Time',
//                 title: 'constructor',
//                 description: [

function HiddenDescription(props){
    const legend = props.legend;
    const items = props.items;
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
                console.log(classesMapping[item.type])
                return <SingleItem classes={item.classes} 
                    title={item.title} 
                    description={item.description} 
                    classes={classesMapping[item.type]}
                    key={uuidProv.getNextUuid()} />
            }))
        )
    }
    return (
                <>
                    <Legend inputs={legend} />
                    <hr></hr>
                    <i class="badge rounded-pill bg-secondary mb-2">Click an element to interact with it</i>
                    {allItems()}
                </>
            )        
}


export default HiddenDescription;