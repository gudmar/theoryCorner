let data =     {
    summary: 'objects',
    title: 'objects',
    searchKeywords:"computed property name syntax prototype __proto__ key value inheritance",
    cathegory: 'js',
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'Objects'
                },

                {
                    elementType: 'Paragraph',
                    content: `
                        //What are objects
                    `
                },
                {
                    elementType:'Code',
                    content:[
                    `
<pre>
    //Object example
</pre>                    
        `
                    ]
                },
                {
                    elementType:'Headline-3',
                    content:`Descriptor`
                },
                {
                    elementType:'Paragraph',
                    content:[
                        `//What is a descriptor`
                    ]
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        `<strong>value</strong>: `,
                        `<strong>writable</strong>: `,
                        `<strong>enumerable</strong>: `,
                        `<strong>configurable</strong>: `,
                        `<strong>get(){}</strong>: `,
                        `<strong>set(val){}</strong>: `,
                    ]
                },
                {
                    elementType:'Code',
                    content:`
<pre>

</pre>                        
                    `
                        
                    
                },
                {
                    elementType:'Headline-3',
                    content:`Methods`
                },
                {
                    elementType:'Paragraph',
                    content:[
                        `Object has some methods allowing its manipulation. To learn more please visit 
                        <a href="./object%20methods>object methods</a> section.`
                    ]
                },
            ]
        },
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline-2',
                    content:'Prototype vs. __proto__'
                },
                {
                    elementType:'Paragraph',
                    content:`

                    `
                },
                {
                    elementType:'Headline-3',
                    content:'__proto__'
                },
                {
                    elementType:'Paragraph',
                    content:`

                    `
                },
                {
                    elementType:'Headline-3',
                    content:'Prototype'
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
                    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty',
                    description:'About descriptor'
                },
                {
                    elementType:'Link',
                    content:'Developer mozilla',
                    href: 'https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Global_Objects/Object',
                    description:'About Object'
                },
            ]
        }
    ]
};

export default function getJSObjectsData(){
    return data;
}