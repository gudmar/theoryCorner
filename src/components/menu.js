import { Outlet, Link } from "react-router-dom";

function Menu(props){
    let menuData = props.menuData;
    return (
        <ul className = "nav flex-column">
            {menuData.map((element)=>{return <MenuItem key={element.summary} summary={element.summary}/>})}
        </ul>
    );
}

function MenuItem(props){
    
    return <li className="nav-item">
        <Link to={`/theory/${props.summary}`}>{props.summary}</Link>
    </li>

    return <li className="nav-item">{props.summary}</li>
}

export default Menu;