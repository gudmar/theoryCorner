import { useEffect, useState } from 'react';

function getWrapperDefaultContent(){
    return {
        // display: flex,
        nrOfItems: 'number',
        flexDirection: ['undefined', 'row','column'],
        flexWrap: ['undefined','wrap','no-wrap'],
        justifyContent: ['undefined','flex-start','flex-end','center','space-between','space-around','space-evenly'], 
        alignItems: ['undefined','flex-start','flex-end','center','stretch','baseline'],
        alignContent: ['undefined','flex-start','flex-end','center','stretch','space-between','space-around'],
    }
}
function getSingleDefaultStyle(index){
    return {
        indexOfItem: 'number',
        order: 'number',
        flexGrowth: 'number',
        flexShrink: 'number',
        flexBasis: 'number',
        alignSelf: ['undefined','auto','flex-start','flex-end','center','baseline','stretch'],
    }
}

function Select(props){
    const name=props.name;
    const values = props.values;
    function getOptions(){
        return values.map((item, index, arr)=>{
            return (<option value={item}>{item}</option>)
        })
    }
    return (
        <div className="mb-3 mt-3">
            <label for={name}><b>{name}: &nbsp;
            </b></label>
            <select name = {name} id={name}>
                {getOptions()}
            </select>
        </div>
    )
}

function GeneralMenu(props){
    const [descriptor, setDescriptor] = useState(props.descriptor)

    function getInputs(){
        return Object.getOwnPropertyNames(descriptor).map((key, index, arr)=>{
            return(
            <>
                {descriptor[key]==='number'
                    ?
                        (
                            <>
                        <label for ={key}>{key}</label>
                        <input type="number" id={key} key="key" key={key}></input>
                        </>)
                    
                    :<Select name={key} values={descriptor[key]} key={key}></Select>}
            </>
            )
        })
    }
    return(
        <>
            {getInputs()}
        </>
    )
}

function ItemMenu(props){
    const [itemToShowIndex, setItemToShowIndex] = useState(props.itemToShowIndex)
    const [itemStyle, setItemStyle] = useState(props.itemsStyle[itemToShowIndex]);

    return (
        <form>
            <GeneralMenu descriptor={itemStyle[itemToShowIndex]}></GeneralMenu>
        </form>
    )
}

function ContainerMenu(props){
    const [containerStyle, setContainerStyle] = useState(props.containerStyle)
    
    return (
        <form>
            <GeneralMenu descriptor={getWrapperDefaultContent()}></GeneralMenu>
        </form>
    )
}

function FlexMenu(props){
    const [containerStyle, setContainerStyle] = useState(props.containerStyle)
    const [itemsStyle, setItemsStyle] = useState(props.itemsStyle)
    const [itemToShowIndex, setItemToShowIndex] = useState(props.itemToShowIndex)
    const containerStyleChangeHandler = props.containerStyleChangeHandle;
    const itemStyleChangeHandler = props.itemStyleChangeHandle;
    const nrOfItemsChangeHandler = props.nrItemsStyleChangeHandle;

    console.log(itemToShowIndex)
    console.log(containerStyle)
    return (
        itemToShowIndex>=0
            ? <ItemMenu itemToShowIndex = {itemToShowIndex} itemStyle = {itemsStyle}></ItemMenu>
            : <ContainerMenu containerStyle = {containerStyle}></ContainerMenu>
    )    
}
/* <FlexMenu 
containerStyle={containerStyle} 
itemsStyle={itemsStyle}
itemToShowIndex={itemToShowIndex}
containerStyleChangeHandle = {handleContainerStyleChange}
itemStyleChangeHandle = {handleSingleItemChange}
nrItemsStyleChangeHandle = {handleChangeNrOfItems}
> */



export default FlexMenu;