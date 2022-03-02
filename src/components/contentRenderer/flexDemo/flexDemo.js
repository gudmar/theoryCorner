import FlexContainer from './flexContainer';
import GeneralMenu from './generalMenu';
import { useEffect, useState, useRef } from 'react';
import {
    cloneItems, 
    getItemsDefaultStyles, 
    getSingleDefaultStyle, 
    styleContainer, 
    getWrapperDefaultStyle, 
    singleItemDescriptor,
    getWrapperMenuDescriptor,
    getItemMenuDescriptor,
    deepClone,
    componentWidthChangerOnResize
}  from './flexDemoHelperFunctions'


function FlexDemo(){
    // props not needed
    const id = 'flexDemoId'
    const [nrOfElements, setNrOfElements] = useState(getWrapperDefaultStyle().nrOfItems);
    const [containerStyle, setContainerStyle] = useState(getWrapperDefaultStyle());
    const [itemsStyle, setItemsStyle] = useState(getItemsDefaultStyles(nrOfElements));
    const [itemToShowIndex, setItemToShowIndex] = useState(-1);//-1 for container
    const [containerWidth, setContainerWidth] = useState(getWrapperDefaultStyle['width']);

    const [wrapperMenuDescriptor, setWrapperMenuDescriptor] = useState(getWrapperMenuDescriptor())

    let subscribtionToResizeFunction = useRef(null);

    const getValuesForCurrentMenuView = ()=>{
        return itemToShowIndex < 0 
            ? containerStyle
            : {...itemsStyle[itemToShowIndex].styles}
    }

    const [currentMeunContent, setCurrentMenuContent] = useState(getValuesForCurrentMenuView())


    const handleChangeOfItemInMenu = (index) => {
        return (e)=>{
            setItemToShowIndex(index)
        }
    }

    const getDescriptor = () => {
        return itemToShowIndex < 0 ? wrapperMenuDescriptor : getItemMenuDescriptor(itemToShowIndex)
    }

    const handleContainerStyleChange = (newStyle)=>{
        setContainerStyle(newStyle)
    }

    const handleSingleItemChange = (key, newItemStyle, index)=>{
        let newState = cloneItems(itemsStyle);
        newState[index].styles[key] = newItemStyle;
        setItemsStyle(newState)
    }

    const resizeOnWindowResize = (newWidth)=>{
        let defaultDescriptor = getWrapperMenuDescriptor();
        let wrapperStyleClone = {...getWrapperDefaultStyle}
        console.log(newWidth)
        if (newWidth < 881) {
            defaultDescriptor.width = 'range 150 300 200 150';
            setContainerWidth(300);
            wrapperStyleClone.width = 300;
            setContainerStyle(wrapperStyleClone)
        } else if (newWidth < 1205) {
            defaultDescriptor.width = 'range 150 500 400 150';
            setContainerWidth(400);
            wrapperStyleClone.width = 400;
            setContainerStyle(wrapperStyleClone)
        } else if (newWidth >= 1205) {
            wrapperStyleClone.width = 500;
            setContainerStyle(wrapperStyleClone)
        }
        // if (newWidth < 1005) return 'range 150 300 2'
        setWrapperMenuDescriptor(defaultDescriptor)
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

    useEffect(()=>{
        const unsubscribe = () => {subscribtionToResizeFunction.current.unsubscribe(id)}
        if (subscribtionToResizeFunction.current === null){
            subscribtionToResizeFunction.current = componentWidthChangerOnResize();
            subscribtionToResizeFunction.current.subscribe(resizeOnWindowResize, id)
        }
        return unsubscribe
    }, [])

    // const getDescriptor = () => {
        // return itemToShowIndex < 0 ? getWrapperMenuDescriptor() : getItemMenuDescriptor(itemToShowIndex);
    //     setWrapperMenuDescriptor
    // };

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
                    // descriptor = {getDescriptor()}
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