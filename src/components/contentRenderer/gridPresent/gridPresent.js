import { useEffect, useState } from 'react';
import {uuidProvider} from '../../../services/toolbox';

function getChildren(nrOfChildren, childStyle) {
    const range = [...Array(nrOfChildren).keys()]
    const uuidProv = new uuidProvider();
    return range.map((item)=>{
        return (
            <div key = {item} id = {uuidProv.getNextUuid()} style={childStyle} className="grid-presentation-item">{item}</div>
        )
    })
}

function GridPresent(props){
    const [parentWidth, setParentWidth] = useState(props.parentWidth || 300);
    const [parentHeight, setParentHeight] = useState(props.parentHeight || 400);
    const nrOfChildren = props.nrOfChildren;
    const parentStyle = props.parentStyle || {};
    const childStyle = props.childStyle || {};
    const minWidth = 300;
    const maxWidth = 800;
    const minHeight = 400;
    const maxHeight = 800;
    
    // const idPrefix = props.idPrefix || ''; // to make this unique on the page

    console.log(parentStyle)

    const changeWidth = (e) => {
        let targetWidth = e.nativeEvent.target.value;
        setParentWidth(targetWidth);
    }
    const changeHeight = (e) => {
        let targetHeight = e.nativeEvent.target.value;
        setParentHeight(targetHeight);
    }


    return (
        <>
            <div>
                <div>
                    <label htmlFor="width">Width</label>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="range" 
                        min={minWidth}
                        max={maxWidth}
                        value={parentWidth}
                        id='width'
                        onChange = {changeWidth}
                    >
                    </input>
                </div>
                <div>
                    <label htmlFor="height">Height</label>
                    &nbsp;&nbsp;&nbsp;
                    <input type="range"
                        min={minHeight}
                        max={maxHeight}
                        value={parentHeight}
                        id='height'
                        onChange = {changeHeight}
                    >
                    </input>
                </div>
            </div>
            <div className="grid-presentation" style = {{...parentStyle, width:parentWidth+'px', height:parentHeight+'px'}}>
                {getChildren(nrOfChildren, childStyle)}
            </div>
        </>
    )
}

export default GridPresent;
