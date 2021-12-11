let data =     {
    summary: 'string methods',
    title: 'string methods',
    searchKeywords:`string methods unmutable `,
    cathegory: 'js',
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'String methods'
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
                    `
                    ]
                },
                {
                    elementType:'Paragraph',
                    content:`
                    There is a set of methods that can be used with a <code>&lt;form&gt;</code> element:
                    `
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
                    content:'Methods'
                },
                {
                    elementType:'Paragraph',
                    content:`

                    `
                },
            ]
        },
    ]
};

export default function getStringMethods(){
    return data;
}