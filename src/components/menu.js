import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from 'react';


function Menu(props){
    let [filter, setFilter] = useState('');
    let [shouldItemsBeHidden, setShouldItemsBeHidden] = useState('false')
    let searchBox = useRef();
    function filterMenu(event){
        setFilter(event.target.value);
    }
    function showAllItems(e){setShouldItemsBeHidden(false);};
    function hideAllItems(e){setShouldItemsBeHidden(true);};
    function hideIfEmpty(e){if(searchBox.current.value.trim() === '') setShouldItemsBeHidden(true)}
    let menuData = props.menuData;
    return (
        <>
            <form>
                <div className="input-group">
                    <span className="input-group-text">&#128269;</span>
                    <input className="form-control" ref={searchBox} placeholder="search..." 
                           onChange={filterMenu} onClick={showAllItems} onBlur={hideIfEmpty}
                    />
                    <div>
                    <button type='button' onClick={showAllItems} className="btn px-1 py-0 btn-outline-success text-center d-block">&#128065;</button>
                <button type='button' onClick={hideAllItems} className="btn px-1 py-0 btn-outline-danger text-center d-block">
                    <span>&#128065;</span><span style={{position:'absolute',left:8+'px'}}>/</span>
                </button>
                         
                        </div>
                </div>
            </form>
            <div>
            </div>
            <ul className = "nav flex-column">
                {menuData.map(element=>{
                    return (
                        <li key={element.category}>
                            <Submenu content={element.content} hideItems={shouldItemsBeHidden} category={element.category} filter={filter} />
                        </li>
                    )
                })}
            </ul>
        </>
    );
}

function filterSubmenu(filter, submenuContent){
    function getSummary(item) {return item.summary;}
    function getSearchKeywords(item) {return item.searchKeywords===undefined?'':item.searchKeywords;}
    function getStringToSearch(item) {
        return `${getSummary(item)} ${getSearchKeywords(item)}`
    }
    if (filter.trim()==='') return submenuContent;
    return submenuContent.filter((item)=>{
        return getStringToSearch(item).includes(filter);
    })
}

function sortSubmenu(submenuContent){
    function compare(a, b){
        return a.summary.localeCompare(b.summary);
    }
    return submenuContent.sort(compare);
}

function Submenu(props){
    // let menuData = props.menuData;
    let listElement = useRef();
    let menuContent = props.content;
    let menuTopic = props.category;
    let filter = props.filter;
    let [shouldItemsBeHidden, setShouldItemsBeHidden] = useState(props.hideItems)
    useEffect(()=>{
        if(props.hideItems) {listElement.current.classList.remove('show')};
        if(!props.hideItems) {listElement.current.classList.add('show')};
    })
    return (
        <div>
            <button type="button" className="btn xbtn-dark" data-bs-toggle="collapse" data-bs-target={`#${menuTopic}`}>
                {menuTopic}
            </button>
            <div ref={listElement} className="collapse xshow" id={menuTopic}>
                <ul className = "nav flex-column">
                    {sortSubmenu(filterSubmenu(filter,menuContent)).map((element)=>{return <MenuItem key={element.summary} summary={element.summary}/>})}
                </ul>
            </div>
        </div>
    );
}

function MenuItem(props){
    
    return <li className="nav-item m-2">
                <Link to={`/theory/${props.summary}`}>{props.summary}</Link>
           </li>

    // return <li className="nav-item">{props.summary}</li>
}

export default Menu;