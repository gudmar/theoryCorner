

function MenuNavigation(props){
    // const currentTab =    props.descriptor.selected;
    const availableTabs = props.descriptor.available;
    const changeHandler = props.changeHandler;
    const name = props.name
    const currentTab = props.currentTab;

    console.log(availableTabs)
    console.log(currentTab)
    console.log(name)

    const getTabs = ()=>{
        return availableTabs.map((tab, index) => {
            const isActive = ()=>{return currentTab===index}
            return (
                <li className={`nav-item}`} key={tab}>
                 <button className={`nav-link  ${isActive()?'active':''}`} onClick={changeHandler} value={index} name={name}>{index}</button>
                </li>
            )
        })
    }

    return (
        <ul className="nav nav-tabs">
            {getTabs()}
        </ul>
    )
}

export default MenuNavigation;