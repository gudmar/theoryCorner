// SPELL CHECKED, CORRECT!
let data =     {
    summary: 'console',
    title: 'console',
    searchKeywords:`console.log console.dir console.group console.groupEnd console.info console.profile
    console.error console.warn console.table console.time console.trace console.timeEnd, console.assert
    console.count console log dir gorup groupEnd info profile error wart table time trace timeEnd
    asset count
    `,
    cathegory: 'js',
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'console'
                },

                {
                    elementType: 'Paragraph',
                    content: `
                    Simple API for logging things to the console. This is good for mainly debugging purposes.
                    `
                },


 
                {
                    elementType: 'ConditionalArray',
                    headItems: [
                        'Usage','Arguments','Description'
                    ],
                    content: [
                        {
                            [Symbol('title')]:'console.assert',
                            [Symbol('code')]:`
<pre>
let o1 = {a:1, b:2, c:3};
let o2 = {a:7, b:8, c:9};
let msg = 'some message';
console.assert(false, msg, o1, o2); // will display an error,
console.assert(true, o2, o1, msg); // noting happens
</pre>                            
                            `,
                            Usage:`console.assert(assertion, obj1[, obj2, ...]);`,
                            Arguments:`
                            <ul>
                                <li><code>assertion</code>: if false an error message will be displayed. If true nothing 
                                happens</li>
                                <li><code>obj</code>: objects that will be displayed in an expandable lists</li>
                            </ul>
                            `,
                            Description:`Same as <code>if (!assertion) {console.error(..)}</code>. displays an error
                            message in case assertion is not met,`,
                        },


                        {
                            [Symbol('title')]:'console.clear()',
                            [Symbol('code')]:`
<pre>
console.clear();
</pre>                            
                            `,
                            Usage:`console.clear();`,
                            Arguments:`
                            Na
                            `,
                            Description:`Clears the console if allowed.`,
                        },





                        {
                            [Symbol('title')]:'console.count',
                            [Symbol('code')]:`
<pre>
function loop(nr, label, cb){
    for (let i=0; i<nr; i++){
        console.count(label);
        cb();
    }
}

loop(2, 'outerFunction', loop.bind(null,3,'nested',()=>{}))

// outerFunction: 1 
// nested: 1 
// nested: 2 
// nested: 3 
// outerFunction: 2 
// nested: 4 
// nested: 5 
// nested: 6

</pre>                            
                            `,
                            Usage:`console.count(label)`,
                            Arguments:`
                            <code>label</code>: a string label
                            `,
                            Description:`
                                Displys how many times this has been called with the specified label.
                                If none label is given, then it is set to 'default'
                                `,
                        },
                        





                        {
                            [Symbol('title')]:'console.countReset',
                            [Symbol('code')]:`
<pre>
console.count();
console.count();
console.count();
console.countReset();
console.count();
//default:1; 
//default:2;
//default:3;
//default:0;
//default:1;

</pre>                            
                            `,
                            Usage:`console.countRestart(label)`,
                            Arguments:`
                            <code>label</code>: optional, string
                            `,
                            Description:`
                            Resets the console.count counter for the given label to 0. If no label given, restarts 
                            the default label to 0.
                                `,
                        },



                        {
                            [Symbol('title')]:'console.info',
                            [Symbol('code')]:`
<pre>
let o1 = {a:1, b:2, c:3};
let o2 = {a:7, b:8, c:9};
let msg = 'some message';
console.info(msg, o1, o2); 
// Will display the message and objects 
// as expandable lists


function nested(){
    console.info('I am nested');
}
function callNested(currentLevel, maxLevel, cb){
    if (currentLevel < maxLevel){
        callNested(currentLevel + 1, maxLevel, cb)
    }
    if (currentLevel === maxLevel) {cb()};
}
function callXTimes(maxLevel, cb){
    callNested(0, maxLevel, cb)
}
callXTimes(5, nested);

// no call stack is printed to the console
// just a flat output. To have a stack trace use
// console.trace()
</pre>                            
                            `,
                            Usage:`console.info(obj1[, obj2, ...]);`,
                            Arguments:`
                            Objects comma separated, will be displayed as expandable lists. If one of object
                            arguments in a message, then this message will be displayed anyway.
                            `,
                            Description:`Displays objects as expandable lists`,
                        },




                        {
                            [Symbol('title')]:'console.group(), console.groupEnd()',
                            [Symbol('code')]:`
<pre>
function iterate(nr, cb){
    for(let i=0; i<nr; i++){
        console.log(i);
        cb()
    }
}
console.group('Group');
iterate(3, ()=>{
    console.group('Group2');
    iterate(2, ()=>{})
    console.groupEnd('Group2');
});
console.groupEnd('Group');
</pre>                            
                            `,
                            Usage:`
                            <pre>
<code>console.group(label)</code>
...
<code>console.groupEnd(label)</code>;
                            </pre>
                            `,
                            Arguments:`
                            <code>label</code>: a string value for the label to be displayed
                            `,
                            Description:`Groups inner console.log in an expandable list. This list is <b>expanded</b>
                            by default. To have a collapsed list use <code>console.groupCollapsed()</code> instead`,
                        },




                        {
                            [Symbol('title')]:'console.table(arr)',
                            [Symbol('code')]:`
<pre>
let o1 = {firstName: 'Jan', lastName:'Kowalski'};
console.table(o1);

</pre>
<div class="note">
    <table class="table table-bordered">
        <thead>
           <tr><td>(index)</td><td>Value</td></tr>
        </thead>
        <tbody>
            <tr><td>firstName</td><td>Jan</td></tr>
            <tr><td>lastName</td><td>Kowalski</td></tr>
        </tbody>
    </table>
</div>

<pre>
let o2 = [
    {firstName: 'Jan', lastName:'Kowalski'},
    {firstName: 'Adam', lastName:'Nowak'}
]
let o3={
    make: 'subaru',
    engine: {
        power:'245KM',
        torque:'300NM'
    }
}
console.table(o3)
console.table(o2);
</pre>                            
<div class="note">
    <table class="table table-bordered">
        <thead>
           <tr><td>(index)</td><td>FirstName</td><td>LastName</td></tr>
        </thead>
        <tbody>
            <tr><td>1</td><td>Jan</td><td>Kowalski</td></tr>
            <tr><td>2</td><td>Adam</td><td>Nowak</td></tr>
        </tbody>
    </table>
</div>


<pre>
let o3={
    make: 'subaru',
    engine: {
        power:'245KM',
        torque:'300Nm'
    }
}
console.table(o3)
</pre>                            
<div class="note">
    <b>Nested object</b>
    <table class="table table-bordered">
        <thead>
           <tr><td>(index)</td><td>Value</td><td>power</td><td>torque</td></tr>
        </thead>
        <tbody>
            <tr><td>make</td><td>"subaru"</td><td></td></tr>
            <tr><td>engine</td><td></td><td>"245KM"</td><td>"300Nm"</td></tr>
        </tbody>
    </table>
</div>
                            `,
                            Usage:`
                            console.table(arr)
                            `,
                            Arguments:`
                                Object, array that will be displayed.
                            `,
                            Description:`displays data as a table`,
                        },



                        {
                            [Symbol('title')]:'console.time(), console.timeLog(), console.timeEnd()',
                            [Symbol('code')]:`

<pre>
function strength(n){
    let current = 1;
    for (let i = 0; i < n; i++){
        current *= i;
    }
    return current
}

function loop(n, cb){
    for (let i = 0; i < n; i++){
        cb();
    }
}
console.time('t1');
console.time('t2');
loop(1000, strength.bind(null, 20));
loop(1000, strength.bind(null, 20));
loop(1000, strength.bind(null, 20));
console.timeLog('t1')
loop(1000, strength.bind(null, 20));
loop(1000, strength.bind(null, 20));
loop(1000, strength.bind(null, 20));
console.timeLog('t2')
loop(1000, strength.bind(null, 20));
loop(1000, strength.bind(null, 20));
loop(1000, strength.bind(null, 20));
console.timeEnd('t1');
console.timeEnd('t2');

// t1: 4ms;
// t2: 5ms;
// t1: 7ms; - timer expired
// t1: 8ms; - timer expired
</pre>
                            `,
                            Usage:`
                            console.time('lab');
                            console.timeLog('lab');
                            console.timeEnd('lab');
                            `,
                            Arguments:`
                            <code>label</code>: an optional string argument for distinguishing timers. 
                            If none given, then will be set to the "<code>default</code>" value.
                            `,
                            Description:`
                            <ul>
                            <li><code>console.time</code> starts a timer with the given label</li>
                            <li><code>console.timeLog</code> logs time that passed since the timer for that label was started</li>
                            <li><code>console.time</code> Stops the timer for the target label</li>
                            </ul>
                            `,
                        },



                        


                        {
                            [Symbol('title')]:'console.trace()',
                            [Symbol('code')]:`
<pre>
function nested(){
    console.trace('I am nested');
}
function callNested(currentLevel, maxLevel, cb){
    if (currentLevel < maxLevel){
        callNested(currentLevel + 1, maxLevel, cb)
    }
    if (currentLevel === maxLevel) {cb()};
}
function callXTimes(maxLevel, cb){
    callNested(0, maxLevel, cb)
}
callXTimes(5, nested);

// VM11512:2 I am nested
// nested @ VM11512:2
// callNested @ VM11512:8
// callNested @ VM11512:6
// callNested @ VM11512:6
// callNested @ VM11512:6
// callNested @ VM11512:6
// callNested @ VM11512:6
// callXTimes @ VM11512:11
// (anonymous) @ VM11512:13


</pre>                            
                            `,
                            Usage:`
console.trace(obj)
                            `,
                            Arguments:`
                            <code>obj</code>: zero or more objects to be put to the console with the data
                            `,
                            Description:`
                            Outputs the stack traces to the console output.
                            `,
                        },



                        {
                            [Symbol('title')]:'console.log()',
                            [Symbol('code')]:`
<pre>
const obj = {a: 'a', b: 'b'};

console.log('Some object' + obj);
// Some object [object: Object] -> the obj is converted to the string with the 
// toString method

console.log('Some object', obj);
// This will console log both: the string and the expandable object in one line
</pre>                            
                            `,
                            Usage:`
console.log(a[, b[, c[,...]]])
                            `,
                            Arguments:`
                            Each argument may be an object, a primitive or a string.
                            `,
                            Description:`
                            Will log argments to the console. May be used for a string and object logging in one line 
                            (see examples)
                            `,
                        },


                        
                    ]
                },

                {
                    elementType:'SmallHeadline',
                    content:'console.log with css'
                },
                {
                    elementType:'Code',
                    content:`
                    <div class="nested">
                    Coloring console output with css
                    </div>
<pre>
let msg = "custom message";
console.log('%c'+msg, 'color-background:red; border-radius: 5px; padding: 5px; color:white');
</pre>                    
                    `
                }



            ]
        },
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline-2',
                    content:''
                },
                {
                    elementType:'Paragraph',
                    content:`

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
                    content:'Developer mozilla',
                    href: 'https://developer.mozilla.org/pl/docs/Web/API/Console',
                    description:'Tutorial'
                },
            ]
        }
    ]
};

export default function getConsoleData(){
    return data;
}