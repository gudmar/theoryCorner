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
                    elementType: 'ConditionalArray',
                    headItems: [
                        'Method','Arguments','Returns','Mutating','Description'
                    ],
                    content: [
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
                            Method: '<code>arr.forEach((item, index, array))</code>',
                            Arguments: `
                            Callback function taking:
                            <ul>
                                <li><code>item</code>: a current element</li>
                                <li><code>index</code>: an index of current element</li>
                                <li><code>array</code>: the whole array</li>
                            </ul>
                            All arguments are optional
                            `,
                            Returns: 'undefined',
                            Mutating: 'Not mutating',
                            Description: 'Runns a callback function for each element in the array.'
                        },



                    ]
                },



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