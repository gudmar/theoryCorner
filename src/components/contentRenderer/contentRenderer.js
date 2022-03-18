import React from 'react';
import ExplanationList from './explanationList.js'
import Link from './link.js'
import UnsignedList from './unsignedList.js'
import ConditionalArray from './conditionalArray.js';
import Image from './image.js'
import Note from './note.js'
import Code from './code.js'
import HiddenCode from './hiddenCode'
import StopWatchState from '../../testComponents/stopWatchState.js';
import StopWatchReducer from '../../testComponents/stopWatchReducer';
import ExampleInIframe from './iFrame';
import HiddenList from './hiddenList';
import ListOfContent from './listOfContent';
import HiddenDescription from './hiddenDescription'
import FlexDemo from './flexDemo/flexDemo'
import GridPresent from './gridPresent/gridPresent';
import {insertItemsToId} from '../../services/elementGenerator'
import Separate from './separate';


function getSingleElement(type, content, otherProps){
    if (isListElementType(type)) return getSingleListElementType(type, content);
    else if (isNonListElementType(type)) return getSingleNonListElementType(type, content, otherProps);
    else {
        console.error(`${type} is not supported: contentRenderer.js`);
        return ''
    }
}

function getSingleListElementType(type, content){
    if (type === 'Section') {
        return <section>{content.map((element, index)=>{return <ContentRenderer key={index} content={element}/>})}</section>
    }
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
    if (type === 'Headline')  {
        return <h1 className="display-2" dangerouslySetInnerHTML={getDangerousHTML(content)}></h1>
    }
    if (type === 'Headline-2')  {
        return <h3 className="display-4"  dangerouslySetInnerHTML={getDangerousHTML(content)}></h3>
    }
    if (type === 'Headline-3')  {
        return <h4 className="display-5" dangerouslySetInnerHTML={getDangerousHTML(content)}></h4>
    }
    if (type === 'SmallHeadline')  return <h4 dangerouslySetInnerHTML={getDangerousHTML(content)}></h4>
    if (type === 'NoteWarning') return <Note severity="warning" content={content} />
    if (type === 'Title')     return <h1 className="display-6">{content}</h1>
    if (type === 'ListItem')  return <li key={content}>{content}</li>
    if (type === 'UnsignedList') return <UnsignedList items={content}/>
    if (type === 'Link') return <Link key={content} href={otherProps.href} content={content} />
    if (type === 'Image') return <Image name={otherProps.name} alt={otherProps.alt} />
    if (type === 'Code') return <Code content={content} />
    if (type === 'HiddenCode') return <HiddenCode content={content} />
    if (type === 'HiddenDescription') {
        return (
            <HiddenDescription 
                legend={content.legend} 
                items={content.items}
                showLegend = {content.showLegend}
                maxHeight = {otherProps.maxHeight}
            />
        )
    }

    if (type === 'GridPresent') return (
        <GridPresent parentWidth= {otherProps.parentWidth} 
                     parentHeight= {otherProps.parentHeight}
                     nrOfChildren={otherProps.nrOfChildren}
                     parentStyle= {otherProps.parentStyle}
                     childStyle=  {otherProps.childStyle}
                     grandChildStyle = {otherProps.grandChildStyle}
                     childByIndexStyle= {otherProps.childByIndexStyle}
        />
    )

    if (type === 'ConditionalArray') 
        return <ConditionalArray headlines={otherProps.headItems} contentItems={content} />
    if (type === 'exampleInIframe') {
        return (<ExampleInIframe 
            src={otherProps.src} 
            title={otherProps.title} 
            width={otherProps.width} 
            height={otherProps.height}/>)
    }
    if (type === 'HiddenList'){
        return (
            <HiddenList content={content}/>
        )
    }
    if (type === 'ListOfContent'){
        return (
            <ListOfContent content={content}/>
        )
    }
    if (type === 'Separate'){
        return (
            <Separate content={content}/>
        )
    }

    if (type === 'StopWatchState') return <StopWatchState />
    if (type === 'StopWatchReducer') return <StopWatchReducer />
    if (type === 'FlexDemo') return <FlexDemo />
    
    
}

function isListElementType(elementType){
    let listElementTypes = ['Section','Article', 'ExplanationList'];
    return listElementTypes.includes(elementType)
}

function isNonListElementType(elementType){
    let nonListElementTypes = [
        'Paragraph', 'Headline','UnsignedList', 'Headline-2','Headline-3', 
        'Title', 'ListItem', 'Link', 'NoteWarning', 'Image', 'Code', 'SmallHeadline', 'ConditionalArray',
        'exampleInIframe', `HiddenList`, 'ListOfContent', 'HiddenCode','HiddenDescription',
        `StopWatchState`, `StopWatchReducer`, `FlexDemo`, `GridPresent`, `Separate`
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
        headItems: props.content.headItems,
        src: props.content.src,
        title: props.content.title,
        width: props.content.width,
        height: props.content.height,
        label: props.content.label,

        parentWidth: props.content.parentWidth,
        parentHeight: props.content.parentHeight,
        nrOfChildren: props.content.nrOfChildren,
        parentStyle: props.content.parentStyle,
        childStyle: props.content.childStyle,
        grandChildStyle: props.content.grandChildStyle,
        childByIndexStyle: props.content.childByIndexStyle,

        maxHeight: props.content.maxHeight,

    }
    
    if (isInputArrayOfElements) {
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