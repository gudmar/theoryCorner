import FlexContainer from './flexContainer';
// import FlexMenu from './flexMenu';
import GeneralMenu from './generalMenu';
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
        nrOfItems: 4,
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
            indexOfItem: index,
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
    const [nrOfElements, setNrOfElements] = useState(getWrapperDefaultStyle().nrOfItems);
    const [containerStyle, setContainerStyle] = useState(getWrapperDefaultStyle(getWrapperDefaultStyle()));
    const [itemsStyle, setItemsStyle] = useState(getItemsDefaultStyles(nrOfElements));
    const [itemToShowIndex, setItemToShowIndex] = useState(-1);//-1 for container

    const getCurrentValues = ()=>{
        let v =itemToShowIndex < 0 
        ? containerStyle
        : {...itemsStyle[itemToShowIndex].styles} 

        return itemToShowIndex < 0 
            ? containerStyle
            : {...itemsStyle[itemToShowIndex].styles}
    }


    const [currentMeunContent, setCurrentMenuContent] = useState(getCurrentValues())

    const itemToShowIndexHandler = (index) => {
        
        return (e)=>{
            setItemToShowIndex(index)
        }
    }

    useEffect(()=>{

    },[itemToShowIndex])

    const handleContainerStyleChange = (newStyle)=>{
        setContainerStyle(newStyle)
    }

    const handleSingleItemChange = (newItemStyle, index)=>{
        let newState = cloneItems(itemsStyle);
        newState.splice(index, 1, newItemStyle);
    }
    const handleChangeNrOfItems = (newNumberOfItems)=>{
        let deltaNrOfItems = newNumberOfItems - itemsStyle.length;
        let newState = cloneItems(itemsStyle);
        let newContainerStyleState = {...containerStyle}
        const mutateBothStates = () => {
            newContainerStyleState.nrOfItems = newState.length;
            setItemsStyle(newState);
            setContainerStyle(newContainerStyleState)
        }
        if(deltaNrOfItems > 0){ // added
            for(let i = 0; i < deltaNrOfItems; i++){
                newState.push(getSingleDefaultStyle(itemsStyle.length + i))
            }
            mutateBothStates()

        }
        if (deltaNrOfItems < 0){
            for(let i = 0; i < Math.abs(deltaNrOfItems); i++){
                newState.pop();
            }
            mutateBothStates()
        }
        if (deltaNrOfItems === 0){
            console.warn('Something is wrong. deltaNrOfItems is 0 and handelChangeNrOfItems tirggered')
        }
    }

    function getWrapperMenuDescriptor(){
        return {
            // display: flex,
            nrOfItems: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
            flexDirection: ['undefined', 'row','column'],
            flexWrap: ['undefined','wrap','no-wrap'],
            justifyContent: ['undefined','flex-start','flex-end','center','space-between','space-around','space-evenly'], 
            alignItems: ['undefined','flex-start','flex-end','center','stretch','baseline'],
            alignContent: ['undefined','flex-start','flex-end','center','stretch','space-between','space-around'],
        }
    }
    function getItemMenuDescriptor(index){
        return {
            indexOfItem: 'number',
            order: 'number-null',
            flexGrow: 'number-null',
            flexShrink: 'number-null',
            flexBasis: 'text-null',
            alignSelf: ['undefined','auto','flex-start','flex-end','center','baseline','stretch'],
        }
    };

    const getDescriptor = () => {
        return itemToShowIndex < 0 ? getWrapperMenuDescriptor() : getItemMenuDescriptor(itemToShowIndex);
    };

    const changeItemValuesHandler = (index, key, newValue)=>{
        let itemsStyleClone = {...itemsStyle[index].styles};
        
        if (newValue === null) {
            delete itemsStyleClone[key]
        } else {
            itemsStyleClone[key] = newValue;
        }
        itemsStyle[index].styles = itemsStyleClone;        
        setItemsStyle([...itemsStyle]);
    }

    function changeHandlerGeneric(e){
        const key = e.key;
        const newVal = e.newVal;
        const eSource = e.eSource;
        if (['number', 'number-null','text-null'].includes(eSource)){
            itemToShowIndex>=0
            ? changeItemValuesHandler(itemToShowIndex, key, newVal)
            : handleChangeNrOfItems(newVal) 
            return undefined;
        } else {
            const containerStyleClone = {...containerStyle};
            containerStyleClone[key] = newVal==='undefined'?'':newVal;
            if (itemToShowIndex>=0){
                handleSingleItemChange(newVal)
            } else {
                    handleContainerStyleChange(containerStyleClone)
                    handleChangeNrOfItems(newVal)
            }
        }
            return undefined
    }

    function tempWrapper(){
        return getCurrentValues()
    }

    return (
        <>
            <div className="felx-demo-wrapper row">
                <div className = "col-3">
                <GeneralMenu
                    descriptor = {getDescriptor()}
                    currentValues = {tempWrapper()}
                    changeHandler = {changeHandlerGeneric}
                />

                </div>
                <div className = "col-9">
                    <FlexContainer 
                        containerStyle={containerStyle} 
                        itemsStyle={itemsStyle}
                        itemToDisplayInMenuIndex={itemToShowIndexHandler}
                        // changeHandler={itemToShowIndexHandler}
                    >
                    </FlexContainer>
                </div>
            </div>
        </>
    )
}

export default FlexDemo;