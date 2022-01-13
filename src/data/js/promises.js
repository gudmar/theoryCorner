// spelling and content check in progress


let data =     {
    summary: 'async',
    title: 'Async',
    searchKeywords:`async asynchronous functions promise race resolve reject handler then finally catch await then
    all
    `,
    cathegory: 'js',
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'Asynchronous functions'
                },

                {
                    elementType: 'Paragraph',
                    content: `
                 Not every value is known, due to communication with the server. Some data will be delivered after a time
                 is passed, and some will not be delivered at all. When a button is clicked and data has to be 
                 downloaded from the server, the whole page and the browser should not be blocked by the fact that 
                 the application is waiting for the data, especially, that it is not guaranteed that data will be 
                 delivered at all. That is why asynchronous
                 functions are useful. Such a function runs in the same thread the rest of the code does (as JS
                is mainly a single thread language, one exception is for the web workers) and returns a promise 
                immediately, but the promise is in pending state. After it is known that the promise will be resolved
                or rejected, the promise state is changed to settled: resolved or rejected.
                    `
                },
                {
                    elementType:'SmallHeadline',
                    content:'The promise'
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    The promise is an object, that may be returned instantly, when some assignment with an asynchronous
                    value takes place. However, this object holds no value at the time it is returned. Instead, it is in
                    <strong>pending</strong> state. Finally, it will <strong>settle</strong> 
                    changing its state to <strong>fulfilled</strong>
                    or <strong>rejected</strong>. Meanwhile the whole application code is not blocked, so the user may scroll, interact
                    with the page until the promise is finalized. A promise may depend on other asynchronous functions,
                    so it may not be <strong>settled</code> until other promises are finalized. In this case there is a promise
                    chain.
                    `
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    When an asynchronus function is run, and its promises are in the pending state, 
                    the non asynchronus functions are not blocked and will execute.
                    `
                },
                {
                    elementType:'Headline-3',
                    content:'A async function'
                },
                {
                    elementType: 'UnsignedList',
                    content: [
                        'Asynchronous functions cannot be constructors',
                        `Asynchronous functions always return a promise. Even if someone attempts to return a concrete value,
                        or there is no return statement, always a promise is returned`,
                        `The <code>await</code> keyword may be used to pause the function until some promise is resolved,
                        and the concrete value is returned, or the promise is rejected,`,
                        'The <code>await</code> keyword may be used only in the asynchronous function,',
                        `Asynchronous functions may be run in parallel, sequence,`,
                        `In case in an <code>async</code> function nothing is returned, the function will return a
                        pending promise, that will resolve with undefined. In case there is a value returned in the 
                        <code>async function</code>, the function will return a promise resolving to that value. In case
                        there is a promise returned by a <code>async function</code>, this promise will be returned by
                        the function.`
                    ]
                },


                {
                    elementType:'SmallHeadline',
                    content:'Time measurement'
                },
                {
                    elementType:'Paragraph',
                    content:`
                       Let's define a simple class for time measurements
                    `
                },
                {
                    elementType:'Code',
                    content:`
<pre>
class Timer{
    constructor(){
        this.currentTime = 0;
        this.timer = null;
    }
    startTimer(){
        this.timer = setInterval(()=>{
            this.currentTime += 10;
        },10)
    }
    stopTimer(){
        clearInterval(this.timer);
    }
    resetTimer(){
        this.currentTime = 0;
    }
    getCurrentTime(){
        return this.currentTime;
    }
}
</pre>
                    `
                },





                {
                    elementType:'SmallHeadline',
                    content:'Async functions examples'
                },
                {
                    elementType:'Paragraph',
                    content:`
                       Lets create a factory of functions returning a promise that resolves after the given time:
                    `
                },
                {
                    elementType:'Code',
                    content:`
<pre>
let resolveFunctionFactory = function(timeout){
    return function(msgStart, msgEnd, msgResolve){
        console.log(msgStart);
        return new Promise(resolve => {
            setTimeout(function() {
                resolve(msgResolve);
                console.log(msgEnd)
            }, timeout)
        })
    }
}
</pre>                       
                    `
                },

                {
                    elementType:'Paragraph',
                    content:`
                       Now lets create two functions returning promises, that resolve after 100ms and after 150ms:
                    `
                },
                {
                    elementType:'Code',
                    content:`
<pre>
let resolve100Creator = resolveFunctionFactory(100);
let resolve150Creator = resolveFunctionFactory(150);
</pre>                       
                    `
                },

                {
                    elementType:'Paragraph',
                    content:`
                       Async function always returns a promise: 
                    `
                },
                {
                    elementType:'Code',
                    content:`
<pre>
async function iAlwaysReturnAPromise(){
    return 1;
}
console.log(iAlwaysReturnAPromise()); // [Object promise]

async function iReturnPromiseEvenIfIReturnUndefined(){
    console.log('Functions without return statement return undefined, but I return a promise, because I am async');
}
console.log(iReturnPromiseEvenIfIReturnUndefined()); // [Object promise]
</pre>                       
                    `
                },
                {
                    elementType:'Paragraph',
                    content:`
                       <strong>Starting async function in a sequence: second after the first is finished;</strong>
                    `
                },
                {
                    elementType:'Code',
                    content:`
<pre>
let timer = new Timer();

async function sequentialStartRace(){
    timer.startTimer();
    let f1 = await resolve100(' [started] ', ' [ended] ', ' [resolved] ')
    console.log(timer.getCurrentTime());
    let f2 = await resolve150(' [started] ', ' [ended] ', ' [resolved] ')
    console.log(timer.getCurrentTime());
    timer.stopTimer();
    return f2;
    return 'someValue'; // in this case the promise, that after awaiting f2 
    // would resolve to f2;
}
(async function wrapSequentialStart(){
    let outcome = await sequentialStartRace();
    console.log(outcome); // the resolved outcome of f2
})();

</pre>                       
                    `
                },
                {
                    elementType:'UnsignedList',
                    content:[
                       `In above example <code>f1</code> will be launched immediately,`,
                       `After 100ms from the start time will be logged: 100ms,`,
                       `After the first function is finished (100ms from the function start), the second function is 
                       run`,
                       `After next 150ms (so after 250ms from the function end) the second function stope execution,`,
                       `The time is logged after 250 from the function start,`
                    ]
                },

//                // SPELL and content CHECKED, CORRECT!  untill this point 

                {
                    elementType:'Paragraph',
                    content:`
                       <strong>Starting functions in concurrent mode:</strong>
                    `
                },
                {
                    elementType:'Code',
                    content:`
<pre>
async function concurrentStartRace(){
    let timer = newTimer();
    timer.startTimer();
    let f1 = resolve100(' [started] ', ' [ended] ', ' [resolved] ')
    console.log(timer.getCurrentTime()); // (1)
    let f2 = resolve150(' [started] ', ' [ended] ', ' [resolved] ');
    console.log(timer.getCurrentTime()); // (2)
}

concurrentStartRace();
</pre>               

                    `
                    
                },

                {
                    elementType:'UnsignedList',
                    content:[
                       `As there is no await, both functions will start in the same time period,`,
                       `Time logged. Both (1) and (2) console.logs will write 2,3`,
                       `The execution of the first function finishes 100ms after it was called,`,
                       `The execution of the second function finishes 150ms after it was called,`,
                       `Both functions finish execution after 150ms from the start` 
                    ]
                },


                {
                    elementType:'Paragraph',
                    content:`
                       <strong>Running functions in the <code>Promise.all</code></strong>
                    `
                },
                {
                    elementType:'Code',
                    content:`
<pre>
async function promiseAllRace(){
    timer3.startTimer();

    await Promise.all([
        (async()=>{
            let resolved = await resolve100(' start ', ' end' ,' resolved ')
            console.log(timer.getCurrentTime(); // (1)
        })(),
        (async()=>{
            let resolved = await resolve150(' start ', ' end' ,' resolved ')
            console.log(timer.getCurrentTime()); // (2)
        })()
    ])
    console.log(timer3.getCurrentTime()); // (3)
    timer.stopTimer();
}


promiseAllRace();
</pre>               

                    `
                },

                {
                    elementType:'UnsignedList',
                    content:[
                       `Both functions will be started at the same time,`,
                       `(1) will be logged after 100ms from the functions start,`,
                       `(2) will be logged after 150ms from the functions start,`,
                       `(3) will be logged after both funcions finis, so after 150ms
                        from the function start`,
                    ]
                },

                {
                    elementType:'Paragraph',
                    content:`
                       <strong>Running functions in the <code>Promise.race</code></strong>
                    `
                },
                {
                    elementType:'Code',
                    content:`
<pre>
async function promiseRaceRace(){
    timer3.startTimer();

    await Promise.race([
        (async()=>{
            let resolved = await resolve100(' start ', ' end' ,' resolved ')
            console.log(timer.getCurrentTime(); // (1)
        })(),
        (async()=>{
            let resolved = await resolve150(' start ', ' end' ,' resolved ')
            console.log(timer.getCurrentTime()); // (2)
        })()
    ])
    console.log(timer3.getCurrentTime()); // (3)
    timer.stopTimer();
}
promiseRaceRace();
</pre>               

                    `
                },

                {
                    elementType:'UnsignedList',
                    content:[
                       `Both functions will be started at the same time,`,
                       `(1) will be logged after 100ms from the functions start,`,
                       `(2) will be logged after 150ms from the functions start, promise race will already be 
                       resolved by this time, so this will have no effect, but despite this, all promises given
                       to the promise.race function are evaluated,`,
                       `(3) will be logged after the first of promises finishes execution, so after 100ms
                        from the function start`,
                    ]
                },



                {
                    elementType:'Headline-3',
                    content:'Promise'
                },
                {
                    elementType:'Code',
                    content:`
<pre>
const p = new Promise((resolve, reject)=>{
    setTimeout(()=>{resolve('I am resolved')}, 20 * Math.random());
    setTimeout(()=>{reject('I am rejected')}, 20 * Math.random());
})

Promise(executor); // in general

executor is a function taking the resolve(someValue), and reject(reason) functions
</pre>                    
                    `
                },

                {
                    elementType:'UnsignedList',
                    content:[
                        `The <code>Promise</code> constructor takes a single function as an argument,`,
                        `The <code>executor</code> (function taken as an argument of the promise constructor)
                        takes 2 callback functions as an argument, the first is the <code>resolve</code> function, 
                        and the second is <code>rejcet function</code>`,
                        `The return value of the executor is ignored`,
                        `<code>resolve(msg);</code> is a function, that will be called when the promise is resolved,
                        this function may be named in any way`,
                        `<code>reject(reason);</code>: a callback that will be called in case promise is not resolved and
                        is rejected, this function does not have to be named in this way`,
                        `If the executor throws an error, then the function that awaits this promise will not be interrupted, and
                        will not execute till the end. That is why it is important to handle errors.`

                    ]
                },

                {
                    elementType:'SmallHeadline',
                    content:'Promise API'
                },


                {
                    elementType:'SmallHeadline',
                    content:'Promise states'
                },
                {
                    elementType:'Paragraph',
                    content:`The newly created promise is in <i>pending</i> state. Its result is <code>undefined</code>.
                    It is said to be not settled, not fulfilled. Once the promise is resolved, its state is switched to <i>fulfilled</i>
                    and result changes to <code>resolved</code>. If the promise is rejected, its state changes to <i>fulfilled</i>, and
                    result to <code>rejected</code>. The promise in fulfilled state is said to be settled. A fulfilled promise can be
                    either resolved or rejected. Once settled (fulfilled) promise cannot change its state or result.`
                    // This paragraph SPELL CORRECT
                },
                {
                    elementType: 'Image',
                    name: 'promiseStates.png',
                    alt: 'Promise states'
                },

                {
                    elementType:'SmallHeadline',
                    content:'Promise chains'
                },
                {
                    elementType:'Paragraph',
                    content:`The promises may be chained thanks to the <code>then</code>, <code>catch</code> and <code>finally</code>
                    methods. Each of those methods returns a promise, so even <code>finally</code> does not have to be at the 
                    end of the promisse chain. The important thing is, that if the last chain link rejects, or throws an error, 
                    there will be an uncaught error. Please examine promise methods for more details.`
                },



                {
                    elementType: 'ConditionalArray',
                    headItems: [
                        'Method','Arguments', 'Returns', 'Description'
                    ],
                    content: [
                        {
                            [Symbol('title')]:'then',
                            [Symbol('code')]:`
                         <ul>
                            <li>It is important to remember, that a function that has no return, returns undefined, so in case
                            callbacks do not return a promise, that would take time to resolve, it is immediately resolved with the 
                            <code>undefined</code> value, causing the next <code>then</code> in the chain to be launched imediatley</li>
                         </ul>
                         <b>Execution order: in case of resolving, first callback is executed,
in case of rejection of the preceding function, the second callback will be executed,</b>

            <pre>
(async function executionOrder(){
    let pOK = () => { return new Promise((resolve)=>{resolve('Resolved')}) };
    let pNOK = () => { return new Promise((reject)=>{reject('Rejected')}) };

    let resolved = pOK().then(pOK, pNOK); // resolved, as pOK is the first arg
    let rejected = pOK().then(pNOK, pOK); // rejected, as pNOK is the first arg
})()
</pre>
<b>when with values instead of functions</b>
<pre>
(async function valuesInsteadOfFunctions(){
    let pOK = () => { return new Promise((resolve)=>{resolve('Resolved')}) };
    let pNOK = () => { return new Promise((reject)=>{reject('Rejected')}) };

    let resolved = pOK().then('val1', 'val2'); // 
    //will return a promise resolving to 'Resolved', as pOK returns such a promise
    // 'val1' is not a function so will be replaced with and identity function
    console.log(resolved)
    let rejected = pNOK().then('val1', 'val2'); // 
    console.log(rejected)
    //will return a promise that result will fulfill to 'Rejected', as pNOK 
    // fulfills to this value
})()
</pre>
<b>Can resolve after rejection</b>
<pre>
(async function canResolveAfterRejection(){

    let pOK = () => { 
        console.log('%cresolved', 'color:green')
        return new Promise((resolve)=>{resolve('Resolved')}) 
    };
    let pNOK = () => { 
        console.log('%crejected', 'color:red')
        return new Promise((reject)=>{reject('Rejected')}) 
    };

    canResolve = pOK().then(pOK,pNOK).then(pNOK,pOK).then(pOK, pNOK)
    newLogRow(SECTION_7);
    console.log(canResolve);
})();
// resolved | resolved | rejected | resolved | and the outcome is 'Resolved'
// YES, then may be resolved event if previous outcomes were rejected.
            </pre>                    
                            `,
                            Method: '<code>Promise.prototype.then(onResolved[, onRejected])</code>',
                            Arguments: `
                                <ul>
                                    <li><code>onResolved(value)</code>: callback function to be run if the promise succeeded</li>
                                    <li><code>onRejected(reason)</code>: callback function to be run if the promise failed</li>
                                    <li>If <code>onResolved</code> function is replaced with a value,
                                    then this value is replaced with an <i>identity</i> function, returning
                                    the value that the promise that <code>then</code> was attached to resolved to</li>
                                    <li>If an <code>onRejected</code> function is replaced with a value,
                                    then this value is replaced with a <i>thrower</i> function, throwing an error it
                                    received as an argument</li>
                                    
                                </ul>
                            `,
                            Returns: `
                            Returns a <b>promise</b> resolving to the value that the <code>onResolved</code>, 
                            or to the <code>onReject</code> callback returns
                             In particular, if 
                            the function does not return a thing, the promise resolving to undefined is returned.
                            `,
                            Description: `
                             The function runs a <code>onResolved</code> or <code>onRejected</code> callback, depending on the 
                             outcome of the preceding promise. The returned value is the outcome of the executed callback.
                            `
                        },













                        {
                            [Symbol('title')]:'catch',
                            [Symbol('code')]:`
                            promise1 | catch          | final result
                            resolved | not executed D | resolved
                            error    | resolved       | resolved
                            error    | rejected       | Error
<ul>
    <li>May be described as <code>promise1.then(undefined, onRejection)</code></li>
   <li><code>catch</code> may be in the middle of the promise chain</li>
   <li>If <code>catch</code> callback rejects (or throws an error) all chained <code>then</code>
   functions will run their rejection scenario, until one of them <b>resolves</b></li>
   <li><code>catch</code> should end the promise chain, because if the last promise rejects, there will be an
   uncaught error</li>
   <li>Last <code>catch</code> should end with resolve to avoid an error. Last catch should handle all possible 
   errors</li>
   <li>If an error is thrown by one of promise callback functions, this promise will be rejected</li>
</ul>                                                        
                        
<b>Catch with preceding promise resolved</b>
            <pre>
(async function evaluate(){
    let pOK = function(val){ 
        return function() {console.log('Resolved'+val);return Promise.resolve(val)}
    }
    let pNOK = function(val){ 
        return function(){console.log('Rejected'+val);return Promise.reject(val)}
    }
    let outcome = pOK(0)().then(pOK(1),pNOK(1)).then(pOK(2),pNOK(2)).catch(pOK(3))
    console.log(await outcome)
})();
// Resolved0 
// Resolved1 
// Resolved2 
// Resolved4
// This will execute no matter the predecessor outcome
// 4
// Catch not executed, as everything before passed
            </pre>          
            
            
            <b>Catch with preceding promise rejected</b>
            <pre>
(async function evaluate(){
    let pOK = function(val){ return function() {console.log('Resolved'+val);return Promise.resolve(val)}}
    let pNOK = function(val){ return function(){console.log('Rejected'+val);return Promise.reject(val)}}
        let outcome = pOK(0)()
            .then(pNOK(1),pNOK(1))
            .catch(pOK(2))
            .then(pOK(3),pNOK(3))
            .then(pOK(4),pNOK(4))
            .finally(()=>{console.log('This will execute no matter the precedor outcome')})
            console.log(await outcome)
    })();   
//Resolved0
//Rejected1
//Resolved2
//Resolved3
//Resolved4
// This will execute no matter the predecessor outcome
//4
            </pre>    
            
            
            <b>Catch with preceding promise rejected and catch rejected, no final catch</b>
            There will an uncaught error occur, as it is needed to set <code>catch</code>
            always at the end of the chain.
            <pre>
(async function evaluate(){
    let pOK = function(val){ return function() {console.log('Resolved'+val);return Promise.resolve(val)}}
    let pNOK = function(val){ return function(){console.log('Rejected'+val);return Promise.reject(val)}}
        let outcome = pOK(0)()
            .then(pNOK(1),pNOK(1))
            .catch(pNOK(2))
            .then(pOK(3),pNOK(3))
            .then(pOK(4),pNOK(4))
            // no catch here, error will appear
            .finally(()=>{console.log('This will execute no matter the precedor outcome')})
            console.log(await outcome)
})();
//Resolved0
//Rejected1
//Rejected2
//Rejected3
//Rejected4
// This will execute no matter the predecessor outcome
// Uncaught (in promise) 4
            </pre>     

            <b>A Rejecting catch with preceding promise throwing error</b>
            <pre>
(async function evaluate(){
    let pOK = function(val){ return function() {console.log('Resolved'+val);return Promise.resolve(val)}}
    let pNOK = function(val){ return function(){console.log('Rejected'+val);return Promise.reject(val)}}
    let err = function(val){return function(){throw new Error(val); return Promise.resolve(val)}}
        let outcome = pOK(0)()
            .then(pOK(1),pNOK(1))
            .then(err(3),pNOK(3))
            .catch(pNOK(2))
            .then(pOK(3),pNOK(3))
            .then(pOK(4),pNOK(4))
            // .catch(()=>{console.log('Catching')})
            .finally(()=>{console.log('This will execute no matter the precedor outcome')})
            console.log(await outcome)
})();
//Resolved0
//Rejected1
//Rejected2
//Rejected3
//Rejected4
// This will execute no matter the predecessor outcome
// Uncaught (in promise) 4



            </pre>    
                            `,
                            Method: '<code>Promise.prototype.catch(onRejected)</code>',
                            Arguments: `
                            <code>onRejected(reason)</code> is a callback returning a promise. If this promise 
                            fulfilles to the resolved value, then whole catch is concidered resolved, if the 
                            callback throws an error, or the result promise fulfills to rejected, the whole 
                            catch is concidered rejected. If the argument of the <code>catch</code> is a value, not a
                            function, then catch passes preceding promise result to the next function in the
                            chain, if available.
                            `,
                            Returns: `
                            Returns a <b>promise</b> fulfilling to the value that the <code>onReject</code> callback 
                            returns. In particular if 
                            the funcion does not return a thing, the promise resolving to undefined is returned.
                            `,
                            Description: `
                             The function runs a <code>onRejected</code> callback, if the preceding promise fulfilled to
                             the rejected value, and returnes a promise fulfilling with the value returned by the 
                             callback.
                            If the preceding promise was resolved then <code>catch</code> has no 
                             effect, and the stearing is passed to the next functions in the chain
                            `
                        },
                        







                        {
                            [Symbol('title')]:'finally',
                            [Symbol('code')]:`
            <pre>
<b>finally in theory does not to be the last in the chain</b>
<pre>
(async function evaluate(){
    let pOK = function(val){ return function() {console.log('Resolved'+val);return Promise.resolve(val)}}
    let pNOK = function(val){ return function(){console.log('Rejected'+val);return Promise.reject(val)}}
    let err = function(val){return function(){throw new Error(val); return Promise.resolve(val)}}
        let outcome = pOK(0)()
            .then(pOK(1),pNOK(1))
            .then(pOK(3),pNOK(3))
            .catch(pNOK(2))
            .then(pOK(3),pNOK(3))
            .finally(pNOK('fin'))
            .then(pOK(4),pNOK(4))
            console.log(await outcome)
    })();
</pre>            
<b>Will execute no matter the outcome of preceding promise result</b>
<pre>
(async function evaluate(){
    let pOK = function(val){ return function() {console.log('Resolved'+val);return Promise.resolve(val)}}
    let pNOK = function(val){ return function(){console.log('Rejected'+val);return Promise.reject(val)}}
    let err = function(val){return function(){throw new Error(val); return Promise.resolve(val)}}
    
        let outcome0 = pOK(0)()
            .then(pOK(0),pNOK(0))
            .finally(pOK('fin0'))
            // Resolved1
            // Resolvedfin1
    
        let outcome1 = pOK(0)()
            .then(pOK(1),pNOK(1))
            .finally(pNOK('fin1'))
            // Resolved1
            // Uncaught error -> finally failed
    
        let outcome2 = pOK(0)()
            .then(pNOK(2),pNOK(2))
            .finally(pOK('fin2'))
            // Rejected2
            // Resolvedfin2
            // Uncaught error -> no catch, rejection before finally,
            // but finally is not for catching errors
    
        let outcome3 = pOK(0)()
            .then(err(3),pNOK(3))
            .finally(pOK('fin3'))
            // Rejected3
            // Resolvedfin3
            // Uncaught error -> no catch, rejection (error thrown) before finally,
            // but finally is not for catching errors
    
        console.log(await outcome1); // fin1
        console.log(await outcome2); // fin2
        console.log(await outcome3); // fin3
            
    })();
</pre>
                            `,
                            Method: '<code>Promise.prototype.finally(onFinally)</code>',
                            Arguments: `
                            <code>onFinally()</code> will be run no matter the predecessor rejects or resolves. The 
                            only condition for this callback to be executed is the predecessor promise finalization.
                            `,
                            Returns: `
                            Returns a <b>promise</b> fulfilling to the value that the <code>onFinally</code> callback 
                            returns. In particular, if 
                            the function does not return a thing, the promise resolving to undefined is returned.
                            `,
                            Description: `
                             The function runs a <code>onFinally</code> callback as soon as the preceding promise fulfills
                             (settles). This method returns a promise, so does not have to be at the end of the promise chain.
                             <b>This function is not for handling errors!</b>. In case there is an uncaught rejected promise,
                             <code>finally</code> will not prevent an error.
                            `
                        },
                        




                        {
                            [Symbol('title')]:'allSettled',
                            [Symbol('code')]:`
    <b>An error thrown by one of promise callbacks</b> rejection
            <pre>
(async function allSettled(){
    let pOK = function(val){ return function() {console.log('Resolved'+val);return Promise.resolve(val)}}
    let pNOK = function(val){ return function(){console.log('Rejected'+val);return Promise.reject(val)}}
    let err = function(val){return function(){throw new Error(val); return Promise.resolve(val)}}
        let iterable = function*(){
            yield pOK(1)(); yield pNOK(2)(); yield err(3)(); yield pOK(4)();
        }
        console.log(Promise.allSettled(iterable()));
    })(); // This returns a rejected promise, as there is an error thrown
</pre>

<b>Resolved</b>
<pre>
(async function allSettled(){
    let pOK = function(val){ return function() {console.log('Resolved'+val);return Promise.resolve(val)}}
    let pNOK = function(val){ return function(){console.log('Rejected'+val);return Promise.reject(val)}}
        let iterable = [pOK(1)(), pNOK(2)(), pOK(3)()]
    console.log(Promise.allSettled(iterable);
})(); 
// [[PromiseResult]]: Array(3): 
// [{status: 'fulfilled', value:1}, {status:'rejection', reason: 2}, {status: 'fulfilled', value: 3}]

            </pre>
                            `,
                            Method: '<code>Promise.allSettled(iterable))</code>',
                            Arguments: `
                            An iterable is an object having its [Symbol.iterable] well known symbol set to an iterator.
                            For example an array, or Map object.
                            `,
                            Returns: `
                            The promise with its value settled to the array of results of promises included in the iterable
                            given as an argument.
                            `,
                            Description: `
                             The method returns a promise, that resolves with an array of promise results of promises
                             given in the iterable function argument.
                            `
                        },

                // Spelling of array checked so far



                {
                    [Symbol('title')]:'all',
                    [Symbol('code')]:`
<b>An error thrown by one of promise callbacks</b> rejection
    <pre>
(async function allReject(){
    let pOK = function(val){ return function() {console.log('Resolved'+val);return Promise.resolve(val)}}
    let err = function(val){return function(){throw new Error(val); return Promise.resolve(val)}}
        let iterable = function*(){
            yield pOK(1)(); yield err(2)(); yield pOK(3)();
        }
        console.log(Promise.all(iterable()));
})(); // Rejected due to the err; result: error..
</pre>

<b>Rejection</b> due to promise rejection
<pre>
(async function allReject(){
    let pOK = function(val){ return function() {console.log('Resolved'+val);return Promise.resolve(val)}}
    let pNOK = function(val){ return function(){console.log('Rejected'+val);return Promise.reject(val)}}
        let iterable = function*(){
            yield pOK(1)(); yield pNOK(2)(); yield pOK(3)();
        }
        console.log(Promise.all(iterable()));
})(); // Rejected due to the pNOK, promise result 2
</pre>

<b>Resolved</b>
<pre>
(async function allResolve(){
    let pOK = function(val){ return function() {console.log('Resolved'+val);return Promise.resolve(val)}}
    let pNOK = function(val){ return function(){console.log('Rejected'+val);return Promise.reject(val)}}
        let iterable = function*(){
            yield pOK(1)(); yield pOK(2)(); yield pOK(3)();
        }
        console.log(Promise.all(iterable()));
    })(); //  Resolved; [1,2,3]
</pre>
<b>All passed values are not promisses</b>
<pre>
(async function allResolve(){
    console.log(Promise.all([1,2,3]));
})(); //  Resolved; [1,2,3]
</pre>
                    `,
                    Method: '<code>Promise.all(iterable))</code>',
                    Arguments: `
                    An iterable is an object having its [Symbol.iterable] well known symbol set to an iterator.
                    For example an array, or Map object.
                    `,
                    Returns: `
                    A promise that:
                    <ul>
                    <li>In case all promisses given in the input iterable resolve: returns the promise with its value 
                    settled 
                    to the array of results of promises included in the iterable given as an argument.</li>
                    <li>In case <b>at least one promise from the input iterable rejects</b> the returned promise will 
                    reject <b>not wainig for other promisses to resolve</b></li>
                    <li>In case of error in one of promisses passed as an argument, the returned promise will
                    reject with the error description as the value</li>
                    <li>A resolved promise if the itarable pssed as an argument is empty</li>
                    <li>An asynchronously resolved Promise if the iterable passed as an argument has no promises</li>
                    </ul>
                    `,
                    Description: `
                     Takes an iterable of promisses, and returns a promise, that will resolve to an array of 
                     results if each promise from the iterable resolves, or reject in case at least one 
                     promise from the iterable rejects.
                    `
                },
            
                ]
            },
            
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline-2',
                    content:'References'
                },
                {
                    elementType:'Link',
                    content:'Async functions, await',
                    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function',
                    description:'Async functions'
                },
                {
                    elementType:'Link',
                    content:'Promise',
                    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise',
                    description:'Constructor'
                },
            ]
        }
    ]
        }]
};

export default function getPromiseData(){
    console.error(`fulfilled is the promise state. State may be fulfilled or pending, where is RESULT is rejected or 
    resolved, no fulfilled result!!`)
    return data;
}