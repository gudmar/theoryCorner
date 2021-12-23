
let data =     {
    summary: 'number representation',
    title: 'Number representation',
    searchKeywords:`float double floating point 32 53 64 number integer
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
                    negative integers, and floating point positive and negative numbers in the range of -2<sup>52</sup> to
                    2<sup>52</sup>. A <code>Number</code> type is capable of representing even bigger numbers (from
                    <code>-Number.MAX_VALUE</code>, that is equal to -1.8<sup>308</sup>, to <code>Number.MAX_VALUE</code>, that
                is equal to 1.8<sup>308</sup>, but these numbers are only an approximation of a precise value). BigInts are
                capable of representing much bigger numbers than 2<sup>52</sup>, but they are less efficient and not fully 
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
                    elementType:'SmallHeadline',
                    content:'Internal integer representation'
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
                    elementType:'SmallHeadline',
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
                    content:'What if someone would like to represent 255 then?'
                },
                {
                    elementType:'Paragraph',
                    content:`
                    The answer is simple. There is no 255 number in this representation. To have this number, there is a 
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
                    elementType:'UnsignedList',
                    content:[
                        `Numbers in JS are double precission, meaning that a single number is represented with 
                        2 x 32 = 64 bits,`,

                        `Only 52 of 64 bits are used for actual fraction of number representation, that is why a safe integer is 
                        in range <code> -(2<sup>53</sup> - 1)</code> to <code>2<sup>53</sup> + 1</code>`,

                        `11 of 64 bits are used for the expotent representation. Exponent can be from <code>-1023</code> to 
                        <code>1024</code>, that is from <code>-2<sup>10</sup> + 1</code> to <code>2<sup>10</sup></code>, and
                        the remainig 1 bit is a sign bit`,

                        `Remaining 1 bit is a sign bit`,

                        `Numbers are stored in a simpler way (single precision, 32 bit) as long as possible, double precision
                        is turned on only if numbers are greater than 32 bits. Below example shows how adding 1 to the 
                        greatest possible number represented with 32 bits changes internal number representation
                        <pre>
let greatest32bit = 4294967295;
(greatest32bit >>> 0).toString(2).length == 32;//true
(greatest32bit >>> 0).toString(2).match(/1/g) == 32;//true
let greaterThan32bit = greatest32bit + 1;
(greaterThan32bit >>> 0).toString(2); // "0"
                        </pre>
                            `,

                        `Only numbers represented on up to 32 bits can be operands of the bitwise operations,`,

                        `Only numbers represented on up to 32 bits can be indexes of the arrays. Arrays bigger than that
                        will become string indexed, <code>let tooBigArray  = Array(4294967296)</code> gives an error.`,
                        
                        
                    ]
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    General pattern for calculating a number is:
                    `
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
                        `<code>sign</code> is a sign bit, if it is 0 then number is positive, as -1<sup>0</sup> becomes
                        1, when bit is 1 then the number is a negative one,`,
                        `<code>%1.</code> is just a prefix, meaning that number after i will be in a binary format`,
                        `<code>fraction</code> is a number represented in a binary format, this is the 53 bit part`,
                        `<code>exponent</code> is a 11 bit part, that is the exponent of 2, exponent is in range
                        -1023 to 1024. If a number is too small (fraction part is shorter than `
                    ]
                },
                {
                    elementType:'SmallHeadline',
                    content:'Examples'
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        `<code>(100).toString(2) === "1100100"</code>: 
                        <code>(-1)<sup>0</sup> x %1.1100100 x 2<sup>7</sup></code> is the notation for this example. but
                        in practice this fits in less then 32 bit, so will be stored as 1100100`,
                        `<code>(-100).toString(2) === "-1100100"</code>, however: <code>(-100 >>> 0).toString(2)</code>
                        becomes <code>"11111111111111111111111110011100"</code> 
                        (see <a href="#negativeRepresentation"> negative number representation</a>)
                        <code>(-1)<sup>1</sup> x %1.1100100 x 2<sup>7</sup></code> is the notation for this example. but
                        in practice this fits in less then 32 bit, so will be stored as 11111111111111111111111110011100`,
                        `,
                        <code>(0.6875).toString(2) === "0"</code>: this is because 32 bits are not enough to represent this
                        value, as it is:
                        <code>(-1)<sup>0</sup> x %1.1011 x 2<sup>-4</sup></code>, so expotential part needs to be used
                        `,
                        `
                        <code>(100.6875).toString(2) === "1100100"</code>:
                        This is because this number consists of 2 numbers: an integer one and the floating point one, so
                        <code>toString</code> convers the ingeter part, and the fractional part is not represented in 32
                        bits
                        <code>(-1)<sup>0</sup> x %1.1100100 x 2<sup>7</sup></code> + 
                        <code>(-1)<sup>0</sup> x %1.1011 x 2<sup>-4</sup></code>
                        `
                    ]
                },


                {
                    elementType:'SmallHeadline',
                    content:''
                },

                {
                    elementType:'UnsignedList',
                    content:[

                    ]
                },

                {
                    elementType:'SmallHeadline',
                    content:'Example'
                },
                {
                    elementType:'UnsignedList',
                    content:[

                    ]
                },
                {
                    elementType:'Code',
                    content:`
                           
                    `
                },




            ]
        },
        {
            elementType:'Article',
            content:[

            ]
        },


        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline-2',
                    content:'<span id="fractionRepresentation">Fraction representation<span>'
                },
                {
                    elementType:'Paragraph',
                    content:`
                    <table class = "table">
                    <thead>
                        <tr>
                            <th>number:</th>
                            <th>0.1 (2<sup>-1</sup>) 0.5</th>
                            <th>0.01 (2<sup>-2</sup>) 0.25(</th>
                            <th>0.001 (2<sup>-3</sup>) 0.125</th>
                            <th>0.0001 (2<sup>-4</sup>) 0.0625</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>0.6875</td>
                            <td>1</td>
                            <td>0</td>
                            <td>1</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
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
                    content:'speakingjs.com',
                    href: 'http://speakingjs.com/es5/ch11.html',
                    description:'Great detailed article explaining how numbers are represented in JS'
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