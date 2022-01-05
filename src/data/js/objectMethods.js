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
                    A static method or property is called not on an instance of an object, but on a constructor
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
                    Adding to the global prototype should be avoided, as it breaks encapsulation. Moreover, changing the 
                    prototype of existing objects is time consuming, as all code having access to this prototype is affected.
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
                    If source has the same property value that the destination, destinations value is overridden.
                    The key word is '<storn>assign</code>' as values are copied using getters and setters, so this
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
                    <li>This should not be used for deep object cloning. If a object is nested, then
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
                    object that will become the newly created objects prototype. <code>obj</code> argument is mandatory,
                    <code>properties</code> argument is optional, and takes an object with keys as property names, and 
                    values as descriptors
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
                    Beware of creating an object out of null: <code>let obj = ObjectCreate(null)</code>.
                    This may cause difficult to debug situations, as this object has no __proto__, nore 
                    prototype. A prototype could be set with <code>Object.setPrototypeOf(obj, Object.prototype)
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
                        `<code>value</code>: this key describes the value under property,`,
                        `<code>writable</code>: if false then there will be no possibility to assign a new value to this 
                        property`,
                        `<code>enumerable</code>: if set to false this property will not show up when accessed with <code>
                        for..in</code>, or <code>Object.getOwnPropertyKeys</code> or <code>Object.getOwnPropertySymbols</code>,`,
                        `<code>configuralble</code>: if set to false, then this property will not be able to be re-configured. None
                        of descriptor attributes will be allowed to be changed. If set to false, this property will not be 
                        allowed to be deleted,`,
                        `<code>get(){return...}<code> a getter function,`,
                        `<code>set(){}</code> a setter function,`
                    ]
                },
                {
                    elementType:'Paragraph',
                    content:`
                        <code>Object.defineProperty()</code> is for setting a property optionally with it 
                        descriptor. It is also used to <strong>modify</code> a property or its descriptor.
                    `
                },
                {
                    elementType:'NoteWarning',
                    content:`
                        A descriptor is not allowed to have both: (value or writable) and (getter or setter).
                        A getter or setter does not have to be objects own properties, they may be inherited.
                    `
                },


                {
                    elementType: 'SmallHeadline',
                    content: `Object.defineProperties(obj, props)`
                },
                {
                    elementType:'Paragraph',
                    content:`
                        Does the same as <code>Object.defineProperty()</code> but for many properties at the same time
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
                        Frozen object is not extensible, its properties are non-configurable, all its data properties 
                        are non-writable. <br>
                        <code>Object.freeze()</code>Makes an shallow object fixed. 
                        Attempt to change, add or delete frozen objects properties 
                        will throw slient or not silent errors. Getters and setters will work, however, they will
                        not change a value that belongs to the frozen object. Nested objects
                        will not be frozen, so to make them fixed they need to be frozen recursively.
                    `
                },
                {
                    elementType:'Code',
                    content:`
<pre>
let out = 0;
function Obj(a){
    this.a = a;
    Object.defineProperty(this, 'b', {
        configurable: true,
        get: ()=>{return this.a},
        set: (val)=>{this.a = val;}
    });
    Object.defineProperty(this, 'c', {
        get: ()=> {return out;},
        set: (val)=> {out = val;}
    });
}
let obj = new Obj(3);
obj.b = 4;
console.log(obj.a); // 4;
Object.freeze(obj);
obj.a = 1;
console.log(obj.a); // 4
obj.b = 1;
console.log(obj.b); // 4, as obj.a was not set, as obj is frozen
obj.c = 1;
console.log(out); // 1, as out is not a member of the obj.
//Getters and setters work in frozen objects

</pre>                    
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
                    content: `Object.isFrozen(obj)`
                },
                {
                    elementType:'Paragraph',
                    content:`
                    Returns <code>true</code> if an <code>obj</code> is frozen, and <code>false</code> if not.
                    Argument of <code>Object.isFrozen()</code> should <b>not</b> be a primitive value, as a 
                    <code>TypeError</code> will be thrown.
                    `
                },



                {
                    elementType: 'SmallHeadline',
                    content: `Object.seal(obj)`
                },
                {
                    elementType:'Paragraph',
                    content:`
                        Object property values remain mutable, however, there is no possibility to 
                        add or remove properties from the object. Prototype chain is not affected by this method,
                        however <code>__proto__</code> is sealed as well.
                    `
                },
                {
                    elementType:'NoteWarning',
                    content:`
                    Once sealed object cannot be unsealed.
                    `
                },


                {
                    elementType: 'SmallHeadline',
                    content: `Object.isSealed(obj)`
                },
                {
                    elementType:'Paragraph',
                    content:`
                    Returns <code>true</code> if an <code>obj</code> is sealed, and <code>false</code> if not.
                    Argument of <code>Object.isSealed()</code> should <b>not</b> be a primitive value, as a 
                    <code>TypeError</code> will be thrown.
                    `
                },



                {
                    elementType: 'SmallHeadline',
                    content: `Object.preventExtensions(obj)`
                },
                {
                    elementType:'Paragraph',
                    content:`
                    A object is extensible if it can have new properties added to it. <code>Object.preventExtensions()</code>
                    makes it impossible to add new own properties to an object. It can still have properties added to the
                    [[Prototype]], however changing the [[Prototype]] itself causes a silent <code>TypeError</code>.
                    In the <code>Strict mode</code> this error will not be silent. 
                    `
                },
                {
                    elementType: "Code",
                    content:`
<pre>
function Fixed(a, b, c){
    this.a = a;
    this.nested = {};
    this.nested.b = b;
    this.nested.c = c;
}
let fixed = new Fixed(1, 2, 3);
console.log(fixed);
Object.preventExtensions(fixed);
fixed.d = 4;
//a silent TypeError, as not in strict mode;
Object.getPrototypeOf(fixed).f = 8;
console.log(fixed.f); // 8, as added to prototype
Object.setPrototypeOf(fixed, Object); // fail
let notFixed = new Fixed(5, 6, 7);
Object.getPrototypeOf(notFixed).e = 8;
console.log(notFixed.e); // e is 8
console.log(fixed.e); //e is 8, as it was added to the prototype
fixed.nested.g = 9; 
console.log(fixed.nested.g); // 9, as nested was not made not extensible together with fixed
</pre>                    
                    `
                },
                {
                    elementType: "NoteWarning",
                    content: `
                    Making an object not extensible cannot be reverted.
                    `
                },



                {
                    elementType: 'SmallHeadline',
                    content: `Object.isExtensible(obj)`
                },
                {
                    elementType:'Paragraph',
                    content:`
                    Returns <code>true</code> if an <code>obj</code> can have new properties added to it, and false if not.
                    Argument of <code>Object.isExtensible()</code> should <b>not</b> be a primitive value, as a 
                    <code>TypeError</code> will be thrown.
                    `
                },



                {
                    elementType: 'SmallHeadline',
                    content: `Object.getOwnPropertyDescriptor(obj)`
                },
                {
                    elementType:'Paragraph',
                    content:`
                    Returns a descriptor of object own (not inherited with a prototype) property, or
                    undefined in case the property on this object does not exist. The descriptor is an object describing
                    a property behaviour, and has the attributes:
                    <code>value</code>, <code>writable</code>, <code>enumerable</code>, <code>configurable</code>,
                    <code>get</code> and <code>set</code>. Please see an <a href = "./object">object</a> article to learn more.
                    `
                },




                {
                    elementType: 'SmallHeadline',
                    content: `Object.getOwnPropertyKeys(obj)`
                },
                {
                    elementType:'Paragraph',
                    content:`
                    Returns an array of own (not inherited with a prototype), string <strong>enumerable and not 
                    enumerable</strong> properties. This method does not return symbol keyed properties.
                    `
                },




                {
                    elementType: 'SmallHeadline',
                    content: `Object.getOwnPropertySymbols(obj)`
                },
                {
                    elementType:'Paragraph',
                    content:`
                    Returns an array of own (not inherited with a prototype), symbol <strong>enumerable and not 
                    enumerable</strong> properties. This method does not return string keyed properties.
                    `
                },

                


                {
                    elementType: 'SmallHeadline',
                    content: `Object.getPrototypeOf(obj)`
                },
                {
                    elementType:'Paragraph',
                    content:`
                    Returns a prototype of the given object. A new property can be added to the object with
                    <code>Object.getPrototypeOf(obj).newProperty = value</code>
                    `
                },




                {
                    elementType: 'SmallHeadline',
                    content: `Object.setPrototypeOf(obj, newPrototype)`
                },
                {
                    elementType:'Paragraph',
                    content:`
                    Sets a <code>newPrototype</code> as <code>obj</code> prototype.
                    `
                },
                {
                    elementType:'NoteWarging',
                    content:`
                    Changeing the [[Prototype]] is an expensive operation, as it requires the change not only to
                    the [[Prototype]], but also to all code having access to that [[Prototype]]. It is better to
                    create a new object with a new [[Prototype]] instead.
                    `
                },



                {
                    elementType: 'SmallHeadline',
                    content: `Object.is(obj1, obj2)`
                },
                {
                    elementType:'Paragraph',
                    content:`
                    True if 2 objects fill one of the following conditions:
                    `
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        `both objects are undefined,`,
                        `both objects are null,`,
                        `both objects are true,`,
                        `both objects are false,`,
                        `both objects are stirngs and have characters in the same order,`,
                        `both refer to the same place in the memory,`,
                        `both are <code>+0</code>,`,
                        `both are <code>-0</code>,`,
                        `both are <code>NaN</code>,`,
                        `both are numbers or BigInts of the same value`
                    ]
                    
                },
                {
                    elementType:'Code',
                    content:`
<pre>
let objA = {
    a: 1, b:2, c:3, d: {f:4, g:5}
}
let objB = {
    a: 1, b:2, c:3, d: {f:4, g:5}
}
console.log(Object.is(objA, objB));

let objC = {a: 5};
let objD = {a: 5};
console.log(Object.is(objC, objD));

console.log(objA == objB); //false
console.log(objA === objB);//false

Object.is({}, {}); //false as not the same place in memory
</pre>                    
                    `
                },




                {
                    elementType: 'SmallHeadline',
                    content: `Object.keys()`
                },
                {
                    elementType:'Paragraph',
                    content:`
                    Returns an array of objects <b>own</b> and <b>enumerable</b> property names (string keys)
                    `
                },
                {
                    elementType:'Code',
                    content:`
<pre>
let objA = {
    a: 1, b: 2, c: 3, [Symbol('d')]:4, [Symbol('e')]:5
}
console.log(Object.keys(objA)) // ['a', 'b', 'c']
</pre>                    
                    `
                },




                {
                    elementType: 'SmallHeadline',
                    content: `Object.values()`
                },
                {
                    elementType:'Paragraph',
                    content:`
                    Returns an array of objects <b>own</b> and <b>enumerable</b> property values that have keys as 
                    strings. Symbol keyed values are not included.
                    `
                },
                {
                    elementType:'Code',
                    content:`
<pre>
let objA = {
    a: 1, b: 2, c: 3, [Symbol('d')]:4, [Symbol('e')]:5
}
console.log(Object.values(objA)) // ['a', 'b', 'c']
</pre>                    
                    `
                },

            ]
        },

    ]
};

export default function getObjectMethodsData(){
    return data;
}