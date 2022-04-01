
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
                        {id: 'enhancers', title: 'Enhancers'},
                        {id: 'AsyncAndPromises', title: 'Async and promises'},
                        {id: 'gettingState', title: 'gettingState'},
                        // Middleware adds extra functionality to the Redux dispatch, 
                        // Enhancser adds extra functionality to the redux store
                        // https://stackoverflow.com/questions/67118933/redux-enhancer-example !!

                    ]
                },


                {
                    elementType: 'Headline-3',
                    content: `<span id="middleware">Middleware</span>`
                },
                {
                    elementType: 'UnsignedList',
                    content: [
                        `Middleware extend <code>dispatch</code> functionality.`
                    ]
                },
                {
                    elementType: 'Code',
                    content: `
<pre>
const loggerMiddleware = storeAPI => next => action => {
    console.log('dispatching', action)
    let result = next(action)
    console.log('next state', storeAPI.getState())
    return result
  }
</pre>                    
                    `
                },




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
                        <code>dispatch</code> method, and is used to apply middleware in the <code>createStore</code> function.`
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
                    content:'stackoverflow',
                    href: 'https://stackoverflow.com/questions/67118933/redux-enhancer-example',
                    description:'Example of an enhancer'
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