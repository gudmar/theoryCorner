import { getDangerousHTML } from '../../services/toolbox'
import React, { useState, useEffect } from 'react';

function getValuesFromObject(obj, orderArray){
    let output = [];
    if (orderArray != undefined){
        for(let key of orderArray) {
            output.push(obj[key])
        }
        return output;
    }

    for (let key in obj){output.push(obj[key])}
    return output;
}

function getObjectInOrder(obj, orderArray){
    let output = [];
    for (let key of orderArray){
        output.push({
            headline: key,
            content: obj[key]
        })
    }
    return output;
}

function concatArray(arr){
    return arr.reduce((acc, item, index, array)=>{
        return acc + item;
    })
}

function TableRow(props){
    let contentItem = props.contentItem;
    let orderArray = props.orderArray;
    let orderedTableData = getValuesFromObject(contentItem, orderArray)

    return (
        <tr >
            {orderedTableData.map((element, index) => {
                return <td key={index} dangerouslySetInnerHTML={getDangerousHTML(element)}></td>
            })}
        </tr>
    )
}

function symbolFromKey(obj, key){
    let symbolsArray = Object.getOwnPropertySymbols(obj);
    let output = symbolsArray.find((item)=>{
        return item.toString()===`Symbol(${key})`
    });

    return output===undefined?null:obj[output];
}

function NotATableEntry(props){
    let contentItem = props.contentItem;
    let orderArray = props.orderArray;
    let orderedTableData = getObjectInOrder(contentItem, orderArray);
    let symbols = Object.getOwnPropertySymbols(contentItem);
    let title = symbolFromKey(contentItem, 'title');//contentItem[Object.getOwnPropertySymbols(contentItem)[0]];
    let code  = symbolFromKey(contentItem, 'code');
    return (
        <div className="car my-3 px-2 py-2">
            <h4 dangerouslySetInnerHTML={getDangerousHTML(title)}></h4>
            {orderedTableData.map((element, index) => {
                return (
                    <div key={index} className="card-body">
                        <h6 dangerouslySetInnerHTML={getDangerousHTML(element.headline)}></h6>
                        <p dangerouslySetInnerHTML={getDangerousHTML(element.content)}></p>
                    </div>
                )
            })}
            <div className = "alert alert-dark" dangerouslySetInnerHTML={getDangerousHTML(code)}></div>
        </div>
    )
}

function Table(props){
    let headItems = props.headItems;
    let content = props.content;

    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    {
                        headItems.map((item)=>{
                            return <th key={item}>{item}</th>
                        })
                    }
                </tr>
            </thead>
            <tbody>
                {
                    content.map((element, index)=>{
                        return <TableRow key={JSON.stringify(element)} contentItem={element} orderArray={headItems} />
                    })
                }
                
            </tbody>
        </table>
    )

}


function NotATable(props){
    let headItems = props.headItems;
    let content = props.content;
    

    return(
        <div className="container-fluid my-3">
            {content.map((element, item) => {
                return <NotATableEntry key={JSON.stringify(element)} contentItem={element} orderArray={headItems} />
            })}
        </div>
    )
}

function ConditionalArray(props){
    function evaluateWindowSize(windowInnerWidth){
        return windowInnerWidth < 1000 ? "small" : "big"
    }
    function onResize(e){
        
        let windowSize = window.innerWidth;
        console.log(evaluateWindowSize(windowSize));
        setCurrentWidth(evaluateWindowSize(windowSize));
    }

    let [currentWidth, setCurrentWidth] = useState(evaluateWindowSize(window.innerWidth));

    useEffect(() => {

        window.addEventListener('resize', onResize)

        return function cleanup() {
            console.log('ConditionalArray removed')
            window.removeEventListener('resize', onResize)
        }
    })

    let headItems = props.headlines;
    let content = props.contentItems;

    if (currentWidth == 'small'){
        return (
            <NotATable headItems={headItems} content = {content} />
        )
    }
    
    return <Table headItems={headItems} content = {content} />
}

export default ConditionalArray;