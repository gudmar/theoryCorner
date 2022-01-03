

let logicalOperatorsData = [
    {
        elementType:'Headline-3',
        content:'Logical operators'
    },
    {
        elementType: 'Paragraph',
        content: `
           Expressions being operands of the logical operators evaluate from the left to the right, but only if the first
           opearand does not determine the result. In case the first operand determines the result, it is returned, and 
           the second one is not evaluated, meaning, that side effects related to evaluation of the second operand will not 
           take place.
        `
    },
    {
        elementType: 'Paragraph',
        content: `
           Operators <code>||</code>, <code>&&</code>, <code>??</code> return expressions, values (not only booleans),
           and the negation <code>!</code> returns a boolean.
        `
    },
    {
        elementType: 'SmallHeadline',
        content: `What evaluates to false?`
    },
    {
        elementType: 'Paragraph',
        content: `
           <code>NaN</code>, <code>null</code>, <code>undefined</code>, <code>0</code>, <code>''</code> and 
           <code>0n</code> evaluate to <code>false</code>. The rest evaluates to true.
        `
    },
    {
        elementType: 'NoteWarning',
        content: `
        <code>new Boolean(false)</code> evaluates to <strong>true</code>, as it is a non empty object, not a 
        primitive
        `
    },
    
    {
        elementType: 'ConditionalArray',
        headItems: [
            'Operator','Name','Usage','Description'
        ],
        content: [
            {
                [Symbol('title')]:'!',
                [Symbol('code')]:`
                <ul>
                <li><code>!true</code>: false</li>
                <li><code>!false</code>: true</li>
                <ul>
<pre>
    !true === false
    !false === true;
    !-1 === false;
    !0 === true;
    !NaN === true;
    !undefined === true;
    !0n === true;
    !null === true;
    !'' === true;
    ![] === false
    !{} === false;

    !!x === Boolean(x); // a conversion 

    let a = new Boolean(false);
    !a === false; // a is an object
</pre>                    
                `,
                Operator: '<code>|</code>',
                Name: `Logical NOT`,
                Usage: '~expression',
                Description: `
                <ul>
                <li>If expression is true, returns false</li>
                <li>If expression is false, returns true</li>
                </ul>
                `
            },




            {
                [Symbol('title')]:'||',
                [Symbol('code')]:`
                <ul>
                <li><code>(ex1 === true) || (ex2)</code>: ex1</li>
                <li><code>(ex1 === false) || (ex2)</code>: ex2</li>
                <ul>
<pre>
"text1" || "text2"; // "text1"
"" || "text1"; // "text1"

null || 0; // 0;
0 || null; // null;

let a = 3;
let f = ()=>{a+=1}
1 || f(); // 1
console.log(a); // 3; f not executed, as left operand was already true;
0 || f(); // undefined, as f does not return anything;
console.log(a); // 4; now f was executed

</pre>                    
                `,
                Operator: '<code>||</code>',
                Name: `Logical OR`,
                Usage: 'expression1 || expression2',
                Description: `
                <ul>
                <li>If expression1 evaluates to true, returns first expression, does not evaluate expression2 at all</li>
                <li>If expression1 evaluates to false, returns the second expression, in this case both expressions
                are evaluated</li>
                </ul>
                `
            },



            {
                [Symbol('title')]:'&&',
                [Symbol('code')]:`
                <ul>
                <li><code>(ex1 === false) && (ex2)</code>: ex1</li>
                <li><code>(ex1 === true) && (ex2)</code>: ex2</li>
                <ul>
<pre>
"text1" && "text2"; // "text2"
"" && "text1"; // ""

null && 0; // null;
0 && null; // 0;

let a = 3;
let f = ()=>{a+=1}
0 && f(); // 0
console.log(a); // 3; f not executed, as left operand already determined the result;
1 && f(); // undefined, as f does not return anything;
console.log(a); // 4; now f was executed

</pre>                    
                `,
                Operator: '<code>&&</code>',
                Name: `Logical AND`,
                Usage: 'expression1 && expression2',
                Description: `
                <ul>
                <li>If expression1 evaluates to false, returns first expression, does not evaluate expression2 at all</li>
                <li>If expression1 evaluates to true, returns the second expression, in this case both expressions
                are evaluated</li>
                </ul>
                `
            },


            {
                [Symbol('title')]:'??',
                [Symbol('code')]:`
                <ul>
                <li><code>(ex1 === (null || undefined)) ?? (ex2)</code>: ex2</li>
                <li><code>(ex1 !== (null || undefined)) ?? (ex2 === (null || undefined))</code>: ex1</li>
                <ul>
<pre>
'text1' ?? null; // 'text1'
undefined ?? 'text1'; // 'text1'

null ?? undefined; // undefined;
undefined ?? null; // null;

false ?? null; // false;
'' ?? 'text'; // 'text';
let a = 1;
let f = ()=> {a += 1};
true ?? f(); // true;
console.log(a); // 1, as f was not evaluated, because left side operand 
// already determined the result;
null ?? f(); // undefined, as f() returns nothing;
console.log(a); // 2; as left operand was null, and right had to be evaluated;

</pre>                    
                `,
                Operator: '<code>??</code>',
                Name: `Logical nullish coalescing`,
                Usage: 'expression1 ?? expression2',
                Description: `
                <ul>
                <li>If the left expression evaluates to something other than null or undefined, returns the 
                result of the first expression</li>
                <li>If left expression evaluates to null or undefined, returns the result of the second expression</li>
                </ul>
                `
            },
    

    
    
        ]
    },
    
    ]
    
    export default function getLogicalOperatorsData(){
        return logicalOperatorsData;
    }
    