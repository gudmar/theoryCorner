function UnsignedList(props){
    console.log(props)
    let items = props.items
    
    return (
        // <></>
        <ul>
            {items.map((item)=>{
               return <li key={item} dangerouslySetInnerHTML={getDangerousHTML(item)}></li>
            })}
        </ul>
    )
}

function getDangerousHTML(content){
    return {
        __html: content
    };
}

export default UnsignedList;