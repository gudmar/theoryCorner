import { useEffect, useState } from 'react';
import  StyleExplanationLabel  from './styleExplanationLabel'

function differentSizeGenerator(index){
    //not random,
    let minSize = 40;
    let maxSize = 60;
    let period = 5;
    return minSize + (index % period) * (maxSize - minSize);
}

function FlexContainer(props){
    const itemDescriptors = props.itemsStyle;
    const containerDescriptor = props.containerStyle;
    const itemToDisplayInMenuIndex = props.itemToDisplayInMenuIndex;
    const itemDiffWidths = props.itemDiffWidths;
    const itemDiffHeights = props.itemDiffHeights;
    const setChildWidths = !props.unsetChildWidths;
    const setChildHeights = !props.unsetChildHeights;
    const [explanationVisibility, setExplanationVisibility] = useState(new Array(itemDescriptors.length - 1).fill(false))
    useEffect(()=>{
        console.log(itemDiffHeights)
        console.log(itemDiffWidths)
    
    }, [props.itemDiffWidths, props.itemDiffHeights])
    function displayContainerMenu(e){
        return (e)=>{e.preventDefault(); e.stopPropagation(); itemToDisplayInMenuIndex(-1)(e)};
    }
    function displayItemMenu(index){
        return (e)=>{e.preventDefault(); e.stopPropagation(); itemToDisplayInMenuIndex(index)(e)};
    }
    function getDiffSizes(index){
        let obj = {};
        if (itemDiffWidths) obj.width = differentSizeGenerator(index)+'px';
        if (itemDiffHeights) obj.height = differentSizeGenerator(index)+'px';
        return obj;
    }
    function getChildItemStyles(item){
        let obj = {...item.styles}
        if (setChildHeights) obj.height = '75px';
        if (setChildWidths) obj.width  = '75px';
        return obj
    }
    function explanationShowHide(index){
        const showHide = (value)=>{
            return ()=>{
                            let stateClone = [...explanationVisibility];
                            stateClone[index] = value
                            setExplanationVisibility(stateClone)
                        }
        }
        return {
            show: showHide(true),
            hide: showHide(false)
        }
    }

    function getItems(){
        
        return itemDescriptors.map((item, index, arr)=>{
            return (
                <div className = "flex-item-example on-top"
                    onClick={displayItemMenu(index)}
                    style={getChildItemStyles(item)} 
                    key={index}
                    onMouseOver={explanationShowHide(index).show}
                    onMouseLeave={explanationShowHide(index).hide}
                >
                    <StyleExplanationLabel 
                        content={getChildItemStyles(item)}
                        isVisible={explanationVisibility[index]}
                    />   
                    <div className="flex-item-example-content " 
                        style = {getDiffSizes(index)}
                    >
                        <div className="center-with-transform text-white h3">{index}</div>
                    </div>
                </div>
            )
        })
    }

    return (
        <div className="flex-container-example" style = {containerDescriptor} onClick={displayContainerMenu()}>
            {getItems()}
        </div>
    )

}

// containerStyle={containerStyle} itemsStyle={itemsStyle}

export default FlexContainer