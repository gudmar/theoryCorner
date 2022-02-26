import { useEffect, useState, useRef } from 'react';

function NumberNull(props){
    const [isActive, setIsActive] = useState(false);
    const [value, setValue] = useState('');
    const name = props.name;
    const changeHandler = props.changeHandler;
    const blurHandler = props.blurHandler;
    const valueField = useRef();

    const mutateValue = ()=>{
        return (e) => {
            setValue(e.nativeEvent.target.value)
        }
    }
    const toggleActive = ()=>{
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
        <input type="checkbox" onChange={toggleActive}/>&nbsp;&nbsp;
        <label htmlFor ={name}><b>{name}</b></label>
        <input type="number" ref={valueField} name={name} data-type="number-null" id={name}
            onChange = {mutateValue()}
            onBlur={(e)=>{
                changeValueInternal(e)
            }}
            value={value}
            disabled={!isActive}
        >
        </input>
    </>)    
}

export default NumberNull;