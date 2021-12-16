import { getDangerousHTML } from '../../services/toolbox'

function getValuesFromObject(obj, orderArray){
    let output = [];
    if (orderArray != undefined){
        for(let key of orderArray) {
            output.push(obj[key])
            console.log(obj)
            console.log(key)
        }
        return output;
    }

    for (let key in obj){output.push(obj[key])}
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
    console.log(orderedTableData)

    return (
        <tr >
            {orderedTableData.map((element, index) => {
                console.log(getDangerousHTML(element))
                console.log(element)
                return <td key={index} dangerouslySetInnerHTML={getDangerousHTML(element)}></td>
            })}
        </tr>
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

function ConditionalArray(props){
    let headItems = props.headlines;
    let content = props.contentItems;
    console.log(props)
    return <Table headItems={headItems} content = {content} />
}

export default ConditionalArray;