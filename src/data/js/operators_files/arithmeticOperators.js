let arithmeticOperatorsData = [
{
    elementType:'Headline-3',
    content:'Arithmetic operators'
},
{
    elementType: 'Paragraph',
    content: `
        Arithmetic operators take left and right operand, perform an operation and return the result. 
        In case types of the operands do not match, an attempt to convert operands to a number is being performed.
        BigInt type will not be converted to a number by default, though <code>Number(2n)</code> works.
        In general, if there is no possibility to convert not matching type to a number, there will be an error.
        There is an exception, the addition operator <code>+</code> is capable of joining strings. Moreover,
        this operator will convert numbers to strings, so <code>5 + '5' === '55'</code>
    `
},

{
    elementType: 'ConditionalArray',
    headItems: [
        'Operator','Name','Usage','Description'
    ],
    content: [
        {
            [Symbol('title')]:'+',
            [Symbol('code')]:`
            <ul>
                <li>Both numeric operands: returns a sum</li>
                <li>At least one operand is a string: converts the second operand to string and returns a string</li>
                <li>undefined + number is NaN</li>
                <li>undefined + null is NaN</li>
                <li>undefined + string is a string</li>
                <li>null + number is the number</li>
                <li>In case of an object (and Array) and any other operand converts to a string, where 
                object conversion is '[object Object]'</li>
                <li>A BigInt will not be automatically converted into a number, but will be converted to 
                a string if the second operand is a string</li>
            </ul>                   
<pre>
4 + 5 // 9
4 + '5' // '45'

<b>undefined and null</b>
undefined + 5 // NaN
undefined + null // NaN
undefined + '5' // 'undefined5';
null + 5 // 5

<b>Object</b>
{a: 5} + 6; // 6, as equals to some block and a <code>+6</code> 
// a number with an unary operator <code>+</code>
({a: 8} + 4); // '[object Object]4'
[4] + 3; // '43'
[3] + [4]; // '44'

<b>BigInt</b>
2n + 5; // Error, bigint will not be converted
Number(2n) + 5; // 7
4n + '5'; // '45'

<b>String</b>
'abc' + 'cde' = 'abccde'

</pre>                            
            
            `,
            Operator: '<code>+</code>',
            Name: `Addition`,
            Usage: 'g() + f()',
            Description: `
            In case of two number type operands returns a sum in case of two string operands returns a 
            concatenated string. In case of two different types, performes a conversion. See code section for more 
            (in case of a non mobile device click this row)
            `
        },





        {
            [Symbol('title')]:'-',
            [Symbol('code')]:`                 
<pre>
5 - 6.5; // -1.5
'5' - '4'// 1
'5' - true; // 4
4 - null; // 4

'2n' - 1 // NaN conversion not possible
3 - 's' // NaN conversion not possible
undefined - null; // NaN, conversion not possible

2n - 1; // Error, BigInt will not be converted by default
Number(2n) - 1; // 1

</pre>                            
            
            `,
            Operator: '<code>-</code>',
            Name: `Substraction`,
            Usage: 'g() - f()',
            Description: `
            Evaluates operands and returns their difference. There will be an attempt to 
            convert operands to a number if they are not a number and conversion is 
            possible
            `
        },



        {
            [Symbol('title')]:'*',
            [Symbol('code')]:`                 
<pre>
5 * 6.5; // 32.5
'5' * '4'// 20
'5' * true; // 5
4 ) null; // 4

'2n' * 1 // NaN conversion not possible
3 * 's' // NaN conversion not possible
undefined * null; // NaN, conversion not possible

2n * 1; // Error, BigInt will not be converted by default
Number(2n) * 1; // 2

</pre>                            
            
            `,
            Operator: '<code>*</code>',
            Name: `Multiplication`,
            Usage: 'g() * f()',
            Description: `
            Evaluates operands and returns their product value. There will be an attempt to 
            convert operands to a number if they are not a number and conversion is 
            possible. 
            `
        },





        {
            [Symbol('title')]:'/',
            [Symbol('code')]:`                 
<pre>
5 / 6.5; // 0.7692307692307693
'5' / '4'// 1.25
'5' / true; // 5
4 / null; // Infinity
4 / Infinity; // 0
4 / -Infinity; // -0

'2n' / 1 // NaN conversion not possible
3 / 's' // NaN conversion not possible
undefined / null; // NaN, conversion not possible

2n / 1; // Error, BigInt will not be converted by default
Number(2n) / 1; // 2

'5' / [4]; // 1.25 as both may be converted to numbers
'4' / [2, 33]; // NaN, as array with 2 elements will not be converted to a number

</pre>                            
            
            `,
            Operator: '<code>/</code>',
            Name: `Division`,
            Usage: 'g() / f()',
            Description: `
            Evaluates operands and returns their quotient value. There will be an attempt to 
            convert operands to a number if they are not a number and conversion is 
            possible
            `
        },
// Spelling checked to this point


{
    [Symbol('title')]:'%',
    [Symbol('code')]:`   
    This is not a modulo operator known from, for example Python, or Microsoft C++ (in C++ % operator may be
    modulo or remainder, depending on the implementation).
    <table class="table">
    <thead><tr><th>expression</th><th>Remainder</th><th>Modulo</th></tr></thead>
    <tbody>
        <tr><td>10 % 3</td><td>1</td><td>1</td></tr>
        <tr><td>-10 % 3</td><td>-1</td><td>1</td></tr>
        <tr><td>10 % -3</td><td>1</td><td>-1</td></tr>
        <tr><td>-10 % -3</td><td>-1</td><td>-1</td></tr>
    </tbody>
    </table>
    So in the <u>reminder case, the sign of the result will always be the same as the sign of the first operand</u>, 
    where in the case of the modulo the sign of the result will always be the same as the sign of the second operand.
    The result should always be an integer, however, refer to the number representation article to learn why this 
    does not happen in all cases.
<pre>
 10 %  3; //  1
-10 %  3; // -1
 10 % -3; //  1
-10 % -3; // -1

0.2 % 0.5; // 0.2
// But
0.5 % 0.1; // 0.09999999999999998 :o
// This is because it is not possible to 
// represent 0.1 in binary format without an error

[-4] % [6]; // -4 - conversion to numbers
'[-4]' % [6]; // NaN - this cannot be converted anymore

Infinity % 5; // NaN
5 % Infinity; // 5

-0 % 5; // -0 - there are 2 zeros in JS
// see number representation section to learn more
5 % 0; // NaN

1 % Number.MIN_VALUE; // 0
// But
1 % 0; // NaN

</pre>                            
    
    `,
    Operator: '<code>%</code>',
    Name: `Remainder`,
    Usage: 'g() % f()',
    Description: `
    Evaluates operands and returns the remainder of their division operation. There will be an attempt to 
    convert operands to a number if they are not a number and the conversion is possible. <b>This is not
    a modulo</b> operator, see code section (in not mobile devices click on a row) to learn more
    `
},









    ]
},

]

export default function getArithmeticsOperatorsData(){
    return arithmeticOperatorsData;
}
