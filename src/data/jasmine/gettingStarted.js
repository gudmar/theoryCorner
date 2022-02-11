
let data =     {
    summary: 'jasmine getting started',
    title: 'Jasmine, getting started',
    searchKeywords:`

    `,
    cathegory: 'jasmine',
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'Jasmine, getting started'
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
                    href: 'https://jasmine.github.io/setup/browser.html',
                    description:'Tutorial'
                },
                {
                    elementType:'Link',
                    content:'jasmine.github.io',
                    href: 'https://jasmine.github.io/pages/docs_home.html',
                    description:'Tutorial'
                },
            ]
        }
    ]
};

export default function getJasmineGettingStartedData(){
    return data;
}