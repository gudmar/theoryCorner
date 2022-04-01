
let data =     {
    summary: 'redux with toolkit',
    title: 'Redux with toolkit',
    searchKeywords:`
        configureStore combineReducers createSlice useSelector useDispatch Provider bindActionCreators useActions(obsolete) useStore
    `,
    cathegory: 'redux',
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'Using react redux with toolkit'
                },



                {
                    elementType: 'Paragraph',
                    content: `
                    `
                },


                {
                    elementType: 'ListOfContent',
                    content: [
                        {id: 'configureStore', title: '<code>configureStore</code>'},
                        {id: 'combineReducers', title: '<code>combineReducers</code>'},
                        {id: 'createSlice', title: '<code>createSlice</code>'},
                        {id: 'provider', title: 'Providing store'},
                        {id: 'bindActionCreators', title: '<code>bindActionCreators</code>'},
                        {id: 'hooks', title: '<code>Hooks</code>'},
                        {id: 'example', title: '<code>Example</code>'},
                    ]
                },

                {
                    elementType:'Headline-2',
                    content:'Creational functions:'
                },


                {
                    elementType: 'ConditionalArray',
                    headItems: [
                        'Function','Arguments', 'Returns', 'Description'
                    ],
                    content: [
                        {
                            [Symbol('title')]:'mapStateToProps',
                            [Symbol('code')]:`   

                            `,
                            Function: '<span id="configureStore>configureStore</span>',
                            Arguments: `
                            <ul>
                                <li><code>reducer</code>: a single one, or an object of reducers,
                                <li><code>middleware</code>: an array of middleware functions,
                                <li><code>devTools</code> a boolean indicating that support for dev tools should be added</li>
                                <li><code>preloadedState</code>: an initial state,</li>
                                <li><code>enhancers</code>: array of enhancers. An enhancer is a function taking a <code>createStore</code> function,
                                wraps it, and adds extra functionality to it
                            </ul>
                            `,
                            Returns: 'Object: store',
                            Description: `
                            Extended <code>createStore</code> function, capable of adding enhancers, middlware, devTools, more than one reducers to it.
                            `
                        },           
                    ]
                }     

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

export default function getReduxToolkitData(){
    return data;
}