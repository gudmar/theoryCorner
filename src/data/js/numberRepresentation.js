
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
                    content:'Bitwise use cases'
                },

                {
                    elementType: 'Paragraph',
                    content: `
                    `
                },
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
(greatest32bit >>> 0).toString(2).count('1') == 32;//true
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
                {
                    elementType:'Headline-2',
                    content:''
                },
                {
                    elementType:'Paragraph',
                    content:`

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
            ]
        }
    ]
};

export default function getNumberRepresentationData(){
    return data;
}