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

function getWrapperMenuDescriptorDivided(){
    return [
        {
            nav: {available: [0,1], selected: 1},
            width: 'range 300 700 500 150', // min max value width
            nrOfItems: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
            contentWidths: [50, 'unset', 20, 35, 75, 'different'],
            contentHeights: [50, 'unset', 20, 35, 75, 'different'],
            flexBasisAll: ['unset', 20, 50, 75, 100, 200],
            unsetChildWidths: 'checkbox',
            unsetChildHeights:'checkbox',
        },
        {
            nav: {available: [1,2], selected: 2},
            flexDirection: ['undefined', 'row','column'],
            flexWrap: ['undefined','wrap','no-wrap'],
            justifyContent: ['undefined','flex-start','flex-end','center','space-between','space-around','space-evenly'], 
            alignItems: ['undefined','flex-start','flex-end','center','stretch','baseline'],
            alignContent: ['undefined','flex-start','flex-end','center','stretch','space-between','space-around'],
            rowGap: 'text-null',
            columnGap: 'text-null',
        }
    ]
}

function getWrapperMenuDescriptor(){
    return {
        // display: flex,
        width: 'range 300 700 500 150', // min max value width
        nrOfItems: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
        contentWidths: [50, 'unset', 20, 35, 75, 'different'],
        contentHeights: [50, 'unset', 20, 35, 75, 'different'],
        flexBasisAll: ['unset', 20, 50, 75, 100, 200],
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
}