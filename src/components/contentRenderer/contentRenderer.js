import React, { useState, useEffect } from 'react';
import ExplanationList from './explanationList.js'
import Link from './link.js'
import UnsignedList from './unsignedList.js'
import Image from './image.js'
import Note from './note.js'
import Code from './code.js'


function getSingleElement(type, content, otherProps){
    if (isListElementType(type)) return getSingleListElementType(type, content);
    else if (isNonListElementType(type)) return getSingleNonListElementType(type, content, otherProps);
    else {
        console.error(`${type} is not supported: contentRenderer.js`);
        return ''
    }
}

function getSingleListElementType(type, content){
    if (type === 'Section') return ``
    if (type === 'UnsignedList') return <UnsignedList items={content} />
    if (type === 'ExplanationList') return (
        // <ExplanationList headline={content.headline} content={content.content} />
        <ExplanationList key={content.headline} listItem={content} />
    )
    if (type === 'Article') {
        return <article>{content.map((element, index)=>{return <ContentRenderer key={index} content={element}/>})}</article>
    }
}

function getSingleNonListElementType(type, content, otherProps){
    if (type === 'Paragraph') return <p dangerouslySetInnerHTML={getDangerousHTML(content)}></p>;
    if (type === 'Headline')  return <h1 className="display-2">{content}</h1>
    if (type === 'Headline-2')  return <h3 className="display-4">{content}</h3>
    if (type === 'Headline-3')  return <h4 className="display-5">{content}</h4>
    if (type === 'NoteWarning') return <Note severity="warning" content={content} />
    if (type === 'Title')     return <h1 className="display-6">{content}</h1>
    if (type === 'ListItem')  return <li key={content}>{content}</li>
    if (type === 'UnsignedList') return <UnsignedList items={content}/>
    if (type === 'Link') return <Link key={content} href={otherProps.href} content={content} />
    if (type === 'Image') return <Image name={otherProps.name} alt={otherProps.alt} />
    if (type === 'Code') return <Code content={content} />
}

function isListElementType(elementType){
    let listElementTypes = ['Section','Article', 'ExplanationList'];
    return listElementTypes.includes(elementType)
}

function isNonListElementType(elementType){
    let nonListElementTypes = [
        'Paragraph', 'Headline','UnsignedList', 'Headline-2','Headline-3', 
        'Title', 'ListItem', 'Link', 'NoteWarning', 'Image', 'Code'
    ];
    return nonListElementTypes.includes(elementType)
}

function ContentRenderer(props){
    let componentType = props.content.elementType;
    let componentContent = props.content.content;
    // let href = props.content.href;
    let isInputArrayOfElements = componentType===undefined?true:false;
    let otherProps = {
        href: props.content.href,
        name: props.content.name,
        alt:  props.content.alt,
    }
    
    
    if (isInputArrayOfElements) {
        console.log(isInputArrayOfElements)
        console.log(props)
        return componentContent.map((element, index)=>{
            return <ContentRenderer key={index} content={element}/>
        })
    }
    return getSingleElement(componentType, componentContent, otherProps)
}

function getDangerousHTML(content){
    return {
        __html: content
    };
}

export default ContentRenderer;