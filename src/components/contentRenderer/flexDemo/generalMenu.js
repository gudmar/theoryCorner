import { useEffect, useState } from 'react';
import NumberNull from './numberNull';
import TextNull from './textNull';
import Select from './selectMenuComponent';
import MenuNavigation from './menuNavigation';
import Label from './label';


function GeneralMenu(props){
    const descriptor = props.descriptor;
    const currentValues = props.currentValues;
    const changeHandler = props.changeHandler;
    const helpContentFunction = props.helpContentFunction;
    const helpDisplayHandler = props.helpDisplayHandler;
        console.log(descriptor)
    const getInitialNumberValues = ()=>{
        const out = new Array(Object.getOwnPropertyNames(descriptor).length-1).fill(0);
        
        Object.getOwnPropertyNames(descriptor).forEach((item, index)=>{
            // if (descriptor[item] === 'number') {
            if (['number', 'number-null', 'text-null', 'read-only'].includes(descriptor[item])){
                out[index] = currentValues[item]
            } else if (item === 'nav') {
                out[index] = currentValues[item]
            } else if (descriptor[item].includes('range')) {
                out[index] = currentValues[item]
            }
        })
        return out;
    }
    const [numericValueStorage, setNumericValueStorage] = useState(getInitialNumberValues())
    useEffect(()=>{
        setNumericValueStorage([...getInitialNumberValues()]);
    }, [currentValues])
    const numericStateChangeFactory = (index)=>{
        
        return function (e){
            let newState = [...numericValueStorage];
            const newVal = parseInt(e.nativeEvent.target.value);
            newState[index] = isNaN(newVal)?0:newVal;
            setNumericValueStorage(newState);
        }
    }

    const changeValueInternalFactory = (elementType) => {
        return (e) => {
            let val = parseInt(e.nativeEvent.target.value);
            let name = e.nativeEvent.target.name;
            console.dir(e.nativeEvent.target)
            if (isNaN(val)) val = e.nativeEvent.target.value;
            if (elementType === 'checkbox') val = e.nativeEvent.target.checked;
            return changeHandler({dummy:true,key:name,newVal:val,eSource:elementType})    
        }
    }


    const renderIfNotNulish = (val) => {
        if (val === undefined) return ''
        if (val === null) return ''
        return val
    }
    
    function getInputs(){

        // const helpContent = props.helpContent;
        // const label = props.label;
        // const labelFor = props.labelFor;
        // const displayHelp = props.displayHelp;
        
        return Object.getOwnPropertyNames(descriptor).map((key, index, arr)=>{
            console.log(key)
            return(
            <div key={key}>
                {descriptor[key]==='number' ?
                        <>
                            {/* <label htmlFor ={key}><b>{key}</b></label> */}
                            <Label 
                                key = {key}
                                label={key}
                                labelFor={key}
                                displayHelpHandler={helpDisplayHandler}
                                helpContent={helpContentFunction(key)}
                            />
                            <input type="number" className="form-control" data-type="number" id={key} key={key} 
                                onChange = {numericStateChangeFactory(index)}
                                onBlur={(e)=>{changeValueInternalFactory('number')(e)}}
                                value={numericValueStorage[index]}
                            >
                            </input>
                        </>
                    : descriptor[key] === 'number-null' ? 
                        <NumberNull 
                            name={key}
                            changeHandler = {changeHandler}
                            blurHandler= {changeHandler}
                            isActive = {numericValueStorage[index]}
                            value={renderIfNotNulish(numericValueStorage[index])}
                            helpDisplayHandler={helpDisplayHandler}
                            helpContentFunction={helpContentFunction}
                            
                        />
                    : descriptor[key] === 'read-only' ?
                        <>
                            <div><b>{key}</b></div>
                            <div>{renderIfNotNulish(numericValueStorage[index])}</div>
                        </>
                    : descriptor[key] === 'button' ? 
                        <button className="form-control btn-success"
                            onClick = {changeValueInternalFactory('button')}
                            name={key}
                        >{key}</button>
                    : key === 'nav' ?
                    <>
                        <MenuNavigation
                            changeHandler = {changeValueInternalFactory('nav')}
                            name={key}
                            descriptor={descriptor[key]}
                            currentTab = {numericValueStorage[index]}
                        />
                    </>    
                    : descriptor[key] === 'text-null' ? 
                        <TextNull 
                            name={key}
                            changeHandler = {changeHandler}
                            blurHandler= {changeHandler}
                            isActive = {numericValueStorage[index]}
                            value={renderIfNotNulish(numericValueStorage[index])}
                            helpDisplayHandler={helpDisplayHandler}
                            helpContentFunction={helpContentFunction}
                        />


                    : descriptor[key].includes('range') ?
                        <>
                            {/* <div><label htmlFor={descriptor[key]}><b>{key}</b></label></div> */}
                            <Label 
                                key = {key}
                                label={key}
                                labelFor={key}
                                displayHelpHandler={helpDisplayHandler}
                                helpContent={helpContentFunction(key)}
                            />
                            <input type="range" 
                                min={descriptor[key].split(' ')[1]}
                                max={descriptor[key].split(' ')[2]}
                                name={key}
                                value={numericValueStorage[index]}
                                style={{width:renderIfNotNulish(descriptor[key].split(' ')[4])+'px'}}
                                id={descriptor[key]}
                                onChange = {changeValueInternalFactory('range')}
                            >
                            </input>
                        </>
                    : descriptor[key].includes('checkbox') ?
                        <>
                            
                            <input type="checkbox"
                                name={key}
                                onChange = {changeValueInternalFactory('checkbox')}
                            >
                            </input>&nbsp;&nbsp;
                            <Label 
                                key = {key}
                                label={key}
                                labelFor={descriptor[key]}
                                displayHelpHandler={helpDisplayHandler}
                                helpContent={helpContentFunction(key)}
                            />
                            {/* <label htmlFor={descriptor[key]}><b>{key}</b></label> */}
                        </>
                    :
                        <Select name={key} 
                            currentValues={currentValues} 
                            values={descriptor[key]} 
                            key={key}
                            displayHelpHandler={helpDisplayHandler}
                            helpContentFunction={helpContentFunction}
                            changeHandler = {changeValueInternalFactory('select')}
                        >
                        </Select>

                    } 
            </div>
            )
        })
    }
    return(
        <div className="input-group-sm">
            {getInputs()}
        </div>
    )
}



export default GeneralMenu;