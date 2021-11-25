
function getStyles(size){
    return {
        position: 'relative',
        height: size
    }
}
function Spacing(props){
    let size = props.size;
    if (size == undefined) size = '10rem';
    return <div style={getStyles(size)}></div>
}
export default Spacing;