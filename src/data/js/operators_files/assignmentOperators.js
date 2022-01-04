
let assignmentOperatorsData =     [
    {
        elementType:'Headline-3',
        content:'Assignment operators'
    },
    {
        elementType: 'Paragraph',
        content: `
            Assignment operators assigns its right operand value to its left operand value.
        `
    },

    {
        elementType: 'ConditionalArray',
        headItems: [
            'Operator','Name','Usage','Description'
        ],
        content: [
            {
                [Symbol('title')]:'=',
                [Symbol('code')]:`
                
<pre>
let sum = function(acc, element){
return acc + element;
};
let a = 0; let b = 1; let c = 2;
let d = 3, e = 4; // d is 3, e is 4;
e = a + b + [c, d, e].reduce(sum, 0);
console.log(e);// 10;

e = a = b = c = d;
//e, a, b, c and d, all are equal to 3, as 'd' was 3
//when assigned

Chain assignments evaluate from left to right, but then they are assigned from
right to left:
a = (b = (c = (f() )))
However chaining assignments is discouraged, aspecialy with <code>const</code>
<code>let</code>, <code>var</code> it creates strage behaviours:
let a = b = c = 5;
will declare only a, and the rest (c, b) will:
1) Not be declared at all and cause an error,
2) May silently be declared as global variables.

</pre>                            
                
                `,
                Operator: '<code>=</code>',
                Name: `Assignment`,
                Usage: 'a = f()',
                Description: 'Assigns the right evaluated expression to its left operand,'
            },




            {
                [Symbol('title')]:'+=',
                [Symbol('code')]:`          
<pre>
let a = 1;
let b = 2
let c = '4';
let d = 'word';
let e = 5;

a += b; console.log(a); // 3;
a += c; console.log(a); 
// '34', because c was a string a gets converted to a string,
// and the result is a string;

d += a; // d is word34, as a was 34, and addition assignment 
//concatenates strings,
b =+ a; // b is now 34, as there is no =+
//operator in JS, so '=' is an assignment, and '+ a'
// converts a (that was a string of 34) back to the number, so
// b is a number of 34


</pre>                                   
                `,
                Operator: '<code>+=</code>',
                Name: `Addition assignment`,
                Usage: 'a += f()',
                Description: `Adds or concatenates the evaluated expression on the right to the left operand
                and assignes the result to the operand on the left,`
            },





            {
                [Symbol('title')]:'-=',
                [Symbol('code')]:`          
<pre>
let a = 'Hello World';
a -= 'World'; // NaN, no string substraction
let b = 10;
b -= 1; // 9;
</pre>                                   
                `,
                Operator: '<code>-=</code>',
                Name: `Substraction assignment`,
                Usage: 'a -= f()',
                Description: `
                <code>a = a - f()</code> 
                Substracts the evaluated expression on the right from the left operand, and assignes the
                reusult to the operand on the left,
                `
            },




            {
                [Symbol('title')]:'*=',
                [Symbol('code')]:`          
<pre>
let a = 'Hello World';
a *= 'World'; // NaN, no string multiplication
let b = 10;
b *= 7; // 70;
</pre>                                   
                `,
                Operator: '<code>*=</code>',
                Name: `Multiplication assignment`,
                Usage: 'a *= f()',
                Description: `
                <code>a = a * f()</code> 
                Multiplicates the evaluated expression on the right with the left operand and assignes to the 
                variable on the left,
                `
            },



            {
                [Symbol('title')]:'/=',
                [Symbol('code')]:`          
<pre>
let a = 'Hello World';
a /= 2; // NaN, no string division
let b, c, d, e;
b = c = d = e = 70;
b /= 7; // 10;
c /= -0; // -Infinity;
d /= +0; // +Infinity;
</pre>                                   
                `,
                Operator: '<code>/=</code>',
                Name: `Division assignment`,
                Usage: 'a /= f()',
                Description: `
                <code>a = a / f()</code> 
                Divides the left operand by the evaluated expression on the rigth, and assigns the result to the
                operand on the left,
                `
            },


            {
                [Symbol('title')]:'%=',
                [Symbol('code')]:`          
<pre>
let a = 'Hello World';
a %= 2; // NaN, no string division
let b, c, d, e;
b = c = d = e = 10;
b /= 7; // 3;
c /= -0; // NaN;
d /= 0; // NaN;
</pre>                                   
                `,
                Operator: '<code>%=</code>',
                Name: `Remainder assignment`,
                Usage: 'a %= f()',
                Description: `
                <code>a = a % f()</code> 
                Divides the left operand by the evaluated expression on the rigth, and assigns the remainder to the
                operand on the left,
                `
            },



            {
                [Symbol('title')]:'**=',
                [Symbol('code')]:`          
<pre>
let a = 'Hello World';
a **= 2; // NaN, no raising a string to any power
let b, c, d;
b = c = 5;
d = Infinity;
b **= 3; // 125;
b **= +0; // 1;
d **= -0; // 1;
b **= Infinity; // 1 ** Infinity == NaN
c **= Infinity; // Infinity;
d **= Infinity; // Infinity;
</pre>                                   
                `,
                Operator: '<code>**=</code>',
                Name: `Exponential assignment`,
                Usage: 'a **= f()',
                Description: `
                <code>a = a ** f()</code> 
                Raises the value of a variable to the power of the right operand and assigns the result to the
                left operand
                `
            },




            {
                [Symbol('title')]:'<<=',
                [Symbol('code')]:`          
<pre>
let a = 5;
let str = 'string';
let inf = Infinity;
let boolT = true;
let boolF = false;
a << =2; //20;
a.toString(20); //10100
str <<= 4; // 0;
inf <<= 3; // 0;
boolT <<= 3; // 8
boolT.toString(2); // 1000
boolF <<= 5; // 0;

let m = -5;
m <<= 3; // -40

In general:
n << m is n ** (2*m)
</pre>                                   
                `,
                Operator: '<code><<=</code>',
                Name: `Left shift assignment`,
                Usage: 'a <<= f()',
                Description: `
                <code>a = a <<= f()</code> 
                Moves the specified amount of bits to the left and asigns the result to the left operand;
                `
            },



            {
                [Symbol('title')]:'>>=',
                [Symbol('code')]:`          
<pre>
let a, b, c;
a = b = c  = 100;
let str = 'string';
let inf = Infinity;
let boolT = true;
let boolF = false;
a >>= 1; // 50;
b >>= 2; // 25;
c >>= 3; // 12;
str >>= 4; // 0;
inf >>= 3; // 0;
boolT >>= 0; // 1;
boolT >>= 1; // 0;
boolF >>= 5; // 0;

let m = -100;
m >>= 1;//-50

In general:
n >> m is floor(n ** (0.5 * m));
</pre>                                   
                `,
                Operator: '<code>>>=</code>',
                Name: `Sign propagating right shift assignment`,
                Usage: 'a >>= f()',
                Description: `
                <code>a = a >>= f()</code> 
                Moves the specified amount of bits to the right and asigns the result to the left operand;
                If a negative number is processed, then the literal negative value is taken
                `
            },


            {
                [Symbol('title')]:'>>>=',
                [Symbol('code')]:`          
<pre>
See representation of negative numbers section for
more details.
let positive =  100;
let negative = -100;
positive >>>= 1; // 50;
negative >>>= 1; // 2147483598
-100 >> 1; // -50

</pre>                                   
                `,
                Operator: '<code>>>>=</code>',
                Name: `Zero-fill right shift assignment`,
                Usage: 'a >>>= f()',
                Description: `
                <code>a = a >>>= f()</code> 
                Moves the specified amount of bits to the right and asigns the result to the left operand;
                `
            },


            {
                [Symbol('title')]:'&=',
                [Symbol('code')]:`          
<pre>
let a = 5; // 101;
let b = 2; // 010;
a &= b; // 0 & 1 is 0, so 000 is the result;
console.log(a); // 0

let c = 5;
c &= 3; // 101 and 011, common bit is 001,
console.log(c); // 1

let d = -5; // 11111111111111111111111111111011
// this is the negative number representatnion:
// (a >>> 0).toString(2);
d &= 5; // 00...00101
//common bit of 1011 and 0101 is 0001
console.log(d); // 1


</pre>                                   
                `,
                Operator: '<code>&=</code>',
                Name: `Bitwise AND assignment`,
                Usage: 'a &= f()',
                Description: `
                <code>a = a &= f()</code> 
                Takes a binary representation of both operands, does a bitwise AND operation on them 
                and assigns the result to the left operator,
                `
            },


            {
                [Symbol('title')]:'^=',
                [Symbol('code')]:`          
<pre>
0 ^ 0 == 0;
1 ^ 1 == 0;
0 ^ 1 == 0;
1 ^ 0 == 0;
let a = 5;
a ^= 3; // 110 is 6
let b = -5;
b ^= 3; 
// 11111111111111111111111111111011 ^
// 00000000000000000000000000000101 =
// 11111111111111111111111111111000 
// and that is -8

</pre>                                   
                `,
                Operator: '<code>^=</code>',
                Name: `Bitwise XOR assignment`,
                Usage: 'a ^= f()',
                Description: `
                <code>a = a ^= f()</code> 
                Takes a binary representation of both operands, does a bitwise XOR on them and assigns the 
                result to the left operator,
                `
            },




            {
                [Symbol('title')]:'|=',
                [Symbol('code')]:`          
<pre>
let a = 5;
a |= 3; // 101 | 011 is 111 so 7
let b = -8;
b |= 8; // -8
// -8 is  11111111111111111111111111111000
// +8 is  00000000000000000000000000001000
// result 11111111111111111111111111111000

</pre>                                   
                `,
                Operator: '<code>|=</code>',
                Name: `Bitwise OR assignment`,
                Usage: 'a |= f()',
                Description: `
                <code>a = a |= f()</code> 
                Takes a binary representation of both operands, does a bitwise OR on them and assigns the 
                result to the left operator,
                `
            },

            {
                [Symbol('title')]:'||=',
                [Symbol('code')]:`          
<pre>
false || false === false;
true || false === true;
false || true === true;
true || true === true;

so:
let a = false;
a ||= false; //false
a ||= true; //true
a ||= false; // true, as it was already true in previous step;

let b = 5;
b ||= true; //5
b ||= false; //5

let c = 0;
c ||= true; // 1

5 || 7 === 5;
7 || 5 === 7;
null || 'something' === 'something'

false || null === null
false || undefined === undefined
null || false === false;
// it is important what will be the right side operand

NOTE:
let notChanged = 0;
let f = () => {
notChanged = 5;
return true;
}
let d = true;
d ||= f();
// notChanged is still 0,
// as there was no need to evaluate it

</pre>                                   
                `,
                Operator: '<code>||=</code>',
                Name: `Logical OR assignment`,
                Usage: 'a ||= f()',
                Description: `
                <code>x = y || f()</code> <code>x || (y = z)</code>, not <code> x = x || y</code>
                Evaluates the right side operand expression <strong>only if the left site does not 
                determine the result</strong> and assigns to x <strong>only if the right sight
                is evaluated and would change the left site operand value</strong>. However if the 
                right side operand is evaluated, the assertion will take place 
                <code>null || undefined === undefined</code> 
                `
            },

            {
                [Symbol('title')]:'&&=',
                [Symbol('code')]:`          
<pre>
false && false === false;
true  && false === false;
false && true === false;
true  && true === true;

so:
let a = false;
a &&= false; //false
a &&= true; //false
a &&= false; // No possibility to make true out of this with &&
let b = true;
b &&= true; //true
b &&= false; //false
b &&= true; //false, as was made false in previous line

let b = 6;
b &&= true; // true
b &&= false; // false

let c = true;
c &&= 5; // 5
c &&= false; 
c &&= 5; //false

5 && 7 === 7;
7 && 5 === 5;
null && 'something' === null;

NOTE:
let notChanged = 0;
let f = () => {
notChanged = 5;
return true;
}
let d = false;
d &&= f();
// notChanged is still 0,
// as there was no need to evaluate it

</pre>                                   
                `,
                Operator: '<code>&&=</code>',
                Name: `Logical AND assignment`,
                Usage: 'a &&= f()',
                Description: `
                <code>x = y && f()</code> <code>x && (y = z)</code>, not <code> x = x && y</code>
                Evaluates the right side operand expression <strong>only if the left side does not 
                determine the result</strong> and assigns to x the x AND f() result <strong>only if
                necessarry</strong>
                `
            },



            {
                [Symbol('title')]:'??=',
                [Symbol('code')]:`          
<pre>
let a = null;
let b = undefined;
a ??= undefined; 
// a is undefined
b ??= null;
// b is null;
a ??= 5; // a is 5
b ??= 'val'; // b is 'val'
a ?? 7; // a is 5, as it was not undefined or null

NOTE:
let notChanged = 0;
let f = () => {
notChanged = 5;
return true;
}
let d = '';
d ??= f();
// notChanged is still 0,
// as there was no need to evaluate it, d was != undefined or null

</pre>                                   
                `,
                Operator: '<code>??=</code>',
                Name: `Logical nullish assignment`,
                Usage: 'a ??= f()',
                Description: `
                Assigns a right hand expression only if left hand operand is <code>null</code> or
                <code>undefined</code>. If left hand operand is not null or undefined the right hand
                expression is not evaluated at all.
                `
            },



]
},
];

export default function getAssignmentOperatorsData(){
    return assignmentOperatorsData;
}