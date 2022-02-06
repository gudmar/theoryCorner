import { HashLink as Link } from 'react-router-hash-link';
function ListElement(props){
    return (
        // <li ><a href={`#${props.id}`}>{props.title}</a></li>
        <li><Link to={`#${props.id}`}>{props.title}</Link></li>
    )
}

function ListOfContent(props){

    return (
        <ul>
            {props.content.map((item, index)=>{
                return <ListElement key={item.id} id={item.id} title={item.title}></ListElement>
            })}
        </ul>
    )
}

export default ListOfContent;