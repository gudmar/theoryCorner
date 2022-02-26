import { useEffect, useState } from 'react';

function NumberNull(props){
    const [isActive, setIsActive] = useState(false);
    const [value, setValue] = useState(1);
    const name = props.name;
    const changeHandler = props.changeHandler;
    const blurHandler = props.blurHandler;

    const mutateValue = ()=>{
        return (e) => {setValue(e.nativeEvent.target.value)}
    }

    const toggleActive = ()=>{
        return setIsActive(!isActive)
    }


    return  (
    <>
        <input type="checkbox" onChange={toggleActive}/>&nbsp;&nbsp;
        <label htmlFor ={name}><b>{name}</b></label>
        <input type="number" id={name}
            onChange = {toggleActive}
            onBlur={(e)=>{changeHandler(e)}}
            value={value}
            disabled={!isActive}
        >
        </input>
    </>)    
}

export default NumberNull;