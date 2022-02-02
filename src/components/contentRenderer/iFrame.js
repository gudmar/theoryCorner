function ExampleInIframe(props){
    console.info(props)
    const title = props.title;
    const width = "300";
    const height = "200";
    const src = `/${props.src}`;
    return (
        <iframe title={title} width={width} height={height} src={src}></iframe>
    )
}
export default ExampleInIframe;