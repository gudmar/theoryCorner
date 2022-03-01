import { useEffect, useState, useRef } from 'react';



function DisactivatableComponent(props){
    const [isActive, setIsActive] = useState(props.isActive||false);
    const [value, setValue] = useState(props.value||'');
    const name = props.name;
    const changeHandler = props.changeHandler;
    const blurHandler = props.blurHandler;
    const shouldSetInputToNullFunction = props.shouldSetInputToNullFunction
    const supportedInputName = props.supportedInputName
    const inputType = props.inputType
    const placeholder = props.placeholder
    const checkBox = useRef();

    useEffect(()=>{
        setValue(props.value);
        // console.log(`%cCheckbox of ${props.name} is ${checkBox.current.checked} with state ${isActive}`, 'background-color: gray; color:white;')
    },[props.value])

    useEffect(()=>{
        let shouldBeActive = shouldSetInputToNullFunction(props.value);
        setIsActive(shouldBeActive)
        checkBox.current.checked = shouldBeActive;
    },[props.value])

    const mutateValue = ()=>{
        return (e) => {
            setValue(e.nativeEvent.target.value)
        }
    }

    const toggleActive = ()=>{
        // console.log(`%cCheckbox is ${checkBox.current.checked} with state ${isActive}`, 'background-color: red; color:white;')
        if (isActive) {
            setValue('');
            changeHandler({dummy:true,key:name,newVal:'',eSource:supportedInputName})
        }
        return setIsActive(!isActive)
    }

    const changeValueInternal = (e) => {
        let val = parseInt(e.nativeEvent.target.value);
        let name = e.nativeEvent.target.name;
        changeHandler({dummy:true,key:name,newVal:val,eSource:supportedInputName})
    }


    return  (
    <>
        <input type="checkbox" ref={checkBox} onChange={toggleActive}/>&nbsp;&nbsp;
        <label htmlFor ={name} className={isActive?'':'disabled'}><b>{name}</b></label>
        <input type={props.inputType || 'number'} name={name} data-type={supportedInputName} id={name}
            onChange = {mutateValue()}
            onBlur={(e)=>{changeValueInternal(e)}}
            value={value}
            disabled={!isActive}
            className="form-control"
            placeholder={placeholder||''}
        >
        </input>
    </>)    
}

export default DisactivatableComponent;