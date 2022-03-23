
let data =     {
    summary: 'redux basics',
    title: 'redux basics',
    searchKeywords:`

    `,
    cathegory: 'redux',
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'Components in angular'
                },



                {
                    elementType: 'Paragraph',
                    content: `
                    `
                },


                {
                    elementType: 'ListOfContent',
                    content: [
                        {id: 'installation', title: 'Installation'},
                        {id: 'concept', title: 'Concept'},
                        {id: 'settingState', title: 'settingState'},
                        {id: 'gettingState', title: 'gettingState'},

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
                    content:'redux.js',
                    href: 'https://redux.js.org/introduction/ecosystem',
                    description:'Tutorial'
                },
            ]
        }
    ]
};

export default function getBasicReduxData(){
    return data;
}