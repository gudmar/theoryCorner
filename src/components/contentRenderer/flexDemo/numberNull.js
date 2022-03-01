import { useEffect, useState, useRef } from 'react';

function NumberNull(props){
    const [isActive, setIsActive] = useState(props.isActive||false);
    const [value, setValue] = useState(props.value||'');
    const name = props.name;
    const changeHandler = props.changeHandler;
    const blurHandler = props.blurHandler;
    // const valueField = useRef();
    const checkBox = useRef();
    useEffect(()=>{
        setValue(props.value);
        // console.log(`%cCheckbox of ${props.name} is ${checkBox.current.checked} with state ${isActive}`, 'background-color: gray; color:white;')
    },[props.value])
    useEffect(()=>{
        let shouldBeActive = typeof props.value==='number'?true:false;
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
            changeHandler({dummy:true,key:name,newVal:'',eSource:'number-null'})
        }
        return setIsActive(!isActive)
    }

    const changeValueInternal = (e) => {
        let val = parseInt(e.nativeEvent.target.value);
        let name = e.nativeEvent.target.name;
        changeHandler({dummy:true,key:name,newVal:val,eSource:'number-null'})
    }


    return  (
    <>
        <input type="checkbox" ref={checkBox} onChange={toggleActive}/>&nbsp;&nbsp;
        <label htmlFor ={name} className={isActive?'':'disabled'}><b>{name}</b></label>
        <input type="number" name={name} data-type="number-null" id={name}
            onChange = {mutateValue()}
            onBlur={(e)=>{changeValueInternal(e)}}
            value={value}
            disabled={!isActive}
            className="form-control"
        >
        </input>
    </>)    
}

export default NumberNull;