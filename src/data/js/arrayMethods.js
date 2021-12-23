let data =     {
    summary: 'array methods',
    title: 'array methods',
    searchKeywords:`array methods mutable unmutable push pop shift unshift splice slice concat forEach indexOf 
    includes find findIndex filter map sort reverse split join reduce isArray`,
    cathegory: 'js',
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'Array methods'
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    `
                },
                {
                    elementType: 'NoteWarning',
                    content: `
                    Array indexes cannot be larger, than a number represented in 32 bit integer. If an array 
                    gets bigger, then indexes start becomming keys represented as a string
                    `
                },
                {
                    elementType: 'Unsigned list',
                    content: [
                        `<code>array like</code> is an object not created with an <code>Array</code> constructor, 
                        that has a non negative <code>lengtn</code> property, and some indexed properties. An
                        array like object will be created from:
                        <ul>
                            <li><code>let al = {length:5}</code></li>
                            <li><code>let al = {0: 'a', 1: 'b', 2: 'c', length:3}</code></li>
                            <li>An object having an iterator placed under [Symbol.iterator]</li>
                            <li>A string</li>
                            <li>A Map object</li>
                            <li>A Set object</li>
                            <li>document.forms</li>
                            <li>document.querySelectorAll('div')</li>
                            <li>document.getElementsByTagName('body')[0].chidren</li>
                        </ul>
                        `
                    ]
                },


                {
                    elementType: 'ConditionalArray',
                    headItems: [
                        'Method','Arguments','Returns','Mutating','Description'
                    ],
                    content: [
                        {
                            [Symbol('title')]:'Array (constructor)',
                            [Symbol('code')]:`
                            
<pre>
let arr1 = [1, 'string', true];

let arr2 = [];
arr2[10] = 9;
// [,,,,,,,,,9]

let arr3 = Array(10);
//[,,,,,,,,,,] so array with 10 empty elements

let arr4 = Array(1, 2, 3);
//[1, 2, 3];

let arr5 = new Array(7);
//[,,,,,,,]

let arr6 = new Array(1, 2, 3);
//[1, 2, 3]


</pre>                            
                            
                            `,
                            Method: '<code>Array(size | items)</code>',
                            Arguments: `
                                Counstructor, that is overloaded.
                                <ul>
                                <li>In case a single number is given <code>size</code>, an array of empty elements
                                is returned</li>
                                <li>In case a list of elements is given, an array containing these elements is returned</li>
                                </ul>
                            `,
                            Returns: 'A new array',
                            Mutating: '-',
                            Description: 'Constructor returning a new array, a list like element'
                        },


                        {
                            [Symbol('title')]:'of',
                            [Symbol('code')]:`
                            
<pre>

let constructorExample1 = Array(5);
// [,,,,,]
let constructorExample2 = Array(1, 2, 3);
//[1, 2, 3]
let ofExample1 = Array.of(5);
// [5]
let ofExample2 = Array.of(1, 2, 3);
// [1, 2, 3]

</pre>                            
                            
                            `,
                            Method: '<code>of(items)</code>',
                            Arguments: `
                            <code>items</code>: elements 
                            `,
                            Returns: 'A new array',
                            Mutating: '-',
                            Description: 'Creates a new instance of the Array object from the given items list'
                        },


                        {
                            [Symbol('title')]:'from',
                            [Symbol('code')]:`
                            
<pre>

let arrLike1 = {length: 5};
let arr1 = Array.from(arrLike1);
console.log(arr1);
//[undefined, undefined, undefined, undefined, undefined]

let arrLike2 = {a: 'a', b: 'b', c: 'c', length: 3}
let arr2 = Array.from(arrLike2);
console.log(arr2);
//[undefined, undefined, undefined]

let arrLike3 = {0: 'a', 2: 'b', 1: 'c', length: 3}
let arr3 = Array.from(arrLike3);
// ['a', 'c', 'b']

let arrLike4 = {0: 'a', 2: 'b', 1: 'c', length: 2}
let arr4 = Array.from(arrLike4);
// ['a', c']

let arrLike5 = document.forms;

function iterator(){
    let current = 0;
    return {
        next: function(){
        current++;
        return {
            value: current -1,
            done: current > 4
        }
    }
    }
}

let arrLike6 = {};
arrLike6[Symbol.iterator]=iterator;
let arr6 = Array.from(arrLike6);
console.log(arr6); 
// [0, 1, 2, 3]
// arrLike6 becomes an arrayLike object, and becomes iterable, 
// is accessable with an Array.from and with for..of loop

let arrLike7 = document.forms;
let arrLike8 = document.querySelectorAll('div');
let arrlike9 = document.getElementsByTagName('body')[0].children



</pre>                            
                            
                            `,
                            Method: '<code>from(arrayLikeObject[, mapFunction[, thisArg]])</code>',
                            Arguments: `
                            <ul>
                            <li><code>arrayLikeObject</code>: elements </li>
                            <li><code>mapFunction</code>: an <code>arrayLikeObject</code> elements 
                            transforming function, taking:<code>item</code>, <code>index</code>, <code>arr</code>,
                            this is similar to the <code>.map</code> method of the Array</li>
                            <li><code>thisArg</code> is an argument indicating what will be the value of <code>this</code></li>
                            </ul>
                            `,
                            Returns: 'A new array',
                            Mutating: '-',
                            Description: 'Creates a new instance of the Array object from the given array like object.'
                        },


                        {
                            [Symbol('title')]:'push',
                            [Symbol('code')]:`
                            
<pre>
let arr = [1, 2, 3];
console.log(arr.push(4)); // 4
console.log(arr); //[1, 2, 3, 4]
</pre>                            
                            
                            `,
                            Method: '<code>push(item)</code>',
                            Arguments: 'item',
                            Returns: 'added item',
                            Mutating: 'Mutating',
                            Description: 'Add a new item to the end of the array'
                        },
                        {
                            [Symbol('title')]:'pop',
                            [Symbol('code')]:`
                            
<pre>
let arr = [1, 2, 3];
console.log(arr.pop());// 4
console.log(arr); //[1, 2]
</pre>                            
                            
                            `,
                            Method: '<code>pop()</code>',
                            Arguments: '-',
                            Returns: 'removed element',
                            Mutating: 'Mutating',
                            Description: 'Remove an element from the end of the array,'
                        },
                        {
                            [Symbol('title')]:'shift',
                            [Symbol('code')]:`
                            
<pre>
let arr = [1, 2, 3];
console.log(arr.shift());// 1
console.log(arr); //[2, 3]
</pre>                            
                            
                            `,
                            Method: '<code>shift())</code>',
                            Arguments: '-',
                            Returns: 'removed element',
                            Mutating: 'Mutating',
                            Description: 'Remove the first element from the array',
                        },
                        {
                            [Symbol('title')]:'unshift',
                            [Symbol('code')]:`                    
<pre>
let arr = [1, 2, 3];
console.log(arr.unshift(0));// 0
console.log(arr); //[0, 1, 2, 3, 4]
</pre>                            
                            
                            `,
                            Method: '<code>unshift()</code>',
                            Arguments: 'item',
                            Returns: 'added item',
                            Mutating: 'Mutating',
                            Description: 'Add a new item to the begining of the array'
                        },
                        {
                            [Symbol('title')]:'splice',
                            [Symbol('code')]:`
                            
<pre>
// Delete a single element from the middle of an array:
let arr = [1, 2, 3, 4, 5];
console.log(arr.splice(3,1));// 4
//starting from index 0, index 3 has value 4
// so 4 removed.

// Add an element to the middle of an array:
let arr = [1, 2, 3, 5];
console.log(arr.splice(3, 0, 4)); // []
//Nothing removed from the array, so [] returned
console.log(arr);//[1, 2, 3, 4, 5]

//Adding an element far above array length
let arr = [1, 2, 3];
console.log(arr.splice(10, 0, 1)); // []
console.log(arr)
//[1, 2, 3, 1] as there are no 10 elements in this array

//Removing a not existing element
let arr = [1, 2, 3];
console.log(arr.splice(10, 1)); // []
console.log(arr)
//[1, 2, 3] as there are no 10 elements in this array


//Delete and add elements at the same time
let arr = [1, 2, 3, 4, 5];
console.log(arr.splice(1, 2, 0, 0, 0));
// [2, 3]
console.log(arr);
// [1, 0, 0, 0, 4, 5]

</pre>                            
                            
                            `,
                            Method: '<code>splice(start, nrOfDel, item...)</code>',
                            Arguments: `
                            <ul>
                                <li><code>start</code> index of element to start mutation of the array</li>
                                <li><code>nrOfDel</code> nr of elements to delete starting from <code>start</code> index</li>
                                <li><code>item..</code> items to be added after <code>start</code></li>
                            </ul>
                            `,
                            Returns: 'Array of deleted items',
                            Mutating: 'Mutating',
                            Description: 'Modify an array'

                        },


                        {
                            [Symbol('title')]:'slice',
                            [Symbol('code')]:`                    
<pre>
let arr = [1,2,3,4,5];
let arrCopy = arr.slice(0, arr.length);

//cut off first and last
let middle = arr.length <= 2 ? [] : arr.slice(1, arr.length-1)
</pre>                            
                            
                            `,
                            Method: '<code>slice(start, end)</code>',
                            Arguments: 'start, end',
                            Returns: 'New subarray (from start to end)',
                            Mutating: 'Not mutating',
                            Description: 'Returns a new subarray (from start to end)'
                        },


                        {
                            [Symbol('title')]:'concat',
                            [Symbol('code')]:`                    
<pre>
let arr1 = [1,2,3];
let arr2 = [4, 5];
let arr3 = [6, 7];
let arr4 = [8];
let together = arr1.concat(arr2, arr3, arr4);
console.log(together);
// [1, 2, 3, 4, 5, 6, 7, 8]
</pre>                            
                            
                            `,
                            Method: '<code>arr1.concat(arr2, arr3...)</code>',
                            Arguments: 'list of arrays',
                            Returns: 'New array',
                            Mutating: 'Not mutating',
                            Description: 'concatenates arrays and returns a new array'
                        },


                        {
                            [Symbol('title')]:'forEach',
                            [Symbol('code')]:`                    
<pre>
arr = [1, 2, 3];
arr.forEach((item, index, array)=>{
    console.log([item, index, array]);
})
//[1, 0, [1,2,3]]
//[2, 0, [1,2,3]]
//[3, 0, [1,2,3]]
arr.forEach(()=>{console.log('dummy')})
//dummy
//dummy
//dummy
</pre>                            
                            
                            `,
                            Method: '<code>arr.forEach(cb, thisArg)</code>',
                            Arguments: `
                            <ul>
                            <li><code>cb</code> a callback function taking:
                            <ul>
                                <li><code>item</code>: a current element</li>
                                <li><code>index</code>: an index of current element</li>
                                <li><code>array</code>: the whole array</li>
                            </ul>
                            </li>
                            <li><code>thisArg</code>: what will be the value of <code>this</code></li>
                            </ul>
                            All arguments are optional
                            `,
                            Returns: 'undefined',
                            Mutating: 'Not mutating',
                            Description: 'Runns a callback function for each element in the array.'
                        },


                        {
                            [Symbol('title')]:'indexOf',
                            [Symbol('code')]:`                    
<pre>
let arr1 = [1,2,3,4,5,6];
console.log(arr1.indexOf(3));// 2;
console.log(arr1.indexOf(9));//-1;
console.log(arr1.indexOf(6, 3)); //5
</pre>                            
                            
                            `,
                            Method: '<code>arr.indexOf(item, from)</code>',
                            Arguments: `
                            <ul>
                                <li><code>item</code>: item to serach array for</li>
                                <li><code>from</code>: index to start search from, optional</li>
                            </ul>
                            `,
                            Returns: 'index of found element or -1 if nothing found',
                            Mutating: 'Not mutating',
                            Description: `Searches an array for a given element and returns -1 if nothing 
                            found or found element index. Uses a '===' operator.`
                        },

                        {
                            [Symbol('title')]:'lastIndexOf',
                            [Symbol('code')]:`                    
<pre>
let arr1 = [1,2,3,4,5,6];
console.log(arr1.lastIndexOf(3));// 2;
console.log(arr1.lastIndexOf(9));//-1;
console.log(arr1.lastIndexOf(6, 3));
// -1 as starts from 3 element from the end and in this case 
// does not find 6, as it is the first element form the end
</pre>                            
                            
                            `,
                            Method: '<code>arr.lastIndexOf(item, from)</code>',
                            Arguments: `
                            <ul>
                                <li><code>item</code>: item to serach array for</li>
                                <li><code>from</code>: index to start search from counting from the end of the array</li>
                            </ul>
                            `,
                            Returns: 'index of found element or -1 if nothing found',
                            Mutating: 'Not mutating',
                            Description: `Searches an array starting from the end for a given element and returns 
                            -1 if nothing found or found element index. Uses a '===' operator.`
                        },




                        {
                            [Symbol('title')]:'includes',
                            [Symbol('code')]:`                    
<pre>
let arr1 = [1,2,3,4,5,6];
console.log(arr1.includes(3));// true;
console.log(arr1.includes(9));// false;
console.log(arr1.includes(6, 3)); // true;
</pre>                            
                            
                            `,
                            Method: '<code>arr.includes(item, from)</code>',
                            Arguments: `
                            <ul>
                                <li><code>item</code>: item to serach array for</li>
                                <li><code>from</code>: index to start search from counting from the end of the array</li>
                            </ul>
                            `,
                            Returns: 'index of found element or -1 if nothing found',
                            Mutating: 'Not mutating',
                            Description: `Searches an array starting from the end for a given element and returns 
                            -1 if nothing found or found element index. Uses a '===' operator.`
                        },


                        {
                            [Symbol('title')]:'find',
                            [Symbol('code')]:`                    
<pre>
let arr = [1,2,3,4,5,6];
let found = arr.find((item, index, array)=>{
    console.log(\`Searching item \${item} at \${index} of \${array.toString}\`);
    return item % 3 == 0 ? true : false;
})
//Searching item 1 at 0 of 1,2,3,4,5,6
//Searching item 2 at 1 of 1,2,3,4,5,6
//Searching item 3 at 2 of 1,2,3,4,5,6
console.log(found) //3;
</pre>                            
                            
                            `,
                            Method: '<code>arr.find(cb[, thisArg])</code>',
                            Arguments: `
                            <ul>
                            <li><code>cb</code>A callback function taking
                            <ul>
                                <li><code>item</code>: currently processed array item</li>
                                <li><code>index</code>: index of currently processed item</li>
                                <li><code>array</code>: given array</li>
                            </ul>
                            and returning <code>true</code> if element is found or <code>false</code>
                            </li>
                            <li><code>thisArg</code>: what will be the value of <code>this</code></li>
                            </ul>
                            `,
                            Returns: 'found element or <code>undefined</code> if nothing found',
                            Mutating: 'Not mutating',
                            Description: `Calls a callback function on each element of the given array, and 
                            if callback returns true function stops and returns found element. If each callback
                            execution returns false then <code>find</code> returns <code>undefined</code>`
                        },




                        {
                            [Symbol('title')]:'findIndex',
                            [Symbol('code')]:`                    
<pre>
let arr = [1,2,3,4,5,6];
let found = arr.findIndex((item, index, array)=>{
    console.log(\`Searching item \${item} at \${index} of \${array.toString}\`);
    return item % 3 == 0 ? true : false;
})
//Searching item 1 at 0 of 1,2,3,4,5,6
//Searching item 2 at 1 of 1,2,3,4,5,6
//Searching item 3 at 2 of 1,2,3,4,5,6
console.log(found) // 2;
</pre>                            
                            
                            `,
                            Method: '<code>arr.findIndex(cb[, thisArg])</code>',
                            Arguments: `
                            <ul>
                            <li>A callback function taking
                            <ul>
                                <li><code>item</code>: currently processed array item</li>
                                <li><code>index</code>: index of currently processed item</li>
                                <li><code>array</code>: given array</li>
                            </ul>
                            and returning <code>true</code> if element is found or <code>false</code>
                            </li>
                            <li><code>thisArg</code>: what will be the value of <code>this</code></li>
                            </ul>
                            `,
                            Returns: 'found element or -1 if nothing found',
                            Mutating: 'Not mutating',
                            Description: `Calls a callback function on each element of the given array, and 
                            if callback returns true function stops and returns an index of the found element. 
                            If each callback
                            execution returns false then <code>findIndex</code> returns <code>-1</code>`
                        },


                        {
                            [Symbol('title')]:'filter',
                            [Symbol('code')]:`                    
<pre>
let arr = [1,2,3,4,5,6];
let found = arr.findIndex((item, index, array)=>{
    console.log(\`Processing item \${item} at \${index} of \${array.toString}\`);
    return item % 2 == 0 ? true : false;
})
//Processing item 1 at 0 of 1,2,3,4,5,6
//Processing item 2 at 1 of 1,2,3,4,5,6
//Processing item 3 at 2 of 1,2,3,4,5,6
//Processing item 4 at 0 of 1,2,3,4,5,6
//Processing item 5 at 1 of 1,2,3,4,5,6
//Processing item 6 at 2 of 1,2,3,4,5,6
console.log(found) // [2, 4, 6];
</pre>                            
                            
                            `,
                            Method: '<code>arr.filter(cb[, thisArg])</code>',
                            Arguments: `
                            <ul>
                            <li>A callback function taking
                            <ul>
                                <li><code>item</code>: currently processed array item</li>
                                <li><code>index</code>: index of currently processed item</li>
                                <li><code>array</code>: given array</li>
                            </ul>
                            and returning <code>true</code> if element matches or <code>false</code>
                            </li>
                            <li><code>thisArg</code>: what will be the value of <code>this</code></li>
                            </ul>
                            `,
                            Returns: 'Array of found elements',
                            Mutating: 'Not mutating',
                            Description: `Calls a callback function for each array element. Returns an array of elements,
                            for which the callback returned <code>true</code>`
                        },


                        {
                            [Symbol('title')]:'map',
                            [Symbol('code')]:`                    
<pre>
let arr = [1,2,3,4,5,6];
let found = arr.map((item, index, array)=>{
    return \<div>\${item}\</div>
})
console.log(found) 
// ["&lt;div>1&lt;/div>", "&lt;div>2&lt;/div>", "&lt;div>3&lt;/div>", 
// "&lt;div>4&lt;/div>", "&lt;div>5&lt;/div>", "&lt;div>6&lt;/div>"];
</pre>                            
                            
                            `,
                            Method: '<code>arr.map(cb[, thisArg])</code>',
                            Arguments: `
                            <ul>
                            <li><code>cb</code> a callback function taking:
                            <ul>
                                <li><code>item</code>: currently processed array item</li>
                                <li><code>index</code>: index of currently processed item</li>
                                <li><code>array</code>: given array</li>
                            </ul>
                            </li>
                            <li><code>thisArg</code>: what will be the value of <code>this</code></li>
                            </ul>
                            and returning an item value for the new array
                            `,
                            Returns: 'Array of elements',
                            Mutating: 'Not mutating',
                            Description: `
                            Calls a callback function for each element of the given array and returns a new array
                            of elements returned by the callback function.
                            `
                        },



                        {
                            [Symbol('title')]:'sort',
                            [Symbol('code')]:`                    
        <pre>
        let arr = [3,2,5,7,3];
        let sorted = arr.sort((a,b)=>{
            if (a<b) return -1;
            if (a == b) return 0;
            return 1
        })
        console.log(arr);
        //[2, 3, 3, 5, 7]
        console.log(sorted);
        //[2, 3, 3, 5, 7]
        
        </pre>                            
                            
                            `,
                            Method: '<code>arr.sort((a, b))</code>',
                            Arguments: `
                            A callback comparing function taking 2 elements that will be compared
                            Callback should return:
                            <ul>
                                <li><code>-1</code>: if a > b</li>
                                <li><code>0</code>: if a == b due to sorting criteria</li>
                                <li><code>1</code>: if a < b</li>
                            </ul>
                            `,
                            Returns: 'Array of elements',
                            Mutating: 'Mutating',
                            Description: `
                            Sorts a given array, elements are compared by the callback function, the mutated, sorted array
                            is returned.
                            `
                        },


                        {
                            [Symbol('title')]:'reverse',
                            [Symbol('code')]:`                    
        <pre>
        let arr = [3,2,5,7,3];
        let reversed = arr.reverse();
        console.log(arr);
        // [3,2,5,7,3]
        console.log(reversed);
        // [3,7,5,2,3]
        console.log(Object.is(arr, reversed));
        //true
        
        </pre>                            
                            
                            `,
                            Method: '<code>arr.reverse()</code>',
                            Arguments: `-`,
                            Returns: 'Array of elements',
                            Mutating: 'Mutating',
                            Description: `
                            Reverses the order of the elements in given array. Mutates the array.
                            `
                        },


                        {
                            [Symbol('title')]:'join',
                            [Symbol('code')]:`                    
<pre>
let arr = [3,2,5,7,3];
let joined = arr.join('=>');
console.log(joined);
// "3=>2=>5=>7=>3"
</pre>                            
                    
                            `,
                            Method: '<code>arr.join(conjunction)</code>',
                            Arguments: `<code>conjunction</code>: a string element that serves as a glue, is pressed between
                            array elements`,
                            Returns: 'String',
                            Mutating: 'Not mutating',
                            Description: `
                            Forms a string from array elements, pressing the <code>conjunction</code> between array elements.
                            `
                        },

                        {
                            [Symbol('title')]:'Array.isArray',
                            [Symbol('code')]:`                    
<pre>
console.log(Array.isArray([2,3,4]));
//true
console.log(Array.isArray({a:1,b:2}));
//false
</pre>                            
                    
                            `,
                            Method: '<code>Array.isArray(arr)</code>',
                            Arguments: `<code>arr</code>: an object/primitive that needs to be compared`,
                            Returns: 'Boolean',
                            Mutating: 'Not mutating',
                            Description: `
                            A static method, true if <code>arr.constructor.name==="Array"</code>
                            `
                        },


                        {
                            [Symbol('title')]:'reduce',
                            [Symbol('polifill')]:`
<pre>

</pre>
                            `,
                            [Symbol('code')]:`                    
<pre>
let arr = [3,2,5,7,3];
let summ = arr.reduce((acc,element,index,arr)=>{
    return acc + element;
}, 0)
console.log(summ / arr.length)

let average = arr.reduce((acc,element,index,arr)=>{
    if(index < arr.length - 1){
        return acc + element;
    }
    return (acc + element) / arr.length
}, 0);
console.log(average)
</pre>                            
                    
                            `,
                            Method: '<code>arr.reduce(cb(acc, item[, index[, arr]])[, acc0])</code>',
                            Arguments: `
                            <code>cb</code>: a callback taking:
                            <ul>
                            <li><code>acc</code>: accumulated value, that will be passed to next cb call</li>,
                            <li><code>item</code>: currently processed array element</li>
                            <li><code>index</code>: index of currently processed element</li>
                            <li><code>arr</code>: whole array</li>
                            </ul>
                            and a <code>acc0</code> which is an accumulator initial value
                            `,
                            Returns: 'A single value',
                            Mutating: 'Not mutating',
                            Description: `
                            Reduces an array to a single value, defined in a callback function
                            `
                        },
                        

                        {
                            [Symbol('title')]:'flat',
                            [Symbol('polifill')]:`
<pre>
let arr = [1, 2, 3, [4, 5],[[6, 7], 8], [[[9, 10]]]];
if (!Array.prototype.flat){
    Array.prototype.flat = function(deph){
        let flattened = [];
        let arr = this;
        for (let item of this){
            if (Array.isArray(item) && deph > 0){
                let guts = item.flat2(deph - 1);
                for(let gut of guts){flattened.push(gut)}
            } else {
                flattened.push(item)
            }
        }
        return flattened
    }
}
console.log(arr.flat(2)) //to test

</pre>
                            `,
                            [Symbol('code')]:`                    
<pre>
let arr = [1, 2, 3, [4, 5],[[6, 7], 8], [[[9, 10]]]];
let flatten = arr.flat(2)
console.log(flatten);
//[1, 2, 3, 4, 5, 6, 7, 8, [9, 10]]

</pre>                            
                    
                            `,
                            Method: '<code>arr.flat(depth)</code>',
                            Arguments: `
                            <code>depth</code>: a value indicating how deeply nested arrays will be flattened
                            `,
                            Returns: 'A flattened array',
                            Mutating: 'Not mutating',
                            Description: `
                            Takes all nested arrays and concatenates them into a single flat array
                            `
                        },



                        {
                            [Symbol('title')]:'every',
                            [Symbol('code')]:`                    
<pre>
let arr = [2,4,6,8]
let e1 = arr.every((item)=>{
    return item%2==true
});//ture
let e2 = arr.every((item)=>{
    if (item == 2) retrun true;
    if (item == 4) return true;
    if (item == 6) return true;
    return false;
}); //false, for 8 cb returns false
</pre>                            
                    
                            `,
                            Method: '<code>arr.every(cb, thisArg)</code>',
                            Arguments: `
                            <ul>
                            <li>
                                <code>cb</code>is a callback taking:
                                <ul>
                                    <li><code>item</code> currently processed array item,</li>
                                    <li><code>index</code> an index of the currently processed item</li>
                                    <li><code>arr</code> array of processed elements</li>
                                </ul>
                            </li>
                            <li><code>thisArg</code>: what will be the value of <code>this</code></li>
                            </ul>
                            `,
                            Returns: 'Boolean',
                            Mutating: 'Not mutating',
                            Description: `
                            True if callback for each given array element returns <code>true</code>
                            `
                        },

                        {
                            [Symbol('title')]:'some',
                            [Symbol('code')]:`                    
<pre>
let arr = [2,4,6,8]
let e1 = arr.some((item)=>{
    return item%3==true
});//ture
let e2 = arr.some((item)=>{
    return item%5 == true;
}); //false, none of items in array evaluates to true;
</pre>                            
                    
                            `,
                            Method: '<code>arr.some(cb, thisArg)</code>',
                            Arguments: `
                            <ul>
                            <li>
                                <code>cb</code>is a callback taking:
                                <ul>
                                    <li><code>item</code> currently processed array item,</li>
                                    <li><code>index</code> an index of the currently processed item</li>
                                    <li><code>arr</code> array of processed elements</li>
                                </ul>
                            </li>
                            <li><code>thisArg</code>: what will be the value of <code>this</code></li>
                            </ul>
                            `,
                            Returns: 'Boolean',
                            Mutating: 'Not mutating',
                            Description: `
                            True if callback for at least one given array element returns <code>true</code>
                            `
                        },




            ]
        },



        //     ]
        // },



                {
                    elementType:'UnsignedList',
                    content:[
                    `
                    `
                    ]
                },
                {
                    elementType:'Paragraph',
                    content:`
                    There is a set of methods that can be used with a <code>&lt;form&gt;</code> element:
                    `
                },
                {
                    elementType:'Code',
                    content:`
<pre>
</pre>                        
                    `
                        
                    
                }
            ]
        },
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline-2',
                    content:'Methods'
                },
                {
                    elementType:'Paragraph',
                    content:`

                    `
                },
            ]
        },
    ]
};

export default function getArrayMethods(){
    return data;
}