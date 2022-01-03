

let otherOperatorsData = [
    {
        elementType:'Headline-3',
        content:'Other operators'
    },
    {
        elementType: 'Paragraph',
        content: `
        The other operators are: a <i>conditional (ternary)</i> operator, a <i>comma</i> operator, a <i>delete</i> 
        operator, a <i>typeof</i> operator, a <i>void</i> operator, an <i>instanceof</i> operator and an <i>in</i> operator, , 
        `
    },
    
    {
        elementType: 'ConditionalArray',
        headItems: [
            'Operator','Name','Usage','Description'
        ],
        content: [
            {
                [Symbol('title')]:'conditional ternary',
                [Symbol('code')]:`
<pre>
 ''?'expr1':'expr2'; expr2, as '' converts to false
 (()=>{return true})()?(()=>{return 'expr1'})():(()=>{return 'expr2'})();
 // 'expr1', as first IFEE evaluated to true;
 true?1:2;// 1;

 let f = () => {
     return condition ? val1 
        : condition2 ? val2
        : condition3 ? val3
        : val4;
 }

// this is an example of the if .. else .. else if statement
let f2 = () => {
    if (condition) {return val1}
    else if (condition2) {return val2}
    else if (condition3) {return val3}
    else {return val4}
}

</pre>                    
                `,
                Operator: '<code>?:</code>',
                Name: `Conditional (ternary)`,
                Usage: 'condition ? expr1 : expr2',
                Description: `
                If the condition evaluates to <code>true</code>, result is <code>expr1</code> else the result is 
                <code>expr2</code>. Can be chained into a structure similar to the <code>if..else..else if..</code>
                `
            },



            {
                [Symbol('title')]:'Comma',
                [Symbol('code')]:`
                This is not the comma from objects or arryays, this is the comma known from for example a <i>for</i>
                operator.
<pre>
for (let i=0; i < 10; i++){};

function(){
    ...
    return (x +=1, x);
} // in this example x will be incremented before it is returned
// comma may perform an action bofore returning something.

let a, b, c; // declaring a set of variables;

let z = (a = 3, b = 4, c = 6); // z is 6, a is 3, b is 4, c is 6;

</pre>                    
                `,
                Operator: '<code>,</code>',
                Name: `Comma`,
                Usage: 'expr1, expr2',
                Description: `
                Evaluates each of the given expressions, and returns the last in the chain. May be chained.                `
            },



    
    
        ]
    },
    
    ]
    
    export default function getOtherOperatorsData(){
        return otherOperatorsData;
    }
    