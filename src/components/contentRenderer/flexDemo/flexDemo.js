import FlexContainer from './flexContainer';
import GeneralMenu from './generalMenu';
import { useEffect, useState, useRef } from 'react';
import {
    // cloneItems, 
    // getItemsDefaultStyles, 
    // getSingleDefaultStyle, 
    styleContainer, 
    getWrapperDefaultStyle, 
    singleItemDescriptor,
    getWrapperMenuDescriptor,
    getItemMenuDescriptor,
    deepClone,
    componentWidthChangerOnResize,
    changeStylingOfEachItem,
    getWrapperMenuDescriptorDivided
}  from './flexDemoHelperFunctions'

function getDividedMenuProperty(menuDescriptorArr, property){
    for (let descriptor of menuDescriptorArr){
        if (property in descriptor) return descriptor[property]
    }
    return undefined;
}

function FlexDemo(){
    // props not needed
    const id = 'flexDemoId'
    const [nrOfElements, setNrOfElements] = useState(getWrapperDefaultStyle().nrOfItems);
    const [containerStyle, setContainerStyle] = useState(getWrapperDefaultStyle());
    const [flexBasisAll, setFlexBasisAll] = useState('unset')

    const getSingleDefaultStyle = (index) => {
        let output = {
                styles: {
                    indexOfItem: index,
                },
                key: index
            }
        if (!isNaN(parseInt(flexBasisAll))){output.styles.flexBasis = flexBasisAll+'px'}
        return output
    }
    
    const getItemsDefaultStyles = (nrOfItems) => {
        let output = [];
        for(let i = 0; i < nrOfItems; i++){
            output.push(getSingleDefaultStyle(i))
        }
        return output;
    }

    const cloneItems = (items) => {
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

    const [itemsStyle, setItemsStyle] = useState(getItemsDefaultStyles(nrOfElements));
    const [itemToShowIndex, setItemToShowIndex] = useState(-1);//-1 for container
    const [containerWidth, setContainerWidth] = useState(getWrapperDefaultStyle['width']);

    const [itemDiffWidths, setItemDiffWidths] = useState(false);
    const [itemDiffHeights, setItemDiffHeights] = useState(false);

    // const [contentWidths, setContentWidths] = useState(getWrapperMenuDescriptor().contentWidths[0]);
    // const [contentHeights, setContentHeights] = useState(getWrapperMenuDescriptor().contentHeights[0]);
    const [contentWidths, setContentWidths] = useState(getDividedMenuProperty(getWrapperMenuDescriptorDivided(),'contentWidths')[0]);
    const [contentHeights, setContentHeights] = useState(getDividedMenuProperty(getWrapperMenuDescriptorDivided(),'contentHeights')[0]);



    const [unsetChildWidths, setUnsetChildWidths] = useState(false);
    const [unsetChildHeights, setUnsetChildHeights] = useState(false);
    

    const [currentWrapperMenuIndex, setCurrntWrapperMenuIndex] = useState(0);

    const getValuesForCurrentMenuView = ()=>{
        console.log({...containerStyle, ...{contentHeights: contentHeights}, ...{contentWidths: contentWidths}})
        return itemToShowIndex < 0 
            ? {...containerStyle, 
               ...{contentHeights: contentHeights}, 
               ...{contentWidths: contentWidths}, 
               ...{nav: currentWrapperMenuIndex},
               ...{flexBasisAll: flexBasisAll}
            }
            : {...itemsStyle[itemToShowIndex].styles}
    }

    const [currentMenuContent, setCurrentMenuContent] = useState(getValuesForCurrentMenuView())
    const [wrapperMenuDescriptor, setWrapperMenuDescriptor] = useState(getWrapperMenuDescriptorDivided(currentMenuContent))

    useEffect(()=>{
        console.log(flexBasisAll)
    }, [flexBasisAll])

    useEffect(()=>{
        setWrapperMenuDescriptor(getWrapperMenuDescriptorDivided(currentMenuContent));
    }, [currentWrapperMenuIndex])






    let subscribtionToResizeFunction = useRef(null);



    


    const handleChangeOfItemInMenu = (index) => {
        return (e)=>{
            setItemToShowIndex(index)
        }
    }

    const getDescriptor = () => {
        return itemToShowIndex < 0 ? getWrapperMenuDescriptorDivided()[currentWrapperMenuIndex] : getItemMenuDescriptor(itemToShowIndex)
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
        let defaultDescriptor = getWrapperMenuDescriptorDivided(currentWrapperMenuIndex);
        let wrapperStyleClone = {...getWrapperDefaultStyle}
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
        console.log(e)
        const nope = ()=>{}
        const handleNumberLikeFieldChange = () => {
            let containerStyleClone = {...containerStyle}
            containerStyleClone[key] = newVal==='undefined'?'':newVal;
            itemToShowIndex>=0
            ? handleSingleItemStyleChange(itemToShowIndex, key, newVal)
            : handleContainerStyleChange(containerStyleClone)
            
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
            } else if (key === 'contentWidths') {
                handleContentSizes()
            } else if (key === 'contentHeights') {
                handleContentSizes()
            } else if (key === 'flexBasisAll'){
                if (newVal === 'unset') {
                    setItemsStyle(changeStylingOfEachItem(itemsStyle, 'flexBasis', undefined));
                } else {
                    setItemsStyle(changeStylingOfEachItem(itemsStyle, 'flexBasis', newVal));
                }
                setFlexBasisAll(newVal);
            } else {
                handleContainerStyleChange(containerStyleClone)
            }
        }
        const handleCheckboxFieldChange = () => {
            if (key === 'diffContentWidths') {
                setItemDiffWidths(newVal);
            } else if (key === 'diffContentHeights'){
                setItemDiffHeights(newVal);
            } else if (key === 'unsetChildWidths'){
                setUnsetChildWidths(newVal);
            } else if (key === 'unsetChildHeights'){
                setUnsetChildHeights(newVal);
            } 
        }
        const handleContentSizes = () => {
            if (key === 'contentWidths'){
                console.log(newVal)
                setContentWidths(newVal);
            }
            if (key === 'contentHeights'){
                console.log(newVal)
                setContentHeights(newVal);
            }
        }
        const switchMenuTab = () => {
            setCurrntWrapperMenuIndex(newVal);
        }

        if (['number', 'number-null','text-null'].includes(eSource)){
            return handleNumberLikeFieldChange();
        } else if (eSource === 'range'){
            return handleRangeFieldChange();
        } else if (eSource === 'button'){
            return handleButtonsClick();
        } else if (eSource === 'checkbox'){
            return handleCheckboxFieldChange();
        } else if (eSource === 'nav'){
            return switchMenuTab();
        } else {
            return handleSelectFieldChange();
        }
            return undefined
    }
    console.log(getDescriptor())

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
                        itemDiffWidths={itemDiffWidths}
                        itemDiffHeights = {itemDiffHeights}
                        unsetChildWidths = {unsetChildWidths}
                        unsetChildHeights = {unsetChildHeights}

                        contentWidths = {contentWidths}
                        contentHeights = {contentHeights}
                    >
                    </FlexContainer>
                </div>
            </div>
        </>
    )
}

export default FlexDemo;