import FlexContainer from './flexContainer';
import FlexMenu from './flexMenu';
import { useEffect, useState } from 'react';

function styleContainer(settingObj){
    let outlet = {};
    if (settingObj.display !== undefined){outlet.display = settingObj.display};
    if (settingObj.direction !== undefined){outlet.direction = settingObj.direction};
    if (settingObj.wrap !== undefined){outlet.wrap = settingObj.wrap};
    if (settingObj.justifyContent !== undefined){outlet.justifyContent = settingObj.justifyContent};
    if (settingObj.alignItems !== undefined){outlet.alignItems = settingObj.alignItems};
    if (settingObj.content !== undefined){outlet.content = settingObj.content};
    return outlet;
}

function singleItemDescriptor(settingObj){
    let outlet = {};
    if (settingObj.order !== undefined){outlet.order = settingObj.order}
    if (settingObj.grow !== undefined){outlet.grow = settingObj.grow}
    if (settingObj.shrink !== undefined){outlet.shrink = settingObj.shrink}
    if (settingObj.basis !== undefined){outlet.grow = settingObj.grow}
    if (settingObj.self !== undefined){outlet.order = settingObj.self}
    return outlet;
}

function getWrapperDefaultStyle(){
    return {
        // display: 'flex',
        // flexDirection: unset,
        // flexWrap: unset,
        // justifyContent: unset,
        // justifyItems: unset, 
        // alignItems: unset,
        // alignContent:unset,
    }
}
function getSingleDefaultStyle(index){
    return {
        styles: {
            // order: unset,
            // flexGrowth: unset,
            // flexShrink: unset,
            // flexBasis: unset,
            // alignSelf: unset,
        },
        key: index
    }
}

function getItemsDefaultStyles(nrOfItems){
    let output = [];
    for(let i = 0; i < nrOfItems; i++){
        output.push(getSingleDefaultStyle(i))
    }
    return output;
}

function cloneItems(items){
    let newState = [];
    items.forEach((item, index, arr)=>{
        let newItem = getSingleDefaultStyle(index);
        newItem.key = item.key;
        for(let key of Object.getOwnPropertyNames(item.styles)){
            newItem.styles[key] = item.styles[key]
        }
        newState.push(newItem)
    })
        return newState;
}

function FlexDemo(props){
    // props not needed
    const [nrOfElements, setNrOfElements] = useState(5);
    const [containerStyle, setContainerStyle] = useState(getWrapperDefaultStyle());
    const [itemsStyle, setItemsStyle] = useState(getItemsDefaultStyles(nrOfElements));
    const [itemToShowIndex, setItemToShowIndex] = useState(-1);//-1 for container

    const handleContainerStyleChange = (newStyle)=>{setContainerStyle(newStyle)}
    const handleSingleItemChange = (newItemStyle, index)=>{
        let newState = cloneItems(itemsStyle);
        newState.splice(index, 1, newItemStyle);
    }
    const handleChangeNrOfItems = (newNumberOfItems)=>{
        let deltaNrOfItems = newNumberOfItems - itemsStyle.length;
        let newState = cloneItems(itemsStyle);
        if(deltaNrOfItems > 0){ // added
            for(let i = 0; i < deltaNrOfItems; i++){
                newState.push(getSingleDefaultStyle(itemsStyle.length + i))
            }
        }
        if (deltaNrOfItems < 0){
            for(let i = 0; i < Math.abs(deltaNrOfItems); i++){
                newState.pop();
            }
        }
        if (deltaNrOfItems === 0){
            console.warn('Something is wrong. deltaNrOfItems is 0 and handelChangeNrOfItems tirggered')
        }
    }



    return (
        <>
            <div className="felx-demo-wrapper row">
                <div className = "col-3">
                    <FlexMenu 
                        containerStyle={containerStyle} 
                        itemsStyle={itemsStyle}
                        itemToShowIndex={itemToShowIndex}
                        containerStyleChangeHandle = {handleContainerStyleChange}
                        itemStyleChangeHandle = {handleSingleItemChange}
                        nrItemsStyleChangeHandle = {handleChangeNrOfItems}
                    >
                    </FlexMenu>
                </div>
                <div className = "col-9">
                    <FlexContainer containerStyle={containerStyle} itemsStyle={itemsStyle}></FlexContainer>
                </div>
            </div>
        </>
    )
}

export default FlexDemo;