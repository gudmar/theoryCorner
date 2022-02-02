import { Fragment } from "react";

function ExampleInIframe(props){
    const title = props.title;
    const width = props.width || "300";
    const height = props.height || "200";
    const src = `${props.src}`;
    return (
        <Fragment>
        <div><a className="h2" href={src} target="_blank">Go to source</a></div>
        <iframe title={title} width={width} height={height} src={src}></iframe>
        </Fragment>
    )
}
export default ExampleInIframe;