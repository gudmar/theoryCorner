import getPrototypeChainingData from './objects_files/prototypeChaining'
// SPELL CHECKED, CORRECT!
let data =     {
    summary: 'objects',
    title: 'objects',
    searchKeywords:"computed property name syntax prototype __proto__ key value inheritance",
    cathegory: 'js',
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'Objects'
                },

                {
                    elementType: 'Paragraph',
                    content: `
                        An object is a set of pairs: <strong>key</strong>, <strong>value</strong>, where a key may be of a 
                        type string or symbol, and value may be of any type including other object. This makes objects a great 
                        tool for storing data. Objects may get big and complicated.
                    `
                },
                {
                    elementType:'Code',
                    content:
                    `
<pre>
    let place = {
        country: 'Poland',
        city: 'Wroclaw',
        street: 'Hubska',
        number: 353
    }
    let person = {
        firstName: 'John',
        familyName: 'Doe',
        gender: 'Man',
        address: place
    }
</pre>                    
        `
                },
                {
                    elementType: 'Paragraph',
                    content: `
                        A new property could be set to an object by calling it and new property key in brackets:
                        <code>person['height'] = 184cm</code>, or with a dot notation: <code>person.height</code>.
                        If the <code>heigth</code> property does not exist, it 
                        will be created under the person object. In case it would already exist, it would be 
                        overriden with a new value.
                    `
                },
                {
                    elementType: 'Paragraph',
                    content: `
                        An object property may be referred in similar way it is created: by object name and 
                        a property name in brackets: <code>let gender = person['gender']</code>, or with a dot
                        notation <code>let gender = person.gender</code>. In case a property does not exist under 
                        a person object <code>undefined</code> is returned.
                    `
                },
                {
                    elementType: 'Paragraph',
                    content: `
                        If a symbol has to be used as a key, then the bracket notation is the right one:
                        <code>person[Symbol('height')]</code>. To learn more about symbols please visit a 
                        <a href="./data%20types">data types</a> section.
                    `
                },
                {
                    elementType: 'Paragraph',
                    content: `Ways to access object keys.`
                },
                {
                    elementType: 'UnsignedList',
                    content:[
                        `<code>let keys = Object.keys(person)</code> is a way to get an Array of object keys,`,
                        `<code>for(let key in person)</code> loop,`,
                        `<code>Object.getOwnPropertyNames(someObject)</code>,`,
                        `<code>Object.getOwnPropertySymbols(someObject)</code>`,
                        `<code>Reflect.getOwnPropertySymbols(somObject)</code>: this gets both: symbol and string
                        keys`,
                        `There is no guarantee that keys will come up in some repetable order`,
                    ]
                },
                {
                    elementType:'Headline-3',
                    content:`Descriptor`
                },
                {
                    elementType:'Paragraph',
                    content:
                        `There is a way to hide object properties from some key listing methods, and there is a way to 
                        block object properties from being modified. There are methods like <code>Object.freeze()</code> or
                        <code>Object.seal()</code> or <code>Object.preventExtentions()</code>, but these are described in the
                        <a href="./object%20methods">object methods</a> section. Here an object descriptor will be covered.`
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        `<strong>value</strong>: this is the value property will have, by default it is <code>undefined</code>`,
                        `<strong>writable</strong>: this indicates if property value may be changed with an assignment operator`,
                        `<strong>enumerable</strong>: indicates if a property will show up in the <code>Object.keys()</code>
                        or <code>for..in</code> loop,`,
                        `<strong>configurable</strong>: if true, then objects descriptor property may be modified or property may
                        be deleted,`,
                        `<strong>get(){}</strong>: This is a getter, a special function that if defined, will be executed when
                        the property appears as a right-hand operand. This functions value will be returned instead of actual 
                        property value. This function may be used if property value does not exist, and is dynamically computed, 
                        or is taken from the view (DOM) at the time it is enquired. A getter must return a value.
                        A getter should never attempt to change any state of the application!`,
                        `<strong>set(val){}</strong>: This is the function that will be executed when the property appears as a 
                        left-hand operator instead of setting a value to it. This function is called a setter. This function
                        may be used for some side-effects when the parameter is being set. For example, it may update the view.`,
                    ]
                },
                {
                    elementType:'Paragraph',
                    content:
                        `Getter and setter cannot be set together with a value or writable property, as if a property is 
                        set or evaluated dynamically it cannot have a static value. There are methods that should be 
                        used to set/get a property descriptor:` 
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        `
                    <code>Object.defineProperty(obj, prop, descriptor)</code> is an Object static method that can be used
                    to define an object property together with its descriptor. 
                    `,
                    `
                    <code>Object.defineProperties</code> can be used to define a few properties at once:
<pre>
    Object.defineProperties(obj,
        {
            prop1: {enumerable:false, writable:false, configurable:false},
            prop2: {enumerable:false, writable:false, configurable:false},
            prop3: {enumerable:false, writable:false, configurable:false}
        }
    )
</pre>                    
                    
                    `,
                    `<code>Object.getOwnPropertyDescriptor(propName)</code> returns a property descriptor object,`,
                    `<code>Object.defineProperty</code> method may be used to <string>modify</code> once set 
                    property descriptor. If however object descriptor has its configurable attribute set to false this 
                    will not work,`
                    ]
                },

                {
                    elementType:'Headline-3',
                    content:`Constructor`
                },
                {
                    elementType:'Paragraph',
                    content:[
                        `
                        An object may be created with a constructor function. It is a good practice to start a 
                        constructor name with a capital letter. Each object in JS has its constructor property.
                        When object is created with <code>let obj = {}</code> then <code>obj.constructor.name === "Object"
                        </code>. But if an object is created with a constructor function, then the constructor name of 
                        newly created object would be the name of the constructor function.
                        `
                    ]
                },
                {
                    elementType:'Code',
                    content:`
<pre>
function Person(firstName, familyName, age){
    this.firstName = firstName;
    this.familyName = familyName;
    this.age = age;
}

let newPerson = new Person('John', 'Doe', '45');
</pre>                    
                    `
                },
                {
                    elementType:'Headline-3',
                    content:`Ways of creating new objects`
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        `Basic syntax: <code>var obj = {prop: 'val'};`,
                        `With a constructor (see above)`,
                        `With a
                        <code>
<pre>
var obj = {prop: 'val'};
var obj2 = Object.create(obj); // obj2 inherits obj
</pre>                        
                        </code>
                        `,
                        `With classes
                        <code>
<pre>
class Basic {
    constructor(){this.prop = 'val'}
}
class Extending extends Basic{
    constructor(){
        super(); //mandatory in class extending another class,
        // without this no possibility to refer to this keyword
        this.prop2 = 'val2'
    }
}
let instance = new Extending();
</pre>                        
                        </code>
                        `
                    ]
                },
                {
                    elementType:'Headline-3',
                    content:`Methods`
                },
                {
                    elementType:'Paragraph',
                    content:[
                        `Object has some methods allowing its manipulation. To learn more please visit the 
                        <a href="./object%20methods">object methods</a> section.`
                    ]
                },
            ]
        },

        ...getPrototypeChainingData(),

 

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
                    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty',
                    description:'About descriptor'
                },
                {
                    elementType:'Link',
                    content:'Developer mozilla',
                    href: 'https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Global_Objects/Object',
                    description:'About Object'
                },
                {
                    elementType:'Link',
                    content:'Developer mozilla',
                    href: 'https://developer.mozilla.org/pl/docs/Web/JavaScript/Inheritance_and_the_prototype_chain',
                    description:'Prototype chain'
                },
                {
                    elementType:'Link',
                    content:'Developer mozilla',
                    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto',
                    description:'__proto__'
                },
                {
                    elementType:'Link',
                    content:'medium.com',
                    href: 'https://medium.com/beginners-guide-to-mobile-web-development/super-and-extends-in-javascript-es6-understanding-the-tough-parts-6120372d3420',
                    description:'Super and Extends in JS ES6: an example of how inheritance worked before ES6'
                },
                {
                    elementType:'Link',
                    content:'kenneth-kin-lum.blogspot.com',
                    href: 'http://kenneth-kin-lum.blogspot.com/2012/10/javascripts-pseudo-classical.html',
                    description:'An explanation with a readable illustration showing prototype inheritance'
                    // https://stackoverflow.com/questions/36692927/what-is-the-end-of-prototype-chain-in-javascript-null-or-object-prototype
                },
            ]
        }
    ]
};

export default function getJSObjectsData(){
    return data;
}