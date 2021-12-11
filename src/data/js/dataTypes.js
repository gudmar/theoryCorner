let data =     {
    summary: 'data types',
    title: 'data types',
    searchKeywords:`object array set map null undefined boolean number BigInt string symbol basic types variable`,
    cathegory: 'js',
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'Data types, mutability'
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    There are 7 primitive data types in JS: <code>null</code>, <code>undefined</code>,
                    <code>boolean</code>, <code>number</code>, <code>string</code>, <code>symbol</code>,
                    <code>BigInt</code>. A primitive value is unmutable, so it cannot be changed. Instead an
                    expression <code>someVariable = 'new value'</code> does not modify a variable. It instead
                    creates a new variable with a new value in a new place in memory, and puts it into a 
                    <code>someVariable</code> container. So <code>someVariable</code> points to a different
                    place in memory after this operation.<br>
                    The only other data type in JS is an <code>object</code>. All types like an <code>Array</code>, a
                    <code>Set</code>, a <code>Map</code>, a <code>Function</code>, a <code>Date</code> and so on are
                    <code>typeof(...) -> "object"</code>.
                    `
                },
            ]
        },
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'Primitive data types'
                },
                {
                    elementType: 'UnsignedList',
                    content: [
                        `<code>null</code> has only one value, that is <code>null</code>. It represents an intentional absence
                        of any object value. It is treated as <strong>falsy</strong><br>
                        <a href ="#nullUseCases" class="btn btn-primary m-3" data-bs-toggle="collapse" data-bs-target="#nullUseCases">
                            Difference from undefined
                        </a>
                        <div id="nullUseCases" class="collapse m-3">
                            <ul>
                                <li><code>typeof null</code> "object", not "null" as every object derives from null,</li>
                                <li><code>typeof undefined</code> "undefined",</li>
                                <li><code>null === undefined</code> false</li>
                                <li><code>null == undefined</code> true</li>
                                <li><code>null === null</code> true</li>
                                <li><code>null == null</code> true</li>
                                <li><code>!null</code> true</li>
                                <li><code>isNaN(1 + null)</code> false</li>
                                <li><code>isNaN(1 + undefined</code> true</li>
                            </ul>
                        </div>
                        `,

                        `
                        <code>undefined</code> is automaticly assigned to variables that have just been declaired but not
                        defined. Undefined is not writable, enumerable or configurable. However it may be used as a variable name,
                        in this case it gets overwritten. Nevertheless overwritting undefined seems a very bad idea and should be
                        never done. Undefined should be compared with a <i>strict equality</i> operator <code>===</code>. 
                        In case an object key does not exist its returned value will be undefined. <strong>It is better to use </storng>
                        <code>typeof x === 'undefined'</code> in stead of <code>x === undefined</code> to avoid an error if x id not declaired.
                        `,


                        `<code>boolean</code>: has only two values: <code>true</code> or <code>false</code><br>
                        <a href ="#booleanUseCases" class="btn btn-primary m-3" data-bs-toggle="collapse" data-bs-target="#booleanUseCases">
                            Boolean detailes
                        </a>
                        <div id="booleanUseCases" class="collapse m-3">
                            <ul>
                                <li><code>let x = false</code> declaration and definition of a boolean primitive</li>
                                <li><code>let y = new Boolean(false)</code> creates a new <code>typeof y == 'object'</code>,
                                    so in this case it is <strong>not a primitive</strong>. So 
                                    <code>y === true</code>, despite it was constructed with a false value. <code>y</code>
                                    is a not empty object, and not empty objects are evaluated to true.
                                </li>
                                <li><code>let z = Boolean(false)</code> does not create an object anymore, 
                                as it is a call of the function, not a constructor. 
                                It casts value given as an argument to a boolean primitive value,
                                    so <code>z != y</code>, <code>z === false</code>
                                </li>
                                <li><code>Boolean(undefined)==false</code></li>
                                <li><code>Boolean(null)==false </code></li>
                                <li><code>Boolean('')==false </code></li>
                                <li><code>Boolean(0)==false </code></li>
                                <li><code>Boolean({})==true </code></li>
                                <li><code>Boolean([])==true </code></li>
                                <li><code>!!(false)</code> does the same as <code>Boolean(false)</code>, it casts an
                                expression to a boolean primitive</li>
                            </ul>
                        </div>
                        `,       
                        
                        
                        `<code>number</code>: is a douvle-precision 64-bit binary format value, that is in range 
                        <code>Number.MIN_SAFE_INTEGER</code> to <code>Number.MAX_SAFE_INTEGER</code>, so (2^52-1) to
                        (2^53+1). There are <code>Number.MAX_VALUE</code> and <code>Number.MIN_VALUE</code>
                        values that are in range of approximately (5e-324) to (1.79e+308), but it is not safe to use 
                        those values, as they are a double-precision floating point approximation of the value<br>
                        There is an <code>Infinity</code>, a global property for representing numbers greater ths number max
                        values.<br>
                        <a href ="#numberUseCases" class="btn btn-primary m-3" data-bs-toggle="collapse" data-bs-target="#numberUseCases">
                            Number detailes
                        </a>
                        <div id="numberUseCases" class="collapse m-3">
                            <ul>
                                <li><code>Number.MAX_VALUE</code> property representing largest possible numeric value
                                    in JS (about 1.8e+308). Every value greater that this will be an <code>Infinity</code>
                                    This is an unsafe range, as any number greater than <code>Number.MAX_SAFE_INTEGER</code>
                                    will be approximated,
                                </li>
                                <li><code>Number.MIN_VALUE</code> property representing smallest possible numeric value
                                    in JS (about 5e-324), in other words this value is <b>closest to 0</b>
                                </li>
                                <li><code>Number.MIN_SAFE_INTEGER</code> (-(2^53 - 1)). Any number smaller than this will
                                    be an approximation,
                                </li>
                                <li><code>Number.MAX_SAFE_INTEGER</code>(2^53 + 1). Any number greater than this will
                                    be an approximation,
                                </li>
                                <li><code>Infinity</code> A global object property. Is the same as <code>Number.POSITIVE_INFINITY</code></li>
                                <li><code>Number.POSITIVE_INFINITY</code> The same as a <code>Infinity</code>
                                    <ul>
                                        <li><code>POSITIVE_INFINITY * POSITIVE_INFINITY == POSITIVE_INFINITY</code></li>
                                        <li><code>NEGATIVE_INFINITY * POSITIVE_INFINITY == NEGATIVE_INFINITY</code></li>
                                        <li><code> anyPositiveNumber / POSITIVE_INFINITY == +0</code></li>
                                        <li><code> anyNegativeNumber / POSITIVE_INFINITY == -0</code></li>
                                        <li><code> 0 * POSITIVE_INFINITY == NaN</code></li>
                                        <li><code> NaN * POSITIVE_INFINITY == NaN</code></li>
                                        <li><code>POSITIVE_INFINITY / anyNegativeNumber == NEGATIVE_INFINITY</code></li>
                                        <li><code>POSITIVE_INFINITY / anyPositiveNumber == POSITIVE_INFINITY</code></li>
                                        <li><code>POSITIVE_INFINITY / POSITIVE_INFINITY == NaN</code></li>
                                        <li><code>POSITIVE_INFINITY / NEGATIVE_INFINITY == NaN</code></li>
                                    </ul>
                                </li>
                                <li><code>Number.NEGATIVE_INFINITY</code> The same as a <code>-Infinity</code>
                                    <ul>
                                        <li><code>NEGATIVE_INFINITY * NEGATIVE_INFINITY == POSITIVE_INFINITY</code></li>
                                        <li><code>NEGATIVE_INFINITY * anyNegativeNumber == POSITIVE_INFINITY</code></li>
                                        <li><code>NEGATIVE_INFINITY * POSITIVE_INFINITY == NEGATIVE_INFINITY</code></li>
                                        <li><code> anyPositiveNumber / NEGATIVE_INFINITY == -0</code></li>
                                        <li><code> anyNegativeNumber / NEGATIVE_INFINITY == +0</code></li>
                                        <li><code> 0 * NEGATIVE_INFINITY == NaN</code></li>
                                        <li><code> NaN * NEGATIVE_INFINITY == NaN</code></li>
                                        <li><code>NEGATIVE_INFINITY / anyNegativeNumebr == POSITIVE_INFINITY</code></li>
                                        <li><code>NEGATIVE_INFINITY / anyPositiveNumebr == NEGATIVE_INFINITY</code></li>
                                        <li><code>NEGATIVE_INFINITY / POSITIVE_INFINITY == NaN</code></li>
                                        <li><code>NEGATIVE_INFINITY / NEGATIVE_INFINITY == NaN</code></li>
                                    </ul>
                                </li>                                
                                <li><code>isFinite(x)</code> is better that <code>if (x < Infinite)</code></li>
                                <li><code>+0 === -0</code> is true, hovewer <code> 4 / +0</code> is Infinity, and
                                <code> 4 / -0</code> is -Infinity.</li>
                                <li><code>Number.isSafeInteger()</code> indicates if a number given as an argument is 
                                    a safe integer
                                </li>
                                <li><code>isNaN()</code> indicates if the value passed as an argument is a number</li>
                                <li><code>NaN</code> a global property representing a not a number</li>
                            </ul>
                        </div>
                        `,  
                        
                        
                        `<code>BigInt</code> is a type for representing values larger than <code>Number.MAX_SAFE_INTEGER</code>
                        and smaller than <code>Number.MIN_SAFE_INTEGER</code>. They are said not go be bounded, but in practice
                        they can be overflowed. BigInt numbers have an <i>n</i> at the end, so <code>let a = 1n</code> defines a
                        BigInt variable.<br>
                        <a href ="#bigIntUseCases" class="btn btn-primary m-3" data-bs-toggle="collapse" data-bs-target="#bigIntUseCases">
                            BigInt detailes
                        </a>
                        <div id="bigIntUseCases" class="collapse m-3">
                            <ul>
                                <li><code>2n == 2 is true</code> BitInts can be compared with numbers, and give proper results,</li>
                                <li><code>[4n, 6n, 10, 0, 0n].sort() == [0, 0n, 4n, 6n, 10]</code> so BigInts can be sorted together with
                                numbers</li>
                                <li><code>typeof 1n == 'bigint', typeof BigInt(1) == 'bigint'</code></li>
                                <li><code>let a = new BigInt(1)</code><strong>!!!</strong> this is not a primitive anymore,
                                so <code>typeof a == 'object'</code></li>
                                <li>BigInts can primitives and objects and mixed may be used with operators +, -, /, *, **, %. 
                                Only one-argument + is not supported,</li>
                                <li>BigInts and plane numbers cannot be added, substracted, divided or multiplied,</li>
                                <li><code>5n / 2n == 2n</code> no fractions here</li>
                                <li>Cannot be used in JSON.stringify, unless a toJSON method is added to BigInt prototype</li>
                            </ul>
                        </div>`,
                        `
                        <code>string</code> is a type for representing textual data in a set of 16-bit undigned integer values.
                        Please refer to the <a href="./string%20methods">string</a> section for more information.
                        `,
                        `
                        <code>symbol</code> is a type aspecially designed to serve as a key for object, as objects keys in JS
                        may only be of a type string or symbol.<br>
                        `
                                ]
                },
                {
                    elementType: 'NoteWarning',
                    content: `
                        Beware of creating primitives as objects: <code>new Boolean()</code>, <code>new Number()</code>,
                        as this is not a primitive anymore and will cause problems.
                    `
                },
            ]
        },
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline-3',
                    content: 'Symbols'
                },
                {
                    elementType:'Paragraph',
                    content:`As symbols serve as keys for objects, they are a sort of a bridge between 
                    primitives and objects when talking about 
                    JS types. Of course symbols are primitives, but they purpose is to serve as a part of an object,
                    so it is difficult not to mention objects in this section.<br> `
                },
                {
                    elementType:'Paragraph',
                    content:`
                    Keys described by symbols are not plane keys, as they don't 
                    show up with <code>Object.getOwnPropertyNames()</code>, <code>Object.keys()</code> or 
                    <code>for(let key in someObject) </code>. So how to use symbols with objects?
                    With a <strong>computed property name</strong> syntax, that allows one to get to an object value, 
                    with a key taken from a variable:
                    `
                },
                {
                    elementType:'Code',
                    content:`
<pre>
Ex 1:
let s1 = Symbol('someSymbol');
let s2 = Symbol('someSymbol');
let obj = {
    aProp: 'abc',
    bProp: 'cde',
    [Symbol('c')]: 'efg',
    [s1]:'hij'
}

console.log(Object.keys(obj));
// ['aProp','bProp']
console.log(Object.getOwnPropertyNames(obj));
// ['aProp','bProp']
for(let i in obj){
    console.log(i);
}
//aProp
//bProp
console.log(Object.getOwnPropertySymbols(obj));
//[Symbol(c), Symbol(someSymbol)]
</pre>                    
                    `
                },
                {
                    elementType:'Headline-3',
                    content: 'Symbol features'
                },
                {
                    elementType:'Paragraph',
                    content:`So now it is known how to access object symbol keyed properties, and it is known, that
                    they are hidden if accessed in most common way. But what exectly are symbols and why to use them?`
                },
                {
                    elementType:'Code',
                    content:`
<pre>
Ex 1:
let s1 = Symbol('someSymbol');
let s2 = Symbol('someSymbol');
// s1 != s2

Ex2:
alert(s1);
// TypeError cannot conver a Symbol to a string,
alert(s1.toString());
// OK, displayes 'Symbol('someSymbol');
alert(s1.description);
// Ok, displayes 'someSymbol'

Ex3:
let s3 = Symbol(); 
//description argument optional

Ex4:
let s4 = Symbol('abc');
console.log(Symbol.for('abc')); // will return a Symbol('abc') not as a string
let s5 = Symbol('cde'); // there is no such symbol, so a new one will be created and returned,

Ex5:
let globSym = Symbol.for('fgh');
console.log(Symbol.keyFor(globSym)); // this will print 'fgh'
</pre>                     
                    `
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        `(Ex1) Symbols are guaranteed to be unique,`,
                        `(Ex2) Symbols are not by default converted to a string,`,
                        `(Ex3) Description, the only argument, is optional, so in this case code will also work.
                        A description optional field is only for debugging purposes,`,
                        `(Ex4) <code>Symbol.for(key)</code> returns a symbol for the specified key or 
                        creates a new symbol and returnes it in case symbol does not exist,`,
                        `(Ex5) <code>Symbol.keyFor(Symbol('keyToReturn'))</code> returns a shared symbol key from the 
                        global registry`,
                        `There is a global symbol registry`,
                        `There is a term <i>well-known-symbols</i> in JS, and these are keys, where we can put 
                        our own values/functions to overwritte a default object behaviour.`
                    ]
                }
            ]
        },
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline-3',
                    content: 'Symbols'
                },
                {
                    elementType:'Paragraph',
                    content:`As symbols serve as keys for objects, they are a sort of a bridge between 
                    primitives and objects when talking about 
                    JS types. Of course symbols are primitives, but they purpose is to serve as a part of an object,
                    so it is difficult not to mention objects in this section.<br> `
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
                    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null',
                    description:'null'
                },
                {
                    elementType:'Link',
                    content:'dmitripavlutin.com',
                    href: 'https://dmitripavlutin.com/detailed-overview-of-well-known-symbols/',
                    description:'well-known symbols introduction with examples'
                },
            ]
        }
    ]
};

export default function getDataTypes(){
    console.error('!!! Finish reading about well-konwn-symbols, what they are, and about Symbol.keyFor')
    return data;
}