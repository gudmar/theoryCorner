// SPELL CHECKED, CORRECT!
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
                    Lets see some use cases of these operators. To learn more, please refer to the article from
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
                    These bits work only in <code>Number</code> type, that are integers small enough to be 
                    as a 31 bit binary (sign not included, the most significant bit of the 32 bit representation is a 
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
<pre>
    let finder = function(itemToSearch){
        return function(item, index){
            if (item == itemToSearch) return true;
            return false    
        }
    }
    let arr = [0, 1, 2, 3];
    let find3 = finder(3);
    let find4 = finder(4);

    findIndex returns -1 if does not find an element 
    meeting criteria from a callback function, and returns
    a found element index in other cases

    let isElementFound_true = ~arr.findIndex(find3);
    // (~3 >>> 0).toString(2) == "11111111111111111111111111111100"
    // and this is true, every  value that is != -1 
    // after negation with bitwise NOT will be true

    let isElementFound_false  = ~arr.findIndex(find4);
    // (~-1 >>> 0).toString(2) == "00000000000000000000000000000000"
    // NOT is perfect for converting array seach index function
    // outcome to a boolean value

</pre>                            
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
Note that 14147483690 > 2147483647, so is greater than the greatest number that can be represented within 31 bits,
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
                        `<code>~array.findIndex(cb())</code> will return true or false instead of -1 or an index.
                        Click above table <code>~-1</code> row to see more,`,
                        `<code>~~val</code> could be an equivalent to <code>Math.floor(val)</code> in case the
                        <code>val</code> is not greater than <code>2**31-1</code>`
                    ]
                },

                {
                    elementType:'Headline-3',
                    content:'&: AND'
                },
                {
                    elementType:'UnsignedList',
                    content:[
                       `<code>0 & 0 == 0;</code>,`,
                       `<code>0 & 1 == 0;</code>,`,
                       `<code>1 & 0 == 0;</code>,`,
                       `<code>1 & 1 == 1;</code>,`,
                    ]
                },
                {
                    elementType:'SmallHeadline',
                    content:'Useful properties'
                },
                {
                    elementType:'UnsignedList',
                    content:[
                       `<code>A & 0 == 0;</code>,`,
                       `<code>A & ~A == 0;</code>,`,
                       `<code>A & A == A;</code>,`,
                       `<code>A & -1 == A;</code>,`,
                    ]
                },

                {
                    elementType: 'ConditionalArray',
                    headItems: [
                        'Expression','Outcome','Binary expression','Binary outcome','>>> expression','>>> outcome'
                    ],
                    content: [
                        {
                            [Symbol('title')]:'&',
                            Expression: '<code>192.168.255.10 & 255.255.255.0</code>',
                            [Symbol('code')]:` 
                            If converted to a boolean value, this will become true.
<pre>
This example is related to computer networks, a bitwise AND is used for IP masking
192.168.255.10 == C0.A8.FF.00 ==
11000000.10101000.11111111.00001010 &
11111111.11111111.11111111.00000000
-------------------------------------
11000000.10101000.11111111.00000000

and this is an address of the network,
this network can have hosts from 
192.168.255.1 to 192.168.255.254,
192.168.255.255 is reserved for the broadcast address,
192.168.255.0 is a network address.

</pre>                            
                                                        `,                           
                            Outcome: `<code>192.168.255.0</code>`,
                            'Binary expression': 'C0.A8.FF.00 & FF.FF.FF.00',
                            'Binary outcome': 'Click to see',
                            '>>> expression': 'Click to see',
                            '>>> outcome':    'Click to see'
                        },
                        {
                            [Symbol('title')]:'&',
                            Expression: '<code>#FFABCD & BLUE_FLAG</code>',
                            Outcome: `<code>CD</code>`,
                            [Symbol('code')]:` 
                            If converted to a boolean value, this will become true.
<pre>
AND operator is perfect for extracting red, green, blue
ingrediance from some hexadecimal format:
let RED_FLAG = (255 << 16);
let GREEN_FLAG = (255 << 8);
let BLUE_FLAG = (255);

function prefixWith0(hexColorAsStr){
    if(hexColorAsStr.length == 3){
        let slicedStr = hexColorAsStr.split('');
        slicedStr.unshift('');
        return slicedStr.join('0');
    }
    return hexColorAsStr;
}

function getRed(hexColor){
    
    return (parseInt(hexColor,16) & RED_FLAG) >> 16
}
function getGreen(hexColor){
    return (parseInt(hexColor,16) & GREEN_FLAG) >> 8
}
function getBlue(hexColor){
    return parseInt(hexColor,16) & BLUE_FLAG
}

function hex2RGB(hexString){
    if (hexString[1]=="#") hexString = hexString.substring(1);
    hexString = prefixWith0(hexString)
    let r = getRed(hexString);
    let g = getGreen(hexString);
    let b = getBlue(hexString);
    
    return \`rgb(\${r}, \${g}, \${b})\`
}

</pre>                            
                                                        `,
                            'Binary expression': 'Click to see',
                            'Binary outcome': 'Click to see',
                            '>>> expression': 'Click to see',
                            '>>> outcome':    'Click to see'
                        },
                        {
                            [Symbol('title')]:'&',
                            [Symbol('code')]:`
<pre>
00000000000000000000000011001000 &
00000000000000000000000001100100 
----------------------------------
00000000000000000000000001000000 
</pre>                            
                            `,
                            Expression: '<code>200 & 100</code>',
                            Outcome: `<code>64</code>`,
                            'Binary expression': '11001000 & 1100100',
                            'Binary outcome': '1000000',
                            '>>> expression': '11001000',
                            '>>> outcome':    '1100100'
                        },
                        {
                            [Symbol('title')]:'&',
                            [Symbol('code')]:`
<pre>
function isEvent(int){
    return int & 1 == 0
}
function isOdd(int){
    return int & 0 == 1
}
00000000000000000000000001100101 &
00000000000000000000000000000001 
----------------------------------
00000000000000000000000000000001 
//false
</pre>                            
                            `,
                            Expression: '<code>isEven(101)</code>',
                            Outcome: `<code>false</code>`,
                            'Binary expression': '1100101 & 1 == 0',
                            'Binary outcome': '1',
                            '>>> expression': '1100101',
                            '>>> outcome':    '1'
                        },

                    ]
                },

                {
                    elementType:'UnsignedList',
                    content:[
                       `IP masking`,
                       `Flags, making sure bits are turned off`,
                       `Getting RGB ingredients from a hex number`,
                       `Checking if a number is even or odd`
                    ]
                },

                {
                    elementType:'Headline-3',
                    content:'<code>|</code>: OR'
                },
                {
                    elementType:'UnsignedList',
                    content:[
                       `<code>0 | 0 == 0;</code>,`,
                       `<code>0 | 1 == 1;</code>,`,
                       `<code>1 | 0 == 1;</code>,`,
                       `<code>1 | 1 == 1;</code>,`,
                    ]
                },
                {
                    elementType:'SmallHeadline',
                    content:'Useful properties'
                },
                {
                    elementType:'UnsignedList',
                    content:[
                       `<code>A | 0 == A;</code>,`,
                       `<code>A | ~A == -1;</code>,`,
                       `<code>A | A == A;</code>,`,
                       `<code>A | -1 == -1;</code>,`,
                    ]
                },

                {
                    elementType:'UnsignedList',
                    content:[
                       `Turning on bits when calling a function with a flag`,
                       `Converting RGB to Hex`,
                    ]
                }, 

                {
                    elementType:'SmallHeadline',
                    content:'RGB to Hex'
                },

                {
                    elementType:'Code',
                    content:`
<pre>
    function getRed(int){
        return (int << 16)
    }
    function getGreen(int){
        return (int << 8)
    }
    function getBlue(int){
        return (int << 0)
    }
    function rgb2Hex(str){
        let ingredients = str.split('(')[1].split(',');
        let r = getRed(parseInt(ingredients[0]));
        let g = getGreen(parseInt(ingredients[1]));
        let b = getBlue(parseInt(ingredients[2]));
        return '#'+ (r | g | b).toString(16);
    }
</pre>                    
                    `
                },


                {
                    elementType:'Headline-3',
                    content:'<code>^</code>: XOR'
                },
                {
                    elementType:'UnsignedList',
                    content:[
                       `<code>0 ^ 0 == 0;</code>,`,
                       `<code>0 ^ 1 == 1;</code>,`,
                       `<code>1 ^ 0 == 1;</code>,`,
                       `<code>1 ^ 1 == 0;</code>,`,
                    ]
                },
                {
                    elementType:'SmallHeadline',
                    content:'Useful properties'
                },
                {
                    elementType:'UnsignedList',
                    content:[
                       `<code>A ^ 0 == A;</code>,`,
                       `<code>A ^ ~A == -1;</code>,`,
                       `<code>A ^ A == 0;</code>,`,
                       `<code>A ^ -1 == ~A;</code>,`,
                    ]
                },
                {
                    elementType:'UnsignedList',
                    content:[
                       `Toggling bits`,
                       `Color inversion`,
                    ]
                }, 
                {
                    elementType:'SmallHeadline',
                    content:'Color inversion'
                },
                {
                    elementType:'Code',
                    content:`
<pre>
    function invertSingle(int){
        return (int ^ 255)
    }
    function invert(str){
        let ingredients = str.split('(')[1].split(',');
        let r = invertSingle(parseInt(ingredients[0]));
        let g = invertSingle(parseInt(ingredients[1]));
        let b = invertSingle(parseInt(ingredients[2]));
        return \`rgb(\${r},\${g},\${b})\`
    }
    //white -> black;
    //green -> magenta;
    //red -> cyan;
    //blue -> yellow;
</pre>                    
                    `
                },


                {
                    elementType:'Headline-3',
                    content:'<code><<</code>: a Left shift operator'
                },
                {
                    elementType:'Paragraph',
                    content:`
                    Changes the left and right operand to the 32 integer representation, and shifts the left operand 
                    bits the number of positions indicated by the right operand modulo 32.
                    `
                },
                {
                    elementType:'Paragraph',
                    content:`
                    The behaviour of this operator may be complicated in some cases, that is why it is needed to be 
                    careful when the result would not fit into 31 bits
                    `
                },
                {
                    elementType:'Paragraph',
                    content:`
                    For simplicity: <code>a << b === a * (2 ** b)</code> but the real replacement would be:<br> 
                    Math.floor(a) * (2 ** (Math.floor(b>>>0) % 32))) & -1
                    `
                },

                {
                    elementType: 'ConditionalArray',
                    headItems: [
                        'Expression','Outcome','Binary expression','Binary outcome','>>> expression','>>> outcome'
                    ],
                    content: [
                        {
                            [Symbol('title')]:'<<',
                            Expression: '<code>1 << 10</code>',
                            Outcome: `<code>1024</code>`,
                            'Binary expression': '1',
                            'Binary outcome': '10000000000',
                            '>>> expression': '1',
                            '>>> outcome':    '10000000000'
                        },
                        {
                            [Symbol('title')]:'<<',
                            Expression: '<code>5 << 10</code>',
                            Outcome: `<code>5120</code>`,
                            'Binary expression': '101',
                            'Binary outcome': '1010000000000',
                            '>>> expression': '101',
                            '>>> outcome':    '1010000000000'
                        },
                        {
                            [Symbol('title')]:'1 << 31',
                            Expression: '<code>1 << 31</code>',
                            Outcome: `<code>-2147483648</code>`,
                            'Binary expression': '1',
                            'Binary outcome': '-10000000000000000000000000000000',
                            '>>> expression': '00000000000000000000000000000001',
                            '>>> outcome':    '10000000000000000000000000000000'
                        },

                        {
                            [Symbol('title')]:'1 << 32',
                            Expression: '<code>1 << 32</code>',
                            Outcome: `<code>1</code>`,
                            [Symbol('code')]:` 
                            Here is an example that, for example, in Chromium 90.0.4430.72 or Firefox 88.0 
                            first bit is not forgotten. 5 << 32 === 5, so bits are moved back to their 
                            initial position                           
                                                        `,
                            'Binary expression': '1',
                            'Binary outcome': '1',
                            '>>> expression': '1',
                            '>>> outcome':    '1'
                        },

                        {
                            [Symbol('title')]:'5 << 30',
                            Expression: '<code>5 << 30</code>',
                            Outcome: `<code>1073741824</code>`,
                            [Symbol('code')]:` 
                            Here behaviour is different from 1 << 32. One bit is forgotten, and one is moved.
                            The conclusion is, that if there is chance that a number will fall out of the given 
                            boundaries, it is better not to use this operator, as behaviour may be 
                            hard to predict and will not be readable
                                                        `,
                            'Binary expression': '101',
                            'Binary outcome': '1000000000000000000000000000000',
                            '>>> expression': '101',
                            '>>> outcome':    '1000000000000000000000000000000'
                        },

                        {
                            [Symbol('title')]:'123456789 << 32',
                            Expression: '<code>123456789 << 32</code>',
                            Outcome: `<code>123456789</code>`,
                            [Symbol('code')]:` 
                            In this example, all bits are rewound, as we move whole number exactly 32 bits, but 
                            please see the next example.
                                                        `,
                            'Binary expression': '111010110111100110100010101',
                            'Binary outcome': '111010110111100110100010101',
                            '>>> expression': '111010110111100110100010101',
                            '>>> outcome':    '111010110111100110100010101'
                        },

                        {
                            [Symbol('title')]:'123456789 << 39',
                            Expression: '<code>123456789 << 39</code>',
                            Outcome: `<code>-1377400192</code>`,
                            [Symbol('code')]:` 
                            Here it is visable, that some bits are rewound (due to 32 bit shift), and some are
                            discarded (due to the fact, that this shift is greater than 32). This example 
                            illustrates a hard to predict not readable case
                                                        `,
                            'Binary expression': '111010110111100110100010101',
                            'Binary outcome': '10101101111001101000101010000000',
                            '>>> expression': '111010110111100110100010101',
                            '>>> outcome':    '10101101111001101000101010000000'
                        },
                        {
                            [Symbol('title')]:'5.5 << 2.5',
                            Expression: '<code>5.5 << 2.5</code>',
                            Outcome: `<code>20</code>`,
                            [Symbol('code')]:` 
                            Here it is visable, that some bits are rewound (due to 32 bit shift), and some are
                            discarded (due to the fact, that this shift is greater than 32). This example 
                            illustrates a hard to predict not readable case
                                                        `,
                            'Binary expression': '101.1',
                            'Binary outcome': '10100',
                            '>>> expression': '101',
                            '>>> outcome':    '10100'
                        },
                        {
                            [Symbol('title')]:'5 << -1',
                            Expression: '<code>5 << -1</code>',
                            Outcome: `<code>-2147483648</code>`,
                            [Symbol('code')]:` 
                            
                                                        `,
                            'Binary expression': '101',
                            'Binary outcome': '10000000000000000000000000000000',
                            '>>> expression': '00000000000000000000000000000101',
                            '>>> outcome':    '10000000000000000000000000000000'
                        },
                        {
                            [Symbol('title')]:'5 << -2',
                            Expression: '<code>5 << -2</code>',
                            Outcome: `<code>1073741824</code>`,
                            [Symbol('code')]:` 
                            
                                                        `,
                            'Binary expression': '101',
                            'Binary outcome': '01000000000000000000000000000000',
                            '>>> expression': '00000000000000000000000000000101',
                            '>>> outcome':    '01000000000000000000000000000000'
                        },
                        {
                            [Symbol('title')]:'5 << -3',
                            Expression: '<code>5 << -3</code>',
                            Outcome: `<code>-1610612736</code>`,
                            [Symbol('code')]:` 
                            
                                                        `,
                            'Binary expression': '101',
                            'Binary outcome': '10100000000000000000000000000000',
                            '>>> expression': '00000000000000000000000000000101',
                            '>>> outcome':    '10100000000000000000000000000000'
                        },
                    ]
                },

                {
                    elementType:'Headline-3',
                    content:'<code>>></code>: a right shift sign-propagating operator'
                },
                {
                    elementType:'Paragraph',
                    content:`
                    Changes the left and right operand to the 32 bit integer representation, and shifts the left operand 
                    bits the number of positions indicated by the right operand modulo 32 to the right. 
                    This operator preserves its sign, so in case a negative number
                    is shifted, most significant bits will be filled with 1, and in case a positive number is shifted,
                    most significant bits will be filled with 0.
                    `
                },
                {
                    elementType:'Paragraph',
                    content:`
                    <code>a >> b + c === Math.floor(A / (2 ** (b + c))</code>
                    `
                },

                {
                    elementType: 'ConditionalArray',
                    headItems: [
                        'Expression','Outcome','Binary expression','Binary outcome','>>> expression','>>> outcome'
                    ],
                    content: [
                        {
                            [Symbol('title')]:'>>',
                            Expression: '<code>1024 >> 10</code>',
                            Outcome: `<code>1</code>`,
                            'Binary expression': '10000000000',
                            'Binary outcome': '1',
                            '>>> expression': '10000000000',
                            '>>> outcome':    '1'
                        },
                        {
                            [Symbol('title')]:'>>',
                            Expression: '<code>5120 >> 11</code>',
                            Outcome: `<code>2</code>`,
                            'Binary expression': '1010000000000',
                            'Binary outcome': '10',
                            '>>> expression': '1010000000000',
                            '>>> outcome':    '10'
                        },
                        {
                            [Symbol('title')]:'>>',
                            Expression: '<code>-5 >> 2</code>',
                            Outcome: `<code>-2</code>`,
                            'Binary expression': '-101',
                            'Binary outcome': '-10',
                            '>>> expression': '11111111111111111111111111111011',
                            '>>> outcome':    '11111111111111111111111111111110'
                        },

                        {
                            [Symbol('title')]:'5',
                            Expression: '<code>5 >> 32</code>',
                            Outcome: `<code>5</code>`,
                            [Symbol('code')]:` 
                            When moving the number n*32 bits, where n is a positive integer, 
                            the outcome is the same number
                                                        `,
                            'Binary expression': '101',
                            'Binary outcome': '101',
                            '>>> expression': '101',
                            '>>> outcome':    '101'
                        },
                        {
                            [Symbol('title')]:'5',
                            Expression: '<code>5 >> 31</code>',
                            Outcome: `<code>0</code>`,
                            [Symbol('code')]:` 
                            All bits are discarded, none is rewound as there is a sign bit
                                                        `,
                            'Binary expression': '101',
                            'Binary outcome': '0',
                            '>>> expression': '101',
                            '>>> outcome':    '0'
                        },
                        {
                            [Symbol('title')]:'5',
                            Expression: '<code>5 >> 33</code>',
                            Outcome: `<code>2</code>`,
                            'Binary expression': '101',
                            'Binary outcome': '10',
                            '>>> expression': '101',
                            '>>> outcome':    '10'
                        },
                        {
                            [Symbol('title')]:'5',
                            Expression: '<code>5 >> -1</code>',
                            Outcome: `<code>0</code>`,
                            'Binary expression': '101',
                            'Binary outcome': '0',
                            '>>> expression': '101',
                            '>>> outcome':    '0'
                        },
                        {
                            [Symbol('title')]:'5',
                            Expression: '<code>5 >> -2</code>',
                            Outcome: `<code>0</code>`,
                            'Binary expression': '101',
                            'Binary outcome': '0',
                            '>>> expression': '101',
                            '>>> outcome':    '0'
                        },
                        {
                            [Symbol('title')]:'5',
                            Expression: '<code>5 >> -29</code>',
                            Outcome: `<code>0</code>`,
                            'Binary expression': '101',
                            'Binary outcome': '0',
                            '>>> expression': '101',
                            '>>> outcome':    '0'
                        },
                        {
                            [Symbol('title')]:'5',
                            Expression: '<code>5 >> -30</code>',
                            Outcome: `<code>1</code>`,
                            'Binary expression': '101',
                            'Binary outcome': '1',
                            '>>> expression': '101',
                            '>>> outcome':    '1'
                        },
                        {
                            [Symbol('title')]:'5',
                            Expression: '<code>5 >> -31</code>',
                            Outcome: `<code>2</code>`,
                            'Binary expression': '101',
                            'Binary outcome': '10',
                            '>>> expression': '101',
                            '>>> outcome':    '10'
                        },
                    ]
                },




                {
                    elementType:'Headline-3',
                    content:'<code>>>></code>: a right shift zero-fill operator'
                },
                {
                    elementType:'Paragraph',
                    content:`
                    This operator takes 2 operands, left operand is a 32 bit integer Number type value,
                    and right is an expression, that will be evaluated. <code>numb >>> a</code>. <code>numb</code>
                    bits will be <code>a</code> positions right shifted. Less significant bits should be forgotten,
                    but in reality they may behave in a slightly different way. For example <code>5 >>> 32</code> is 
                    5, and <code>5 >>> 33</code> is 2. This operator fills all most significant bits with 0, no matter 
                    the sign is. That is why it is <strong>the only operator enabling us to see how negative numbers are
                    really stored</code> in memory: <code>(-5 >>> 0).toString(2)</code>
                    `
                },

                {
                    elementType: 'ConditionalArray',
                    headItems: [
                        'Expression','Outcome','Binary expression','Binary outcome','>>> expression','>>> outcome'
                    ],
                    content: [
                        {
                            [Symbol('title')]:'>>>',
                            Expression: '<code>1024 >>> 10</code>',
                            Outcome: `<code>1</code>`,
                            'Binary expression': '10000000000',
                            'Binary outcome': '1',
                            '>>> expression': '10000000000',
                            '>>> outcome':    '1'
                        },
                        {
                            [Symbol('title')]:'>>>',
                            Expression: '<code>-5 >>> 2</code>',
                            Outcome: `<code>1073741822</code>`,
                            'Binary expression': '-101',
                            'Binary outcome': '111111111111111111111111111110',
                            '>>> expression': '11111111111111111111111111111011',
                            '>>> outcome':    '111111111111111111111111111110'
                        },

                        {
                            [Symbol('title')]:'5',
                            Expression: '<code>5 >>> 32</code>',
                            Outcome: `<code>5</code>`,
                            [Symbol('code')]:` 
                            When moving the number n*32 bits, where n is a positive integer, 
                            the outcome is the same number
                                                        `,
                            'Binary expression': '101',
                            'Binary outcome': '101',
                            '>>> expression': '101',
                            '>>> outcome':    '101'
                        },
                    ]
                },

                {
                    elementType:'NoteWarning',
                    content:`In practice operators <<, >>, >>> accept negative right side operand values, but
                    it is better to avoid them, as they behaviour is not readable.`
                },


                {
                    elementType:'Headline-3',
                    content:'Masking example'
                },
                {
                    elementType:'Code',
                    content:`
<pre>
    let ODD_FLAG = 1;
    let EVEN_FLAG = 2;
    let DIV_3_FLAG = 4;
    let SORT_FLAG = 8;
    let NOT_REPEAT_FLAG = 16;

    // lets create a test array;
    let items = Array(100);
    items.fill(0);
    items = items.map(
        (item,index)=>{
            if (index > 49) return index - 49
            //let elements repeat
            return index
        }
    );

    function getFromArray(array, flags){
        let filterFlags = (item, index, array) => {
            if ((flags & NOT_REPEAT_FLAG) && (index > 0)){
                let wasItemBefore = ~array.slice(0,index).indexOf(item);
                if (wasItemBefore) return false;
            }
            if ((flags & ODD_FLAG) && (item & 1 === 1)) return true;
            if ((flags & EVEN_FLAG) && (item & 1 === 0)) return true;
            if ((flags & DIV_3_FLAG) && (item % 3 === 0)) return true;
            
        }
        let outcome = array.filter(filterFlags);
        if (flags & SORT_FLAG) return outcome.sort(
            (a, b)=>{
                if (a < b) return -1;
                if (a === b) return 0;
                return 1;
            }
        )
        return outcome
    }

    console.log(getFromArray(items, EVEN_FLAG | DIV_3_FLAG));
    console.log(getFromArray(items, EVEN_FLAG | DIV_3_FLAG | SORT_FLAG));
    console.log(getFromArray(items, EVEN_FLAG | DIV_3_FLAG | NOT_REPEAT_FLAG));

    //Now lets activate all features, except for odd numbers:
    let FLAG_NO_ODD = 65536 & (65536 ^ ODD_FLAG);
    console.log(getFromArray(items, FLAG_NO_ODD));
</pre>                    
                    `
                },

                {
                    elementType:'Paragraph',
                    content:`
                    Above example implements a function, that accepts an <code>array</code>, and a 
                    <code>flags</code> argument. The flags argument gives options to activate or deactivate
                    different features:
                    `
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        `return odd elements of the given array,`,
                        `return even elements of the given array,`,
                        `return the elements of the array that can be divided by 3 with no remainder,`,
                        `return elements only once, even if they repeat,`,
                        `sort returned array`
                    ]
                },
                {
                    elementType:'Paragraph',
                    content:`
                    Due to the clean code principles, this should be a set of functions, each doing only one thing, but
                    here we would have 5 separate functions. To accomplish a set of tasks an array should have been
                    declared, and 5 functions should have been called on it. A lot more code, less readable,
                    less encapsulation and more CPU operations.
                    That is why the implementation of a single high level public function
                    doing a set of things an already aggregating a few lower level functions is a better 
                    solution in this case. The function from the example
                    would take 6 arguments altogether if not for the flag usage. We could make an array and 
                    an options argument, that would be an object, but this object would still have 5 properties,
                    and setting these arguments would not be convenient. In this case the flag pattern comes 
                    handy. The solution is readable, and thanks to usage of bitwise OR passing flags argument
                    is also readable. Bitwise operations make it clean to introduce an additional flags, like
                    <code>FLAG_NO_ODD</code>.

                    `
                },

                {
                    elementType:'Headline-3',
                    content:'Microcontrollers'
                },
                {
                    elementType:'Paragraph',
                    content:`
                    Perhaps not very JS oriented example, but bitwise operations are very useful when 
                    programming a microcontroller. A uC has ports, each port consists of a few legs (pins),
                    that are physically connected, soldered to some HW. This may be lets say an LED digit 
                    display, or an H-Bridge for DC motor control. Then telling uC to run a motor in a forward
                    direction would be like this <code>portA = portA & MOTOR_A_FORWARD</code>. Thanks to this
                    approach we do not accidentally toggle any of pins not related to the motor A, and we do not
                    set a dangerous state, where an H-bridge would be damaged.
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
                    content:'ECMAScript',
                    href: 'https://tc39.es/ecma262/multipage/ecmascript-language-expressions.html#sec-bitwise-shift-operators',
                    description:'Root documentation'
                },
                {
                    elementType:'Link',
                    content:'blog.logrocket.com',
                    href: 'https://blog.logrocket.com/interesting-use-cases-for-javascript-bitwise-operators/',
                    description:'Some interesting bitwise operations by Glad Chinda'
                },
                {
                    elementType:'Link',
                    content:'stackoverflow.com',
                    href: 'https://stackoverflow.com/questions/654057/where-would-i-use-a-bitwise-operator-in-javascript',
                    description:'Examples'
                },
            ]
        }
    ]
};

export default function getBitWiseData(){
    return data;
}