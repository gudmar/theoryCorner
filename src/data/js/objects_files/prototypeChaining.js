

let propertyChainingData = [



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
                <i>polyfill</i>.<br>
                Modifying the prototype of the existing object is expensive, as all objects and references
                pointing to this object must be processed. This is the other reason for not extending the prototypes
                of existing objects.
                `
            },
            {
                elementType:'SmallHeadline',
                content:'A type'
            },
            {
                elementType:'Paragraph',
                content:`
                Types in JS are: number, bigInt, string, boolean, null, undefined, symbol and object. However, when
                speaking of objects in general, it is assumed, that each object has its own type, and this type is 
                related to this objects interface. An interface is a set of public methods and properties. So an 
                object communicates with the outside world with its interface. Two objects are said to be equal if they have 
                the same interface (due to "Design Patterns" by Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides).
                JS does not recognize different types of objects, but in Type Script this imperfection is fixed.
                In this article it will be assumed, that two objects are of the same type if they are created with the same
                constructor. 
                `
            },
            // {
            //     elementType:'SmallHeadline',
            //     content:'Classes, functions'
            // },
            // {
            //     elementType:'Paragraph',
            //     content:`
            //     Classes in JS can be replaced with older approach: functions. Everything that is written with a class
            //     syntax may be converted to functions. There is nothing strange about it, as classes are functions under
            //     the hood. Classes are more readable, so it is more convenient to use classes. However React after 
            //     a period of classes usage started supporting functions instead for a reason. <br>
            //     In this article there is an example based on functions, and then the same thing is written with classes.
            //     It would be good not to forget how to write a constructor, how to set a static method or how to 
            //     make inheritance with the help of functions.
            //     `
            // },
            {
                elementType:'SmallHeadline',
                content:'__proto__'
            },
            {
                elementType:'UnsignedList',
                content:[
                    `Each object in JS holds a reference to the prototype object of its constructor,`,
                    `There is a single instance of the prototype for each type of objects (for all instances 
                        created with the same constructor). Thanks to this a property added to the prototype is 
                        available in all instances,`,
                    `Each object in JS has its hidden property [[Prototype]] that references that object constructor 
                    protytype`,
                    `<code>__proto__</code> (not an ECMA script solution) is a property allowing to access the objects
                    prototype. It holds, for example a setter and getter to the prototype. <code>__proto__</code> gives
                    access to the hidden property [[Prototype]],`,
                    `<code>__proto__</code> is available, but should not be used, as it is depracated. 
                    <code>Object.getPrototypeOf(o)</code>
                    and <code>Object.setPrototypeOf(o)</code> should be used instead.`
                ]
            },
            {
                elementType:'Headline-3',
                content:'A chain'
            },
            {
                elementType:'Paragraph',
                content:`
                In general, a prototype is an object, that allows inheritance in JS. Each function in JS has 
                a prototype object. Each object in JS has access to its constructor prototype, so each instance of the 
                certain object type has access to the same prototype. Adding a method to an object's prototype 
                makes this method accessible in each instance of this object type. Prototypes in JS are linked together,
                forming a chain. This chain ends with the Object's prototype followed by a null. If there is a request 
                to find a property of an object, firstly the own object's methods are searched. Then, if nothing is 
                found, there is the objects prototype searched. If nothing found, then the prototypes prototype is 
                searched, and so on, until null is reached. In this case it is obvious, that the property does not 
                exist.
                `
            },
            {
                elementType:'SmallHeadline',
                content:'An example'
            },
            {
                elementType:'Paragraph',
                content:`
                Object => Vehicle => CombustionEngineVehicle => Car
                `
            },
            {
                elementType:'Paragraph',
                content:`
                Let's assume, that there is a <code>bicycle</code> object, that is an instance of a <code>Vehicle</code> 
                class. This <code>bicycle</code> has a property named <code>__proto__</code>.
                `
            },
            {
                elementType:'UnsignedList',
                content:[
                    `The <code>__proto__</code> of the <code>bike</code> Vehicle instance, points to the Vehicle prototype`,
                    `Vehicle prototype has property named <code>constructor</code> pointing to the function that constructs
                    the vehicle object`,
                    `Vehicle constructor has the <code>prototype</code> property pointing back to the prototype (back, as 
                        prototype itself points to the constructor with the constructor property)`,
                    `Because the vehicles constructor is a function, it has a <code>__proto__</code> property pointing to 
                    the prototype of the function. And prototype of the function constructor points to the prototype of
                    the object, and the prototype of the object is null,`,
                    `Vehicle's <code>__proto__</code> points to the object's prototype, as Vehicle inherits by default after Object`,
                    `Every object in JS finally has the prototype of the <code>Object</code> in its chain`,
                    `Objects prototype points to null`
                ]
            },
            {
                elementType:'Paragraph',
                content:`
                Now let's examine a more complex example, with the Object => Vehicle => CombustionEngineVehicle => Car
                inheritance.
                `
            },
            {
                elementType:'Code',
                content:`
<pre>
function Vehicle(nrOfWheels, poweredBy){
    this.nrOfWheels = nrOfWheels;
    this.poweredBy = poweredBy;
}
Vehicle.prototype.examples = ['bicycle', 'motorcycle', 'car', 'train']
Vehicle.prototype.giveExamples = function(){
    console.log(this.examples)
}

// a static method:
Vehicle.whatSortOf = function(nrOfWheels){
    if (nrOfWheels === 4) return 'Probably a car';
    if (nrOfWheels === 2) return 'Probably a motorcycle or a bicycle';
    if (nrOfWheels >= 8 && nrOfWheels % 2 === 0) return 'Could be a train';
    return 'I don't know'
}

function CombustionEngineVehicle(nrOfWheels){
    Vehicle.call(this, nrOfWheels, 'combustion engine');
    // this.examples = ['car', 'motorcycle']
}
CombustionEngineVehicle.prototype = Object.create(Vehicle.prototype);
CombustionEngineVehicle.prototype.constructor = CombustionEngineVehicle;
CombustionEngineVehicle.prototype.examples =  ['car', 'motorcycle'];

function Car(make, model, year){
    CombustionEngineVehicle.call(this, 4);
    this.make = make;
    this.model = model;
    this.year = year;
    // this.examples = ['subaru impreza', 'maserati biturbo', 'ford mustang']
}
Car.prototype = Object.create(CombustionEngineVehicle.prototype);
Car.prototype.constructor = Car;
Car.prototype.examples = ['subaru impreza', 'maserati biturbo', 'ford mustang'];
Car.prototype.introduction = function(){
    console.log(\`I am \${this.make} \${this.model} from \${this.year}\`);
}

let subaruLegacy = new Car('subaru', 'legacy', '2005');
let peugeot206 = new Car('peugeot', '206', '2004');
peugeot206.examples = ['2.0 HDI', '2.0GTI', '1.1 SOHC'];
peugeot206.introduction(); // I am peugeot 206 from 2004
// from Car prototype

Object.getOwnPropertyNames(subaruLegacy); // ["make", "model", "year"]
Object.getOwnPropertyNames(peugeot206); // ["make", "model", "year", "examples"]
// as here concrete examples were specified
peugeot206.examples; // ["2.0 HDI", "2.0GTI", "1.1 SOHC"]
subaruLegacy.examples; // ["subaru impreza", "maserati biturbo", "ford mustang"]
// taken from the prototype, as no specific for this object were added

peugeot206.giveExamples(); // ["2.0 HDI", "2.0GTI", "1.1 SOHC"]
// This method is taken from Vehicle prototype, as 
// it is not available neither in peugeot206, nor in the Car prototype,
// nor in the CombustionEngine prototype.
// Data is taken from the peugeot206 instance, as it was specified there.

peugeot206.__proto__.__proto__.__proto__.__proto__ === Object.prototype; // true;
peugeot206.__proto__.__proto__.__proto__.__proto__.__proto__ === null; // true;
</pre>                
                `
            },
            {
                elementType:'Paragraph',
                content:`
                A graph describing above situation:
                `
            },
            {
                elementType: 'Image',
                name: 'protoChain_carGraph.png',
                alt: 'Prototype chain'
            },
            {
                elementType:'Paragraph',
                content:`
                So in general:
                `
            },
            {
                elementType:'UnsignedList',
                content:[
                    `Each object in JS has a reference to its constructors prototype (property <code>__proto__</code> that should not
                        be used anymore, or <code>Object.getPrototypeOf(o)</code>)`,
                    `Each prototype has a reference to the prototype it inherits from, until the Object is reached with its 
                    prototype reference pointing to null`,
                    `Each prototype has a constructor property pointing to the constructor that creates objects with the 
                    prototype,`,
                    `Each constructor has a prototype property that all instances created with the construcotr will refer to,`,
                    `Each constructor has its <code>__proto__</code> pointing to the function prototype, as each constructor is 
                    a function,`,
                    `The prototype property can be overridden (<code>Object.setPrototypeOf(o, pr)</code>, 
                    or depraciated <code>o.__proto__ = pr</code>,`,
                    `New elements may be added to the existing prototype, but this is discouraged,`,
                    `Each function in JS has a direct prototype property. This is not common, as most objects have only a 
                    reference like <code>__proto__</code>`

                ]
            },

            {
                elementType:'SmallHeadline',
                content:`
                The same example written with classes
                `
            },

            {
                elementType:'Code',
                content:`
<pre>
class Vehicle{
    static whatSortOf = function(nrOfWheels){
        if (nrOfWheels === 4) return 'Probably a car';
        if (nrOfWheels === 2) return 'Probably a motorcycle or a bicycle';
        if (nrOfWheels >= 8 && nrOfWheels % 2 === 0) return 'Could be a train';
        
        return \`I don't know\`
    }

    constructor(nrOfWheels, poweredBy){
        this.nrOfWheels = nrOfWheels;
        this.poweredBy = poweredBy;
        this.constructor.prototype.examples = ['bicycle', 'motorcycle', 'car', 'train'];
        this.constructor.prototype.giveExamples = function(){
            console.log(this.examples)
        }.bind(this);
    }
}

class CombustionEngineVehicle extends Vehicle{
    constructor(nrOfWheels){
        super(nrOfWheels, 'combustion engine');
        this.constructor.prototype.examples = ['car', 'motorcycle'];
    }
    
}

class Car extends CombustionEngineVehicle{
    constructor(make, model, year){
        super(4);
        this.make = make;
        this.model = model;
        this.year = year;
        this.constructor.prototype.examples = ['subaru impreza', 'maserati biturbo', 'ford mustang'];
        this.constructor.prototype.introduction = function(){
            console.log(\`I am \${this.make} \${this.model} from \${this.year}\`);
        }.bind(this);
    }
}


let subaruLegacy = new Car('subaru', 'legacy', '2005');
// subaruLegacy.examples = ['2.0 H4 SOHC', '2.0 H4 DOHC', '2.5 H4 DOHC Turbo', '3.0 H6']
let peugeot206 = new Car('peugeot', '206', '2004');
peugeot206.examples = ['2.0 HDI', '2.0GTI', '1.1 SOHC'];
</pre>                
                `
            },












//             {
//                 elementType:'Headline-3',
//                 content:'A chain'
//             },

            
//             {
//                 elementType:'Code',
//                 content:`
// <pre>
// function Person(name, familyName) {
//     this.firstName = name,
//     this.familyName = familyName
//     Person.isPerson = function(arg){return arg.constructor.name === 'Person'}
// };
// Person.prototype.introduction = function(){
//     console.log('My name is ' + this.firstName + ' ' + this.familyName)
// }

// function PersonWithAge(name, familyName, age){
//     Person.call(this, name, familyName);
//     this.age = age;
//     PersonWithAge.isPersonWithAge = function(arg){
//         return arg.constructor.name === "PersonWithAge"
//     }
// }
// PersonWithAge.prototype = Object.create(Person.prototype);
// PersonWithAge.prototype.constructor = PersonWithAge;

// PersonWithAge.prototype.printAge = function(){
// console.log('Age is ' + this.age);
// }

// function PersonWithGender(name, familyName, age, gender){
//     PersonWithAge.call(this, name, familyName, age, gender);
//     this.gender = gender;
//     PersonWithGender.isPersonWithGender = function(arg){
//         return arg.constructor.name === "PersonWithGender"
//     }
// }

// PersonWithGender.prototype = Object.create(PersonWithAge.prototype);
// PersonWithGender.prototype.constructor = PersonWithGender;

// let p = new PersonWithGender('Genowefa', 'Kowalska', 87, 'female');

// console.log(Object.getOwnPropertyNames(p));
// // ["firstName", "familyName", "age", "gender"]

// console.log(Person.isPerson(p));
// // false;

// console.log(PersonWithAge.isPersonWithAge(p));
// // false;

// console.log(PersonWithGender.isPersonWithGender(p));
// // true;

// p.introduction();
// <pre>`

//                 },
//                 {
//                     elementType:'UnsignedList',
//                     content:[
//                         `<code>PersonWithGender</code> extends <code>PersonWithAge</code>, and <code>PersonWithAge</code>
//                         extends <code>Person</code>. Because of this fact, all properties of <code>Person</code>,
//                         <code>PersonWithAge</code> and <code>Person</code> are the own properties of the <code>p</code>
//                         instance. They may be accessed directly,`,
//                         `<code>Person.isPerson</code>, <code>PersonWithAge.isPersonWithAge</code>, 
//                         <code>PersonWithGender.isPersonWithGender</code> are static classes, that are not inherited,
//                         as they do not exist on the instance of the object. This is like defining a method with a 
//                         <code>static</code> keyword in a class,`,
//                         `<code>.introduction</code> method is assigned to the prototype of the <code>Person</code>
//                         class, and this means that it will be inherited with this prototype, and it will be available
//                         in <code>PersonWithAge</code>, and <code>PersonWithGender</code>`,
//                         `Above example is a little outdated, as there is a newer approach with a class syntax (see below)`
//                     ]
//                 },
//                 {
//                     elementType:'Paragraph',
//                     content:`Below is exactly the same example usage of the ES6 class syntax.`
//                 },
//                 {
//                     elementType:'Code',
//                     content:`
// }<pre>


// //with classes:
// class Person{
// constructor(name, familyName){
//     this.name = name;
//     this.familyName = familyName;
// }
// introduction(){
//     console.log('My name is ' + this.name + ' ' + this.familyName)
// }
// static isPerson(arg) {return arg.constructor.name == 'Person'}
// }
// class PersonWithAge extends Person{
// constructor(name, familyName, age){
//     super( name, familyName);
//     this.age = age;
// }
// static isPersonWithAge(arg) {
//     return arg.constructor.name == "PersonWithAge"
// }

// }
// class PersonWithGender extends PersonWithAge{
// constructor(name, familyName, age, gender){
//     super(name, familyName, age);
//     this.gender = gender;
// }
// static isPersonWithGender(arg) {
//     return arg.constructor.name == "PersonWithGender"
// }

// }


// let p = new PersonWithGender('Genowefa', 'Kowalska', 87, 'female');

// console.log(Object.getOwnPropertyNames(p));
// // ["firstName", "familyName", "age", "gender"]

// console.log(Person.isPerson(p));
// // false;

// console.log(PersonWithAge.isPersonWithAge(p));
// // false;

// console.log(PersonWithGender.isPersonWithGender(p));
// // true;

// p.introduction();

// // lets see what happens here
// </pre>                             
//                 `
//             },
//             {
//                 elementType: 'UnsignedList',
//                 content:[
//                     `There is a base constructor <code>Person</code>`,
//                     `<code>PersonWithAge</code> extends <code>Person</code>`,
//                     `<code>PersonWithGender</code> inherits after <code>PersonWithAge</code>`,
//                     `<code>let gender = p.gender</code>: here a gender property of <code>p</code> is referenced,
//                     so the JS engine seraches <code>p</code> own properties and finds a desired property, 
//                     end of the search,`,
//                     `<code>let name = p.firstName</code>: JS engine searches <code>p</code> own properties for 
//                     a <code>firstName</code> property, and does not find it. So it searches its constructors 
//                     (<code>PersonWithGender</code>) prototype for that property. 
//                     Prototype of <code>PersonWithGender</code> has only one defined property, 
//                     and that is <code>age</code>,
//                     so the search is continued in prototypes prototype (<code>Person</code>). Here property is found, end of
//                     the search,`,
//                     `<code>let hairColor = p.hairColor</code>. Here a not existing property is enquired, so the JS
//                     engine searches own properties of <code>p</code>, then all prototypes, until <code>null</code> is
//                     encountered. Now <code>undefined</code> is returned.`
//                 ]
//             },
//             {
//                 elementType:'NoteWarning',
//                 content:`
//                 Searching whole prototype chain is time consuming, so if time is crucial there are 
//                 <code>Object.hasOwnProperty(o)</code> and <code>Object.getOwnPropertyNames(o)</code> methods
//                 that will not search whole prototype chain but look only at properties owned directly by the
//                 object <code>o</code>.
//                 `
//             },
//             {
//                 elementType:'Headline-3',
//                 content:'__proto__'
//             },
//             {
//                 elementType:'Paragraph',
//                 content:`
//                     <code>__proto__</code> is depraciated, and should not be used anymore. <code>__proto__</code> object
//                     is holding a setter and getter of the prototype, so
//                     <code>Object.getPrototypeOf(o)</code> and <code>Object.setPrototypeOf(o)</code> should be used instead.
//                 `
//             },
//             {
//                 elementType:'UnsignedList',
//                 content: [
//                 `If object was created by a <code>let o = {}</code> expression __proto__ is holding "Object.prototype"`,
//                 `If an object was created by a creator, then __proto__ holds creators prototype,`,
//                 `<code>someObj.__proto__ = someOtherObj</code> should be substituted with 
//                 <code>Object.setPrototypeOf(someObj, someOtherObj)</code>`
//                 ]
//             }
//         ]
//     },


//     {
//         elementType:'Headline-3',
//         content:'Other operators'
//     },
//     {
//         elementType: 'Code',
//         content: 
//             `
// <pre>
// function Vehicle(nrOfWheels, powered){
//     this.nrOfWheels = nrOfWheels;
//     this.powered = powered;
// }
// function Car(model, make){
//     Vehicle.call(this, 4, 'combustion engine')
//     this.model = model;
//     this.make = make;
// }
// Car.prototype = Object.create(Vehicle.prototype);
// Car.prototype.constructor = Car; // inheritance

// let myCar = new Car('206', 'Peugeot');
// myCar instanceof Vehicle;

// myCar.__proto__ === Vehicle.prototype 
// myCar.__proto__.__proto__.__proto__.__proto__ === null

// </pre>            
//             `
        
        
//     },
//     {
//         elementType: 'UnsignedList',
//         content: [
//             `<code>myCar</code> has a property named <code>__proto__</code>,  that points to the prototype of the 
//             object Car inherited after, so to the Vehicles prototype. The constructor of the myCar.__proto__ points 
//             to the Car, as it was set to do so.`,
//             `<code>myCar.__proto__.__proto__</code> points to the Objects prototype, `
        ]
        
    },

    
    ]
    
    export default function getPrototypeChainingData(){
        return propertyChainingData;
    }
    