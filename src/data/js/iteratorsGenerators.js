
let data =     {
    summary: 'Iterators and generators',
    title: 'Iterators and generators',
    searchKeywords:`Iterator generator yield Symbol.iterator @@iterator next'
    `,
    cathegory: 'js',
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'Iterators and generators'
                },

                {
                    elementType: 'Paragraph',
                    content: `
                    
                    `
                },


                {
                    elementType:'Headline-3',
                    content:'Iterators'
                },
                {
                    elementType:'Paragraph',
                    content:
                    `
                    An iterator is a object, that:
                    `    
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        `has a <code>next</code> property, thats value is a function`,
                        `<code>next(singleArg)</code> takes no arguments, or a single argument, 
                        and returns an object with properties <code>done</code>
                        and <code>value</code>`,
                        '<code>value</code> property is the value of the current iteration',
                        `<code>done</code> is false if there are still elements that may be returned, and done if there
                        are no more elements left`,
                        `<code>singleArg</code>, a single optional argument of the next function is an argument that 
                        does nothing, unless it is implemented. It is just available inside the next function.`
                    ]
                },
                {
                    elementType:'Code',
                    content:
                    `
<pre>
let iterator = {
    current: 0,
    next: function(startFrom){
        if(startFrom) this.current = startFrom;
        this.current += 1;
        let isDone = this.current>15?true:false
        if(isDone) {
            return {done: isDone}
        }
        return {
            value: this.current,
            done: isDone
        }
    },
}


let it = iterator;
console.log(it.next(2)); // {value: 3, done: false}
console.log(it.next()); // {value: 4, done: false}
console.log(it.next(20)); // {done: true} value would be undefined;

console.log([...it]); // Error, it is not iterable
</pre>
                    `    
                },
                {
                    elementType:'Headline-3',
                    content:'Iterable'
                },

                {
                    elementType:'Paragraph',
                    content:`
                    An object is iterable when it has a function under its property <code>[Symbol.iterator]</code>, 
                    that returns an <i>iterator interface</i>, in other words this function must return an object having 
                    a <code>next</code>
                    property, that is a function that returns an object with properties <code>value</code> and <code>done</code>
                    <code>value</code> is the next value of the collection, <code>done</code> is the boolean indicating if the 
                    collection is finished or not.
                    `
                },
                {
                    elementType:'Paragraph',
                    content:`
                    <code>[Symbol.iterator]</code> is often described as <code>@@Iterator</code>, a well known symbol.
                    `
                },
                {
                    elementType:'Paragraph',
                    content:`
                    Lets make an iterable from previous example:
                    `
                },
                {
                    elementType:'Code',
                    content:`
<pre>
let iterable = {
    current: 0,
    next: function(startFrom){
        if(startFrom) this.current = startFrom;
        this.current += 1;
        let isDone = this.current>5?true:false
        if(isDone) {
            return {done: isDone}
        }
        return {
            value: this.current,
            done: isDone
        }
    },
    [Symbol.iterator]: function(){
        return this
    }
}
let it = iterable;
for(let i of it){
    console.log(i)
} // will list 1 to 5
console.log(it.next(2)); // {value: 3, done: false}
// this works only thanks to the startValue definition
console.log(it.next(20)); // {done:true}
console.log([...it]); // [], as iterator was already used in
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// But with primary numbers example this works
// the for loop
</pre>                    
                    `
                },
                {
                    elementType:'Paragraph',
                    content:`
                    The difference is that now <code>for..of</code> syntax and the destructive operator may be used.
                    `
                },
                {
                    elementType:'NoteWarning',
                    content:`
                    Once used iterator is not automatically rewound ???
                    `
                },
                {
                    elementType:'SmallHeadline',
                    content:`
                    Example with primary numbers
                    `
                },
                {
                    elementType:'Code',
                    content:`
<pre>
let primaryIterator = function(){
    let lastReturnedPrimaryNumber = 0;
    let iterationLimit = 100;
    let getFirstDivisor = function(nr){
        for (let i = 2; i <= nr; i+=1){
            if (nr % i === 0) return i;
        }
        return nr;
    }
    let isPrimary = function(nr){
        let firstDivisor = getFirstDivisor(nr);
        return firstDivisor === nr;
    }
    let getNextPrimary = function(startFrom){
        let current = startFrom;
        let isPrimeryFound = false;
        while (!isPrimeryFound) {
            current += 1;
            isPrimeryFound = isPrimary(current);
            if (isPrimeryFound) return current;
        }
    }
    let currentIndex = -1;
    return {
        next: function(startFrom){
            if (startFrom) {
                currentIndex = 0; lastReturnedPrimaryNumber = startFrom;
            }
            currentIndex += 1;
            lastReturnedPrimaryNumber = getNextPrimary(lastReturnedPrimaryNumber);
            return currentIndex < iterationLimit ? {
                done: false,
                value: lastReturnedPrimaryNumber
            } : {
                done: true
            }
        }
    }
}

// **** usage of primary interator

let primaryI =  primaryIterator();
console.dir(primaryI);
for (let i = 0; i < 20; i++){
    console.log(primaryI.next().value); //prints values from 1 to 67
}
console.log(primaryI.next(1000));
for (let i = 0; i < 20; i++){
    console.log(primaryI.next().value); // from 1013 to 1129
    //thanks to startFrom parameter
}


// **** iterable out of primary iterator

let primaryIterable = {
    [Symbol.iterator] : primaryIterator
}

console.log([...primaryIterable]);
console.log([...primaryIterable]); // works fine as object is iterable, not only an iterator
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// ? With previous example this does not work
console.log(primaryIterable[Symbol.iterator]().next(300));
// This prints the next primary number after 300;
</pre>                    
                    `
                },

                {
                    elementType:'SmallHeadline',
                    content:'Iterator with classes'
                },
                {
                    elementType:'Paragraph',
                    content:`
                    An iterable may be created with the class syntax. <code>[Symbol.iterator]</code> property is
                    inherited, so a class extending a iterable class is also iterable
                    `
                },
                {
                    elementType:'Code',
                    content:`
<pre>
class IterableClass{
    constructor(){
        this.current = 0;
        this.limit = 10;
    }

    [Symbol.iterator]() {
        return {
            next: () => {
            // an arrow used, so this is binded
                this.current += 1;
                return {
                    done: this.current > this.limit ? true : false,
                    value: this.current
                }
            }
        }
    }
}

let iterInstance = new IterableClass();
console.log([...iterInstance]);

class ExtendsIterableClass extends IterableClass{
    constructor(){
        super();
    }
}

let extendedIterInstance = new ExtendsIterableClass();
console.log([...extendedIterInstance]);
// [Symbol.iterator] property is inherited
</pre>                    
                    `
                },



                {
                    elementType:'Headline-3',
                    content:'Generators'
                },
                {
                    elementType:'UnsignedList',
                    content:[
                    `A generator is a function is marked with a <code>*</code>. For example: <code>function* f()</code>`,    
                    `A generator is a function, but its prototype.name is Generator, so inherits after a function.`,
                    `A generator is not the constructor, so cannot be used with the <code>new</code> operator`,
                    `A generators body is not executed instantly. When it encounters a <code>yield</code> operator,
                    it returns the right hand value and pauses,`,
                    `In case a return statement is encountered, the generator is finalized, the right hand value of the 
                    return is returneda and the generator will not produce any new values,`,
                    `A generator returnes an iterable and iterator at the same time, so the next method may be called 
                    and the <code>for..of</code> statement may be used,`,
                    `<code>function* generator([par[, par...]])</code>, parameters may be passed to a generator 
                    in case to parametrize returned iterator/iterable`
                ]
                    
                },
                {
                    elementType:'Code',
                    content:`
<pre>
function* generator(){
    yield 1; yield 2; yield 3; yield 4;
}

console.dir(generator)

let gen = generator();
console.dir(gen);
console.log([...gen]); // [1,2,3]
console.log([...gen]); // [] as generator was finished in the previous line
console.log(gen.next().value); // undefined, as generator is finished

let gen2 = generator();
console.log(gen2.next().value);
console.log(gen2.return(20)); // will return {value: 20, done: true};
console.log(gen2.next().value); // undefined, as return finishes a generator

let gen3 = generator();
console.log(gen3.next().value);
console.log(gen3.return(2)); // will return {value: 2, done: true};
console.log(gen3.next().value); // undefined, as return finishes a generator
</pre>                    
                    `
                },



                {
                    elementType:'SmallHeadline',
                    content:`
                    Example with classes
                    `
                },

                {
                    elementType:'Code',
                    content:`
<pre>
class GeneratorEx{
    constructor(){
        this.current = 0;
    }

    *generator(){
        this.current += 1;
        for (let i = 0; i < 10; i++){
            yield this.current;
        }
        this.current = 0; // after execution rewind
    }
}
</pre>                    
                    `
                },     
                {
                    elementType:'Paragraph',
                    content:`
                    Or with the computed value
                    `
                },

                {
                    elementType:'Code',
                    content:`
<pre>
class GeneratorEx{
    constructor(){
        this.current = 0;
    }

    *[Symbol.iterator](){
        this.current += 1;
        for (let i = 0; i < 10; i++){
            yield this.current;
        }
        this.current = 0; // after execution rewind
    }
}
</pre>                    
                    `
                },        
                
                {
                    elementType:'SmallHeadline',
                    content:`
                    Example with primary numbers
                    `
                },

                {
                    elementType:'Code',
                    content:`
<pre>
function* primaryGenerator(){
    let lastReturnedPrimaryNumber = 0;
    let indexLimit = 100;
    let getFirstDivisor = function(nr){
        for (let i = 2; i <= nr; i+=1){
            if (nr % i === 0) return i;
        }
        return nr;
    }
    let isPrimary = function(nr){
        let firstDivisor = getFirstDivisor(nr);
        return firstDivisor === nr;
    }
    let getNextPrimary = function(startFrom){
        let current = startFrom;
        let isPrimeryFound = false;
        while (!isPrimeryFound) {
            current += 1;
            isPrimeryFound = isPrimary(current);
            if (isPrimeryFound) return current;
        }
    }
    for (let index = 0; index < indexLimit; index++){
        lastReturnedPrimaryNumber = getNextPrimary(lastReturnedPrimaryNumber);
        yield lastReturnedPrimaryNumber;
    }
}

let primaryGen = primaryGenerator();
console.log([...primaryGen]);
</pre>                    
                    `
                },     


                {
                    elementType:'SmallHeadline',
                    content:`
                    Example with class and primary numbers
                    `
                },

                {
                    elementType:'Code',
                    content:`
<pre>
class PrimaryGeneratorClass {
    constructor(){
        this.lastReturnedPrimaryNumber = 0;
        this.indexLimit = 100;
    }
    getFirstDivisor(nr){
        for (let i = 2; i <= nr; i+=1){
            if (nr % i === 0) return i;
        }
        return nr;
    }
    isPrimary(nr){
        let firstDivisor = this.getFirstDivisor(nr);
        return firstDivisor === nr;
    }
    getNextPrimary(startFrom){
        let current = startFrom;
        let isPrimeryFound = false;
        while (!isPrimeryFound) {
            current += 1;
            isPrimeryFound = this.isPrimary(current);
            if (isPrimeryFound) return current;
        }
    }
    *[Symbol.iterator](startFrom){
            let lastPrim = startFrom ?? this.lastReturnedPrimaryNumber;
            this.lastReturnedPrimaryNumber = lastPrim;
            for (let index = 0; index < this.indexLimit; index++){
                this.lastReturnedPrimaryNumber = this.getNextPrimary(this.lastReturnedPrimaryNumber);
                yield this.lastReturnedPrimaryNumber;
            }
            this.lastReturnedPrimaryNumber = 0;
    }

    nextTo(num){
        return this[Symbol.iterator](num).next().value;
    }
    nextVal(){
        return this[Symbol.iterator]().value;
    }
}

let primGenClass = new PrimaryGeneratorClass();
console.log([...primGenClass]); // primary numbers from 1 to 523
console.log([...primGenClass]); // primary numbers from 1 to 523
console.log(primGenClass.nextTo(300)); // 307
console.log([...primGenClass]); // primary numbers from 311 to 967
// because lastReturnedNumber was set to 307 with primGenClass.nextTo(300)

</pre>                    
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
                    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol',
                    description:'Tutorial'
                },
            ]
        }
    ]
};

export default function getIteratorsGeneratorsData(){
    return data;
}