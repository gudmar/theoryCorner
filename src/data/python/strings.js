
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
                {
                    [Symbol('title')]:'replace',
                    [Symbol('code')]:`
text = 'Hihihihi'                    
text2 = text.replace('i','a'); # outout == 'Hahahaha'
print(text2)
print(text)
                    `,
                    Method: '<code>replace()</code>',
                    Args: 'none',
                    Description: 'Creates a new string with all occurences of a substr to change, to change',
                    Returns: 'Returns a new string of array with lower cases',
                },


                {
                    [Symbol('title')]:'split',
                    [Symbol('code')]:`
text = 'coma, separated, values'                    
print(text2.split(','))

                    `,
                    Method: '<code>split(separator)</code>',
                    Args: '<code>separator:string</code> a substring that will divide a string into an array',
                    Description: 'A method creating an array out of a string, using the separator as an substring to separate,',
                    Returns: 'Returns a new string of array with lower cases',
                },


                {
                    [Symbol('title')]:'format',
                    [Symbol('code')]:`
'Please buy {} apples and {} roses'.format(3, 4);
# Please buy 3 apples and 4 reoses
                    `,
                    Method: '<code>format</code>',
                    Args: '<code>coma separated values that will be inserted in the place of {}',
                    Description: 'Creates a new string by filling the {} in the code with concrete values',
                    Returns: 'A new string by filling the {} in the code with concrete values',
                },


                {
                    [Symbol('title')]:'capitalize',
                    [Symbol('code')]:`
'some random text'.capitalize();
# Some random text                    
                    `,
                    Method: '<code>capitalize</code>',
                    Args: '-',
                    Description: 'First letter to capital',
                    Returns: 'A new string with first letter capitalized',
                },


                {
                    [Symbol('title')]:'casefold',
                    [Symbol('code')]:`
'some random text'.casefold();
# Some random text                    
                    `,
                    Method: '<code>casefold</code>',
                    Args: '-',
                    Description: 'All letters of given string are converted to lower cases. Similar to <code>lower</code>',
                    Returns: 'A new string with all letters converted to lower cases',
                },

                {
                    [Symbol('title')]:'center',
                    [Symbol('code')]:`
'some random text'.center(50, ' ');
#       some random text                    
                    `,
                    Method: '<code>center</code>',
                    Args: `<code>lenght</code>: The lenght of the output, if smaller than an input string, then the 
                    input string will be returned without changes, <code>char</code>: a character to fill the missing characters, optional`,
                    Description: 'All letters of given string are converted to lower cases. Similar to <code>lower</code>',
                    Returns: `A new string with spaces or characters added from the begining and end to allow string 
                    take <code>length</code> space`,
                },

                {
                    [Symbol('title')]:'count',
                    [Symbol('code')]:`
'some random text text'.count('text');        
                    `,
                    Method: '<code>count</code>',
                    Args: `<code>val</code>: the string thats occurences will be counted`,
                    Description: 'Count occurences of the given string',
                    Returns: `a number`,
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
                    content:'w3schools',
                    href: 'https://www.w3schools.com/python/python_strings.asp',
                    description:'Tutorial'
                },
            ]
        }
    ]
};

export default function getStringPythonData(){
    return data;
}