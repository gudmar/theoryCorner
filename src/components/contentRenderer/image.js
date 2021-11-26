function Image(props){
    let source = `/${props.name}`;
    let alt = props.alt;
    return (
        <img className="mx-auto d-block" src={source} alt={alt} />
    )
}

export default Image;