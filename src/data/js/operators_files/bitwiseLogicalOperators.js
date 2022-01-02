
let bitwiseOperatorsData =     [
    {
        elementType:'Headline-3',
        content:'Bitwise operators'
    },
    {
        elementType: 'Paragraph',
        content: `
            Bitwise operators are covered in more details in the <a href="./theory/bitwise%20use%20cases">bitwise use cases</a>
            article. This is just a summary.
        `
    },
    {
        elementType: 'UnsignedList',
        content: [
            `Numbers in JS are represented in a 
            <a href = "./theory/number%20representation">double precision floating point representation</a>
            However the longest it is possible they are represented on 32 bits, as an integer. Double precision
            is applied only if the number does not fit into range -2<sup>31</sup> to 2<sup>31</sup> or becomes a 
            fraction. 
            `,
            `Bitwise operations are safest in the range of numbers, that can be represented on 32 bits. 
            In case of the bigger number only the last 32 bit part is taken into account: <code>~85899345925 === ~-5</code>,
            <code>~5.35 === ~ 5<code>`,
            `There are problems when shifting with a bitwise operator with a number of bits >= 32, because in some 
            circumstances last bit is discarded, and on other occassions it becomes rewinded back to the first positions:
            <code>5 >> 64 === 5</code>, but <code>5 >> 65 === 2</code>. This is predictable, however may be error prone.`
        ]
    },

    {
        elementType: 'ConditionalArray',
        headItems: [
            'Operator','Name','Usage','Description'
        ],
        content: [
            {
                [Symbol('title')]:'~',
                [Symbol('code')]:`
                <ul>
                    <li><code>~0</code>: 1</li>
                    <li><code>~1</code>: 0</li>
                </ul>

<pre>
~-1; // 0;
~5; // -6; as -6 is 11111111111111111111111111111010 and -5 is 101
~4; // -5;
~4.32; // -5
~(2**32); // -1, as ((2**32)>>>0) is 0, this number cannot be 
// represented on 32 bits, due to the fact, that the most significant bit is 
// a sign bit
</pre>                            
                `,
                Operator: '<code>~</code>',
                Name: `Bitwise NOT`,
                Usage: '~ a',
                Description: 'Inverts bits of its operand,'
            },


            {
                [Symbol('title')]:'&',
                [Symbol('code')]:`
                <ul>
                    <li><code>0 & 0</code>: 0</li>
                    <li><code>0 & 1</code>: 0</li>
                    <li><code>1 & 0</code>: 0</li>
                    <li><code>1 & 1</code>: 1</li>
                    <li><code>A & 0</code>: 0</li>
                    <li><code>A & ~A</code>: 0</li>
                    <li><code>A & A</code>: A</li>
                    <li><code>A & -1</code>: A</li>
                </ul>

<pre>
22 & 21; // 20
// 22 = 10110 &
// 21 = 10101 
// 20 = 10100

22.34 & 21.32; //20

</pre>                            
                `,
                Operator: '<code>|</code>',
                Name: `Bitwise OR`,
                Usage: 'a | b',
                Description: 'Performs a logical OR operation for each bit position of operands'
            },

            {
                [Symbol('title')]:'|',
                [Symbol('code')]:`
                <ul>
                    <li><code>0 | 0</code>: 0</li>
                    <li><code>0 | 1</code>: 1</li>
                    <li><code>1 | 0</code>: 1</li>
                    <li><code>1 | 1</code>: 1</li>
                    <li><code>A | 0</code>: A</li>
                    <li><code>A | ~A</code>: -1</li>
                    <li><code>A | A</code>: A</li>
                    <li><code>A | -1</code>: -1</li>
                </ul>

<pre>
22 | 21; // 23
// 22 = 10110 |
// 21 = 10101 
// 20 = 10111

22.34 | 21.32; //20

</pre>                            
                `,
                Operator: '<code>|</code>',
                Name: `Bitwise OR`,
                Usage: 'a | b',
                Description: 'Performs a logical OR operation for each bit position of operands'
            },



            {
                [Symbol('title')]:'^',
                [Symbol('code')]:`
                <ul>
                    <li><code>0 ^ 0</code>: 0</li>
                    <li><code>0 ^ 1</code>: 1</li>
                    <li><code>1 ^ 0</code>: 1</li>
                    <li><code>1 ^ 1</code>: 0</li>
                    <li><code>A ^ 0</code>: A</li>
                    <li><code>A ^ ~A</code>: -1</li>
                    <li><code>A ^ A</code>: 0</li>
                    <li><code>A ^ -1</code>: ~A</li>
                </ul>

<pre>
22 ^ 21; // 3
// 22 = 10110 ^
// 21 = 10101 
// 20 = 00011

22.34 ^ 21.32; //3

</pre>                            
                `,
                Operator: '<code>^</code>',
                Name: `Bitwise ^`,
                Usage: 'a ^ b',
                Description: 'Performs a logical XOR operation for each bit position of operands'
            },



            
            {
                [Symbol('title')]:'<<',
                [Symbol('code')]:`
                

<pre>
// tests the replacement function
let left = (a, b) => {return (Math.floor(a) * (2 ** (Math.floor(b>>>0) % 32))) & -1}
let leftBit = (a, b) => {return a << b}
console.log(left(5, 32) === leftBit(5, 32)); // true
console.log(left(5, 33) === leftBit(5, 33)); // true
console.log(left(5, 2) === leftBit(5, 2)); // true
console.log(left(5.3, 2.3) === leftBit(5.3, 2.3)); // true
console.log(left(5, -1) === leftBit(5, -1)); // true
console.log(left(52, -2) === leftBit(52, -2)); // true
console.log(left(5, 0) === leftBit(5, 0)); // true

22 << 2; // 88
// 22 = 0010110 << 2
// 28 = 1010100 

(5.5 << 2.5) === (5 << 2); //true;

5 << -1; // -2147483648
5 << -2; // 1073741824
5 << -3; // -1610612736
// 101 << -1 is 10000000000000000000000000000000
// 101 << -2 is 01000000000000000000000000000000
// 101 << -3 is 10100000000000000000000000000000


</pre>                            
                `,
                Operator: '<code><<</code>',
                Name: `Left shift`,
                Usage: 'a << b',
                Description: `
                In general:
                <code>a << b is a * (2 ** b) </code>, in reality: <br>
                <code>Math.floor(a) * (2 ** (Math.floor(b>>>0) % 32))) & -1</code>,<br>
                Changes the left and right operand to the 32 integer representation, and shifts the left operand 
                bits the number of positions indicated by the right operand modulo 32 to the left.
                
                `
            },





            {
                [Symbol('title')]:'>>',
                [Symbol('code')]:`
                

<pre>
// tests the replacement function
let right = (a, b) => {return (Math.floor(a) / (2 ** (Math.floor(b>>>0) % 32))) & -1}
let rightBit = (a, b) => {return a >> b}
console.log(right(5, 32) === rightBit(5, 32)); // true
console.log(right(5, 33) === rightBit(5, 33)); // true
console.log(right(5, 2) === rightBit(5, 2)); // true
console.log(right(5.3, 2.3) === rightBit(5.3, 2.3)); // true
console.log(right(5, -1) === rightBit(5, -1)); // true
console.log(right(52, -2) === rightBit(52, -2)); // true
console.log(right(5, 0) === rightBit(5, 0)); // true

22 >> 2; // 5
// 22 = 0010110 << 2
//  5 = 0000101 

(5.5 >> 2.5) === (5 >> 2); //true;
-5 >> 2; // -2
-5.5 >> 2.5; // 1
// -5 is 11111111111111111111111111111011
// -2 is 11111111111111111111111111111110

5 >> 1; // 2
5 >> 2; // 1


5 >> -1; // 0;
5 >> - 2; // 0;
5 >> - 3; // 0;
...
5 >> -30; // 1
5 >> -31; // 2
5 >> -32; // 5
// 101 >> -30 is 00000000000000000000000000000001
// 101 >> -31 is 00000000000000000000000000000010
// 101 >> -32 is 00000000000000000000000000000101

5 >> -1; // -1;
5 >> -3; // -1;
...
5 >> -30; // -2;


</pre>                            
                `,
                Operator: '<code>>></code>',
                Name: `Sign-propagating Right shift`,
                Usage: 'a >> b',
                Description: `
                In general:
                <code>a >> b is Math.floor(a / (2 ** b)) </code>, in reality: <br>
                <code>Math.floor(a) * (2 / (Math.floor(b>>>0) % 32))) & -1</code>,<br>
                Changes the left and right operand to the 32 bit integer representation, and shifts the left operand 
                bits the number of positions indicated by the right operand modulo 32 to the right.
                
                `
            },







]
},
];

export default function getBitwiseOperatorsData(){
    return bitwiseOperatorsData;
}