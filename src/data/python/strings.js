
let data =     {
    summary: 'python strings types',
    title: 'Python strings types',
    searchKeywords:`

    `,
    cathegory: 'python',
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'Strings in python'
                },

                {
                    elementType: 'Headline-3',
                    content: `Slicing`
                },


                {
                    elementType: 'UnsignedList',
                    content: [
                        `<code>someStr[4]</code>: char at index 4,`,
                        `<code>someStr[2:5]<code>: slice from <2, 5) elements,`,
                        `<code>someStr[-9:-4]: indexed with a negative numbers`
                    ]
                },


                {
                    elementType: 'Headline-3',
                    content: `Methods`
                },

                {
                    elementType: 'Code',
                    content: `
                    
                    `
                }

            ]
        },


        {
            elementType: 'ConditionalArray',
            headItems: [
                'Method', 'Args','Description', 'Returns'
            ],
            content: [
                {
                    [Symbol('title')]:'String',
                    [Symbol('code')]:`

                    `,
                    Method: '<code>upper()</code>',
                    Args: 'none',
                    Description: 'Returns a new string of array',
                    Returns: 'Returns a new string of array',
                },

                {
                    [Symbol('title')]:'Lower',
                    [Symbol('code')]:`

                    `,
                    Method: '<code>lower()</code>',
                    Args: 'none',
                    Description: 'turn a string lower cases',
                    Returns: 'Returns a new string of array with lower cases',
                },


                {
                    [Symbol('title')]:'strip',
                    [Symbol('code')]:`
print('  some str '.strip); // white spaces from the begining and the end are removed
                    `,
                    Method: '<code>strip()</code>',
                    Args: 'none',
                    Description: 'white spaces from the begining and the end are removed',
                    Returns: 'Returns a new string of array with lower cases',
                },


            ]
        },



        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline-3',
                    content:''
                },
                {
                    elementType:'UnsignedList',
                    content:[
                            ''
                    ]

                    
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
                    href: ' ',
                    description:'Tutorial'
                },
            ]
        }
    ]
};

export default function getDataTypesPythonData(){
    return data;
}