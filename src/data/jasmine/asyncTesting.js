
let data =     {
    summary: 'jasmine async',
    title: 'Jasmine async',
    searchKeywords:`
        timeout setTimeout setInterval async then await callback promisses clock 
    `,
    cathegory: 'jasmine',
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'Jasmine async'
                },

                {
                    elementType: 'Paragraph',
                    content: `
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
                    content:'jasmine.github.io',
                    href: 'https://jasmine.github.io/tutorials/your_first_suite',
                    description:'Tutorial'
                },
            ]
        }
    ]
};

export default function getJasmineAsyncData(){
    return data;
}