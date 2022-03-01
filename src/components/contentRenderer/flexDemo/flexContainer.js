import FelxItem from './flexItem'
import { useEffect, useState } from 'react';
import FlexItem from './flexItem';



function FlexContainer(props){
    const itemDescriptors = props.itemsStyle;
    const containerDescriptor = props.containerStyle;
    const itemToDisplayInMenuIndex = props.itemToDisplayInMenuIndex;
    function displayContainerMenu(e){
        return (e)=>{e.preventDefault(); e.stopPropagation(); itemToDisplayInMenuIndex(-1)(e)};
    }
    function displayItemMenu(index){
        return (e)=>{e.preventDefault(); e.stopPropagation(); itemToDisplayInMenuIndex(index)(e)};
    }

    function getItems(){
        
        return itemDescriptors.map((item, index, arr)=>{
            return (
                <div className = "flex-item-example"
                    onClick={displayItemMenu(index)}
                    style={item.styles} 
                    key={index}
                >
                    <div className="flex-item-example-content ">
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