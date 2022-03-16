// SPELL CHECKED, CORRECT!
let data =     {
    summary: 'number representation',
    title: 'Number representation',
    searchKeywords:`float double floating point 32 53 64 number integer fraction negative number
    `,
    cathegory: 'js',
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'Number representation'
                },

                {
                    elementType: 'Paragraph',
                    content: `
                    There are two primitive number types in JS, and these are: <code>Number</code> and <code>
                    BigInt</code>. More common in usage is a <code>Number</code> type, as it is safely represents positive 
                    integers,
                    negative integers, and floating point positive and negative numbers in the range of -(2<sup>53</sup>-1) to
                    2<sup>53</sup>-1. A <code>Number</code> type is capable of representing even bigger numbers (from
                    <code>-Number.MAX_VALUE</code>, that is equal to -1.8<sup>308</sup>, to <code>Number.MAX_VALUE</code>, that
                is equal to 1.8<sup>308</sup>, but these numbers are only an approximation of a precise value). BigInts are
                capable of representing much bigger numbers than 2<sup>53</sup>-1, but they are less efficient and not fully 
                compatible with a <code>Number</code> type, so in most usages should be avoided. In this article we will concentrate
                on a <code>Number</code> type only.
                    `
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    A <code>Number</code> type is always the <code>Number</code> type, but it may be represented internally
                    in two different ways. The <code>Number</code> type should be represented as a double precision floating
                    point, but if it is small enough (in range -2<sup>31</sup> to 2<sup>31</sup>) and is an
                    integer, it will be represented only in 32 bites.
                    `
                },
                {
                    elementType:'Headline-2',
                    content:'<span id = "internalIntegerRepresentation">Internal integer representation</span>'
                },
                {
                    elementType: 'UnsignedList',
                    content: [
                        `If a number is between -2<sup>31</sup> and 2<sup>31</sup>, and`,
                        `If a number is an integer, then`,
                    ]
                },
                {
                    elementType:'Paragraph',
                    content:`it will be represented in a single precision (32 bit) plain binary format, where the most 
                    significant bit will be a sign bit. 1 is for a negative number, and a 0 is for a positive one.
                    The number will be represented as 32 bit plain integer as long as it is possible. And there is no 
                    problem with that, as every primitive type in JS (including a <code>Number</code>) is not mutable.
                    So if a new, bigger value is assigned under a variable, this bigger value is created from scratches
                    anyway.
                    `
                },
                {
                    elementType:'Paragraph',
                    content:`
                    32 bit sized numbers have some features, bigger numbers do not have:
                    `
                },
                {
                    elementType: 'UnsignedList',
                    content: [
                        `bitwise operations may be done on these numbers,`,
                        `these numbers may be an index of an array. If there is an attempt to create a bigger
                        array, an error will occur or added values will be indexed with a string, creating key-value
                        pairs`,
                    ]
                },
                {
                    elementType:'Paragraph',
                    content:`
                    But how are negative numbers represented in this plain binary notation? Simple sign will not be enough.
                    Lets considere negative representation on a simpler - 8-bit representation example:
                    `
                },

                {
                    elementType:'Headline-3',
                    content:'<span id="negativeRepresentation">Negative number representation<span>'
                },
                {
                    elementType:'Paragraph',
                    content:`
                    In computer science, there is no natural way to represent a negative number 
                    , as there can be only <code>0</code> or <code>1</code>,
                    no plus or minus sign is present. The sum of the positive and the negative numbers should always give a
                    <code>0</code>, so even if there would be only a sign bit introduced, the solution would not be good enough:
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
                    To solve this problem of non negative sum, there is a need to keep this most significant bit 
                    indicating the negative number, and search for the other number, that if was added to a positive
                    equivalent, would give 0. In this case number of bits that will represent the number is important.
                    Let us suppose, that the number of bits that will represent the number is 8. There is a pattern:
                    <strong>2<sup>n</sup> + negativeNumber</strong>, where <strong>n</strong> is the number of bits 
                    representing the number, and the <code>negativeNumber</code> is number that needs to be converted
                    with its minus sign, so as an example conversion of <strong>-5</strong> represented with
                    <strong>8</strong> bits
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
                    There is an overflow, one bit is out of this representation, as it becomes a 9-th
                    bit, and number representation has only 8 bits, so it will be ignored. And if this bit is
                    ignored, then the remaining bits are <code>00000000</code>, so equal to 0.
                    `
                },
                {
                    elementType:'SmallHeadline',
                    content:'What if someone would like to represent 257 on 8 bits then?'
                },
                {
                    elementType:'Paragraph',
                    content:`
                    The answer is simple. There is no 257 number in this representation. To have this number, there is a 
                    need to take more bits into account, lets say 16 to represent a single number. 8 bits represent
                    256 possibilities with a 0 included, so from 255 to 0 or from -128 to 127. With 16 bits this would 
                    be 65536 possibilities, including 0, so 65535 to 0, or 32767 to -32768 with negative numbers. 
                    An elephant will not fit into a backpack &#128578;<br>
                    Even in JS there is a limit to the numbers. Each number larger than the 
                    <code>Number.MAX_SAFE_INTEGER</code> or smaller than <code>-Number.MAX_SAFE_INTEGER</code> is
                    approximated, and a number larger than <code>number.MAX_VALUE</code> or smaller then 
                    <code>Number.MIN_VALUE</code> is <code>Infinity</code> or </code>-Infinity</code>
                    `
                },

/// HERE SPELL CHECK ENDED

                {
                    elementType:'Headline-3',
                    content:'<span id="fractionRepresentation">Fractions in binary codding<span>'
                },
                {
                    elementType:'Paragraph',
                    content:`
                    <table class = "table">
                    <thead>
                        <tr>
                            <th>number:</th>
                            <th>0.1 (2<sup>-1</sup>) 0.5</th>
                            <th>0.01 (2<sup>-2</sup>) 0.25</th>
                            <th>0.001 (2<sup>-3</sup>) 0.125</th>
                            <th>0.0001 (2<sup>-4</sup>) 0.0625</th>
                            <th>Equals 0.0625</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>0.6875</td>
                            <td>1</td>
                            <td>0</td>
                            <td>1</td>
                            <td>1</td>
                            <td>0.1011</td>
                        </tr>
                        <tr>
                            <td>0.375</td>
                            <td>0</td>
                            <td>1</td>
                            <td>0</td>
                            <td>1</td>
                            <td>0.0101</td>
                        </tr>
                        <tr>
                            <td>0.5625</td>
                            <td>1</td>
                            <td>0</td>
                            <td>0</td>
                            <td>1</td>
                            <td>0.1001</td>
                        </tr>
                    </tbody>
                </table>
                    `
                },

                {
                    elementType:'SmallHeadline',
                    content:'The problem with the binary fractions'
                },

                {
                    elementType:'Paragraph',
                    content:`If we take a decimal fraction into consideration, it always has some power of 
                    10 in the denominaror. 1/10 is 0.1, 1/5 = 2/10 is 0.2, 1/100 is 0.01. If we want to represent a
                    fraction that's denominator is not the power of 10, then there is a problem: 1/3 = 0.333(3)
                    This fraction will never be a precise number, it will always be an approximation with an error.
                    `
                },
                {
                    elementType:'Paragraph',
                    content:`
                    In case of binary fractions the same phenomenon appears. In this case however, it is not possible to
                    represent a fraction, that has in denominator a number that is not a power of 2, so:
                    1/2 = 0b0.1, 1/4 = 0b0.01, 1/8 = 0b.001, but 1/10 will be 0b0.00011(0011), so only an approximation.
                    There is no possibility to represent some binary fractions precisely. <br>
                    <code>0.1 + 0.2 == 0.30000000000000004</code><br>
                    `
                },
                {
                    elementType:'NoteWarning',
                    content:`
                    Fractions should not be compared. They should be rounded in some way for safety reasons
                    `
                },          
                {
                    elementType:'Code',
                    content:`
<pre>                    
function compareFractions(a, b){
    let ep = 2**-53;
    return Math.abs(a - b) < ep;
}

// This function should solve fraction comparation in JS
</pre>
                    `
                },





                {
                    elementType:'Headline-2',
                    content:`Double precision floating point representation`
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    Number cannot be represented as a 32 bit integer if
                    `
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        'If is not an integer value, so if it has a fraction part',
                        `If it is out of range -(2<sup>31</sup>) to 2<sup>31</sup> (31 because one bit is reserved for 
                        a sign),`
                    ]
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    In case a number cannot be internally represented in 32 bits, it will be stored as a <strong>
                    double precision floating point</strong> number. It will take 2 x 32 bits (double precision) = 64 bits.
                    In most situations a developer will not notice the difference, as this is still the same <code>Number</code>
                    type. The difference will be noticeable when someone tries to do bitwise operations on these numbers.
                    But how are these numbers stored in the memory?
                    `
                },
                {
                    elementType:'SmallHeadline',
                    content:'Scientific notation'
                },
                {
                    elementType:'Paragraph',
                    content:'A number in decimal format may be represented as a:'
                },
                {
                    elementType: 'Code',
                    content: `
<pre>
mantissa * 10<sup>exponent</sup>
</pre>                    
                    `
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        `The <code>mantissa</code> is a significant integer. Significant means that it has no zeros on
                        either left of right side. Only zeros in the middle are allowed. Other zeros may be cut off, and
                        represented in the exponent part,`,
                        `The <code>exponent</code> is an integer exponent. If negative, it will move the point to the left
                        creating a fraction part of the number, and if positive it will add zeros to the end`
                        
                    ]
                },
                {
                    elementType:'Paragraph',
                    content:`
                    <table class="table">
                        <thead>
                        <tr><th>Decimal notation</th><th>Scientific decimal notation</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>0.234</td><td>234 * 10<sup>-3</sup></td></tr>
                            <tr><td>234000</td><td>234 * 10<sup>3</sup></td></tr>
                            <tr><td>234.567</td><td>234567 * 10<sup>-3</sup></td></tr>
                        </tbody>
                    </table>
                    `
                },

                {
                    elementType:'SmallHeadline',
                    content:'Normalized notation'
                },
                {
                    elementType:'Paragraph',
                    content:'A number in decimal format may be represented as a:'
                },
                {
                    elementType: 'Code',
                    content: `
<pre>
mantissa * 10<sup>exponent</sup>
</pre>                    
                    `
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        `The <code>mantissa</code> is a number with a fraction part, in this notation there is only a 
                        <strong>single digit</strong> on the left side of the point. The rest of the number is the 
                        fraction part,`,
                        `The <code>exponent</code> is an integer exponent. If negative, it will move the point to the left
                        creating a fraction part of the number, and if positive it will add zeros to the end`
                    ]
                },

                {
                    elementType:'Paragraph',
                    content:`
                    <table class="table">
                        <thead>
                        <tr><th>Decimal notation</th><th>Normalized decimal notation</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>0.234</td><td>2.34 * 10<sup>-1</sup></td></tr>
                            <tr><td>234000</td><td>2.34 * 10<sup>5</sup></td></tr>
                            <tr><td>234.567</td><td>2.34567 * 10<sup>2</sup></td></tr>
                        </tbody>
                    </table>
                    `
                },
                {
                    elementType:'Paragraph',
                    content:`Of course, this notation is more generic, as it may be applied not only to the 
                    decimal format:`
                },
                {
                    elementType: 'Code',
                    content: `
<pre>
mantissa * base<sup>exponent</sup>
</pre>                    
                    `
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        `The <code>mantissa</code> is a number with a fraction part, in this notation there is only a 
                        <strong>single digit</strong> on the left side of the point. The rest of the number is the 
                        fraction part.,`,
                        `
                        <code>base</code> is a base of the calculation system. In binary it will be 2, in the hexadecimal
                        it will be 16 (f)
                        `,
                        `<code>exponent</code> is an integer exponent. If negative it will move the point to the left
                        , and if positive it will move the point to the right, and finally it will add zeros to the 
                        right of the created number,`
                    ]
                },

                {
                    elementType:'Paragraph',
                    content:`In case of binary numbers this will look like the below example`
                },
                {
                    elementType: 'Code',
                    content: `
<pre>
(-1)<sup>sign</sup> * 1.fraction * 2<sup>exponent</sup>
</pre>                    
                    `
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        `<code>fraction</code> in binary number's mantissa will always start with 1, so there is only
                        a fraction element that will change,
                        `,
                        `<code>sign</code> is a 0 or 1 value indicating if the result will be positive or negative,
                        `,
                        `The <code>exponent</code>  is an integer exponent. If negative, it will move the point to the left
                        , and if positive it will move the point to the right, and finally it will add zeros to the 
                        right of the created number,`
                    ]
                },
                {
                    elementType:'Paragraph',
                    content:`
                    <table class="table">
                        <thead>
                        <tr><th>Decimal notation</th><th>Binary</th><th>Normalized binary notation</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>0</td><td>0</td><td>(-1)<sup>0</sup>*1.0 * 2<sup>0</sup></td></tr>
                            <tr><td>1</td><td>1</td><td>(-1)<sup>0</sup>*1.0 * 2<sup>1</sup></td></tr>
                            <tr><td>5</td><td>101</td><td>(-1)<sup>0</sup>*1.01 * 2<sup>2</sup></td></tr>
                            <tr><td>100.75</td><td>1100100.11</td><td>(-1)*<sup>0</sup> 1.10010011 * 2<sup>6</sup></td></tr>
                            <tr><td>-5.25</td><td>-101.01</td><td>(-1)<sup>1</sup>*1.0101 * 2<sup>2</sup></td></tr>
                        </tbody>
                    </table>
                    `
                },

                {
                    elementType:'SmallHeadline',
                    content:'Back to JS and double precision floating point representation'
                },
                {
                    elementType:'Paragraph',
                    content:`The number is represented with 64 bits, but only 52 of them are used for the <code>
                    fraction</code> part:`
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        `<code>1 bit</code> is for the sign encoding. 0 is a positive number, 1 is for the negative number,`,
                        `<code>52 bits</code> are for the fraction part of the mantissa</code>,`,
                        `<code>11 bits</code> are for the exponent encoding. Exponent has one of its 11 bits reserved for the
                        sigh notation (1 == -, 0 == +) and the rest is for encoding the exponent it self. Exponent is 
                        stored in the similar way to the <a href="#internalIntegerRepresentation">internal integer representation
                        </a>, and negative exponent representation is similar to the <a href="#negativeRepresentation">
                        negative number representation`,
                        `Exponent has special values: 1024 is used for an error such as NaN or Infinity, and -1023 is used for a zero
                        (0).`
                    ]
                },



                {
                    elementType: 'Code',
                    content: `
<pre>
(-1)<sup>sign</sup> x <span style="color:green">%1.</span>fraction x 2<sup>exponent</sup>
</pre>                    
                    `
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        `<code>sign</code> is a single bit indicating if the number is a positive or a negative value,`,
                        `<code>%</code> is just a prefix indicating that the number will be in binary</code>`,
                        `<code>1.</code> is an untouchable value. All binary values in normalized notation will start with 1.`,
                        `The <code>exponent</code> is indicating how many places a point will have to be moved to
                        the left (if the exponent is negative) or to the right (if it is a positive value)`
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
                    content:'speakingjs.com',
                    href: 'http://speakingjs.com/es5/ch11.html',
                    description:'Great detailed article explaining how numbers are represented in JS'
                },
                {
                    elementType:'Link',
                    content:'indepth.dev.com',
                    href: 'https://indepth.dev/posts/1139/here-is-what-you-need-to-know-about-javascripts-number-type',
                    description:'Representation of numbers in JS explained'
                },
                {
                    elementType:'Link',
                    content:'electronics-tutorials.ws',
                    href: 'https://www.electronics-tutorials.ws/binary/binary-fractions.html',
                    description:'Fraction representation in IT'
                },
            ]
        }
    ]
};

export default function getNumberRepresentationData(){
    return data;
}