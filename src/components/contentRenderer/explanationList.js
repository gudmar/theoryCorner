function ExplanationList(props){
    let listItem = props.listItem;
    function getHeadline(item){return item.headline}
    function getContent(item){return item.content}
    
    return (
        listItem.map((item)=>{
            return (
                <div className="row" key={getHeadline(item)}>
                    <div className="col-3">{getHeadline(item)}</div>
                    <div className="col-9" dangerouslySetInnerHTML={getDangerousHTML(getContent(item))}></div>
                </div>
            )
        })
    )
}

function getDangerousHTML(content){
    return {
        __html: content
    };
}

export default ExplanationList;