// SPELL CHECKED, CORRECT!
let data =     {
    summary: 'abstract factory design pattern',
    title: 'abstract factory design pattern',
    searchKeywords:`
    `,
    cathegory: 'DesignPatterns',
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'Prototype'
                },

                {
                    elementType: 'Paragraph',
                    content: `
                    `
                },


                {
                    elementType:'SmallHeadline',
                    content:'Description'
                },
                {
                    elementType:'SmallHeadline',
                    content:'Understanding'
                },
                {
                    elementType:'SmallHeadline',
                    content:'Examples'
                },
                {
                    elementType:'SmallHeadline',
                    content:'Code'
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
                    content:'refactoring guru',
                    href: 'https://refactoring.guru/pl',
                    description:'Tutorial'
                },
                {
                    elementType:'Paragraph',
                    content:'<i>Design patterns</i> by Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides'
                },
                
            ]
        }
    ]
};

export default function getAbstractFactoryData(){
    return data;
}