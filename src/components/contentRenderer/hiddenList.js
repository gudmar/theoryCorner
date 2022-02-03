import React, { useState } from 'react';

function ListElement(props){
    let title = props.title;
    let label = props.label;
    let content = props.content;
    let [isCollapsed, setIsCollapsed] = useState(props.isCollapsed || true);
    function conditionalColon(){
        return (
            title.trim() !== '' && label.trim() !== '' ? <span>:</span> : <></>
        )
    }
    function toggleCollapse(){
        setIsCollapsed(!isCollapsed);
        console.log(isCollapsed)
    }
    function getDecorator(){
        if (!isContent(content)) return <span>&#8226; </span>
        if (isCollapsed) return <span>+ </span>
        return <span>- </span>
    }
    return (        
        <li key={title+label} className="m-3">
            {getDecorator()}
            <span onClick={toggleCollapse} className={` ${isContent(content)?"hoverable":""}`}>
                <strong>{title}</strong> 
                {conditionalColon()} 
                <span>{label}</span>
            </span>
            {
                isContent(content) && (!isCollapsed)? 
                <HiddenList content={content} 
                    
                    
                />:
                <></>
            }
        </li>
    )
}

function isContent(content){
    if (content === null) return false; 
    if (content === undefined) return false; 
    if (Array.isArray(content) && content.length ===0) return false;
    if (content === '') return false;
    return true;
}

function HiddenList(props){
    let content = props.content;
    function getAllListElements(){
        if (!isContent(content)) return <></>;
        let listItems = content.map((item, index)=>{
            return (
                <ListElement key={JSON.stringify(item)} title={item.title} label={item.label} content={item.content} />
            )
        })
        return (
            
            <>
                {listItems}
            </>
        )
    }
        return (
            <ul className="no-decoration">
                {getAllListElements()}
            </ul>
        )
    
}

export default HiddenList;