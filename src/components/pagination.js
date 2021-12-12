function Pagination(props){
    let maxNrOfItems = props.maxNrOfItems;
    // currentItemNrHandel = {[currentQuestionNr, setCurrentQuestionNr]}
    let [currentItemNr, setCurrentItemNr] = props.currentItemNrHandel;
    let items = getArrayOfNElements(maxNrOfItems);
    // console.log(maxNrOfItems)
    // console.log(items)

    function isActive(itemNr){
        return itemNr === currentItemNr?'active':'';
    }
    function setCurrentActive(itemNr){
        return ()=>{
            if (itemNr !== currentItemNr) setCurrentItemNr(itemNr)
        }
    }

    return (
        <ul className="pagination justify-content-center">
            {items.map((item)=>{
                return (
                    <li className={`page-item ${isActive(item)}`} key={item} onClick={setCurrentActive(item)}>
                        <a className='page-link' href="#">{item+1}</a>
                    </li>
                )
            })}
        </ul>
    )
}

function getArrayOfNElements(n){
    let arr = [...Array(toInt(n)).keys()];
    return arr;
}
function toInt(n){
    return typeof(n)==="number"?n:parseInt(n);
}

export default Pagination;