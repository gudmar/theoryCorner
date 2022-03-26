
let data =     {
    summary: 'redux side effects',
    title: 'redux side effects',
    searchKeywords:`

    `,
    cathegory: 'redux',
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'Side effects and async'
                },

                // https://redux.js.org/usage/configuring-your-store#the-solution-configurestore   apply middleware and enhancers to the 
                // createStore


                {
                    elementType: 'Paragraph',
                    content: `
                    `
                },


                {
                    elementType: 'ListOfContent',
                    content: [
                        {id: 'sideEffects', title: 'sideEffects'},
                        {id: 'middleware', title: 'Middleware'},
                        {id: 'AsyncAndPromises', title: 'Async and promises'},
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
                    href: 'https://redux.js.org/usage/configuring-your-store#the-solution-configurestore',
                    description:'Tutorial'
                },
            ]
        }
    ]
};

export default function getSideEffectsReduxData(){
    return data;
}