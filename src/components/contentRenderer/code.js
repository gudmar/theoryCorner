function Code(props){
    let content = props.content;
    return (
        <div className = "alert alert-dark" dangerouslySetInnerHTML={getDangerousHTML(content)}>
        </div>
    )
}
function getDangerousHTML(content){
    return {
        __html: content
    };
}

export default Code;