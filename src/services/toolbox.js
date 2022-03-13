function getUl(itemArray){
    let liElements = itemArray.map((element)=>{return "<li>" + element + "</li>"}).join('');
    return `<ul>${liElements}</ul>`
}

function getDangerousHTML(content){
    return {
        __html: content
    };
}

function uuidProvider(){
    if (uuidProvider.instance === undefined) {
        uuidProvider.instance = this;
        uuidProvider.lastId = 0;
    } else {
        return this.instance;
    }
}
uuidProvider.prototype.getNextUuid = function(){
    uuidProvider.lastId += 1;
    
    return uuidProvider.lastId.toString(36);
}



export default uuidProvider;

export {getUl, getDangerousHTML, uuidProvider};