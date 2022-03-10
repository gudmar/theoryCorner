function Help(props){
    const title = props.title;
    const content = props.content;
    console.log(title);console.log(content)
    return (
        <div className = "flex-help-modal-shutter">
            <div className = "flex-help-modal">
                <div className = 'flex-help-modal-title'>{title}</div>
                <br/>
                <div className = "flex-help-modal-content">{content}</div>
            </div>
        </div>
    )
}

export default Help;