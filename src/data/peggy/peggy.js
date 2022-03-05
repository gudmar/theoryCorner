
let data =     {
    summary: 'peggy syntax',
    title: 'peggy syntax',
    searchKeywords:`

    `,
    cathegory: 'peggy',
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'Peggy syntax'
                },

                {
                    elementType: 'Paragraph',
                    content: `
                    `
                },
                {
                    elementType: 'UnsignedList',
                    content:[
                        `<code>'literal'</code>: like in regExp. matches the exect 'literal'. If with an <code>i</code> flag: case 
                        insensitive,`,
                        `<code>[characters]</code>: the same as in regExp: matches one of characters in the set. Can contain
                        ranges: <code>[a-z]</code> (like in regExp), <code>[^a-z]</code> makes it every character but not from a to z - 
                        but in this case <code>[A-Z]</code> are valid,`,
                        `<code>rule</code>: matches an expression of a rule recursively, and returns the result,`,
                        `<code>(expression)</code>: <b>matches</b>, not evaluates, the expression and returns the result (so true, matched or false)`,
                        `<code>expression *</code>: expression should be matched 0 or more times,`,
                        `<code>expression +</code>: expression should be matched 1 or more times,`,
                        `<code>expression ?</code>: different than in regExp <b>!</b>. Tries to match the expression and returns the result or <code>null</code>,`,
                        `<code>& expression</code>: try to match the expression. If succeeds, return <code>undefined</code> and to not 
                        consume input. If fails, considere the match failed,`,
                        `<code>! expression</code>: try to match the expression. If <b>does not</b> succeed, return <code>undefined</code> and to not 
                        consume input. If fails, considere the match failed,`,
                        `<code>& { predicate } </code>: <b>!!!!!</b>
                        This is named a <i>positive assertion</i>. No input consumed, positive assertion, the 
                        <code>predicate</code> is a JS code, executed as a function, should return a boolean.
                        <ul>
                        <li>result truthy: <code>undefined</code></li>
                        <li>result falsy: </code> match is faliled</li>
                        </ul>
                        ,`,
                        `<code>! { predicate } </code>: This is named a <i>negative assertion</i>. <b>!!!!!</b> no input consumed, positive assertion, the 
                        <code>predicate</code> is a JS code, executed as a function, should return a boolean.
                        <ul>
                        <li>result truthy: <code>undefined</code></li>
                        <li>result falsy: </code> match is faliled</li>
                        </ul>
                        ,`,
                        `<code>$ expression</code>: try to match teh expresison. If succeeds, return the <b>matched text</b>.
                        Otherwise <b>fail</b>. If returned text needs to be an action, use <code>text()</code> function,`,
                        `<code><b>label:expression</b></code>: a label is like a varialble. It is defined only if the 
                        expression succeeds. The expression result is <b>saved</b> under the label and may be used in 
                        JS code.`,
                        `<code>expression, expression1, ..</code> match a sequence of expressions and return 
                        matched result in an array,`,
                        `<code><b>expression {action}</b></code>: if the expression succeeds, run action. Otherwise 
                        considere the match failed.`,
                        `<code>expression1/expression2/expresssion3..</code>: Return the match result of the 
                        first expression that matches. Otherwise considere the match result failed.`,
                        `<code></code>`,
                        `<code></code>`,
                        `<code></code>`,
                    ]
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
                    content:'peggyjs.org',
                    href: 'https://peggyjs.org/documentation.html#grammar-syntax-and-semantics-parsing-expression-types',
                    description:'Tutorial'
                },
                {
                    elementType:'Link',
                    content:'peggyjs.org',
                    href: 'https://peggyjs.org/online.html',
                    description:'Playground with example'
                },
            ]
        }
    ]
};

export default function getPeggyData(){
    return data;
}