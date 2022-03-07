import { func } from "prop-types";

function styleContainer(settingObj){
    let outlet = {};
    if (settingObj.display !== undefined){outlet.display = settingObj.display};
    if (settingObj.direction !== undefined){outlet.direction = settingObj.direction};
    if (settingObj.wrap !== undefined){outlet.wrap = settingObj.wrap};
    if (settingObj.justifyContent !== undefined){outlet.justifyContent = settingObj.justifyContent};
    if (settingObj.alignItems !== undefined){outlet.alignItems = settingObj.alignItems};
    if (settingObj.content !== undefined){outlet.content = settingObj.content};
    if (settingObj.rowGap !== undefined){outlet.content = settingObj.rowGap};
    if (settingObj.columnGap != undefined){outlet.content = settingObj.columnGap};
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
        width: 500,
    }
}
function getSingleDefaultStyle(index){
    return {
        styles: {
            indexOfItem: index,
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

function componentWidthChangerOnResize(){
    const subscribers = [];
    const toRunOnResize = ()=>{
        window.addEventListener('resize', (e)=>{
            console.log(subscribers)
            for (let subscriber of subscribers){
                console.log(subscriber)
                subscriber.cb(window.innerWidth);
            }
        })
    }
    toRunOnResize();
    return {
        subscribe: (cb, id) => {
            subscribers.push({cb: cb, id: id});
            console.log('subscribed')
        },
        unsubscribe: (id) => {
            console.log('unsubscribed')
            let index = subscribers.findIndex((item, index)=>{
                return item.id === id
            })
            subscribers.splice(index, 1);
        }
    }
}

function getWrapperMenuDescriptor(){
    return {
        // display: flex,
        width: 'range 300 700 500 150', // min max value width
        nrOfItems: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
        contentWidths: [50, 'unset', 20, 35, 75, 'different'],
        contentHeights: [50, 'unset', 20, 35, 75, 'different'],
        flexBasisAll: ['unset', 20, 50, 75, 100, 200],
        // diffContentWidths: 'checkbox',
        // diffContentHeights: 'checkbox',
        unsetChildWidths: 'checkbox',
        unsetChildHeights:'checkbox',
        flexDirection: ['undefined', 'row','column'],
        flexWrap: ['undefined','wrap','no-wrap'],
        justifyContent: ['undefined','flex-start','flex-end','center','space-between','space-around','space-evenly'], 
        alignItems: ['undefined','flex-start','flex-end','center','stretch','baseline'],
        alignContent: ['undefined','flex-start','flex-end','center','stretch','space-between','space-around'],
        rowGap: 'text-null',
        columnGap: 'text-null',
    }
}
function getItemMenuDescriptor(index){
    return {
        indexOfItem: 'read-only',
        order: 'number-null',
        flexGrow: 'number-null',
        flexShrink: 'number-null',
        flexBasis: 'text-null',
        alignSelf: ['undefined','auto','flex-start','flex-end','center','baseline','stretch'],
        'Go to container': 'button'
    }
};

function deepClone(obj){
    return JSON.parse(JSON.stringify(obj))
}

function changeStylingOfEachItem(arrayOfObjects, key, value){
    console.log(arrayOfObjects)
    let newArray = [];
    arrayOfObjects.forEach((item, index)=>{
        let newObj = {...item}
        newObj.styles[key]=value;
        newArray.push(newObj)
    })
    console.log(newArray)
    return newArray;
}

export {
    cloneItems, 
    getItemsDefaultStyles, 
    getSingleDefaultStyle, 
    styleContainer, 
    getWrapperDefaultStyle, 
    singleItemDescriptor,
    getWrapperMenuDescriptor,
    getItemMenuDescriptor,
    deepClone,
    componentWidthChangerOnResize,
    changeStylingOfEachItem
}