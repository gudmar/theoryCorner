function Link(props){
    let link = props.href;
    let content = props.content;
    return (
        <div>
            <a href={link} target="_blank" rel="noreferrer">
                {content}
            </a>
        </div>
    )
}

export default Link;