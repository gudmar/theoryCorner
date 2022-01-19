
// let id = Math.floor(Math.random()*1000);
export default ()=>{
        // onconnect = function(e) {console.log(e)}

        onmessage = function(e) {
            console.log(e)
            let port = e.ports[0];
            port.postMessage('connected');
            console.log('connected');
            port.onmessage = function(e){
                port.postMessage('Shared message')
                // if (e.data.type == 'introduction') {
                //     port.postMessage(`I am ${this.id} shared web worker`);
                // }
                // if (e.data.type == 'frameData') {
                //     port.postMessage(`Answering back to the ${e.data.name} frame`);
                // }
                port.postMessage(e);
            }
        }

        // worker.port.postMessage({type: 'introduction'});
        // worker.port.postMessage({name:'${frameInstance}, type:'frameData'})
    }