import React, { useState, useEffect } from 'react';
import ExplanationList from './explanationList.js'
import Link from './link.js'
import { connect } from 'tls';


function getSingleElement(type, content, href){
    if (isListElementType(type)) return getSingleListElementType(type, content);
    else if (isNonListElementType(type)) return getSingleNonListElementType(type, content, href);
    else {
        console.error(`${type} is not supported: contentRenderer.js`);
        return ''
    }
}

function getSingleListElementType(type, content){
    if (type === 'Section') return ``
    if (type === 'UList') return ``
    if (type === 'ExplanationList') return (
        // <ExplanationList headline={content.headline} content={content.content} />
        <ExplanationList key={content.headline} listItem={content} />
    )
    if (type === 'Article') {
        return <article>{content.map((element, index)=>{return <ContentRenderer key={index} content={element}/>})}</article>
    }
}

function getSingleNonListElementType(type, content, href){
    if (type === 'Paragraph') return <p dangerouslySetInnerHTML={getDangerousHTML(content)}></p>;
    if (type === 'Headline')  return <h1 className="display-2">{content}</h1>
    if (type === 'Headline-2')  return <h3 className="display-4">{content}</h3>
    if (type === 'Title')     return <h1 className="display-6">{content}</h1>
    if (type === 'ListItem')  return <li key={content}>{content}</li>
    if (type === 'Link') return <Link key={content} href={href} content={content} />
}

function isListElementType(elementType){
    let listElementTypes = ['Section','Article','UList', 'ExplanationList'];
    return listElementTypes.includes(elementType)
}

function isNonListElementType(elementType){
    let nonListElementTypes = ['Paragraph', 'Headline', 'Headline-2', 'Title', 'ListItem', 'Link'];
    return nonListElementTypes.includes(elementType)
}

function ContentRenderer(props){
    let componentType = props.content.elementType;
    let componentContent = props.content.content;
    let href = props.content.href;
    let isInputArrayOfElements = componentType===undefined?true:false;
    
    
    if (isInputArrayOfElements) return componentContent.map((element, index)=>{
        return <ContentRenderer key={index} content={element}/>
    })
    return getSingleElement(componentType, componentContent, href)
}

function getDangerousHTML(content){
    return {
        __html: content
    };
}

export default ContentRenderer;