import getComparationOperatorsData from './operators_files/comparasionOperators';
import getAssignmentOperatorsData from './operators_files/assignmentOperators';
import getArithmeticsOperatorsData from './operators_files/arithmeticOperators';
import getBitwiseOperatorsData from './operators_files/bitwiseLogicalOperators';


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



                ...getComparationOperatorsData(),



                ...getArithmeticsOperatorsData(),


                ...getBitwiseOperatorsData(),


                ...getAssignmentOperatorsData(),



        


            ]
        },


//         {
//             elementType:'Article',
//             content:[
//                 {
//                     elementType:'Headline-2',
//                     content:'Binary representation of a negative number'
//                 },
//                 {
//                     elementType:'Paragraph',
//                     content:`
//                     There is a <code>Number.toString([redix])</code> method that converts a number to a string representation
//                     of this number in the specified redix. However as far as binary representation of a number is 
//                     concerned, there is no negative number representation, as there can be only <code>0</code> or <code>1</code>,
//                     no plus or minus bit is present. Moreover a sum of the positive and the negative number shuld always give a
//                     <code>0</code>, so if there would be the most significant bit devoted to representation of the sign, then
//                     sum of positive and negative representation of the number would not be 0:
//                     `
//                 },
//                 {
//                     elementType:'Code',
//                     content:`
// <pre>
// 5 - 5 == 0; but
//    <span style="color: red">0</span>0000101
//  + <span style="color: red">1</span>0000101
// ----------------
//    <span style="color: red">1</span>0001010   and this is <span style="color: red">-10</span> in representation, with most significant bit being <span style="color: red">0</span>;
// </pre>                    
//                     `
//                 },
//                 {
//                     elementType:'Paragraph',
//                     content:`
//                     To solve this provlem of non negative sum, there is a need to keep this most significant bit 
//                     indicating the negative number, and search for the other number, that if was added to a positive
//                     equivalent, would give 0. In this case number of bits that will represente the number is important.
//                     Lets suppose, that number of bits that will represent the number is 8. There is a pattern:
//                     <strong>2<sup>n</sup> + negativeNumber</strong>, where <strong>n</strong> is the number of bits 
//                     representing the number, and the <code>negativeNumber</code> is number that needs to be converted
//                     with its minus sign, so as an example conversion of <strong>-5</strong> on <strong>8</strong>
//                     bits would be:<br>
//                     <strong>2<sup>8</sup> + (-5) = 256 - 5 = 251</strong>, and 251 converted to binary is 
//                     <strong><span style="color:red">1</span>1111011</strong>. This red bit is the most significant bit 
//                     meaning that this number is negative if set to 1, and positive if set to 0. Now:
//                     `
//                 },
//                 {
//                     elementType:'Code',
//                     content:`
// <pre>
//     <span style="color: red">0</span>0000101
//  +  <span style="color: red">1</span>1111011
// ----------------
//  (<span style="color: red">1</span>)00000000
// </pre>                    
//                     `
//                 },
//                 {
//                     elementType:'Paragraph',
//                     content:`
//                     There is an overflow, one bit is out of this representatnion, as it becomes a 9-th
//                     bit, and number representatnion has only 8 bits, so it will be ignored. And if this bit is
//                     ignored, then the remaining bits are <code>00000000</code>, so equal to 0.
//                     `
//                 },
//                 {
//                     elementType:'SmallHeadline',
//                     content:'What if someone would like to represent 255 then?'
//                 },
//                 {
//                     elementType:'Paragraph',
//                     content:`
//                     Answer is simple. There is no 255 number in this representation. To have this number, there is a 
//                     need to take more bits into account, lets say 16 to represent a single number. 8 bits represent
//                     256 possibilities with a 0 included, so from 255 to 0 or from -128 to 127. With 16 bits this would 
//                     be 65536 possibilites, including 0, so 65535 to 0, or 32767 to -32768 with negative numbers. 
//                     An elephant will not fit into a backpack &#128578;<br>
//                     Even in JS there is a limit for the numbers. Each number larger then the 
//                     <code>Number.MAX_SAFE_INTEGER</code> or smaller then <code>-Number.MAX_SAFE_INTEGER</code> is
//                     approximated, and a number larger than <code>number.MAX_VALUE</code> or smaller then 
//                     <code>Number.MIN_VALUE</code> is <code>Infinity</code> or </code>-Infinity</code>
//                     `
//                 },
//                 {
//                     elementType:'SmallHeadline',
//                     content:'What does this mean for a JS developer?'
//                 },
//                 {
//                     elementType:'Paragraph',
//                     content:`
//                         Negative number conversion may be useful, if someone wants to perfoerm bitwise operations, and
//                         here is a set of use cases:
//                     `
//                 },
//                 {
//                     elementType:'UnsignedList',
//                     content:[
//                         `Masking bits, applying flags if a lot of options need to be passed to some function`,
//                         `Work with IP addresses`,
//                         `To boolean conversion`,
//                         `Implementation of isEven, isOdd fnuctions`,
//                         `RGB to Hex conversion`,
//                         `Hex to RGB conversion`,




                        
//                         `<code>~0 == -1</code> and <code>~-1 == 0</code>, so <code>Boolean(~-1) == false</code> and
//                         conversion to boolean of any non -1 value is true. So 
//                         <code>Boolean(~arr.findIndex(cb(item, index)))</code> is conversion of findIndex array method
//                         to boolean`,
//                         `
//                         <code>(val >>> 0).toString(2)</code> gives a number bit representation. This conversion is 
//                         useful if a negative number exact converion is needed.
//                         `,
//                         `
//                         Masking
//                         <code>
// <pre>
// function isOdd(int) {
//     return (int & 1) === 1;
// }
// function isEven(int) {
//     return (int & 1) === 0;
// }
// </pre>                        
//                         </code>
//                         `
                //     ]
                    
        //         },
        //     ]
        // },
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