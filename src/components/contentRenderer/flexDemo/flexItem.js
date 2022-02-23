import { useEffect, useState } from 'react';

function FlexItem(props){
    const [style, setStyle] = useState(props.style)

    return (
        <div className="flex-item-example center" style = {style}>{props.key}</div>
    )
}

export default FlexItem;