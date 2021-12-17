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
arr.push(4);
console.log(arr); //[1, 2, 3, 4]
</pre>                            
                            
                            `,
                            Method: 'push(item)',
                            Arguments: 'item',
                            Returns: 'added item',
                            Mutating: 'Mutating',
                            Description: 'Add a new item to the end of the array'
                        },
                        {
                            [Symbol('title')]:'pop',
                            Method: 'pop()',
                            Arguments: '-',
                            Returns: 'removed element',
                            Mutating: 'Mutating',
                            Description: 'Remove an element from the end of the array,'
                        },
                        {
                            [Symbol('title')]:'shift',
                            Method: 'shift())',
                            Arguments: '-',
                            Returns: 'removed element',
                            Mutating: 'Mutating',
                            Description: 'Remove the first element from the array',
                        },
                        {
                            [Symbol('title')]:'unshift',
                            Method: 'unshift()',
                            Arguments: 'item',
                            Returns: 'added item',
                            Mutating: 'Mutating',
                            Description: 'Add a new item to the begining of the array'
                        },
                        {
                            [Symbol('title')]:'splice',
                            Method: 'splice(start, nrOfDel, item...)',
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

                        }
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