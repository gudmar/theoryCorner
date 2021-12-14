let data =     {
    summary: 'this keyword',
    title: 'this keyword',
    searchKeywords:"this scope",
    cathegory: 'js',
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'this'
                },

                {
                    elementType: 'Paragraph',
                    content: `
                        <code>this</code> is a reserved keyword, thats value depends on the context <code>this</code> keyword
                        is used in.
                    `
                },
                {
                    elementType:'UnsignedList',
                    content:[
                    `<strong>Object constructor</strong>: this context is provided with the <code>new</code> operator,`
                    ]
                },
                {
                    elementType:'Paragraph',
                    content:`
                   
                    `
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        ``
                    ]
                },
                {
                    elementType:'Code',
                    content:`
<pre>

</pre>                        
                    `
                        
                    
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
                    href: 'https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation',
                    description:'Tutorial'
                },
            ]
        }
    ]
};

export default function getJSThisData(){
    return data;
}