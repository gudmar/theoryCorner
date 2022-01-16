import  getTheoryData  from './worker_dedicated';
import WorkerBuilder from './worker-builder';
import { useEffect, useState } from 'react';
// {request, operation, data, expectedResult}
function getTestDataDedicated(){
    return [
        {request: 'test', operation:'strong', data: [6], expectedResult: [720]},
        {request: 'test', operation:'strong', data: [10], expectedResult: [3628800]},
    ]
}
var dedicatedWorker = new WorkerBuilder(getTheoryData);
// var dedicatedWorker = new Worker(getTheoryData);

function TestDedicatedWorker (props){
    let [data, setData] = useState([]);
    useEffect(()=>{
        async function getData(){
            let webWorkerResult = await getAllResulsFromWorker()
           setData(webWorkerResult);
        //    console.log(data)
        };
        getData();
    }, [])
    function getAllLines(){
        return data.map((val, index, arr)=>{
            const {request, result, expectedResult} = val;
            return (
                <div key={index} className="nextLine">
                    <span>{request}</span>
                    <span>{result} </span>
                    <span>{expectedResult}</span>
                </div>
            )
        })
    }
    return (<>{getAllLines()}</>)
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
    dedicatedWorker.postMessage({request:request, operation:operation, data: data, expectedResult:expectedResult});
    return new Promise((resolve)=>{
        dedicatedWorker.onmessage = (message) => {
            resolve(message.data);
        }
    })

}

export default TestDedicatedWorker;