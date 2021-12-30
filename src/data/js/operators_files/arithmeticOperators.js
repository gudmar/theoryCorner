let arithmeticOperatorsData = [
{
    elementType:'Headline-3',
    content:'Arithmetic operators'
},
{
    elementType: 'Paragraph',
    content: `
        Arithmetic operators take left and right operand, perform an opperation and return the result. 
        In case types of operands do not match, an attempt to convert operands to a number is being performed.
        BigInt type will not be converted to a number by default, though <code>Number(2n)</code> works.
        In general if there is no possiblity to convert not matching type to a number, there will be an error.
        There is an exception, the addition operator <code>+</code> is capable of joining strings. Moreover
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
                <li>At least one operand is a string: converts second operand to string and reutrns a string</li>
                <li>undefined + number is NaN</li>
                <li>undefined + null is NaN</li>
                <li>null + number is the number</li>
                <li>In case of an object (and Array) and any other operand converts to a string, where 
                object conversion is '[object Object]'</li>
                <li>A BigInt will not be automaticly converted into a number, but will be converted to 
                a string if the second operand is a string</li>
            </ul>                   
<pre>
4 + 5 // 9
4 + '5' // '45'

<b>undefined and null</b>
undefined + 5 // NaN
undefined + null // NaN
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
4n + '5'; // '45

<b>String</b>
'abc' + 'cde' = 'abccde'

</pre>                            
            
            `,
            Operator: '<code>+</code>',
            Name: `Addition`,
            Usage: 'g() + f()',
            Description: `
            In case of two number type operands returns a sum in case of two string operands returnes a 
            concatenated string. In case of other types performes a conversion. See code section for more 
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
            Evaluates operands and returns their multiplicated value. There will be an attempt to 
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

</pre>                            
            
            `,
            Operator: '<code>/</code>',
            Name: `Division`,
            Usage: 'g() / f()',
            Description: `
            Evaluates operands and returns their divided value. There will be an attempt to 
            convert operands to a number if they are not a number and conversion is 
            possible
            `
        },









    ]
},

]

export default function getArithmeticsOperatorsData(){
    return arithmeticOperatorsData;
}
