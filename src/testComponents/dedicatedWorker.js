import  getTheoryData  from './worker_dedicated';
import WorkerBuilder from './worker-builder';
import { useEffect, useState, useLayoutEffect, useRef } from 'react';
function getTestDataDedicated(){
    return [
        {request: 'test', operation:'strong', data: [6], expectedResult: [720]},
        {request: 'test', operation:'strong', data: [8], expectedResult: [40320]},
        {request: 'test', operation:'strong', data: [10], expectedResult: [3628800]},
    ]
}

function TestDedicatedWorker (props){
    const [data, setData] = useState(getTestDataDedicated());
    const [results, setResults] = useState([])
    function getAllLines(){
        return data.map((tuple, index, arr)=>{
            console.log(tuple)
            const {request, result, expectedResult} = arr[index];
            return (
                    <SingleLine key={index} data = {tuple} />
            )
        })
    }
    return (<>
             {getAllLines()}<span>{JSON.stringify(results[0])}</span>
            </>)
}



function SingleLine(props){
    const [data,setData] = useState(props.data);
    const [results, setResults] = useState([]);
    const [req, setReq] = useState(data.request);
    const [res, setRes] = useState(data.response);
    const [exp, setExp] = useState(data.expectedResult);
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(()=>{
        getResultFromWorker(data).then((r)=>{console.log('RESOLVED '+r);setRes(r + ''); return Promise.resolve()}).catch((e)=>{console.log(e);});
    }, [res])

    return (
        <>
    <div  className="nextLine container mt-3">
        <span className="badge bg-primary m-1">{req}</span>
        <span className="badge bg-success m-1">{res} </span>
        <span className="badge bg-warning m-1">{exp}</span>
    </div>
    
    </>
    )
}

async function getAllResulsFromWorker(){
    let output = [];
    for (let instance of getTestDataDedicated()){
        let result = await getResultFromWorker(instance);

        output.push({result:result, request: instance.request,expectedResult: instance.expectedResult});
    }
    return new Promise((resolve)=>{resolve(output)})
        
}

async function getResultFromWorker(request, operation, data, expectedResult){
    var dedicatedWorker = new WorkerBuilder(getTheoryData);
    dedicatedWorker.postMessage({request:request, operation:operation, data: data, expectedResult:expectedResult});
    return new Promise((resolve)=>{
        dedicatedWorker.onmessage = (message) => {
            resolve(message.data);
        }
    })

}

export default TestDedicatedWorker;