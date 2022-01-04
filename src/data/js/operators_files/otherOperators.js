

let otherOperatorsData = [
    {
        elementType:'Headline-3',
        content:'Other operators'
    },
    {
        elementType: 'Paragraph',
        content: `
        The other operators are: a <i>conditional (ternary)</i> operator, a <i>comma</i> operator, a <i>delete</i> 
        operator, a <i>typeof</i> operator, a <i>void</i> operator, an <i>instanceof</i> operator and an <i>in</i> operator, , 
        `
    },

    {
        elementType:'SmallHeadline',
        content:'Releasing memory in JS'
    },
    {
        elementType: 'Paragraph',
        content: `
        Memory management in JS is done automatically. There is no possiblity to tirgger manual memory release.
        Memory may be alocated by creating a new property, variable or with a <code>new</code> operator.
        There are two algorithms for releasing the allocated memory (garbage collection):
        `
    },
    {
        elementType: 'Paragraph',
        content: `
        <strong>A reference counting garbage collection</strong>: if the property has any reference pointing to it
         it will not be garbage collected. There is a problem with the circural references. If an object points 
         somehow to itsself, it will not be garbage collected with this algorithm
        `
    },
    {
        elementType: 'Code',
        content: `
<pre>
let obj = {
    a: {
        b: 3
    }
} // obj.a is a reference to the a property
// obj.a.b is a reference to an b property

let x = obj.a; //now a property has two references, so
delete obj.a; // will make a property unavailable from the obj, 
// but it may not be garbage collected, as it is still referenced by the x variable

let obj = {
    a: {
        x: {val: 3},
        y: {val: 4}
    }
}
obj.a.x[ref] = obj.a.y;
obj.a.y[ref] = obj.a.x;
delete obj.a
// now a is unreachable from anywhere, as the only reference was deleted,
// but it may not be garbage collected, as there is a cycle reference
// This would cause a memory leak if this algorithm is applied

</pre>        
        `
    },

    {
        elementType: 'Paragraph',
        content: `
        <strong>Mark-and-sweep</strong>: a property may be garbage collected if it is not reachable from the 
        global object in any way. This approach is used since 2012, and prevents memory leaks.
        `
    },

    
    {
        elementType: 'ConditionalArray',
        headItems: [
            'Operator','Name','Usage','Description'
        ],
        content: [
            {
                [Symbol('title')]:'conditional ternary',
                [Symbol('code')]:`
<pre>
 ''?'expr1':'expr2'; expr2, as '' converts to false
 (()=>{return true})()?(()=>{return 'expr1'})():(()=>{return 'expr2'})();
 // 'expr1', as first IFEE evaluated to true;
 true?1:2;// 1;

 let f = () => {
     return condition ? val1 
        : condition2 ? val2
        : condition3 ? val3
        : val4;
 }

// this is an example of the if .. else .. else if statement
let f2 = () => {
    if (condition) {return val1}
    else if (condition2) {return val2}
    else if (condition3) {return val3}
    else {return val4}
}

</pre>                    
                `,
                Operator: '<code>?:</code>',
                Name: `Conditional (ternary)`,
                Usage: 'condition ? expr1 : expr2',
                Description: `
                If the condition evaluates to <code>true</code>, result is <code>expr1</code> else the result is 
                <code>expr2</code>. Can be chained into a structure similar to the <code>if..else..else if..</code>
                `
            },



            {
                [Symbol('title')]:'Comma',
                [Symbol('code')]:`
                This is not the comma from objects or arryays, this is the comma known from for example a <i>for</i>
                operator.
<pre>
for (let i=0; i < 10; i++){};

function(){
    ...
    return (x +=1, x);
} // in this example x will be incremented before it is returned
// comma may perform an action bofore returning something.

let a, b, c; // declaring a set of variables;

let z = (a = 3, b = 4, c = 6); // z is 6, a is 3, b is 4, c is 6;

</pre>                    
                `,
                Operator: '<code>,</code>',
                Name: `Comma`,
                Usage: 'expr1, expr2',
                Description: `
                Evaluates each of the given expressions, and returns the last in the chain. May be chained.                `
            },





            {
                [Symbol('title')]:'delete',
                [Symbol('code')]:`
                Object property cannot be deleted if: 
                <ul>
                    <li>it is not an own object property (for example it belongs somewhere to a prototype chain)</li>
                    <li>is created with a var, let or const keyword (these properties are non-configurable)</li>
                    <li>is a non-configurable property set in objects descriptor</li>
                    <li>is a non-writable property set in objects descriptor</li>
                    <li>if object is sealed or frozen its properties may not be deleted</li>
                    <li>is an array element. In this case a value of the array index will be set to <i>empty</i>
                    and will not be removed with the delete operator</li>
                </ul>
<pre>
let obj = {
    a: 5,
    b: {c: 6}
}

console.log(delete obj); // false, obj is set with the let keyword
// in case of a strict mode Error

console.log(delete b); // true, b object is garbage collected
// no need to worry about memory releasing
console.log(obj); // {a: 5}

let nonConfig = {
    configurable: false,
    value: 3
}
Object.defineProperty(obj, 'x', nonConfig);
delete obj.x; // false, or an error, obj.x is not configurable;

let nonWritable = {
    writable: false,
    value: 3
}

Object.defineProperty(obj, 'y', nonWritable);
console.log(delete obj.y); // false

delete obj; // false of Error, created with let


o2 = {a: 3}
Object.defineProperty(o2, 'x', nonConfig);
delete o2; // true

let s = Symbol('test');
let o3 = {
    a: 3,
    [s]: 4
}
delete o3[s];

o2 = {a:3};
Object.seal(o2);
delete o2.a; // false or error, object is sealed

let a = [1,2,3,4,5];
delete a[0]; // true;
// a is [empty, 2, 3, 4, 5]
// use a.splice(0,1) instead or arr.shift();

function f(){};
delete f; // true




</pre>                    
                `,
                Operator: '<code>delete</code>',
                Name: `delete`,
                Usage: 'delete obj.prop',
                Description: `
                Removes a property from an object if this property is allowed to be removed. 
                Does not free alocated memory. Returns <code>true</code> if the operation was successfull,
                and false in other cases. If in strict mode, if operation is nusuccessfull will throw an error.
                `
            },




            {
                [Symbol('title')]:'typeof',
                [Symbol('code')]:`
                <table class="table">
                    <thead><tr><th>Type</th><th>Result</th></tr></thead>
                    <tbody>
                        <tr><td>Undefined</td><td>"undefined"</td></tr>
                        <tr><td>Null</td><td>"object"</td></tr>
                        <tr><td>Boolean</td><td>"boolean"</td></tr>
                        <tr><td>Number</td><td>"number"</td></tr>
                        <tr><td>BigInt</td><td>"bigint"</td></tr>
                        <tr><td>String</td><td>"string"</td></tr>
                        <tr><td>Symbol</td><td>"symbol"</td></tr>
                        <tr><td>Function</td><td>"function"</td></tr>
                        <tr><td>Others</td><td>"object"</td></tr>
                    </tbody>
                </table>
                Exceptions:
                <ul>
                    <li><code>typeof document.all</code> is "undefined"</li>
                    <li><code>typeof null</code> is "object"</li>
                </ul>
<pre>
let a = new Boolean(false);
typeof a; // "object", the same with new Number() ...

typeof 3; // "number"

let date = Date.now();
typeof date; // number
let date2 = new Date;
date2.now;
typeof date2; // object

function() {
    typeof a; // ReferenceError
    // a is in TDZ - temporal dead zone
    // not declared with a var keyword, not hoisted
    let a = 3;
}

typeof /s/; // should be 'object' but in some browsers may be 'function'

</pre>                    
                `,
                Operator: '<code>typeof</code>',
                Name: `typeof`,
                Usage: 'typeof someProp',
                Description: `
                Returns a string indicating a type of the object
                `
            },




            {
                [Symbol('title')]:'void',
                [Symbol('code')]:`
                Brackets should be used to mark correct precedence of the void expression:
                <code>let a = void (expression)</code>

<pre>
void function iife(){}()
// without void there would be a syntax error, 
// other method to call this is 
(function iife(){})()

&lt;a href="javascript:void(0);">Clicking does nothing&lt;/a>
&lt;a href="javascript:void(document.body.style.color='blue');">change background&lt;/a>

button.onclick = () => void someArray.pop();
// normally this expression would return a removed element, 
// in this case returns undefined

let a = void 5 + 5; // a is nudefined
let b = void 5**3; // SyntaxError, 
let b = void (3**5); // b is undefined

</pre>                    
                `,
                Operator: '<code>void</code>',
                Name: `void`,
                Usage: 'void expression',
                Description: `
                Evaluates the expression and returns undefined
                `
            },




            {
                [Symbol('title')]:'in',
                [Symbol('code')]:`
                

<pre>
let arr = [1,2,3,4];
8 in arr; // false;
3 in arr; // true;
'length' in arr; // true;
Symbol.iterator in arr; // true;

let obj = {a: 2, b: 3, c: 4}
for (let key of obj) { console.log(key)};
// a, b, c

function SomeObj(){this.a = 3}
SomeObj.prototype.b = 4;
SomeObj.constructor = SomeObj;
let instance = new SomeObj();
for (let key in instance) {console.log(key)}
// a, b

</pre>                    
                `,
                Operator: '<code>in</code>',
                Name: `in`,
                Usage: 'prop in obj',
                Description: `
                Returns true if the property is in the specified object or its prototype chain or if <code>index in arr</code>
                index is in the arr.
                `
            },


    
    
        ]
    },
    
    ]
    
    export default function getOtherOperatorsData(){
        return otherOperatorsData;
    }
    