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
                        `<code>someObject.getOwnPropertyNames()</code>,`,
                        `<code>someObject.getOwnPropertySymbols()</code>`,
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
                        `There is a way to hide a property from being listed with an <code>Object.keys()</code> or
                        <code>for..in</code> loop. This can be done by setting object descriptors enumerable to
                        false. Each object property besides its value has more attributes:`
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
                        `Object has some methods allowing its manipulation. To learn more please visit 
                        <a href="./object%20methods>object methods</a> section.`
                    ]
                },
            ]
        },
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline-2',
                    content:'Prototype chain'
                },
                {
                    elementType:'Paragraph',
                    content:`
                    Everything in JS is an object. Each object has its private property binding it to other objects.
                    This property is called a <strong>prototype</storng>. Each prototype has its own prototype.
                    The last prototype in this chain points to <code>null</code>.
                    `
                },
                {
                    elementType:'NoteWarning',
                    content:`
                    Prototypes of existing objects (like <code>Array</code>) should never be modified as this 
                    practice breaks encapsulation. Instead a new class extending some class should be created, and
                    needed properties should be added to newly created class.<br>
                    Only situation an existing object prototype should be modified is an implementation of the 
                    <i>polyfill</i>
                    `
                },
                {
                    elementType:'Headline-3',
                    content:'A chain'
                },

                
                {
                    elementType:'Code',
                    content:`
<pre>
function Person(name, familyName) {
    this.firstName = name,
    this.familyName = familyName
    Person.isPerson = function(arg){return arg.constructor.name === 'Person'}
};
Person.prototype.introduction = function(){
    console.log('My name is ' + this.firstName + ' ' + this.familyName)
}

function PersonWithAge(name, familyName, age){
    Person.call(this, name, familyName);
    this.age = age;
    PersonWithAge.isPersonWithAge = function(arg){
        return arg.constructor.name === "PersonWithAge"
    }
}
PersonWithAge.prototype = Object.create(Person.prototype);
PersonWithAge.prototype.constructor = PersonWithAge;

PersonWithAge.prototype.printAge = function(){
    console.log('Age is ' + this.age);
}

function PersonWithGender(name, familyName, age, gender){
    PersonWithAge.call(this, name, familyName, age, gender);
    this.gender = gender;
    PersonWithGender.isPersonWithGender = function(arg){
        return arg.constructor.name === "PersonWithGender"
    }
}

PersonWithGender.prototype = Object.create(PersonWithAge.prototype);
PersonWithGender.prototype.constructor = PersonWithGender;

let p = new PersonWithGender('Genowefa', 'Kowalska', 87, 'female');

console.log(Object.getOwnPropertyNames(p));
// ["firstName", "familyName", "age", "gender"]

console.log(Person.isPerson(p));
// false;

console.log(PersonWithAge.isPersonWithAge(p));
// false;

console.log(PersonWithGender.isPersonWithGender(p));
// true;

p.introduction();
<pre>`

                    },
                    {
                        elementType:'UnsignedList',
                        content:[
                            `<code>PersonWithGender</code> extends <code>PersonWithAge</code>, and <code>PersonWithAge</code>
                            extends <code>Person</code>. Because of this fact, all properties of <code>Person</code>,
                            <code>PersonWithAge</code> and <code>Person</code> are the own properties of the <code>p</code>
                            instance. They may be accessed directly,`,
                            `<code>Person.isPerson</code>, <code>PersonWithAge.isPersonWithAge</code>, 
                            <code>PersonWithGender.isPersonWithGender</code> are static classes, that are not inherited,
                            as they do not exist on the instance of the object. This is like defining a method with a 
                            <code>static</code> keyword in a class,`,
                            `<code>.introduction</code> method is assigned to the prototype of the <code>Person</code>
                            class, and this means that it will be inherited with this prototype, and it will be available
                            in <code>PersonWithAge</code>, and <code>PersonWithGender</code>`,
                            `Above example is a little outdated, as there is a newer approach with a class syntax (see below)`
                        ]
                    },
                    {
                        elementType:'Paragraph',
                        content:`Below is exactly the same example usage of the ES6 class syntax.`
                    },
                    {
                        elementType:'Code',
                        content:`
}<pre>


//with classes:
class Person{
    constructor(name, familyName){
        this.name = name;
        this.familyName = familyName;
    }
    introduction(){
        console.log('My name is ' + this.name + ' ' + this.familyName)
    }
    static isPerson(arg) {return arg.constructor.name == 'Person'}
}
class PersonWithAge extends Person{
    constructor(name, familyName, age){
        super( name, familyName);
        this.age = age;
    }
    static isPersonWithAge(arg) {
        return arg.constructor.name == "PersonWithAge"
    }

}
class PersonWithGender extends PersonWithAge{
    constructor(name, familyName, age, gender){
        super(name, familyName, age);
        this.gender = gender;
    }
    static isPersonWithGender(arg) {
        return arg.constructor.name == "PersonWithGender"
    }

}


let p = new PersonWithGender('Genowefa', 'Kowalska', 87, 'female');

console.log(Object.getOwnPropertyNames(p));
// ["firstName", "familyName", "age", "gender"]

console.log(Person.isPerson(p));
// false;

console.log(PersonWithAge.isPersonWithAge(p));
// false;

console.log(PersonWithGender.isPersonWithGender(p));
// true;

p.introduction();

// lets see what happens here
</pre>                             
                    `
                },
                {
                    elementType: 'UnsignedList',
                    content:[
                        `There is a base constructor <code>Person</code>`,
                        `<code>PersonWithAge</code> extends <code>Person</code>`,
                        `<code>PersonWithGender</code> inherits after <code>PersonWithAge</code>`,
                        `<code>let gender = p.gender</code>: here a gender property of <code>p</code> is referenced,
                        so the JS engine seraches <code>p</code> own properties and finds a desired property, 
                        end of the search,`,
                        `<code>let name = p.firstName</code>: JS engine searches <code>p</code> own properties for 
                        a <code>firstName</code> property, and does not find it. So it searches its constructors 
                        (<code>PersonWithGender</code>) prototype for that property. 
                        Prototype of <code>PersonWithGender</code> has only one defined property, 
                        and that is <code>age</code>,
                        so the search is continued in prototypes prototype (<code>Person</code>). Here property is found, end of
                        the search,`,
                        `<code>let hairColor = p.hairColor</code>. Here a not existing property is enquired, so the JS
                        engine searches own properties of <code>p</code>, then all prototypes, until <code>null</code> is
                        encountered. Now <code>undefined</code> is returned.`
                    ]
                },
                {
                    elementType:'NoteWarning',
                    content:`
                    Searching whole prototype chain is time consuming, so if time is crucial there are 
                    <code>Object.hasOwnProperty(o)</code> and <code>Object.getOwnPropertyNames(o)</code> methods
                    that will not search whole prototype chain but look only at properties owned directly by the
                    object <code>o</code>.
                    `
                },
                {
                    elementType:'Headline-3',
                    content:'__proto__'
                },
                {
                    elementType:'Paragraph',
                    content:`
                        <code>__proto__</code> is depraciated, and should not be used anymore. <code>__proto__</code> object
                        is holding a setter and getter of the prototype, so
                        <code>Object.getPrototypeOf(o)</code> and <code>Object.setPrototypeOf(o)</code> should be used instead.
                    `
                },
                {
                    elementType:'UnsignedList',
                    content: [
                    `If object was created by a <code>let o = {}</code> expression __proto__ is holding "Object.prototype"`,
                    `If an object was created by a creator, then __proto__ holds creators prototype,`,
                    `<code>someObj.__proto__ = someOtherObj</code> should be substituted with 
                    <code>Object.setPrototypeOf(someObj, someOtherObj)</code>`
                    ]
                }
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
            ]
        }
    ]
};

export default function getJSObjectsData(){
    return data;
}