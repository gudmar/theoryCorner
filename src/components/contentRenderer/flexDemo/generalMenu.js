import { useEffect, useState } from 'react';
import NumberNull from './numberNull';



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
                {descriptor[key]==='number' ?
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
   
   
//    const [isActive, setIsActive] = useState(false);
//    const [value, setValue] = useState(1);
//    const name = props.name;
//    const changeHandler = props.changeHandler;
//    const blurHandler = props.blurHandler;


                    : descriptor[key] === 'number-null' ? 
                        <NumberNull 
                            name={key}
                            changeHandler = {numericStateChangeFactory(index)}
                            blurHandler= {changeHandler}
                        />
                    :
                        <Select name={key} 
                        currentValues={currentValues} 
                        values={descriptor[key]} 
                        key={key}
                        // changeHandler={numericStateChangeFactory(index)}
                        changeHandler={changeHandler}
                        // blurHandler = {changeHandler}
                    
                        >
                        </Select>
                    }
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



export default GeneralMenu;