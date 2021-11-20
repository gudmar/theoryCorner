

function Menu(props){
    let menuData = props.menuData;
    return (
        <ul className = "nav flex-column">
            {menuData.map((element)=>{return <MenuItem key={element.summary} summary={element.summary}/>})}
        </ul>
    );
}

function MenuItem(props){
    
    return <li className="nav-item">{props.summary}</li>
}

export default Menu;