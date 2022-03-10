
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

function getHelpContent(propName){
    const content = {
        width: 'The width of the flex-container.',
        nrOfItems: 'The number of direct children of the flex-container.',
        contentWidths: 'The width in px of each direct child of the flex-container content (flex-container grand-children),',
        contentHeights: 'The height in px of each direct child of the flex-container content (flex-container grand-children)',
        flexBasisAll: 'The <code>flex-basis</code> parameter will be set for each direct child of the flex-container.',
        unsetChildWidths: `By default, each child of the flex-container width and height paramenters are set to 75px. 
                           Mark this to unset width of the flex-container direct children.`,
        unsetChildHeights: `By default, each child of the flex-container width and height paramenters are set to 75px. 
        Mark this to unset height of the flex-container direct children.`,
        flexDirection: `The <code>flex-direction</code> css property of the felx-parent container.`,
        flexWrap: `The <code>flex-wrap</code> css property of the felx-parent container.`,
        justifyContent: `The <code>justify-content</code> css property of the felx-parent container.`,
        alignItems: `The <code>align-items</code> css property of the felx-parent container.`,
        alighContent: `The <code>align-content</code> css property of the felx-parent container.`,
        rowGap: `The <code>row-gap</code> css property of the felx-parent container.`,
        columnGap: `The <code>column-gap</code> css property of the felx-parent container.`,
        indexOfItem: `Read only, the direct child of the flex-container that was selected with a click,`,
        order: `The <code>order</code> property of the flex-container child. By default is 0, meaning that all 
        flex-container children appear in the order they are in the DOM. If <code>order</code> is set to any non 0 value,
        the affected element will be taken visualy from the DOM order, and will be placed according to the <code>order</code>
        value before all elements (order < 0) or after them (order > 0)`,
        flexWrap: `The <code>flex-wrap</code> property of the flex-container,`,
        justifyContent: `The <code>justify-content</code> property of the flex-container direct child. If set to undefined,
        the the <code>justify-content</code> will not be set on the specific flex-container child.`,
        alighItems: `The <code>align-items</code> property of the flex-container direct child. If set to undefined,
        the the <code>align-items</code> will not be set on the specific flex-container child.`,
        alignContent: `The <code>align-content</code> property of the flex-container direct child. If set to undefined,
        the the <code>align-content</code> will not be set on the specific flex-container child.`,
        rowGap: `The <code>row-gap</code> property of the flex-container direct child. If set to undefined,
        the the <code>row-gap</code> will not be set on the specific flex-container child.`,
        columnGap: `The <code>column-gap</code> property of the flex-container direct child. If set to undefined,
        the the <code>column-gap</code> will not be set on the specific flex-container child.`,
        flexGrow: `or <code>flex-grow</code> css property. The factor to calculate how much fraction of the space remaining after 
        all flex-container children are placed will be taken by the flex-container child.`,
        flexShrink: `or <code>flex-shrink</code> css property. The factor indicating how much the element will shrink in
        the situation all space is already taken by flex-container children, and children have to shrink.`,
        flexBasis: `or <code>flex-basis</code> css property. The initial size of the flex-container child, 
            before the element will be modified by the flex algorithm. The size is calculated along the main flexbox direction.`,
        alignSelf: `or <code>align-self</code> css property. Indicates the positioning of the single element. Element will
        breake out from the <code>align-items</code>.`
    }
    return content[propName]
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
    getWrapperMenuDescriptorDivided,
    getHelpContent
}