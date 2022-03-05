
let data =     {
    summary: 'regExp',
    title: 'regExp',
    searchKeywords:`

    `,
    cathegory: 'js',
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'Regular expression'
                },

                {
                    elementType: 'Paragraph',
                    content: `
                    `
                },



                {
                    elementType: 'ConditionalArray',
                    headItems: [
                        'Symbol', 'Usage', 'Explanation'
                    ],
                    content: [
                        {
                            [Symbol('title')]:'Simple match',
                            [Symbol('code')]:`
   <pre>
let r = new RegExp(/abc/)      
r.test('abc')  // true; 
r.test('abstract') // false;
r.test('abcolumn') // true;
   </pre>
                            `,
                            Symbol: 'Simple match',
                            Usage: '/abc/',
                            Explanation:`Matches a string containing 'abc'`
                        },
                        {

                            [Symbol('title')]:'*',
                            [Symbol('code')]:`
   <pre>
let r = new RegExp(/ab*c/)   
r.test('abbbc')  // true; 
r.test('ac')  // true; 
r.test('aac')  // true; 
r.test('azc') // false;

   </pre>
                            `,
                            Symbol: '*',
                            Usage: '/ab*c/',
                            Explanation:`Zero or more match of preceding symbol`
                        },

                        {

                            [Symbol('title')]:'+',
                            [Symbol('code')]:`
   <pre>
let r = new RegExp(/ab+c/)   
r.test('abbbc')  // true; 
r.test('ac')  // false; 
r.test('aac')  // false; 
r.test('bcaabczc') // true;

   </pre>
                            `,
                            Symbol: '+',
                            Usage: '/ab+c/',
                            Explanation:`One or more match of preceding symbol`
                        },

                        {

                            [Symbol('title')]:'?',
                            [Symbol('code')]:`
   <pre>
let r = new RegExp(/ab?c/)   
r.test('abbbc')  // false; 
r.test('ac')  // true; 
r.test('aac')  // true; 
r.test('bcaabczc') // true;

   </pre>
                            `,
                            Symbol: '?',
                            Usage: '/ab?c/',
                            Explanation:`One or zero match of preceding symbol`
                        },

                        {

                            [Symbol('title')]:'{n} exectly n times',
                            [Symbol('code')]:`
   <pre>
let r = new RegExp(/ab{3}c/)   
r.test('abbbc')  // true; 
r.test('abbbbc')  // false; 
r.test('ac')  // false; 

   </pre>
                            `,
                            Symbol: '{n}',
                            Usage: '/ab{3}c/',
                            Explanation:`Preceding element should appear exectly 'n' times`
                        },

                        {

                            [Symbol('title')]:'{n,} n or more times',
                            [Symbol('code')]:`
   <pre>
let r = new RegExp(/ab{3}c/)   
r.test('abbbc')  // true; 
r.test('abbbbc')  // true; 
r.test('abbc')  // false; 

   </pre>
                            `,
                            Symbol: '{n,}',
                            Usage: '/ab{3,}c/',
                            Explanation:`Preceding element should appear 'n' or more times`
                        },


                        {

                            [Symbol('title')]:'{n,m} n to m times',
                            [Symbol('code')]:`
   <pre>
let r = new RegExp(/ab{2,4}c/)   
r.test('abbbc')  // true; 
r.test('abbbbc')  // true; 
r.test('abc')  // false; 
r.test('abbbbbc')  // false; 
   </pre>
                            `,
                            Symbol: '{n,m}',
                            Usage: '/ab{3,5}c/',
                            Explanation:`Preceding element should appear 'n' to 'm' times`
                        },



                        {

                            [Symbol('title')]:'a|b|c ',
                            [Symbol('code')]:`
   <pre>
let r = new RegExp(/12a|b|c21/)   // Should be 12a or b or c21
let r1 = new RegExp(/12(a|b|c)21/)   
let r2 = new RegExp(/12[a|b|c]21/)   
r.test('1221') // false
r.test('12a21') // true
r.test('12b21') // true
r.test('12abc21') // true
r.test('12abcd21') // true
r.test('b') // true

r1.test('1221') // false
r1.test('12a21') // true
r1.test('12b21') // true
r1.test('12abc21') // false
r1.test('12abcd21') // false

r2.test('1221') // false
r2.test('12a21') // true
r2.test('12b21') // true
r2.test('12abc21') // false
r2.test('12abcd21') // false


   </pre>
                            `,
                            Symbol: '|',
                            Usage: '/a|b|c/',
                            Explanation:`n|m is n or m element,`
                        },


                        {
                            [Symbol('title')]:'\\',
                            [Symbol('code')]:`
   <pre>
let r = new RegExp(/ab\*c/)   
let r1 = new RegExp(/a\\c/)

r.test('abbbc')  // false; 
r.test('a*c')  // true; 
r1.test('a\\c')  // true; 
   </pre>
                            `,
                            Symbol: '\\',
                            Usage: '/ab\\*c/',
                            Explanation:`Escape character, allowing to excape special symbols`
                        },
                        {
                            [Symbol('title')]:'[] character group',
                            [Symbol('code')]:`
   <pre>
let r = new RegExp(/[azdfg]/)
let r1 = new RegExp(/[2458]/)
r.test('abba')   // matches 'a'
r1.test('abba') // false, should match 2, 4, 6 or 8
   </pre>
                            `,
                            Symbol: '[] character group',
                            Usage: '[abc]',
                            Explanation:`Match if the string has any of the symbols from the passed string`
                        },
                        {
                            [Symbol('title')]:'[^] negation',
                            [Symbol('code')]:`
   <pre>
let r = new RegExp(/[^azdfg]/)
let r1 = new RegExp(/[^ab]/)
r.test('abba');   // matches 'b', as 'b' is not in the character group
r1.test('abba');  // false, should match any symbol that is not an 'a' or 'b'
   </pre>
                            `,
                            Symbol: '[^]',
                            Usage: '[^abc]',
                            Explanation:`Matches any other symbol that is not in the bracktes,`
                        },
                        {
                            [Symbol('title')]:'[  -  ] range',
                            [Symbol('code')]:`
   <pre>
let r = new RegExp(/[a..a]/)
let r1 = new RegExp(/[abba]/)
r.test('abba')   // match, as bb is substituted with ..
r.test('a..a')   // false, '.' is not a replacement of a dot itself
r1.test('a.a')    // false, dot represents only a single character
   </pre>
                            `,
                            Symbol: '.',
                            Usage: '[a.b]',
                            Explanation:``
                        },
                        {
                            [Symbol('title')]:'\w',
                            [Symbol('code')]:`
   <pre>
let r = new RegExp(/\W/)   
r.test('abba')   // match, as 'a' and 'b' are symbols belonging to a word
r.test('3211')   // false, no word symbol here
r.test('abc.')// true, '.' is not a word symbol, but a, b and c are
   </pre>
                            `,
                            Symbol: '\w',
                            Usage: '\w',
                            Explanation:`A word symbol: '[a-z][A-Z]`
                        },
                        {
                            [Symbol('title')]:'\W',
                            [Symbol('code')]:`
   <pre>
let r = new RegExp(/\W/)
r.test('abba' )   // no match, a and b are word symbols
r.test('abba1')   // true, '1' is not a word symbol
r.test('abc.' )// true, '.' is not a word symbol
   </pre>
                            `,
                            Symbol: '\W',
                            Usage: '\W',
                            Explanation:`A not-word symbol, all not [a-z] or [A-Z]`
                        },
                        {
                            [Symbol('title')]:'\s',
                            [Symbol('code')]:`
   <pre>
   </pre>
                            `,
                            Symbol: '\s',
                            Usage: '\s',
                            Explanation:`any space/separation mark`
                        },
                        {
                            [Symbol('title')]:'\S',
                            [Symbol('code')]:`
   <pre>
   </pre>
                            `,
                            Symbol: '\S',
                            Usage: '\S',
                            Explanation:`any non-space symbol`
                        },
                        {
                            [Symbol('title')]:'\d',
                            [Symbol('code')]:`
   <pre>
   let r = new RegExp(/\d/)
   r.test('12334') // true, each is a digit
   r.test('1fds') // true, 1 is a digit
   </pre>
                            `,
                            Symbol: '\d',
                            Usage: '\d',
                            Explanation:`marks any decimal digit`
                        },
                        {
                            [Symbol('title')]:'\D',
                            [Symbol('code')]:`
   <pre>
   let r = new RegExp(/\D/)
   r.test('12334') // false, each character is a digit
   r.test('1fds') // true, f, d, s are not digits
   </pre>
                            `,
                            Symbol: '\D',
                            Usage: '\D',
                            Explanation:`Any not a digit character`
                        },
                        {
                            [Symbol('title')]:'^[abc]',
                            [Symbol('code')]:`
   <pre>
   let r = new RegExp(/^[abc]/)
   r.test('abcdef') // true, starts with abc
   r.test('1abcde') // false, starts with 1
   </pre>
                            `,
                            Symbol: '^parrten',
                            Usage: '^[abc], ^\d{3}',
                            Explanation:`Should start with a pattern, multiline`
                        },
                        {
                            [Symbol('title')]:'[abc]$',
                            [Symbol('code')]:`
   <pre>
   let r = new RegExp(/[abc]$/)
   r.test('abcdef') // false, not ending with abc
   r.test('1abc') // true, ending with 'abc'

   let r1 = new RegExp(/[abc]$/) // NOTE in this case r1.test('abc') is false
   </pre>
                            `,
                            Symbol: 'parrten$',
                            Usage: '[abc]$, \d{3}$',
                            Explanation:`Should end with the pattern, multiline`
                        },
                        {
                            [Symbol('title')]:'\A[abc]',
                            [Symbol('code')]:`
   <pre>
   let r = new RegExp(/\A[abc]/)
   r.test('abcdef') // true, starts with abc
   r.test('1abcde') // false, starts with 1
   </pre>
                            `,
                            Symbol: '\A parrten',
                            Usage: '\A[abc], \A\d{3}',
                            Explanation:`Should start with a pattern`
                        },
                        {
                            [Symbol('title')]:'\Z[abc]',
                            [Symbol('code')]:`
   <pre>
   let r = new RegExp(/\Z[abc]/)
   r.test('abcdef') // false, not ending with abc
   r.test('1abc') // true, ending with 'abc'
   </pre>
                            `,
                            Symbol: '\Zparrten',
                            Usage: '\Z[abc], \Z\d{3}',
                            Explanation:`Should end with the pattern`
                        },
                        {
                            [Symbol('title')]:'\G[abc]',
                            [Symbol('code')]:`
   <pre>
   </pre>
                            `,
                            Symbol: '\G parrten',
                            Usage: ' ??? ',
                            Explanation:`Match should be at the point where previous match ends`
                        },

                    ]
                },






                {
                    elementType:'Headline-3',
                    content: 'Options'
                },

                {
                    elementType: 'UnsignedList',
                    content:[
                        `<code>i</code> no case sensitive,`,
                        `<code>g</code> global flag: search whole string and return an array of results,
                        do not stop after first match. In <code>test</code> will return true, but with 
                        <code>match</code> will return an array of matches. Usage: <code>r = /a/g<?code>, now
                        <code>'abba'.match(r)</code> return <code>['a','a']</code>,`,
                        `<code>m</code> multiline mode,`,
                        `<code>u</code> unicode suport,`,
                        `<code>y</code> sticky mode,`,
                    ]
                }



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
                    content:'javascript.info',
                    href: 'https://javascript.info/regexp-introduction',
                    description:'Tutorial'
                },
            ]
        }
    ]
};

export default function getRegExpData(){
    return data;
}