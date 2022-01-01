// SPELL CHECKED, CORRECT!

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







{
    [Symbol('title')]:'++',
    [Symbol('code')]:`   
<ul>
<li>If <code>++<</code> is a prefix operator <code>++a</code> incrementation is done before the returnment</li>
<li>If <code>++<</code> is a postfix operator <code>a++</code> incrementation is done after the returnment</li>
<li>Bad code because of code readability issues. It might be error prone. It is better to be more verbose.</li>
</ul>
<pre>
let i = 0;
i++++; // SyntaxError: do not combine
(i++)++; // SyntaxError: left side operator not correct
++i++; // SyntaxError: again :)
let j = i++; //j is 0, i is 1; as if ++ is a postrix incrementation is done after returning
let k = ++i; //k is 2 and i is 2, as if ++ is a prefix incremetation is done before returning


let a = 1;
let b = 2;
let c = a++ + ++b;
// a is 2 after this operation, but when taken to the sum operation, it was still 1
// b is 3 and was 3 when was taken as a sum operand
// c is 4, as a was 1 when the sum was performed, and b has already been 3
// This might get tangled when used like this, and is error prone
// I guess this is the reason why not to use this.

The alternative would be:
let c = a + (b += 1);

But this is not a straightforward syntax either, so better to be more verbose:
let a = 1;
let b = 2;
let b += 1;
let c = a + b;
let a += 1;
// More lines, but better readability
</pre>                            
    
    `,
    Operator: '<code>++</code>',
    Name: `Remainder`,
    Usage: 'i++ or ++i',
    Description: `
    Increments an operand by 1 before or after returning it. This operator is considered a <b>bad code</b> and should
    not be used.
    `
},



{
    [Symbol('title')]:'--',
    [Symbol('code')]:`   
<ul>
<li>If <code>--<</code> is a prefix operator <code>--a</code> decrementation is done before the returnment</li>
<li>If <code>--<</code> is a postfix operator <code>a--</code> decrementation is done after the returnment</li>
<li>Bad code because of code readability issues. It might be error prone. It is better to be more verbose.</li>
</ul>
<pre>
let i = 1;
i----; // SyntaxError: do not combine
(i--)--; // SyntaxError: left side operator not correct
--i--; // SyntaxError: again :)
let j = i--; //j is 1, i is 0; as if -- is a postrix decrementation is done after returning
let k = --i; //k is -1 and i is -1, as if -- is a prefix decremetation is done before returning


let a = 1;
let b = 2;
let c = a-- - --b;
// a is 0 after this operation, but when taken to the sum operation, it was still 1
// b is 1 and was 1 when was taken as a sum operand
// c is 0, as a was 1 when the sum was performed, and b has already been 1
// This might get tangled when used like this, and is error prone
// I guess this is the reason why not to use this.

The alternative would be:
let c = a - (b -= 1);

But this is not a straightforward syntax either, so better to be more verbose:
let a = 1;
let b = 2;
let b -= 1;
let c = a - b;
let a -= 1;
// More lines, but better readability
</pre>                            
    
    `,
    Operator: '<code>++</code>',
    Name: `Remainder`,
    Usage: 'i-- or --i',
    Description: `
    Decrements an operand by 1 before or after returning it. This operator is considered a <b>bad code</b> and should
    not be used.
    `
},




{
    [Symbol('title')]:'unary -',
    [Symbol('code')]:`                      
    Normally --1 is +1, but due to the fact, that there is an <code>--</code> operator in JS this should be written 
    with brackets: <code>-(-1)</code>. However <code>-+-+-1 === -1</code> is true without any error
<pre>
let a = 10;
a =- 1; // a is -1 !!! Note. This is not the same as <code>a -= 1</code>
// In JS there is no =- operator, and this may be the cause of a bug. 
let a = -1; // The correct way of using spaces;

let a = -+-+-1; // -1;
let a = ---1; // Error, should be -(--a);

-'-4'; // 4
'-+-+4' + 2; // NaN

</pre>
    `,
    Operator: '<code>unary -</code>',
    Name: `Unary negation`,
    Usage: '-i',
    Description: `
    Has only a right operand. Converts the operand to the number if necessary and doable, converts a positive 
    operand to its negative substitute, and a negative operand to its positive substitute. Works like a <code>Number(a) * (-1)</code>
    `
},


{
    [Symbol('title')]:'unary +',
    [Symbol('code')]:`                      
    Normally ++1 is +1, but due to the fact, that there is an <code>++</code> operator in JS this should be written 
    with brackets: <code>+(+1)</code>. However <code>+-+-+1 === 1</code> is true without any error. This is pure 
    theory, as it is better to write <code>1</code>
<pre>
let a = 10;
let a =+ 1; // a is 1 !!! Note. This is not the same as <code>a += 1</code>
// In JS there is no =+ operator, and this may be the cause of a bug. 
let a = -1; // The correct way to use spaces;

let a = +-+-+1; // 1;
let a = +++1; // Error, should be +(++a);

</pre>
    `,
    Operator: '<code>unary +</code>',
    Name: `Unary plus`,
    Usage: '-i',
    Description: `
    Has only a right operand. Converts the operand to the number if necessary and doable, Perform the 
    evaluation of the operand if necessary. Does nothing more, because it converts a positive number to positive,
    and negative to the negative. May be omitted.
    `
},


{
    [Symbol('title')]:'**',
    [Symbol('code')]:`                      
    In some languages (PHP, Pythom) ** has a higher precedence than unary operators. In JS if a left side operator
    has to have an unary operator applied, it should, together with the unary operator, be surrounded with brackets.
    
<pre>
2 ** 9; // 512;
2 ** -9; //0.001953125;
-2 ** 9; // Error
(-2) ** 9; // -512;

(-2)**1.345; // NaN; In reality, this is a complex number: (-1.18868303 - 2.24503157 i)
// Would be calculated by Python, but not by JS
// Is JS worst? It has not a build in mechanism, but can be done with a library:
// https://mathjs.org/
math.pow(-2, 1.345); // u {re: -1.1886830266845214, im: -2.2450315667823326}
// This is math.pow, not Math.pow!!

'3' ** 4; // 81


</pre>
    `,
    Operator: '<code>**</code>',
    Name: `Exponentiation`,
    Usage: 'a ** b',
    Description: `
    <code>Math.pow(a, b)</code> except <code>**</code> accepts BigInts. Returns a power of b. 
    Left side operand may not have an unary operator directly applied.
    `
},


    ]
},

]

export default function getArithmeticsOperatorsData(){
    return arithmeticOperatorsData;
}
