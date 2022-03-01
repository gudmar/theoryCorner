import { useEffect, useState, useRef } from 'react';
import  DisactivatableComponent  from './disactivatableComponent';


function isValidAsNumber(val){return typeof val==='number'?true:false;}
function isValidAsConvertableToNumber(val){return !isNaN(parseInt(val))?true:false;}

function NumberNull(props){
    return(
        <DisactivatableComponent
            isActive = {props.isActive}
            value = {props.value}
            name = {props.name}
            changeHandler = {props.changeHandler}
            blurHandler = {props.blurHandler}
            const shouldSetInputToNullFunction = {isValidAsNumber}
            const supportedInputName = 'number-null'
        />
    )
}

export default NumberNull;