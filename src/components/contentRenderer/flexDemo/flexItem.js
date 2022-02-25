

import { useEffect} from 'react';

function FlexItem(props){
    const style = props.style;

    return (
        <div className="flex-item-example center" style = {style}>{props.style}</div>
    )
}

export default FlexItem;