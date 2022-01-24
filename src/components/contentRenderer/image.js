function Image(props){
    let source = `/${props.name}`;
    let alt = props.alt;
    if (window.location.hostname !== 'localhost') {source = `${props.name}`}
    return (
        <img className="mx-auto d-block" src={source} alt={alt} />
    )
}

export default Image;