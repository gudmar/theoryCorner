let data = {
    summary: 'object methods',
    title: 'Object methods',
    searchKeywords:`static assign prototype defineProperty defineProperties freeze getOwnPropertyDescriptor getOwnPropertySymbols
    getOwnPropertyNames getOwnPropertyDescriptor getPrototypeOf is isExtensible isFrozen isSealed keys preventExtensions seal
    setPrototypeOf getPrototypeOf values `,
    cathegory: 'js',
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Paragraph',
                    content:`
                    A static method or property is called not on instance of an object, but on a constructor
                    or class name:                    
                    `
                },
                {
                    elementType:'Code',
                    content:`
<pre>
let isThisAnArray = Array.isArray([1,2,3]); //a static method
let arrLenght = [1, 2, 3].length; // not a static method
</pre>                    
                    `
                },
                {
                    elementType:'Headline',
                    content:'Object methods and properties'
                },
                {
                    elementType: 'SmallHeadline',
                    content: `Object.prototype`
                },
                {
                    elementType:'Paragraph',
                    content:`
                    This is a static property of the Object. It may be used to add methods or properties to the Object.
                    Because each object in JS inherits the Objects methods and properties with the prototype, 
                    a method or property added to the Object will be available in each JS object.
                    Adding to the global prototype should be avoided, as it breaks encapsulation.
                    `
                },
                {
                    elementType:'Paragraph',
                    content:`
                    Not every object has a prototype. In most cases there is a <code>__proto__</code> object 
                    holding a setter and getter of the prototype.
                    `
                },
                {
                    elementType:'Code',
                    content:`
<pre>
Object.prototype = ()=>{console.log('abc')};
//now this is available in each JS object in the document,
//including Arrays, Maps, Dates etc

let a = {};
a.prototype.someF = ()=>{};
//error, a prototype is undefined, does not exist

a.__proto__.someF = ()=>{};
//This is correct

Object.getPrototypeOf(a).someF = ()=>{};
//This is correct, but someF is available in all JS objects
//since prototype of a is the same prototype as the Object 
//prototype

function Creator(a){ // a constructor
    this.a = a; 
}
let b = new Creator(3);
Object.getPrototypeOf(b).someOtherF = ()=>{}
//this is avaliable only in each object created by
//the Creator, and each object that inherits after the Creator,
//but not availabel in each JS object, since because a constructor
//was used the Object.prototype is not the same as the prototype of 
//the Creator

</pre>                    
                    `
                },
                {
                    elementType: 'SmallHeadline',
                    content: `__proto__`
                },
                {
                    elementType:'Paragraph',
                    content:`
                    A non static property of an object, holds the prototype setter and getter. 
                    <code>Object.getPrototypeOf()</code> and <code>Object.setPrototypeOf()</code> should be used 
                    instead.
                    `
                },


                {
                    elementType: 'SmallHeadline',
                    content: `Object.assign(destination, ...sources)`
                },
                {
                    elementType:'Paragraph',
                    content:`
                    Assigns all <strong>own</strong> properties and property values from sources to destination.
                    If source has the same property value that the destination, destinations value is overriden.
                    The key word is <storn>assign</code> as values are copied using getters and setters, so this
                    is not a real copy.
                    `
                },
                {
                    elementType:'Code',
                    content:`
<pre>
let commonSymbol = Symbol();
let destination = {a: 'destinationA', [commonSymbol]:'symbolDest'};
let s1 = {a:'s1A', b:'s1B', [commonSymbol]: 'commonSymb1'};
let s2 = {a:'s2A', [commonSymbol]: 'commonSymb2'};
let newDestination = Object.assign(destination, s1, s2);
console.log(newDestination === destination); //true
console.log(destination);
//{a: "s2A", b: "s1B", Symbol(): "commonSymb2"}

</pre>                    
                    `
                },
                {
                    elementType:'NoteWarning',
                    content:`
                    <ul>
                    <li>This should not be used for deep object cloning. If object is nested, then
                    only a reference would be passed with <code>Object.assign</code>, and attempt to 
                    alter something in a nested object part would result in changing the nested object itself,
                    and change would be visible in the original object as well
                    </li>
                    <li>This does not copy property descriptors</li>
                    <li>This does not work if the writable property of the descriptor is set to false</li>
                    </ul>
                    `
                },


                {
                    elementType: 'SmallHeadline',
                    content: `Object.create(obj, properties)`
                },
                {
                    elementType:'Paragraph',
                    content:`
                    Creates a new object with a prototype set to <code>obj</code>. <code>obj</code> is an 
                    object that will become the newly created objects prototype. This argument is mandatory,
                    properties is optional, and takes an object with keys as property names, and values as 
                    descriptors
                    `
                },
                {
                    elementType:'Code',
                    content:`
<pre>
let objA = Object.create(); // TypeError, there is a mandatory argument,
let objB = Object.create({}); //Ok;
let objC = Object.create({a: 1, b:2, c:3},
    {
        a: {enumerable:false, writable:false, configurable:false},
        b: {enumerable:false, writable:false, configurable:false},
        c: {enumerable:false, writable:false, configurable:false},
    });//OK

</pre>                    
                    `
                },
                {
                    elementType:'NoteWarning',
                    content:`
                    Beware of creating a object out of null: <code>let obj = ObjectCreate(null);</code>.
                    This may cause difficult to debug situations, as this object has no __proto__, nore 
                    prototype, nothing. A prototype could be set with <code>Object.setPrototypeOf(obj, Object.prototype)
                    </code> and this would solve some problems.
                    `
                },



                {
                    elementType: 'SmallHeadline',
                    content: `Object.defineProperty(obj, properyKey, descriptor)`
                },
                {
                    elementType:'Paragraph',
                    content:`
                        Each property in JS object has a descriptor: an object with property settings:
                    `
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        `<code>value</code>: this key describes value under property,`,
                        `<code>writable</code>: if false then there will be no possiblity to assign a new value to this 
                        property`,
                        `<code>enumerable</code>: if set to false this property will not show up when accessed with <code>
                        for..in</code>, or <code>Object.getOwnPropertyKeys</code> or <code>Object.getOwnPropertySymbols</code>,`,
                        `<code>configuralble</code>: if set to false, then this property will not be able to be reconfigurated. None
                        of descriptors attributes will be allowed to be changed. If set to false, this property will not be 
                        allowed to be deleted,`,
                        `<code>get(){return...}<code> a getter function,`,
                        `<code>set(){}</code> a setter function,`
                    ]
                },
                {
                    elementType:'Paragraph',
                    content:`
                        <code>Object.defineProperty()</code> is for setting a property optionaly with it 
                        descriptor. It is also used to <strong>modify</code> a property or its descriptor.
                    `
                },
                {
                    elementType:'NoteWarning',
                    content:`
                        A descriptor is not allowed to have both: (value or writable) and (getter or setter).
                        A getter or setter do not have to be objects own properties, they may be inherited.
                    `
                },


                {
                    elementType: 'SmallHeadline',
                    content: `Object.defineProperties(obj, props)`
                },
                {
                    elementType:'Paragraph',
                    content:`
                        Does the same as <code>Object.defineProperty()</code> but for many properties at the smae time
                    `
                },
                {
                    elementType:'Code',
                    content:`
<pre>
let obj = {};
Object.defineProperties(obj,
    {
        prop1: {enumerable:true,writable:true,value:1},
        prop2: {enumerable:true,writable:true,value:2},
        prop3: {enumerable:true,writable:true,value:3},
    })
</pre>                    
                    `
                },



                {
                    elementType: 'SmallHeadline',
                    content: `Object.freeze(obj)`
                },
                {
                    elementType:'Paragraph',
                    content:`
                        Makes an shallow object fixed. Attempt to change, add or delete frozen objects properties 
                        will throw slient or not silent errors. Getters and setters will work, however they will
                        not change a value that belongs to the frozen object. Nested objects
                        will not be froze, so to make them fixed they need to be frozen recursivly.
                    `
                },
                {
                    elementType:'NoteWarning',
                    content:`
                    Once frozen object cannot be unfrozen.
                    `
                },



                {
                    elementType: 'SmallHeadline',
                    content: `Object.seal(obj)`
                },
                {
                    elementType:'Paragraph',
                    content:`
                        Object property values remain mutable, however there is no possibility to 
                        add or remove properties form the object. Prototype chain is not affected by this method,
                        however <code>__proto__</code> is sealed as well.
                    `
                },
                {
                    elementType:'NoteWarning',
                    content:`
                    Once sealed object cannot be unsealed.
                    `
                },
            ]
        },

    ]
};

export default function getObjectMethodsData(){
    return data;
}