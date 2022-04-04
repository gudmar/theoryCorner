
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
                        {id: 'thunkUnderHood', title: 'Thunks under hood'},
                        {id: 'examplePosts', title: 'Example: getting posts from the server'},
                        // a thunk function for getting, 
                        // a reducer
                        // a component
                        // saving a post
                        
                        // Middleware adds extra functionality to the Redux dispatch, 
                        // Enhancser adds extra functionality to the redux store
                        // https://stackoverflow.com/questions/67118933/redux-enhancer-example !!

                    ]
                },
                {
                    elementType: 'NoteWarning',
                    content: `A <code>thunk</code> &#127785; is a piece of code that is run with some delay.`
                },


                {
                    elementType: 'Headline-3',
                    content: `<span id="thunkUnderHood">Thunks under hood</span>`
                },
                {
                    elementType: 'UnsignedList',
                    content: [
                        `Middleware extends <code>dispatch</code> functionality.`
                    ]
                },
                {
                    elementType: 'HiddenCode',
                    content: [
                        {
                            info: `A middleware that accepts a function as an action, runs that function, and dispatches the real action, based on this function
                            returned value:`,
                            code: `
If action is a function run this function passing <code>dispatch</code> and <code>getState</code> funcitons. Otherwise return the modified 
dispatch (<code>next</code>) function
<pre>
const asyncFunctionMiddleware = store => next => action => {
    if (typeof action === 'function') {
        return action(store.dispatch, store.getState)
    }
    return next(action)
}
</pre>                        
                            `
                        },

                        {
                            info: `The function that will be passed to the dispatch function. An async function fetching something from the server`,
                            code: `
<pre>
const fetchSomeData = (dispatch, getState) => {
    client.get('someEndpoint').then(result => {
        dispatch({type:"sliceName/action", payload: result})
    })
}

const reducer = (store, action) => {
    //.... reducers body
}
</pre>
                            `
                        },

                        {
                            info: `The component using the function`,
                            code: `
<pre>
import {fetchSomeData, reducer} from './reducers.js'

const SomeComponent = (props) => {
    const [data, setData] = useState({});
    const dispatch = useDispatch();
    const store = useStore();
    useEffect(() => {setData(fetchSomeData())}, [])
    return (
        &lt;>&lt;/>
    )
}
</pre>
                            `
                        },

                        {
                            info: `Sending some data to the server:`,
                            code: `
<pre>

const sendData = (data, endpoint) => (dispatch, getState) => {
    return sendData = async (dispatch, getState) => {
        const response = await client.post(endpoint, data)
        dispatch({type: 'serverRequests/send', payload: response.someResult})
    }
}

</pre>
                            `
                        },
                    ]
                    
                },



                {
                    elementType: 'Headline-3',
                    content: `<span id="examplePosts">Example: getting posts from the server</span>`
                },

                {
                    elementType: 'HiddenCode',
                    content: [
                        {
                            info: `File structure:`,
                            code: `
<pre>

</pre>                            
                            `
                        }
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
                    href: 'https://redux.js.org/tutorials/fundamentals/part-6-async-logic#redux-middleware-and-side-effects',
                    description:'Tutorial'
                },
            ]
        }
    ]
};

export default function getSideEffectsReduxData(){
    return data;
}