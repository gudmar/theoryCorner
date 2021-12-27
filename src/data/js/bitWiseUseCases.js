
let data =     {
    summary: 'bitwise use cases',
    title: 'Bitwise use cases',
    searchKeywords:`left shift rigth shift bitwise and or not xor masking rgb hex conversion
    `,
    cathegory: 'js',
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'Bitwise use cases'
                },

                {
                    elementType: 'Paragraph',
                    content: `
                    There is a set of 7 bitwise (assignment bitwise operators not counted) operators:
                    `
                },
                {
                    elementType:'UnsignedList',
                    content:[
                    `<code>~</code>: NOT,`,
                    `<code>&</code>: AND,`,
                    `<code>|</code>: OR,`,
                    `<code>^</code>: XOR,`,
                    `<code><<</code>: Left shift,`,
                    `<code>>></code>: sign proprgating right shift,`,
                    `<code>>>></code>: Zero-fill right shift,`,
                    ]
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    Lets see some use cases of these operators. To learn more please refer to the articel from
                    the reference section.
                    `
                },
                {
                    elementType:'SmallHeadline',
                    content:'How are values in examples calculated?'
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        `<i>Binary expression</i> and <i>Binary outcome</i>: <code>(val).toString(2)</code>`,
                        `<i>>>> expression</i> and <i>>>> outcome</i>: <code>(val).toString(2 >>> 0)</code>, 
                        zero-fill right shift operator is the only way, that 
                        allow to preserve original coding of negative numbers`,
                    ]
                },
                {
                    elementType: 'NoteWarning',
                    content: `
                    These bits work only on <code>Number</code> type, that are integers small enough to be 
                    as a 31 bit binary (sign not incluede, the most significant bit of 32 bit representation is a 
                    sign bit)
                    `
                },

                {
                    elementType:'Headline-3',
                    content:'<code>~</code>: NOT'
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        `<code> ~ 1 </code>: 0,`,`<code> ~ 0 </code>: 1,`,
                    ]
                },
                {
                    elementType:'Paragraph',
                    content:`
                    This operator negates each bit of the number: 
                    `
                },

                {
                    elementType: 'ConditionalArray',
                    headItems: [
                        'Expression','Outcome','Binary expression','Binary outcome','>>> expression','>>> outcome'
                    ],
                    content: [
                        {
                            [Symbol('title')]:'~',
                            Expression: '<code>~5</code>',
                            Outcome: `<code>-6</code>`,
                            'Binary expression': '101',
                            'Binary outcome': '-110',
                            '>>> expression': '00000000000000000000000000000101',
                            '>>> outcome':    '11111111111111111111111111111010'
                        },
                        {
                            [Symbol('title')]:'~',
                            Expression: '<code>~-1</code>',
                            Outcome: `<code>0</code>`,
                            [Symbol('code')]:` 
                            If converted to a boolean value, this will become true.
                                                        `,
                            'Binary expression': '1',
                            'Binary outcome': '-1',
                            '>>> expression': '11111111111111111111111111111111',
                            '>>> outcome':    '00000000000000000000000000000000'
                        },
                        {
                            [Symbol('title')]:'~',
                            Expression: '<code>~0</code>',
                            Outcome: `<code>-1</code>`,
                            'Binary expression': '1',
                            'Binary outcome': '-1',
                            '>>> expression': '00000000000000000000000000000000',
                            '>>> outcome':    '11111111111111111111111111111111'
                        },
                        {
                            [Symbol('title')]:'~',
                            Expression: '<code>~1</code>',
                            Outcome: `<code>-2</code>`,
                            'Binary expression': '1',
                            'Binary outcome': '-1',
                            '>>> expression': '00000000000000000000000000000001',
                            '>>> outcome':    '11111111111111111111111111111110'
                        },
                        {
                            [Symbol('title')]:'~',
                            Expression: '<code>~true</code>',
                            Outcome: `<code>-2</code>`,
                            'Binary expression': '1',
                            'Binary outcome': '-1',
                            '>>> expression': '00000000000000000000000000000001',
                            '>>> outcome':    '11111111111111111111111111111110'
                        },
                        {
                            [Symbol('title')]:'~',
                            Expression: '<code>~14147483690</code>',
                            [Symbol('code')]:` 
Note that 14147483690 > 2147483647, so is greater than the gratest number that can be represented with in 31 bits,
that is why left most bits are discarded.
                            `,
                            Outcome: `<code>-1262581803</code>`,
                            'Binary expression': '1001011010000010111100000101010',
                            'Binary outcome': '10110100101111101000011111010101',
                            '>>> expression': '1101001011010000010111100000101010',
                            '>>> outcome':    '11111111111111111111111111111110'
                        },
                    ]
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        `<code>~</code> should not be mistaken with a <code>!</code> operator, the second one 
                        negates boolean expressions, and the first one converts to binary,`,
                        `<code>~array.findIndex(cb())</code> will return true or false instead of -1 or an index,`,
                        `<code>~~val</code> could be an equivalent to <code>Math.floor(val)</code> in case the
                        <code>val</code> is not greater than <code>2**31-1</code>`
                    ]
                },


                {
                    elementType:'SmallHeadline',
                    content:'Traps'
                },

                {
                    elementType:'UnsignedList',
                    content:[
                       
                    ]
                },

                {
                    elementType:'SmallHeadline',
                    content:'Example'
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        
                    ]
                },
                {
                    elementType:'Code',
                    content:`

                    `
                },




            ]
        },
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline-2',
                    content:''
                },
                {
                    elementType:'Paragraph',
                    content:`

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
                    content:'blog.logrocket.com',
                    href: 'https://blog.logrocket.com/interesting-use-cases-for-javascript-bitwise-operators/',
                    description:'Some interesting bitwise operations by Glad Chinda'
                },
            ]
        }
    ]
};

export default function getBitWiseData(){
    return data;
}