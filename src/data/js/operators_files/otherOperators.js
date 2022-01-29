
// SPELL CHECKED, CORRECT!
let otherOperatorsData = [
    {
        elementType:'Headline-3',
        content:'Other operators'
    },
    {
        elementType: 'Paragraph',
        content: `
        The other operators are: a <i>conditional (ternary)</i> operator, a <i>comma</i> operator, a <i>delete</i> 
        operator, a <i>typeof</i> operator, a <i>void</i> operator, an <i>instanceof</i> operator and an <i>in</i> operator,
        `
    },

    {
        elementType:'SmallHeadline',
        content:'Releasing memory in JS'
    },
    {
        elementType: 'Paragraph',
        content: `
        Memory management in JS is done automatically. There is no possibility to trigger manual memory release.
        Memory may be allocated by creating a new property, variable or with a <code>new</code> operator.
        There are two algorithms for releasing the allocated memory (garbage collection):
        `
    },
    {
        elementType: 'Paragraph',
        content: `
        <strong>A reference counting garbage collection</strong>: if the property has any reference pointing to it
         will not be garbage collected. There is a problem with the circular references. If an object points 
         somehow to itself, it will not be garbage collected with this algorithm.
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
                This is not the comma from objects or arrays, this is the comma known from for example a <i>for</i>
                operator.
<pre>
for (let i=0; i < 10; i++){};

function(){
    ...
    return (x +=1, x);
} // in this example x will be incremented before it is returned
// comma may perform an action before returning something.

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
                Does not free all ocated memory. Returns <code>true</code> if the operation was successful,
                and false in other cases. If in strict mode, if operation is nusuccessful will throw an error.
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



            {
                [Symbol('title')]:'instanceof',
                [Symbol('code')]:`
                <ul>
                <li>Primitives do not have a prototype, so a number 3 is not an instance of the <code>new Number(3)</code></li>
                <li>If an objects instances prototype is changed, then instanceof result may change</li>
                </ul>
<pre>
let s = 'someString';
let so = new String('someStringObject');
s instanceof String; // false, as s is a primitive and has no constructor
so instanceof String; // true, so is already an object having a constructor

function SomeConstructor(){};
function Child(){
    SomeConstructor.call(this);
}
Child.prototype = Object.create(SomeConstructor.prototype);
Child.prototype.constructor = Child;
// equals to :
// class SomeConstructor{};
// class Child extends SomeConstructor{constructor(){super();}}

let sc = new SomeConstructor();
let c = new Child();
sc instanceof SomeConstructor; // true;
c instanceof SomeConstructor; // true;
c instanceof Object; // true
c instanceof String; // false

class Shape{}

class Circle extends Shape{
    constructor(){
        super();
    }
}

let s = new Shape();
let cir = new Circle();

cir instanceof Circle; // true
cir instanceof Shape; // true
cir instanceof Object; // true
s instanceof Circle; // false

Object.setPrototypeOf(cir, Object.create(String.prototype))

cir instanceof Shape; // false
cir instanceof String; // true

cir.__prototype__ = Number.prototype;

</pre>                    
                `,
                Operator: '<code>instanceof</code>',
                Name: `instanceof`,
                Usage: 'o instanceof SomeConstructor',
                Description: `
                Returns true if the prototype of the left side operand is the same as the prototype of the right side operand.
                The left side operand has to be a type of "function" or an error will occur.
                `
            },



            {
                [Symbol('title')]:'typeof',
                [Symbol('code')]:`
                <ul>
                    <li><code>Undefined</code> is <code>"undefined"</code>,</li>
                    <li><code>Null</code> is <code>"object"</code>: an exception due to the historical reasons,</li>
                    <li><code>Boolean</code> is <code>"boolean"</code>,</li>
                    <li><code>Number</code> is <code>"number"</code>,</li>
                    <li><code>BigInt</code> is <code>"bigint"</code>,</li>
                    <li><code>String</code> is <code>"string"</code>,</li>
                    <li><code>Symbol</code> is <code>"symbol"</code>,</li>
                    <li><code>Function</code> is <code>"function"</code>,</li>
                    <li>any other is <code>"object"</code>,</li>
                </ul>
<pre>
typeof 77 === 'number';
typeof(4.32) === 'number';
typeof Math.LN10 === 'number';
typeof Infinity === 'number';
typeof NaN === 'number';
typeof Number('some string') === 'number; 
// as Number returns a number, i this 
// case a <code>NaN</code>, and <code>typeof NaN === 'number'</code>
// so this is 'number'

typeof 5n === 'bigint';
typeof 'some string' === 'string';
typeof true === 'boolean';
typeof !!(1); // boolean;

typeof Symbol() === 'symbol';
typeof Symbol.iterator === 'symbol';

typeof undefined === 'undefined';

let a; // declared not defined;
typeof a === 'undefined';
typeof b === 'undefined'; // not declared

typeof {s: ''} === 'object';
typeof new Data() === 'object;
typeof new Map() === 'object;
typeof /s/ === 'object';
typeof new Boolean(true) === 'object';
typeof [1,2] === 'object';
typeof function(){} === 'function';
typeof function()*{} === 'function';
typeof async function(){} === 'function';

typeof 3.14 + 'pi' === 'numberpi';
typeof 'pi' + Number === "stringfunction Number() { [native code] }";
// Number is a function, it is not called, as the stirn appears first 
// it is casted to the sting value;
typeof Number + 'pi' === 'functionpi';
typeof 'pi' + 3.14 === 'string3.14';
<div class="note note-danger">
  Above problems occur, because of the precedence. Firstly the typeof with the first argument is evaluated, and 
  then the operand after <i>+</i> is cast to the string value and the concatenation result is returned.
  To prevent this from happening additional brackets need to be added.
</div>
typeof (3.14 + 'pi') === 'string';
typeof ('pi' + 3.14) === 'string';


</pre>                    
                `,
                Operator: '<code>typeof</code>',
                Name: `typeof`,
                Usage: 'typeof operand, typeof(operand)',
                Description: `
                    Returns a string indicating the type of the evaluated operand.
                `
            },




            {
                [Symbol('title')]:'Grouping operator (...)',
                [Symbol('code')]:`
<pre>
2 * 3 + 4 = 10;
2 * (3 + 4) = 14;

let o = {a:2, b:4};
{a, b} = o; // SyntaxError

let o = {a:2, b:4};
({a, b} = o); // now it works

function ifee(){}(); // SyntaxError
(function ifee(){})(); // now it works

let a = 0; let b = 0;
let c = a+=1 + b+=1;
// SyntaxError

let a = 0; let b = 0;
let c = (a+=1) + (b+=1);
// now it works
//a is 1, b is 1, c is 2;

let a = 0;
a++++; // SyntaxError
(a++)++; // now works, but this is a bad code anyway

</pre>                    
                `,
                Operator: '<code>(...)</code>',
                Name: `Grouping operator`,
                Usage: 'a * (b + c)',
                Description: `
                This operator controls the precedence of evaluation in expressions. May be used to change a non
                expression to an expression (like in the ifee call or with the object destructive operators)
                `
            },





            {
                [Symbol('title')]:'new',
                [Symbol('code')]:`
<pre>
let b = new Boolean(false); // Should not be used, primitives should not be constructed
// with the new operator, as they are not primitives anymore

function Car(make, model){
    this.make = make;
    this.model = model;
}

let myCar = new Car('Subaru', 'Legacy')
myCar instanceof Car; // true;

</pre>                    
                `,
                Operator: '<code>new</code>',
                Name: `new`,
                Usage: 'new ConstructorFunction(..)',
                Description: `
                Creates a new instance of an object described by the constructor function that is delivered as an 
                operand. This operator:
                <ul>
                <li>Creates a new JS object</li>
                <li>Adds a property that will link newly created object to the prototype of the constructor function,
                that property is often named <code>__proto__</code></li>
                <li>Binds newly created object to the <code>this</code> property in the creator function</li>
                <li>Returns <code>this</code> if the creator function does not return anything</li>
                <li>If the constructor function returns something this returned object becomes the newly created
                object instead</li>
                </ul>
                `
            },





            {
                [Symbol('title')]:'await',
                [Symbol('code')]:`
                The alternative is a <code>throw</code> method, available on the <code>Promise</code> prototype.
                <code>then</code> works with not only async functions, and may react differently on rejection.
                However, this does not pause the function.
<pre>
let a = await 9;
console.log(a); // 9

let b = await Promise.resolve(8);
console.log(b); // 8

let c = await Promise.reject('error');
// Uncaught 'error' 

let d = Promise.resolve(4);
// Unresolved promise
</pre>

Below function immediately returns an unresolved promise, that will eventually 
resolve to the <i>undefined</i> value. However, inside there is a promise, and 
function pauses for 3s until this promise resolves.
<pre>
async function(){
    let prom = new Promise((resolve)=>{
        setTimeout(()=>{resolve('done');},3000)
    })
    await prom;
}
</pre>                    

Below function immediately returns an unresolved promise, that will eventually (after 3s) 
resolve to the <i>done</i> string value.
<pre>
async function(){
    let prom = new Promise((resolve)=>{
        setTimeout(()=>{resolve('done');},3000)
    })
    return await prom;
}
</pre>                    

                `,
                Operator: '<code>await</code>',
                Name: `await`,
                Usage: '[optionalAssersion] = await somePromise',
                Description: `
                    <ul>
                    <li>May be used only in async functions</li>
                    <li>Pauses the function until the right hand promise is resolved</li>
                    <li>Throws an error if the promise rejects</li>
                    <li>Returns a value that promise resolves to</li>
                    </ul>
                `
            },





            {
                [Symbol('title')]:'yield',
                [Symbol('code')]:`
                <span class="bg-danger text-white p-1">Needs to be a function, starting with <b>functio*</b>, indicates that
                this is a generator</span>
                <pre>
function throughArray(){
    let a = [1, 2, 3, 4, 5];
    for (let item of a){
        yield item;
    }
}                
                </pre>
                <span class="bg-success text-white p-1">
                This is good, as the function is a generator
                this is a generator</span>

                <pre>
function* throughArray(){
    let a = [1, 2, 3, 4, 5];
    for (let item of a){
        yield item;
    }
}

for (let item of throughArray()){
    console.log(item)
}

console.log(throughArray().next()) // {value:1, done:false}
console.log(throughArray().next()) // {value:1, done:false}
console.log(throughArray().next()) // {value:1, done:false}
//Each time a new instance is created;

let ta = throughArray();
console.log(ta.next()); // {value:1, done:false}
console.log(ta.next()); // {value:2, done:false}
console.log(ta.next()); // {value:3, done:false}
//Now 'ta' is an instance of the throughArray

                </pre>



                <span class="bg-success text-white p-1">
                Pauses the function</span>

                <pre>
function* throughArray(){
    let a = [1, 2, 3, 4, 5];
    let index = 0;
    for (let item of a){
        index++;
        if(index == 2) yield 9;
        yield item;
    }
}

for (let item of throughArray()){
    console.log(item)
} // 1, 9, 2, 3, 4, 5
                </pre>


                <span class="bg-danger text-white  p-1">
                Throws an error and finishes the loop</span>

                <pre>
function* throughArray(){
    let a = [1, 2, 3, 4, 5];
    let index = 0;
    for (let item of a){
        index++;
        if(index == 2) throw new Error(9);
        yield item;
    }
}

for (let item of throughArray()){
    console.log(item)
} // 1, 9, 2, 3, 4, 5
                </pre>


                <span class="bg-danger text-white p-1">
                No way to throw an error as the result of the yeild expression</span>

                <pre>
function* throughArray(){
    let a = [1, 2, 3, 4, 5];
    let index = 0;
    for (let item of a){
        index++;
        if(index == 2) yield {throw new Error('someReason'));
        yield item;
    }
}

for (let item of throughArray()){
    console.log(item)
} // 1, 9, 2, 3, 4, 5
                </pre>



                `,
                Operator: '<code>yield</code>',
                Name: `yield`,
                Usage: 'yield somePromise',
                Description: `
                    <ul>
                        <li>Should be called <b>only</b> in generator functions</li>
                        <li>Do not call in a callback</b>
                        <li>Returns an interface with a <code>next</code> function returning {value:..., done:...} object</li>
                    </ul>
                `
            },


    
    
        ]
    },
    
    ]
    
    export default function getOtherOperatorsData(){
        return otherOperatorsData;
    }
    