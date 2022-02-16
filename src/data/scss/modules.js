
let data =     {
    summary: 'scss modules',
    title: 'scss modules',
    searchKeywords:`
    color list map math meta selector string
    `,
    cathegory: 'scss',
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'Scss build in modules'
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
                    content:'Developer mozilla',
                    href: ' ',
                    description:'Tutorial'
                },
            ]
        }
    ]
};

export default function getScssModulesData(){
    return data;
}