




// {request: 'test', operation: 'strong', data: [3], expectedResult: [6]},
// e#slint-disable-next-line import/no-anonymous-default-export
export default ()=>{
    // e#slint-disable-next-line no-restricted-globals
    onmessage = function(e){

        
        function compare(a, b){
            // comparation is a very complex problem in JS,
            // it cannot be dealed in less then about 500 lines of code
            // so the simplest solution here
            return JSON.stringify(a) === JSON.stringify(b)
        }


        function procesRequest(request, result, additionalData){
            if (request === 'test') {
                return compare(result, additionalData)
            }
        }
        
        function getResult(operation, data){
            if (operation === 'strong') return strong(data[0]);
            return null;
        }
        
        function strong(number){
            let output = 1;
            for (let i = 1; i <= number; i++){
                output *= i;
            }
            return [output];
        }

        const {request, operation, data, expectedResult} = e.data.request;
        let result = getResult(operation, data);
        let message = procesRequest(request, result, expectedResult)
        postMessage(message);

    }
}

