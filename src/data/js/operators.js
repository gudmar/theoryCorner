let data =     {
    summary: 'operators',
    title: 'operators',
    searchKeywords:`+ - / * = % > < << >> == === void 
    binary representation of a negative number
    `,
    cathegory: 'js',
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'Operators'
                },

                {
                    elementType: 'Paragraph',
                    content: `
                        
                    `
                },
                {
                    elementType:'UnsignedList',
                    content:[
                    `
                     <code>void</code>: This operator always takes an expression and evaluates it to an undefined. 
                     Can be used instead of an undefined value or to execute some JS code and return undefined, if 
                     something has to be returned,
                    `
                    ]
                },

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
                            Name: `Exponention assignment`,
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
                            Name: `Right shift assignment`,
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
                            Name: `Left shift assignment`,
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
                            Name: `Unsigned right shift assignment`,
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


                        











            ]
            },

            ]
        },


        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline-2',
                    content:'Binary representation of a negative number'
                },
                {
                    elementType:'Paragraph',
                    content:`
                    There is a <code>Number.toString([redix])</code> method that converts a number to a string representation
                    of this number in the specified redix. However as far as binary representation of a number is 
                    concerned, there is no negative number representation, as there can be only <code>0</code> or <code>1</code>,
                    no plus or minus bit is present. Moreover a sum of the positive and the negative number shuld always give a
                    <code>0</code>, so if there would be the most significant bit devoted to representation of the sign, then
                    sum of positive and negative representation of the number would not be 0:
                    `
                },
                {
                    elementType:'Code',
                    content:`
<pre>
5 - 5 == 0; but
   <span style="color: red">0</span>0000101
 + <span style="color: red">1</span>0000101
----------------
   <span style="color: red">1</span>0001010   and this is <span style="color: red">-10</span> in representation, with most significant bit being <span style="color: red">0</span>;
</pre>                    
                    `
                },
                {
                    elementType:'Paragraph',
                    content:`
                    To solve this provlem of non negative sum, there is a need to keep this most significant bit 
                    indicating the negative number, and search for the other number, that if was added to a positive
                    equivalent, would give 0. In this case number of bits that will represente the number is important.
                    Lets suppose, that number of bits that will represent the number is 8. There is a pattern:
                    <strong>2<sup>n</sup> + negativeNumber</strong>, where <strong>n</strong> is the number of bits 
                    representing the number, and the <code>negativeNumber</code> is number that needs to be converted
                    with its minus sign, so as an example conversion of <strong>-5</strong> on <strong>8</strong>
                    bits would be:<br>
                    <strong>2<sup>8</sup> + (-5) = 256 - 5 = 251</strong>, and 251 converted to binary is 
                    <strong><span style="color:red">1</span>1111011</strong>. This red bit is the most significant bit 
                    meaning that this number is negative if set to 1, and positive if set to 0. Now:
                    `
                },
                {
                    elementType:'Code',
                    content:`
<pre>
    <span style="color: red">0</span>0000101
 +  <span style="color: red">1</span>1111011
----------------
 (<span style="color: red">1</span>)00000000
</pre>                    
                    `
                },
                {
                    elementType:'Paragraph',
                    content:`
                    There is an overflow, one bit is out of this representatnion, as it becomes a 9-th
                    bit, and number representatnion has only 8 bits, so it will be ignored. And if this bit is
                    ignored, then the remaining bits are <code>00000000</code>, so equal to 0.
                    `
                },
                {
                    elementType:'SmallHeadline',
                    content:'What if someone would like to represent 255 then?'
                },
                {
                    elementType:'Paragraph',
                    content:`
                    Answer is simple. There is no 255 number in this representation. To have this number, there is a 
                    need to take more bits into account, lets say 16 to represent a single number. 8 bits represent
                    256 possibilities with a 0 included, so from 255 to 0 or from -128 to 127. With 16 bits this would 
                    be 65536 possibilites, including 0, so 65535 to 0, or 32767 to -32768 with negative numbers. 
                    An elephant will not fit into a backpack &#128578;<br>
                    Even in JS there is a limit for the numbers. Each number larger then the 
                    <code>Number.MAX_SAFE_INTEGER</code> or smaller then <code>-Number.MAX_SAFE_INTEGER</code> is
                    approximated, and a number larger than <code>number.MAX_VALUE</code> or smaller then 
                    <code>Number.MIN_VALUE</code> is <code>Infinity</code> or </code>-Infinity</code>
                    `
                },
                {
                    elementType:'SmallHeadline',
                    content:'What does this mean for a JS developer?'
                },
                {
                    elementType:'Paragraph',
                    content:`
                        Negative number conversion may be useful, if someone wants to perfoerm bitwise operations, and
                        here is a set of use cases:
                    `
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        `<code>~0 == -1</code> and <code>~-1 == 0</code>, so <code>Boolean(~-1) == false</code> and
                        conversion to boolean of any non -1 value is true. So 
                        <code>Boolean(~arr.findIndex(cb(item, index)))</code> is conversion of findIndex array method
                        to boolean`,
                        `
                        <code>(val >>> 0).toString(2)</code> gives a number bit representation. This conversion is 
                        useful if a negative number exact converion is needed.
                        `,
                        `
                        Masking
                        <code>
<pre>
function isOdd(int) {
    return (int & 1) === 1;
}
function isEven(int) {
    return (int & 1) === 0;
}
</pre>                        
                        </code>
                        `
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
                    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators',
                    description:'Tutorial'
                },
                {
                    elementType:'Link',
                    content:'iii-lo.tarman.pl/',
                    href: 'http://www.iii-lo.tarman.pl/informatyka/ladustrone.php?p1=informatyka&p2=44',
                    description:'Negative number representation'
                },
                {
                    elementType:'Link',
                    content:'blog.logrocket.com',
                    href: 'https://blog.logrocket.com/interesting-use-cases-for-javascript-bitwise-operators/',
                    description:'Use cases of bitwise operations'
                },


            ]
        }
    ]
};

export default function getJSOperatorsData(){
    return data;
}