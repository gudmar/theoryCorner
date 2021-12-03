function getUl(itemArray){
    return <ul>{itemArray.map((element)=>{return <li key="element">element</li>}) }</ul>
}

function getDangerousHTML(content){
    return {
        __html: content
    };
}

export {getUl, getDangerousHTML};