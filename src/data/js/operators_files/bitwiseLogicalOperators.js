
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




]
},
];

export default function getBitwiseOperatorsData(){
    return bitwiseOperatorsData;
}