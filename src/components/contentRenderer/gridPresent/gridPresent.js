import { useEffect, useState } from 'react';

function getChildren(nrOfChildren, childStyle) {
    const range = [...Array(nrOfChildren).keys()]
    return range.map((item)=>{
        return (
            <div key = {item} style={childStyle} className="grid-presentation-item">{item}</div>
        )
    })
}

function GridPresent(props){
    const [parentWidth, setParentWidth] = useState(props.parentWidth || 300);
    const nrOfChildren = props.nrOfChildren;
    const parentStyle = props.parentStyle || {};
    const childStyle = props.childStyle || {};
    const minWidth = 300;
    const maxWidth = 800;

    console.log(parentStyle)

    const changeWidth = (e) => {
        let targetWidth = e.nativeEvent.target.value;
        setParentWidth(targetWidth);
    }

    return (
        <>
            <div>
                <label htmlFor="width">Width</label>
                &nbsp;&nbsp;&nbsp;
                <input type="range" 
                    min={minWidth}
                    max={maxWidth}
                    value={parentWidth}
                    id='width'
                    onChange = {changeWidth}
                >
                </input>
            </div>
            <div className="grid-presentation" style = {{...parentStyle, width:parentWidth+'px'}}>
                {getChildren(nrOfChildren, childStyle)}
            </div>
        </>
    )
}

export default GridPresent;
