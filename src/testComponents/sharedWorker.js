import  onmessage  from './worker_shared';
import SharedWorkerBuilder from './sharedWorkerBuilder';
import { useEffect, useState, useLayoutEffect, useRef } from 'react';

function TestSharedWorker (props){
 
    return (<>
             <iframe className="m-2" title = 'alias' srcDoc = {getIframeContent(1)}></iframe>
             <iframe className="m-2" title = 'alias' srcDoc = {getIframeContent(2)}></iframe>
            </>)
}

function getIframeContent(frameInstence){
    console.log(onmessage);
    return `
<body>
    <style>body{background-color:#ddd;}</style>
    <div id ="outlet"></div>
    <script>
        ${getScript(frameInstence)}
    </script>
</body>
    `
}

function getScript(frameInstance){
    return `
    let worker = (SharedWorkerBuilder(onmessage));
    let outlet = document.getElementById('outlet');
    console.log(worker)
    worker.port.start(); 
    worker.port.addEventListener('message', function(e){console.log(e);outlet.innerText += e.data;});
    worker.port.onmessage = function(e){console.log(e);outlet.innerText += e.data;};
    worker.port.start(); 
    worker.port.postMessage(JSON.stringify({type: 'introduction'}));
    worker.port.postMessage(JSON.stringify({name:'${frameInstance}', type:'frameData'}));
    console.log(worker)
    `
}


export default TestSharedWorker;