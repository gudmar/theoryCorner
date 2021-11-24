import { Outlet, Link } from "react-router-dom";


function Menu(props){
    let menuData = props.menuData;
    return (
        <ul className = "nav flex-column">
            {menuData.map(element=>{
                return (
                    <li key={element.category}>
                        <Submenu content={element.content} category={element.category} />
                    </li>
                )
            })}
        </ul>
        // <ul className = "nav flex-column">
        //     {menuData.map((element)=>{return <MenuItem key={element.summary} summary={element.summary}/>})}
        // </ul>
    );
}

function Submenu(props){
    // let menuData = props.menuData;
    let menuContent = props.content;
    let menuTopic = props.category;
    console.log(menuContent)
    console.log(menuTopic)
    return (
        <div>
            <button type="button" className="btn" data-bs-toggle="collapse" data-bs-target={`#${menuTopic}`}>
                {menuTopic}
            </button>
            <div className="collapse show" id={menuTopic}>
                <ul className = "nav flex-column">
                    {menuContent.map((element)=>{return <MenuItem key={element.summary} summary={element.summary}/>})}
                </ul>
            </div>
        </div>
    );
}

function MenuItem(props){
    
    return <li className="nav-item">
        <Link to={`/theory/${props.summary}`}>{props.summary}</Link>
    </li>

    return <li className="nav-item">{props.summary}</li>
}

export default Menu;