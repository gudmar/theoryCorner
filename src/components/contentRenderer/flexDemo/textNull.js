import { useEffect, useState, useRef } from 'react';
import  DisactivatableComponent  from './disactivatableComponent';

function isValidAsNumber(val){return typeof val==='number'?true:false;}
function isValidAsConvertableToNumber(val){return !isNaN(parseInt(val))?true:false;}

// function TextNull(props){
//     const [isActive, setIsActive] = useState(false);
//     const [value, setValue] = useState('50px');
//     const name = props.name;
//     const changeHandler = props.changeHandler;
//     const blurHandler = props.blurHandler;
//     const checkBox = useRef();
//     useEffect(()=>{
//         setValue(props.value);
//         // console.log(`%cCheckbox of ${props.name} is ${checkBox.current.checked} with state ${isActive}`, 'background-color: gray; color:white;')
//     },[props.value])
//     useEffect(()=>{
//         let shouldBeActive = !isNaN(parseInt(props.value))?true:false;
//         setIsActive(shouldBeActive)
//         checkBox.current.checked = shouldBeActive;
//     },[props.value])

//     const mutateValue = ()=>{
//         return (e) => {
//             setValue(e.nativeEvent.target.value)
//         }
//     }

//     const toggleActive = ()=>{
//         if (isActive) {
//             setValue('');
//             changeHandler({dummy:true,key:name,newVal:'',eSource:'text-null'})
//         }
//         return setIsActive(!isActive)
//     }

//     const changeValueInternal = (e) => {
//         let val = parseInt(e.nativeEvent.target.value);
//         let name = e.nativeEvent.target.name;
//         changeHandler({dummy:true,key:name,newVal:val,eSource:'text-null'})
//     }


//     return  (
//     <>
//         <input type="checkbox" ref={checkBox} onChange={toggleActive}/>&nbsp;&nbsp;
//         <label htmlFor ={name} className={isActive?'':'disabled'}><b>{name}</b></label>
//         <input type="text" name={name} data-type="text-null" id={name} placeholder="eg. 50px"
//             onChange = {mutateValue()}
//             onBlur={(e)=>{changeValueInternal(e)}}
//             value={value}
//             disabled={!isActive}
//             className = "form-control"
//         >
//         </input>
//     </>)    
// }

function TextNull(props){
    return(
        <DisactivatableComponent
            isActive = {props.isActive}
            value = {props.value}
            name = {props.name}
            changeHandler = {props.changeHandler}
            blurHandler = {props.blurHandler}
            shouldSetInputToNullFunction = {isValidAsConvertableToNumber}
            supportedInputName = 'text-null'
            inputType="text"
            placeholder="in px"
        />
    )
}

export default TextNull;