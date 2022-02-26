import { useEffect, useState } from 'react';

function TextNull(props){
    const [isActive, setIsActive] = useState(false);
    const [value, setValue] = useState('50px');
    const name = props.name;
    const changeHandler = props.changeHandler;
    const blurHandler = props.blurHandler;

    const mutateValue = ()=>{
        return (e) => {
            setValue(e.nativeEvent.target.value)
        }
    }

    // const toggleActive = ()=>{
    //     if (isActive) setValue('');
    //     return setIsActive(!isActive)
    // }

    const toggleActive = ()=>{
        if (isActive) {
            setValue('');
            changeHandler({dummy:true,key:name,newVal:'',eSource:'text-null'})
        }
        return setIsActive(!isActive)
    }

    const changeValueInternal = (e) => {
        let val = parseInt(e.nativeEvent.target.value);
        let name = e.nativeEvent.target.name;
        changeHandler({dummy:true,key:name,newVal:val,eSource:'text-null'})
    }



    return  (
    <>
        <input type="checkbox" onChange={toggleActive}/>&nbsp;&nbsp;
        <label htmlFor ={name}><b>{name}</b></label>
        <input type="text" name={name} data-type="text-null" id={name}
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

export default TextNull;