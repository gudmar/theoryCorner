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
    const changeHandler = props.changeHandler;
    function getOptions(){
        return values.map((item, index, arr)=>{
            return (<option key={item} value={item}>{item}</option>)
        })
    }
    return (
        <div className="mb-3 mt-3">
            <label htmlFor={name}><b>{name}: &nbsp;
            </b></label>
            <select name = {name} id={name} value={currentValues[name]} onChange={changeHandler}>
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
        console.log(props)
        console.log(descriptor)
        console.log(currentValues)
        const out = new Array(Object.getOwnPropertyNames(descriptor).length-1).fill(0);
        
        Object.getOwnPropertyNames(descriptor).forEach((item, index)=>{
            if (descriptor[item] === 'number') {
                out[index] = currentValues[item]
            }
        })
        return out;
    }
    const [numericValueStorage, setNumericValueStorage] = useState(getInitialNumberValues())
    const numericStateChangeFactory = (index)=>{
        let newState = [...numericValueStorage];
        return function (e){
            const newVal = parseInt(e.nativeEvent.target.value);
            newState[index] = isNaN(newVal)?0:newVal;
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
                            value={numericValueStorage[index]}
                        >
                        </input>
                        </>)
                    
                    :<Select name={key} 
                        currentValues={currentValues} 
                        values={descriptor[key]} 
                        key={key}
                        changeHandler={changeHandler}
                        
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
    const itemStyle = props.itemStyle[itemToShowIndex];
    const changeHandler = props.changeHandler;
    const currentValues = props.itemStyle;
    console.dir(props)
    console.log(itemToShowIndex)
    console.log(itemStyle)

    return (
        <form>
            <GeneralMenu changeHandler={props.changeHandler} 
                descriptor={getSingleDefaultStyle(itemToShowIndex)} currentValues={currentValues}
                currentValues={itemStyle}
            >
            </GeneralMenu>
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
                changeHandler={changeHandler} 
                descriptor={getWrapperDefaultContent()} 
                currentValues={currentValues}
            ></GeneralMenu>
        </form>
    )
}


function FlexMenu(props){
    const containerStyle = props.containerStyle;
    const itemStyle = props.itemStyle;
    const itemToShowIndex = props.itemToShowIndex;
    const containerStyleChangeHandler = props.containerStyleChangeHandle;
    const itemStyleChangeHandler = props.itemStyleChangeHandle;
    const nrOfItemsChangeHandler = props.nrItemsStyleChangeHandle;
    function changeHandlerGeneric(e){
        console.log(e)
        console.log(e.nativeEvent.target.value)
        console.log(itemToShowIndex)
        console.log(nrOfItemsChangeHandler)
        console.log(props)
        let newVal = e.nativeEvent.target.value;
        if (e.target.type === 'number'){
            itemToShowIndex>=0
                ? itemStyleChangeHandler(newVal)
                : nrOfItemsChangeHandler(newVal)
        } else {
            const key = e.nativeEvent.target.name;
            const containerStyleClone = {...containerStyle};
            containerStyleClone[key] = newVal==='undefined'?'':newVal;

            if(itemToShowIndex>=0){
                // itemStyleChangeHandler(newVal)
            } else {
                containerStyleChangeHandler(containerStyleClone)
            }
        }
    }
    console.log(itemToShowIndex)
    

    return (
        itemToShowIndex>=0
            ? <ItemMenu 
                changeHandler={changeHandlerGeneric} 
                itemToShowIndex = {itemToShowIndex} 
                itemStyle = {itemStyle}
            >
            </ItemMenu>
            : <ContainerMenu 
                changeHandler={changeHandlerGeneric} 
                containerStyle = {containerStyle}
            >
            </ContainerMenu>
    )    
}



export default FlexMenu;