import { Outlet, Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';


function Menu(props){
    let [filter, setFilter] = useState('')
    function filterMenu(event){
        setFilter(event.target.value);
    }
    let menuData = props.menuData;
    return (
        <>
            <form>
                <div className="input-group">
                    <span className="input-group-text">&#128269;</span>
                    <input className="form-control" placeholder="search..." onChange={filterMenu}/>
                </div>
            </form>
            <ul className = "nav flex-column">
                {menuData.map(element=>{
                    return (
                        <li key={element.category}>
                            <Submenu content={element.content} category={element.category} filter={filter} />
                        </li>
                    )
                })}
            </ul>
        </>
    );
}

function filterSubmenu(filter, submenuContent){
    function getSummary(item) {return item.summary;}
    function getSearchKeywords(item) {return item.searchKeywords==undefined?'':item.searchKeywords;}
    function getStringToSearch(item) {
        return `${getSummary(item)} ${getSearchKeywords(item)}`
    }
    if (filter.trim()=='') return submenuContent;
    return submenuContent.filter((item)=>{
        return getStringToSearch(item).includes(filter);
    })
}

function Submenu(props){
    // let menuData = props.menuData;
    let menuContent = props.content;
    let menuTopic = props.category;
    let filter = props.filter;
    return (
        <div>
            <button type="button" className="btn" data-bs-toggle="collapse" data-bs-target={`#${menuTopic}`}>
                {menuTopic}
            </button>
            <div className="collapse show" id={menuTopic}>
                <ul className = "nav flex-column">
                    {filterSubmenu(filter,menuContent).map((element)=>{return <MenuItem key={element.summary} summary={element.summary}/>})}
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