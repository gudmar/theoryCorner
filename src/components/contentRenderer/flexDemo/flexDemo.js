import FlexContainer from './flexContainer';
import GeneralMenu from './generalMenu';
import { useEffect, useState } from 'react';
import {
    cloneItems, 
    getItemsDefaultStyles, 
    getSingleDefaultStyle, 
    styleContainer, 
    getWrapperDefaultStyle, 
    singleItemDescriptor,
    getWrapperMenuDescriptor,
    getItemMenuDescriptor,
    deepClone
}  from './flexDemoHelperFunctions'


function FlexDemo(){
    // props not needed
    const [nrOfElements, setNrOfElements] = useState(getWrapperDefaultStyle().nrOfItems);
    const [containerStyle, setContainerStyle] = useState(getWrapperDefaultStyle(getWrapperDefaultStyle()));
    const [itemsStyle, setItemsStyle] = useState(getItemsDefaultStyles(nrOfElements));
    const [itemToShowIndex, setItemToShowIndex] = useState(-1);//-1 for container
    const [containerWidth, setContainerWidth] = useState(getWrapperDefaultStyle['width']);

    const getValuesForCurrentMenuView = ()=>{
        return itemToShowIndex < 0 
            ? containerStyle
            : {...itemsStyle[itemToShowIndex].styles}
    }

    const [currentMeunContent, setCurrentMenuContent] = useState(getValuesForCurrentMenuView())


    const handleChangeOfItemInMenu = (index) => {
        return (e)=>{setItemToShowIndex(index)}
    }

    const handleContainerStyleChange = (newStyle)=>{
        setContainerStyle(newStyle)
    }

    const handleSingleItemChange = (key, newItemStyle, index)=>{
        let newState = cloneItems(itemsStyle);
        newState[index].styles[key] = newItemStyle;
        setItemsStyle(newState)
    }

    const handleChangeNrOfItems = (newNumberOfItems)=>{
        let deltaNrOfItems = newNumberOfItems - itemsStyle.length;
        let newItemsState = cloneItems(itemsStyle);
        let newContainerStyleState = {...containerStyle}
        const mutateBothStates = () => {
            newContainerStyleState.nrOfItems = newItemsState.length;
            setItemsStyle(newItemsState);
            setContainerStyle(newContainerStyleState)
        }
        const addItemsToState = () => {
            for(let i = 0; i < deltaNrOfItems; i++){
                newItemsState.push(getSingleDefaultStyle(itemsStyle.length + i))
            }
        }
        const dropItemsFromState = () => {
            for(let i = 0; i < Math.abs(deltaNrOfItems); i++){
                newItemsState.pop();
            }
        }
        const throwErrorOnInvalidInput = ()=>{
            if (isNaN(deltaNrOfItems)) {
                throw new Error(`
                    FlexDemo: handleChangeNrOfItems: newNumberOfItems is ${newNumberOfItems}, should be of a number type
                `)
            }
            if (deltaNrOfItems === 0){
                throw new Error(`
                    Something is wrong. deltaNrOfItems is 0 and handelChangeNrOfItems tirggered
                `)
            }    
        }

        throwErrorOnInvalidInput();

        if (deltaNrOfItems !== 0) {
            if(deltaNrOfItems > 0){ addItemsToState(); }
            if (deltaNrOfItems < 0) { dropItemsFromState(); }
            mutateBothStates();
        }
    }

    const getDescriptor = () => {
        return itemToShowIndex < 0 ? getWrapperMenuDescriptor() : getItemMenuDescriptor(itemToShowIndex);
    };

    const handleSingleItemStyleChange = (index, key, newValue)=>{
        let itemStyleClone = {...itemsStyle[index].styles};
        let allItemsStyleClone = deepClone(itemsStyle)
        if (newValue === null) {
            delete itemStyleClone[key]
        } else {
            itemStyleClone[key] = newValue;
        }
        allItemsStyleClone[index].styles = itemStyleClone;
        setItemsStyle([...allItemsStyleClone]);
    }

    function changeHandlerGeneric(e){
        const key = e.key;
        const newVal = e.newVal;
        const eSource = e.eSource;
        const handleNumberLikeFieldChange = () => {
            itemToShowIndex>=0
            ? handleSingleItemStyleChange(itemToShowIndex, key, newVal)
            : handleChangeNrOfItems(newVal) 
            return undefined;
        }
        const handleRangeFieldChange = () => {
            const containerStyleClone = {...containerStyle};
            setContainerWidth(newVal);
            containerStyleClone[key] = containerWidth;
            handleContainerStyleChange(containerStyleClone);
            return undefined;
        }
        const handleButtonsClick = () => {
            if(key === 'Go to container'){
                setItemToShowIndex(-1);
            }
            return undefined;
        }
        const handleSelectFieldChange = () => {
            const containerStyleClone = {...containerStyle};
            containerStyleClone[key] = newVal==='undefined'?'':newVal;
            if (itemToShowIndex>=0){
                handleSingleItemChange(key, newVal, itemToShowIndex)
            } else if(key === 'nrOfItems') {
                handleChangeNrOfItems(newVal)
            } else {
                handleContainerStyleChange(containerStyleClone)
            }
        }

        if (['number', 'number-null','text-null'].includes(eSource)){
            return handleNumberLikeFieldChange();
        } else if (eSource === 'range'){
            return handleRangeFieldChange();
        } else if (eSource === 'button'){
            return handleButtonsClick();
        } else {
            return handleSelectFieldChange();
        }
            return undefined
    }

    return (
        <>
            <div className="felx-demo-wrapper row">
                <div className = "flex-demo-menu col">
                <GeneralMenu
                    descriptor = {getDescriptor()}
                    currentValues = {getValuesForCurrentMenuView()}
                    changeHandler = {changeHandlerGeneric}
                />

                </div>
                <div className = "col p-1">
                    <FlexContainer 
                        containerStyle={containerStyle} 
                        itemsStyle={itemsStyle}
                        itemToDisplayInMenuIndex={handleChangeOfItemInMenu}
                    >
                    </FlexContainer>
                </div>
            </div>
        </>
    )
}

export default FlexDemo;