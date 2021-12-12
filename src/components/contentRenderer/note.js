function Note(props){
    let severity = props.severity;
    let content = props.content;
    if (severity === 'warning') {
        // should return warning, for danger and info other returns
    }
    return (
        <div className="alert alert-warning" 
            dangerouslySetInnerHTML = {getDangerousHTML(`<strong>Note! </strong>${content}`)}
        ></div>
    )
}

function getDangerousHTML(content){
    return {
        __html: content
    };
}

export default Note;