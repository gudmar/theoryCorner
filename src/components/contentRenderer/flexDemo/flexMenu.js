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
    const currentValues = props.currentValues;
    function getOptions(){
        return values.map((item, index, arr)=>{
            return (<option key={item} value={item}>{item}</option>)
        })
    }
    return (
        <div className="mb-3 mt-3">
            <label htmlFor={name}><b>{name}: &nbsp;
            </b></label>
            <select name = {name} id={name} value={currentValues[name]}>
                {getOptions()}
            </select>
        </div>
    )
}

function GeneralMenu(props){
    const descriptor = props.descriptor;
    const currentValues = props.currentValues;
    const changeHandler = props.changeHandler;
    const getInitialNumberValues = ()=>{
        const out = new Array(Object.getOwnPropertyNames(descriptor).length-1).fill(0);
        Object.getOwnPropertyNames(descriptor).forEach((item, index)=>{
            if (descriptor[item] === 'number') {
                out[index] = currentValues[item]
            }
        })
        console.log(out)
        return out;
    }
    const [numericValueStorage, setNumericValueStorage] = useState(getInitialNumberValues())
    const numericStateChangeFactory = (index)=>{
        let newState = [...numericValueStorage];
        return function (e){
            const newVal = parseInt(e.nativeEvent.target.value);
            newState[index] = isNaN(newVal)?0:newVal;
            console.log(newState)
            setNumericValueStorage(newState);
        }
    }
    
    function getInputs(){
        return Object.getOwnPropertyNames(descriptor).map((key, index, arr)=>{
            return(
            <div key={key}>
                {descriptor[key]==='number'
                    ?
                        (
                            <>
                        <label htmlFor ={key}>{key}</label>
                        <input type="number" id={key} key="key" key={key} 
                            onChange = {numericStateChangeFactory(index)}
                            onBlur={(e)=>{changeHandler(e)}}
                            // value={currentValues[key]!=undefined?currentValues[key]:0}
                            value={numericValueStorage[index]}
                        >
                        </input>
                        </>)
                    
                    :<Select name={key} 
                        currentValues={currentValues} 
                        values={descriptor[key]} 
                        key={key}
                        onChange={changeHandler}
                    >
                    </Select>}
            </div>
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
    const itemToShowIndex = props.itemToShowIndex;
    const itemStyle = props.itemsStyle[itemToShowIndex];
    const changeHandler = props.changeHandler;
    const currentValues = props.itemStyle;
    return (
        <form>
            <GeneralMenu changeHandler={props.changeHandler} descriptor={itemStyle[itemToShowIndex]} currentValues={currentValues}></GeneralMenu>
        </form>
    )
}

function ContainerMenu(props){
    const containerStyle = props.containerStyle;
    const currentValues = props.containerStyle;
    const changeHandler = props.changeHandler;
    return (
        <form>
            <GeneralMenu 
                changeHandler={props.changeHandler} 
                descriptor={getWrapperDefaultContent()} 
                currentValues={currentValues}
            ></GeneralMenu>
        </form>
    )
}


function FlexMenu(props){
    const containerStyle = props.containerStyle;
    const itemsStyle = props.itemsStyle;
    const itemToShowIndex = props.itemToShowIndex;
    const containerStyleChangeHandler = props.containerStyleChangeHandle;
    const itemStyleChangeHandler = props.itemStyleChangeHandle;
    const nrOfItemsChangeHandler = props.nrItemsStyleChangeHandle;
    function changeHandlerGeneric(e){
        console.log(e)
        console.log(e.nativeEvent.target.value)
        let newVal = e.nativeEvent.target.value;
        if (e.target.type === 'number'){
            itemToShowIndex>=0
                ? itemToShowIndex(newVal)
                : nrOfItemsChangeHandler(newVal)
        } else {
            console.dir(e)
            // itemStyleChangeHandler(e.target.value);
        }
    }
    

    return (
        itemToShowIndex>=0
            ? <ItemMenu changeHandler={changeHandlerGeneric} itemToShowIndex = {itemToShowIndex} itemStyle = {itemsStyle}></ItemMenu>
            : <ContainerMenu changeHandler={changeHandlerGeneric} containerStyle = {containerStyle}></ContainerMenu>
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