function Link(props){
    let link = props.href;
    let content = props.content;
    console.log(props)
    return (
        <div>
            <a href={link} target="_blank" rel="noreferrer">
                {content}
            </a>
        </div>
    )
}

export default Link;