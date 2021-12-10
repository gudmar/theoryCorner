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

export default function getJSOperatorsData(){
    return data;
}