import React, { useState, useEffect } from 'react';

function getSingleElement(type, content){
    if (isListElementType(type)) return getSingleListElementType(type, content);
    else if (isNonListElementType(type)) return getSingleNonListElementType(type, content);
    else {
        console.error(`${type} is not supported: contentRenderer.js`);
        return ''
    }
}

function getSingleListElementType(type, content){
    if (type === 'Section') return ``
    if (type === 'UList') return ``
    if (type === 'Article') {
        return <article>{content.map((element, index)=>{return <ContentRenderer key={index} content={element}/>})}</article>
    }
}

function getSingleNonListElementType(type, content){
    if (type === 'Paragraph') return <p dangerouslySetInnerHTML={getDangerousHTML(content)}></p>;
    if (type === 'Headline')  return <h1 className="display-2">{content}</h1>
    if (type === 'Title')     return <h1 className="display-6">{content}</h1>
    if (type === 'ListItem')  return <li key={content}>{content}</li>
}

function isListElementType(elementType){
    let listElementTypes = ['Section','Article','UList'];
    return listElementTypes.includes(elementType)
}

function isNonListElementType(elementType){
    let nonListElementTypes = ['Paragraph', 'Headline', 'Title', 'ListItem'];
    return nonListElementTypes.includes(elementType)
}

function ContentRenderer(props){
    let componentType = props.content.elementType;
    let isInputArrayOfElements = componentType===undefined?true:false;
    let componentContent = props.content.content;
    if (isInputArrayOfElements) return componentContent.map((element, index)=>{
        return <ContentRenderer key={index} content={element}/>
    })
    return getSingleElement(componentType, componentContent)
}

function getDangerousHTML(content){
    return {
        __html: content
    };
}

export default ContentRenderer;