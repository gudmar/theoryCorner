
let data =     {
    summary: 'normalize vs reset',
    title: 'normalize vs reset',
    searchKeywords:`

    `,
    cathegory: 'css',
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'Css normalize vs css reset'
                },
                {
                    elementType:'Paragraph',
                    content:`
                    Browsers use some default styling for pages that are not styled at all
                    (for exapmle not visited links are blue, visited are purple, links are underlined).
                    Unfortunately each browser may have its own, custom styling applied, so unstyled paged don't look
                    the same in every  browser. This default stylin may clash with the styling applied by the developer,
                    if some edge case is not covered in code. There are 2 ways to take care of browser default 
                    styling:
                    `
                },                
                {
                    elementType:'UnsignedList',
                    content:[
                        'Css reset','Css Normalize'
                    ]
                },
                {
                    elementType:'SmallHeadline',
                    content:'Normalize'
                },
                {
                    elementType:'Paragraph',
                    content:`
                    A stylesheet that makes the default styling look the same in every browser
                    `
                },  
                {
                    elementType:'SmallHeadline',
                    content:'Reset'
                },
                {
                    elementType:'Paragraph',
                    content:`
                    In this case a page will have absolutely no styling applied at all, everything is 
                    resetted and may be implemented from scratch.
                    `
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
                    content:'github',
                    href: 'https://github.com/csstools/postcss-normalize',
                    description:'Normalize source'
                },
                {
                    elementType:'Link',
                    content:'Reset',
                    href: 'https://cssdeck.com/blog/what-is-a-css-reset/',
                    description:''
                },
            ]
        }
    ]
};

export default function getTemplateData(){
    return data;
}