
let data =     {
    summary: 'redux enhancers',
    title: 'Redux enhancers',
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


                // {
                //     elementType: 'ListOfContent',
                //     content: [
                //         {id: 'x', title: 'a'},
                //         {id: 'y', title: 'b'},

                //     ]
                // },

            ]
        },
        {
            elementType:'Article',
            content:[
                {
                    elementType: 'Headline-3',
                    content: `<span id="enhancers">Enhancers</span>`
                },
                {
                    elementType: 'UnsignedList',
                    content: [
                        `Enhancer takes a <code>createStore</code> function, and returns a new function that creates the store and does something more.
                        In other words it works similar to the decorator pattern, where <code>createStore</code> is wrapped in a function,`,
                        `Enhancers extend store, state logic,`,
                        `In particular there is the <code>applyMiddleware</code> enhancer, that is capable of adding extre functionalities to the 
                        <code>dispatch</code> method, and is used to apply middleware in the <code>createStore</code> function,`,
                        `Enhancers may be chined: one enhancer returns a modified <code>createStore</code> and passes it to next enhancer, and this 
                        next enhancer modifies this already modified <code>createStore</code> and so on...`,
                        `Good explanation of this chaining with functions returning functions is in the redux/middleware article.`
                    ]
                },
                
                {
                    elementType: 'Code',
                    content: `
<pre>
const ourAwesomeEnhancer = createStore => (reducer, initialState, enhancer) => {
    const store = createStore(monitoredReducer, initialState, enhancer);
    //  enhancer logic
  
    return {
      ...store
      //   override the some store properties or add new ones
    };
  };
</pre>                    
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
                    content:'redux.js.org',
                    href: 'https://redux.js.org/usage/configuring-your-store#the-solution-configurestore',
                    description:'Applying middleware and enhancers with createStore'
                },

            ]
        }
    ]
};

export default function getTemplateData(){
    return data;
}