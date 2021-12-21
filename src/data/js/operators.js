let data =     {
    summary: 'operators',
    title: 'operators',
    searchKeywords:"+ - / * = % > < << >> == === void ",
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
                            Description: 'Adds or concatenates the evaluated expression on the right to the left operand'
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
                            Substracts the evaluated expression on the right from the left operand
                            `
                        },

                    ]
                }


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
                    content:'Developer mozilla',
                    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators',
                    description:'Tutorial'
                },
            ]
        }
    ]
};

export default function getJSOperatorsData(){
    return data;
}