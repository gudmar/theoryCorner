import { useEffect, useState } from 'react';
import {uuidProvider} from '../../../services/toolbox';

const getIndexInChildByIndexStyle = (childByIndexStyleObj, index) => {
    let keys = Object.keys(childByIndexStyleObj).map((item)=>{return parseInt(item, 10)});
    let isIndexPresent = keys.includes(index);
    return isIndexPresent?childByIndexStyleObj[index]:{};
}

function getChildren(nrOfChildren, childStyle, childByIndexStyle, grandChildStyle) {
    const range = [...Array(nrOfChildren).keys()]
    const uuidProv = new uuidProvider();
    return range.map((item, index)=>{
        return (
            <div 
                key = {item} 
                id = {uuidProv.getNextUuid()} 
                style={{...childStyle, ...getIndexInChildByIndexStyle(childByIndexStyle, index)}}
                className="grid-presentation-item"
            >
                <span style = {{...grandChildStyle}}>{item}</span>
            </div>
        )
    })
}

function getOptions(nrOfChildrenArr){
    return (
        nrOfChildrenArr.map((item)=>{return <option key={item} value={item}>{item}</option>})
    )
}


function GridPresent(props){
    const uuidProv = new uuidProvider();

    const [parentProperties, setParentProperties] = useState({
        gridAutoFlow: {
            current: 'row',
            values: ['row', 'column', 'dense', 'row dense', 'column dense', 'revert', 'unset'],
            id: uuidProv.getNextUuid(),
        },
        alignItems: {
            current: 'normal',
            values: ['normal', 'flex-start', 'center', 'flex-end', 'start' ,'end', 'self-start', 'self-end' ,'stretch'],
            id: uuidProv.getNextUuid(),
        },
        alignContent: {
            current: 'normal',
            values: ['normal', 'start', 'center', 'end', 'space-around', 'space-between' ,'space-evenly'],
            id: uuidProv.getNextUuid(),
        },
        justifyItems: {
            current: 'normal',
            values: [
                'normal', 'flex-start', 'center', 'flex-end', 'start' ,'end', 'self-start', 'self-end' ,'stretch', 
                'left', 'right', 'baseline', 'first baseline', 'last baseline'
            ],
            id: uuidProv.getNextUuid(),
        },
        justifyContent: {
            current: '-',
            values: ['-', 'start', 'center', 'end'],
            id: uuidProv.getNextUuid(),
        },
        
    })

    useEffect(()=>{
        if (props.startingPoints != undefined){
            let parentPropsCopy = {...parentProperties}
            let parentStyleCopy = {...parentStyle}
            Object.keys(props.startingPoints).forEach((item, index)=>{
                if (parentPropsCopy[item]) {
                    parentPropsCopy[item].current = props.startingPoints[item]
                    parentStyleCopy[item] = props.startingPoints[item];
                }
            })
            setParentStyle(parentStyleCopy)
        }
    }, [])

    const getStartingParentStyle = (e) => {
        let output = {};
        for (let key of Object.keys(parentProperties)){
            output[key] = parentProperties[key].current;
        }
        return output;
    }

    const [parentWidth, setParentWidth] = useState(props.parentWidth || 300);
    const [parentHeight, setParentHeight] = useState(props.parentHeight || 400);
    const [nrOfChildren, setNrOfChildren] = useState(props.nrOfChildren || 8);
    const [parentStyle, setParentStyle] = useState({...props.parentStyle, ...getStartingParentStyle()} || {});
    const childStyle = props.childStyle || {};
    const grandChildStyle = props.grandChildStyle || {};
    const childByIndexStyle = props.childByIndexStyle || {};
    const minWidth = 300;
    const maxWidth = 800;
    const minHeight = 400;
    const maxHeight = 800;

    const nrOfChildrenOptions = [4, 5, 8, 10, 13, 17, 25]
    const selectComponentId = uuidProv.getNextUuid();

    
    // const idPrefix = props.idPrefix || ''; // to make this unique on the page

    const changeWidth = (e) => {
        let targetWidth = e.nativeEvent.target.value;
        setParentWidth(targetWidth);
    }
    const changeHeight = (e) => {
        let targetHeight = e.nativeEvent.target.value;
        setParentHeight(targetHeight);
    }
    const changeNrOfChildren = (e) => {
        let targetNrOfElements = parseInt(e.target.value);
        setNrOfChildren(targetNrOfElements)
    }



    const changeParentStyle = (e) => {
        let newValue = e.target.value;
        let property = e.target.name;
        const newProperty = {...parentProperties[property], current: newValue}
        setParentProperties({...parentProperties, [property]: newProperty});
        setParentStyle({...parentStyle, [property]: newValue});
    }

    const parentPropertiesInputs = () => {
        return (
            Object.keys(parentProperties).map((item, index) => {
                return (
                    <div key={item}>
                        <label htmlFor={parentProperties[item].id}>{item}:</label>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <select 
                            name = {item} 
                            id={parentProperties[item].id}
                            value={parentProperties[item].current}
                            onChange={changeParentStyle}
                        >
                            {getOptions(parentProperties[item].values)}
                        </select>
                    </div>
                )
            })
        )
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
                {parentPropertiesInputs()}
                <div>
                    <label htmlFor={selectComponentId}>Number of children:</label>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <select 
                        name = 'Number of items' id={selectComponentId}
                        value={nrOfChildren}
                        onChange={changeNrOfChildren}
                    >
                        {getOptions(nrOfChildrenOptions)}
                    </select>
                </div>
            </div>
            <div className="grid-presentation m-4" style = {{...parentStyle, width:parentWidth+'px', height:parentHeight+'px'}}>
                {getChildren(nrOfChildren, childStyle, childByIndexStyle, grandChildStyle)}
            </div>
        </>
    )
}

export default GridPresent;
