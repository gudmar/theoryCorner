import FelxItem from './flexItem'
import { useEffect, useState } from 'react';
import FlexItem from './flexItem';



function FlexContainer(props){
    const itemDescriptors = props.itemsStyle;
    const containerDescriptor = props.containerStyle;
    function getItems(){
        return itemDescriptors.map((item, index, arr)=>{
            return (
                <FlexItem style={item.style} key={item.key} />
            )
        })
    }

    return (
        <div className="flex-container-example" style = {containerDescriptor}>
            {getItems()}
        </div>
    )

}

// containerStyle={containerStyle} itemsStyle={itemsStyle}

export default FlexContainer