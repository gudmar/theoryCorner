
// SPELL CHECKED, CORRECT!

let comparisionOperatorsData =     [
    {
        elementType:'Headline-3',
        content:'comparison operators'
    },
    {
        elementType: 'Paragraph',
        content: `
            comparison operators evaluate the left and the right operand expression, compares them and 
            returns the result. The operands of the non strict comparisons (<code>==</code>, <code>!=</code>) 
            that are not of the same type are converted to the same type, usually numeric. 
        `
    },
    {
        elementType:'SmallHeadline',
        content:'Avoid non strict comparisons: <code>==</code>, <code>!=</code>'
    },
    {
        elementType: 'Paragraph',
        content: `
            The algorithm:
        `
    },
    {
        elementType: 'UnsignedList',
        content: [
            `If both operands are of the same type, compare with strict algorithm`,
            `Undefined and null are considered equal,`,
            `If string and a number, convert to string,`,
            `If non-boolean and boolean, convert the boolean to a number and start the procedure again,`,
            `If an object is compared with a number or a string, convert the object to a primitive`,
            `If both are strings, then this is already covered, operands are of the same type and 
            are compared with a strict algorithm`,
            `If none of above, then operands are not equal`
        ]
    },

    {
        elementType: 'Paragraph',
        content: `
            Problems:
        `
    },
    {
        elementType: 'UnsignedList',
        content: [
            `<code>2 == true is false</code> as true is converted to 1,`,
            `<code>'2' == true is false</code>`,
            `<code>'\n\t123\r ' == 123 is true</code> and this may not be ok`,
            `<code>{} == '[object Object]' is true</code>`,
            `<code>[] == 0 is true</code>`,
            `<code>['12'] == 12 is true</code>`,
            `<code>new String('') == new String('') is false</code>`,
            `<code>NaN == NaN is false</code>, isNaN() should be used`
        ]
    },
    {
        elementType: 'Paragraph',
        content: `
            Instead of a non strict comparison use:
        `
    },
    {
        elementType: 'Paragraph',
        content: `
        <table class = "table">
        <thead><tr><th>Do not use</th><th>Use</th></tr></thead>
        <tbody>
            <tr>
                <td><code>if (x != null)</code></td>
                <td><code>if (x)</code> or <code>if (x !== undefined && x != null)</code></td>
            </tr>
            <tr>
                <td><code>if (x == 123)</code></td>
                <td><code>if (Number(x) === 123)</code></td>
            </tr>
            <tr>
                <td><code>isNaN == isNaN</code></td>
                <td><code>isNaN()</code></td>
            </tr>
        </tbody>
        </table>
        `
    },

    {
        elementType: 'ConditionalArray',
        headItems: [
            'Operator','Name','Usage','Description'
        ],
        content: [
            {
                [Symbol('title')]:'==',
                [Symbol('code')]:`
                
<pre>
null == undefined; // true
3 == true; // false; as boolean is converted to a number,
1 == true; // true;
0 == false; // true;

'' == false; // true;
'1' == true; // true;
'2' == true; // false, as true is converted to 1,
'some string' == true // false, as true is converted to 1,
({} == '[object Object]') // true, as object is converted to a 
// primitive using a <b>@@toStringTag</b> well known symbol
</pre>                            
                
                `,
                Operator: '<code>==</code>',
                Name: `Equal`,
                Usage: 'g() == f()',
                Description: `true if both operands are equal, if the operands are of a different type try to
                convert them to the same type: the number type is preferred, objects are converted to 
                primitives. <strong>Use strict operator instead</strong>`
            },





            {
                [Symbol('title')]:'!=',
                [Symbol('code')]:`
                
<pre>
null != undefined; // false
3 != true; // true; as boolean is converted to a number,
1 != true; // false;
0 != false; // false;

'' != false; // false;
'1' != true; // false;
'2' != true; // true, as true is converted to 1,
'some string' != true // true, as true is converted to 1,
({} != '[object Object]') // false, as object is converted to a 
// primitive using a <b>@@toStringTag</b> well known symbol
</pre>                            
                
                `,
                Operator: '<code>!=</code>',
                Name: `Equal`,
                Usage: 'g() == f()',
                Description: `true if both operands are not equal, if the operands are of a different type try to
                convert them to the same type: the number type is preferred, objects are converted to 
                primitives. <strong>Use strict operator instead</strict>`
            },



            {
                [Symbol('title')]:'===',
                [Symbol('code')]:`
                
<pre>
NaN === NaN; // false !!
// isNaN() should be used

+0 === -0; // true;

2 === 2; // true;
2 === 1; // false;
2 === '2' // false;
'some caption' === 'some caption' // true;
'some caption' === 'some caption ' // false; additional space at the end
null === undefined // false

let obj1 = {a:1, b:2};
let obj2 = {a:1, b:2};
let obj3 = obj1;
obj1 === obj2; // false; the keys and values are the same,
// the type is the same, but obj1 and obj2 refer to different
// places in memory, these objects are not the same
obj1 === obj3; // true; as obj3 was assigned the value obj1 is pointing to
// so obj1 and obj3 are the same objects
</pre>                            
                
                `,
                Operator: '<code>===</code>',
                Name: `Strict equal`,
                Usage: 'g() === f()',
                Description: `Returns true, if both operands are of the same type and have the same value.
                If objects compared, then it is compared if both variables point to the same object.`
            },



            {
                [Symbol('title')]:'!==',
                [Symbol('code')]:`
                
<pre>
2 !== 2; // false;
2 !== 1; // true;
2 !== '2' // true;
'some caption' !== 'some caption' // false;
'some caption' !== 'some caption ' // true; additional space at the end
null !== undefined // true

let obj1 = {a:1, b:2};
let obj2 = {a:1, b:2};
let obj3 = obj1;
obj1 !== obj2; // true; the keys and values are the same,
// the type is the same, but obj1 and obj2 refere to different
// places in memory, these objects are not the same
obj1 !== obj3; // false; as obj3 was assigned the value obj1 is pointing to
// so obj1 and obj3 are the same objects
</pre>                            
        
                `,
                Operator: '<code>!==</code>',
                Name: `Strict equal`,
                Usage: 'g() !== f()',
                Description: `Returns true, if both operands are not of the same type or have different value.
                If objects compared, then it is compared if both variables point to the same object.`
            },




            {
                [Symbol('title')]:'>',
                [Symbol('code')]:`
            <ul>
                <li>Convert objects to primitives</li>
                <li>Strings should be compared with the lexicographical comparison of 16-bit code units</li>
                <li>Try to convert both operands to numbers</li>
                <li>Symbols cannot be compared, as they are not convertible to a number</li>
            </ul>
                                        
<pre>

3 > 2; //true;
[3] > [2]; // true;
({a:2}>{a:1}); // false
({a:2}<{a:1}); // false
'3' > 2; // true
'2' > 3; // false
'a' > 'b'; // false;
'b' > 'a'; // true;
'bcd' > 'abc'; // true;
'b' > '1'; // true;
'b' > 1; // false as b is not convertible to a number
'b' < 1; // false as b is not convertible to a number

BigInts
3n > 2n; // true;
3n > 2; // true;
3 > 2n; // true;

Undefined
undefined > 3; // false;
3 > undefined; // false;

Null
3 > null; // true
true > null; // true;
null < 'some str'; // false as not comparable
null > 'some str'; // false

Boolean
true > false; // true
true > 0; // true
true > '0'; // true
true > 'a'; // false
true < 'a'; // false, as 'a' cannot be converted to a number

NaN
NaN > 3; // false
3 > NaN; // false
</pre>                            
        
                `,
                Operator: '<code>></code>',
                Name: `Greater than`,
                Usage: 'g() > f()',
                Description: `Returns true, left operand is greater than the right one.`
            },




            {
                [Symbol('title')]:'<',
                [Symbol('code')]:`
            <ul>
                <li>Convert objects to primitives</li>
                <li>Strings should be compared with the lexicographical comparison of 16-bit code units</li>
                <li>Try to convert both operands to numbers</li>
                <li>Symbols cannot be compared, as they are not convertible to a number</li>
            </ul>
                                        
<pre>
2 < 3; //true;
[1] < [2]; // true;
({a:2}<{a:1}); // false
({a:2}>{a:1}); // false
'1' < 2; // true
'2' < 1; // false
'a' < 'b'; // false;
'b' < 'a'; // true;
'bcd' < 'xyz'; // true;
'2' < 'd'; // true;
'b' < 1; // false as b is not convertible to a number
'b' > 1; // false as b is not convertible to a number

BigInts
1n < 2n; // true;
1n < 2; // true;
1 < 2n; // true;

Undefined
undefined < 3; // false;
3 < undefined; // false;

Null
null < 3; // true
null < true; // true;
null < 'some str'; // false as a string cannot be converted to a number
null > 'some str'; // false

Boolean
false < true; // true
0 < true;   // true
'0' < true;  // true
'a' < true;  // false
'a' > true;  // false

NaN
NaN < 3; // false
3 > NaN; // false
</pre>                            
        
                `,
                Operator: '<code><</code>',
                Name: `Less than`,
                Usage: 'g() < f()',
                Description: `Returns true, left operand is smaller than the right one.`
            },



            {
                [Symbol('title')]:'<=',
                [Symbol('code')]:`
            <ul>
                <li>Convert objects to primitives</li>
                <li>Strings should be compared with the lexicographical comparison of 16-bit code units</li>
                <li>Try to convert both operands to numbers</li>
                <li>Symbols cannot be compared, as they are not convertible to a number</li>
            </ul>
                                        
<pre>
Numbers
1 <= 2; // true;
3 <= 3; // true;

BigInt
1n <= 2n; // true;
3n <= 3n; // true;
1n <= 2; // true;
3n <= 3; // true;

Strings
'5n' <= 6; // false as '5n' is not converted into BigInt
'abc' <= 'cde'; // true;
'abc' <= 'abc'; // true;
'abc' <= '0bc'; // false;
'4' <= 4; // true;
'a' <= 4; // false, not comparable
'a' >= 4; // false;

Symbols
let s1 = Symbol();
let s2 = Symbol();
s1 <= s2; //Error, symbols cannot be converted to a number,
// moreover symbols are unique, but there is no possibility to get a symbol
// real value, so no point to compare them

undefined and null
null >= undefined; // false;
null <= undefined; // false; undefined cannot be converted to a number
null <= true; // true;
true <= null; // false
null <= 0; // true
0 <= null; // true
undefined <= 0; // false
0 <= undefined; // false

Booleans
true <= false; // false;
false <= true; // true;
true <= 1; // true;
true <= 4; // true;
true <= 's'; // false
's' <= true; // false
null <= false; // true;
1n <= true; // true;
0n <= true; // true;
0n <= false; // true;
1n <= false; // false;


Objects
({} <= {}); // TRUE
({a:2}<={a:1}); // TRUE
({a:1, b:2, c:3} <= {a:0}) // TRUE
({a:1, b:2, c:3} >= {a:0}) // TRUE
({a:1, b:2, c:3} <= []); // false
({a:1, b:2, c:3} >= []); // true
({a:1, b:2, c:3} <= [1, 2, 3, 4, 5]); // false
({a:1, b:2, c:3} >= [1, 2, 3, 4, 5]); // true

Arrays
[2,3] <= [1,2,3]; // false
[2,3] >= [1,2,3]; // true
[5] <= [5,6]; // true
[5] >= [5,6]; // true
// seems the first value is compared
</pre>                            
        
                `,
                Operator: '<code><=</code>',
                Name: `Less than`,
                Usage: 'g() <= f()',
                Description: `Returns true, left operand is smaller than or equal to the right one.`
            },



            {
                [Symbol('title')]:'>=',
                [Symbol('code')]:`
           Please refer to the less or equal than <code><=</code> operator examples
                                        
<pre>
</pre>                            
        
                `,
                Operator: '<code>>=</code>',
                Name: `Less than`,
                Usage: 'g() >= f()',
                Description: `Returns true, left operand is greater than or equal to the right one.`
            },


]
},
];


export default function getcomparisonOperatorsData(){
    return comparisionOperatorsData;
}