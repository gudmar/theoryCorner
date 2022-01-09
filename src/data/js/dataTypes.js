// SPELL CHECKED, CORRECT!
let data =     {
    summary: 'data types',
    title: 'data types',
    searchKeywords:`
        object array set map null undefined boolean number BigInt string symbol basic types variable well-known symbols
        `,
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
                        <code>undefined</code> is automaticlly assigned to variables that have just been declared but not
                        defined. Undefined is not writable, enumerable or configurable. However, it may be used as a variable name,
                        in this case it gets overwritten. Nevertheless overwriting undefined seems a very bad idea and should be
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
                                It casts value a given as an argument to a boolean primitive value,
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
                        
                        
                        `<code>number</code>: is a double-precision 64-bit binary format value, that is in range 
                        <code>Number.MIN_SAFE_INTEGER</code> to <code>Number.MAX_SAFE_INTEGER</code>, so (2^52-1) to
                        (2^53+1). There are <code>Number.MAX_VALUE</code> and <code>Number.MIN_VALUE</code>
                        values that are in the range of approximately (5e-324) to (1.79e+308), but it is not safe to use 
                        those values, as they are a double-precision floating point approximation of the value<br>
                        There is an <code>Infinity</code>, a global property for representing numbers greater ths number max
                        values.<br>
                        <a href ="#numberUseCases" class="btn btn-primary m-3" data-bs-toggle="collapse" data-bs-target="#numberUseCases">
                            Number detailes
                        </a>
                        <div id="numberUseCases" class="collapse m-3">
                            <ul>
                                <li><code>Number.MAX_VALUE</code> property representing the largest possible numeric value
                                    in JS (about 1.8e+308). Every value greater that this will be an <code>Infinity</code>
                                    This is an unsafe range, as any number greater than <code>Number.MAX_SAFE_INTEGER</code>
                                    will be approximated,
                                </li>
                                <li><code>Number.MIN_VALUE</code> property representing the smallest possible numeric value
                                    in JS (about 5e-324), in other words this value is the <b>closest to 0</b> value,
                                </li>
                                <li><code>Number.MIN_SAFE_INTEGER</code> (-(2^53 - 1)). Any number smaller than this will
                                    be an approximation,
                                </li>
                                <li><code>Number.MAX_SAFE_INTEGER</code>(2^53 + 1). Any number greater than this will
                                    be an approximation,
                                </li>
                                <li><code>Infinity</code> A global object property. Is the same as <code>Number.POSITIVE_INFINITY</code></li>
                                <li><code>Number.POSITIVE_INFINITY</code> The same as an <code>Infinity</code>
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
                                <li>BigInt primitives, objects and mixed BigInt primitives with objects 
                                may be used with operators +, -, /, *, **, %. 
                                Only one-argument + is not supported,</li>
                                <li>BigInts and plane numbers cannot be added, subtracted, divided or multiplied,</li>
                                <li><code>5n / 2n == 2n</code> no fractions here</li>
                                <li>Cannot be used in JSON.stringify, unless a toJSON method is added to the BigInt prototype</li>
                            </ul>
                        </div>`,
                        `
                        <code>string</code> is a type for representing textual data in a set of 16-bit unsigned integer values.
                        Please refer to the <a href="./string%20methods">string</a> section for more information.
                        `,
                        `
                        <code>symbol</code> is a type a specially designed to serve as a key for the object, as objects keys in JS
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
                {
                    elementType: 'NoteWarning',
                    content: `
                        <code>Number.prototype.toString([redix])</code>, where radix is a number from 2 to 36.
                        Shadows the <code>Object.prototype.toString</code> method. This method converts a number to the 
                        string representation of the object in the specified radix:</br>
                        <code>let a = 5; a.toString(2) == "101";</code>
                    `
                },
                {
                    elementType: 'NoteWarning',
                    content: `
                        Oposite to <code>Number.prototype.toString([redix])</code> would be 
                        <code>Number.parseInt(str, radix)</code> converting a string to a number with
                        given radix.
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
                    they are hidden if accessed in most common way. But what exactly are symbols and why to use them?`
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
let s5 = Symbol.for('cde'); // there is no such symbol, so a new one will be created and returned,

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
                    elementType:'Headline-2',
                    content: 'Well-known symbols'
                },
                {
                    elementType:'Paragraph',
                    content:`As mentioned, well-known symbols allow defining or redefining of some custom
                    defined object behavoiurs. This is for inheritance purposes, not for redefinition of 
                    existing object's behavour.
                    `
                },
                {
                    elementType:'Headline-3',
                    content: '@@iterator'
                },
                {
                    elementType:'Paragraph',
                    content:`An iterator is a function knowing how to get to next collection item, and knowing when
                    whole collection is already iterated through. An iterator function returns a <code>next()</code>
                    function, that returns an object having a <code>value</code> property, keeping a next item of the
                    collection, and a <code>done</code> property that equals to <code>fasle</code> if there are still
                    more elements in the collection, or <code>true</code> if there are no more elements in the collection.
                    In case of <code>done == false</code> a value field may not exist.
                    `
                },
                {
                    elementType:'Paragraph',
                    content:`An object is iterable, if it has an iterator function under its <code>Symbol.iterator</code>
                    property. Such object is capable of:
                    `
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        `Being used in a <code>for..of iterabelObj</code> loop,`,
                        `An array may be created with a spread operator <code>[...iterableObj]</code>,`,
                        `An array of elements may be created using <code>Array.from(iterableObj)</code>`,
                        `In promise static methods <code>Promise.all(iterableObj)</code>, <code>Promise.race(iterableObj)</code>`
                    ]
                    
                },
                {
                    elementType:'Code',
                    content:`
<pre>
function someIterator() {
    let n = 0;
    return {
      next: function() {
        n += 10;
        return n > 100?{done:true}:{value:n, done:false};
      }
    };
  }
  let a = {};
  a[Symbol.iterator] = someIterator;
  //now this will work
  for(let i of a ) {console.log(i)}
</pre>                    
                    `
                },
                {
                    elementType:'Headline-3',
                    content: '@@hasInstance'
                },
                {
                    elementType:'Paragraph',
                    content:`Can be used to customise an <code>instanceof</code> operator work:
                    `
                },
                {
                    elementType:'Code',
                    content: `
<pre>
    class SomeNewType{
        static [Symbol.hasInstance](obj){
            return true
        }
    }
    //now every existing instance of any object 
    //will be also an instance of SomeNewType
    let arr = [2, 3];
    arr instanceof Array; //true;
    arr instanceof Object; // true;
    arr instanceof SomeNewType; //true;
</pre>                    
                    `
                },

                {
                    elementType:'Headline-3',
                    content: '@@toPrimitive'
                },
                {
                    elementType:'Paragraph',
                    content:`If custom object [symbol.toPrimitive] holds a function returning a primitive, then 
                    this object may be used with operators like <code>+</code>, <code>-</code>, <code>==</code>.
                    There is a <code>hint</code> property taking a suggested primitive type that object should be 
                    converted into
                    `
                },
                {
                    elementType:'Code',
                    content: `
<pre>                    
function myToPrimitive(hint){
    if (hint=='number') return 44;
    if (hint=='string') return '44';
    else return this.toString();
}
let arr = [2, 3];
arr[Symbol.toPrimitive] = myToPrimitive;
//now this is possible:
let c = arr + 5;
</pre>
                    `
                                }
                    ]
                },
                {
                    elementType:'Headline-3',
                    content: '@@toStringTag'
                },
                {
                    elementType:'Paragraph',
                    content:`
                    A <code>.toString</code> method is capable of turning arrays, numbers, booleans or dates into 
                    strings. However if a generic object is concerned, <code>{}.toString()</code> would return a 
                    <code>[object Object]</code>. If there is a need of customizing this returned tag, a <code>
                    @@toStringTag</code> is a good key to set this custom tag. This may be needed only to work with backward
                    compatibility. Should not be used in the present code.
                    `
                },
                {
                    elementType:'Code',
                    content: `
<pre>
let obj = {};
console.log(obj.toString());// [Object object]
obj[Symbol.toStringTag] = "someTag";
console.log(obj.toString());// [Object someTag]
</pre>                        
                    `
                },
                {
                    elementType:'Headline-3',
                    content: '@@species'
                },
                {
                    elementType:'Paragraph',
                    content:`
                    Some methods, like <code>.map()</code> belonging to Array return a object.
                    In case of Array, object returned by the <code>.map()</code> method is Array. If there is 
                    a class <code>SomeArray</code> derived from an <code>Array</code> class, then a <code>.map()</code>
                    would return a object of the type <code>SomeArray</code>. If there was a necessity to get an 
                    <code>Array</code> object with <code>someArrayInstence.map()</code>, the <code>SomeArray[Symbol.species]</code>
                    would have to be set to an <code>Array</code> function. So <code>Symbol.species</code> should be used to
                    specify a property, whose value is a constructor function used to create derived objects.
                    
                    `
                },
                {
                    elementType:'Headline-3',
                    content: '@@match, @@replace, @@serach, @@split',
                },
                {
                    elementType:'Paragraph',
                    content:`
                    String prototype has methods <code>match</code>, <code>replace</code>, <code>search</code>,
                    <code>split</code> to test a string against a regular expression. These methods may be redefined
                    to accept values other than a <code>RegExp</code>, and <code>@@match</code>, <code>@@replace</code>,
                    <code>@@serach</code>, <code>@@split</code> well-known symbols are keys where new functions should 
                    be placed.
                    `
                },
                {
                    elementType:'Paragraph',
                    content:`
                    If there is a necessity to create a custom class using methods 
                    <code>match</code>, <code>replace</code>, <code>search</code>,
                    <code>@@match</code>, <code>@@replace</code>,
                    <code>@@serach</code>, <code>@@split</code> would be a perfect place to put them.
                    `
                },
                {
                    elementType:'Headline-3',
                    content: '@@isConcatSpreadable',
                },
                {
                    elementType:'Code',
                    content:`
<pre>
let a1 = [1, 2, 3];
let a2 = [4, 5, 6];
let a3 = [7, 8, 9];
a3[Symbol.isConcatSpreadable] = false;
let a12 = a1.concat(a2); // [1, 2, 3, 4, 5, 6]
let a13 = a1.concat(a2, a3);
//[1, 2, 3, 4, 5, 6, [7, 8, 9]]

</pre>                    
                    `
                },
                {
                    elementType:'Paragraph',
                    content:`
                        If <code>@@isContentSpreadable</code> if false, then a target array is not spread 
                        in concatenation process. It stayes in the new array as an individual array.
                    `
                },

                {
                    elementType:'Headline-3',
                    content: '@@unscopables',
                },
                {
                    elementType:'Paragraph',
                    content:`
                    An object valuated property defined for an <code>Array</code> in ES2015. It
                    determines what methods will be allowed to be used in a <code>with</code> binding 
                    block. As <code>unscopables</code> is defined for a whole object, value added under this key is an
                    object:
                    `
                },
                {
                    elementType:'Code',
                    content:`
<pre>
class someArray extends Array{
    constructor(){super();}
    static get [Symbol.unscopables]() {
        return {
            concat: false,  //default
            entries: true   // default
        }
    }
};
let a = new someArray(1, 2, 3);
with (a){
    concat(3); // ok
    entries; // nok, unscoped
}
</pre>                    
                    `
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

(function showError(){
    console.error('@@species from https://dmitripavlutin.com/detailed-overview-of-well-known-symbols/')
})();

export default function getDataTypes(){
    return data;
}