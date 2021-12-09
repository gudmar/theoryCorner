function getUl(itemArray){
    let liElements = itemArray.map((element)=>{return "<li>" + element + "</li>"}).join('');
    return `<ul>${liElements}</ul>`
}

function getDangerousHTML(content){
    return {
        __html: content
    };
}

export {getUl, getDangerousHTML};