
let data =     {
    summary: 'redux side effects',
    title: 'redux side effects',
    searchKeywords:`
    thunk async redux await promise fetch middleware
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
                        {id: 'thunks', title: 'Build in thunks'},
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
>src
   index.js
   App.js
  >app
     store.js   // store, default state, reducer
     middleware.js  // middleware for uploading and fetching data
    >constants
     const.js // URL constant, exports URL
    >components
       >Post
          post.js
</pre>                            
                            `
                        },
                        {
                            info: `index.js`,
                            code: `
<pre>
import store from './app/sotre.js';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './App';

ReactDOM.render(
    &lt;Provider store={store}>
        &lt;App />
    &lt;/ Provider>
    document.getElementById('root');
)
</pre>                            
                            `
                        },

                        {
                            info: `The middleware: middleware.js`,
                            code: `
<pre>

import { URL } from './constants/const.js';

const thunkHandler = store => next => action => {
    if (typeof action === 'function) {
        return action(store.dispatch, store.getState)
    }
    return next(action)
}

const getDataFromServer = (endpoint, actionType) => (dispatch, getState) => {
    fetch( URL + endpoint )
        .then(response => response.json())
        .then(data => dispatch({type: actionType, payload: data}));
}

const postDataToServer = (data, endpoint) => (dispatch, getState) => {
    fetch( URL + endpoint, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    } ).then(response => {
        dispatch(showMessage('Data send successfully', 1000));
    }).catch(err => {
        dispatch(showMessage('Post was not saved on the server', 1500));
        throw new Error(err)
    })
}

const showMessage (message, timeout) => (dispatch, getState) => {
    dispatch({type: 'posts/inform', payload: message});
    const tOut = setTimeout(() => {
            dispatch({type: 'posts/cancelMessage'};
            celarTimeout(tOut);
        )}, timeout);
}

export { thunkHandler, getDataFromServer, postDataToServer, showMessage }

</pre>                            
                            `
                        },

                        {
                            info: `store.js`,
                            code: `
<pre>
import { thunkHandler, getDataFromServer, putDataToServer } from './middleware.js';

const initialState = {
    posts: {
        content: [],
        info: null,
    }
}

const reducer = (state, action) => {
    switch (action.payload) {
        case 'posts/placeAllContent':
            return { ...state, posts: action.payload }
        case 'posts/inform':
            return { ...state, info: action.payload }
        case 'posts/addLocal':
            const newContent = [ ...state.content, action.payload ];
            return { ...state, content: newContent};
        case 'posts/cancelMessage':
            return { ...state, info: null }
        default: return state;
    }
}

cosnt store = createStore(reducer, initialState, applyMiddleware(thunkHandler));
export default store;
export { reducer, initialState }
</pre>
                            `
                        },


                        {
                            info: `components/posts/post.js`,
                            code: `
<pre>                            
import { thunkHandler, getDataFromServer, putDataToServer } from './middleware.js';
import { useRef, useEffect } from "react";

const Posts = props => {
    const dispatch = useDispatch();
    const posts = useSelector(store => store.posts.content);
    const message = useSelector(store => store.posts.info);
    cosnt ref = useRef();
    useEffect(() => {
        cosnt fetchFunction = getDataFromServer('/get/posts', 'posts/placeAllContent');
        dispatch(fetchFunction)
    }, [])

    const postPost = () => {
        const sendToServer = postDataToServer(ref.current.value, '/post/info')
        dispatch(sendToServer);
        dispatch({type: 'posts/addLocal', payload: ref.current.value})
    }

    const allPosts = postList => &lt;ul>
                {postList.map(post => &lt;li key={post}>{post}&lt;/li>)}
            &lt;/ul>
    return (
        &lt;div className="wrapper">
            {allPosts}
            {message && &lt;div className="messageBox">{message}&lt;/div>}
            &lt;input type="text" ref={ref} />
            &lt;button onClick={postPost}>Post&lt;button>
        &lt;/div>
    )
  }
}
export default Posts;
</pre>
                            `
                        },
                        {
                            info: `App.js`,
                            code: `
<pre>
import Posts from './components/posts/posts.js'

const App = () => &lt;Posts/>
export default App;

</pre>                            
                            `
                        },

                    ]
                    
                },


                {
                    elementType:'Headline-3',
                    content:'<span id="thunks">Build in thunks</span>'
                },

                {
                    elementType: 'HiddenCode',
                    content: [
                        {
                            info: `Including <code>thunkMiddleware</code> in the project`,
                            code: `
                            <ul>
                                <li><code>npm install redux-thunk</li>
                                <li><code>include thunkMiddleware from 'redux-thunk'</code></li>
                                <li><code>const store = createStore(reducer, initialState, applyMiddleware(thunkMiddleware))</li>
                            </ul>`
                        },
                        {
                            info: `A thunk is a function, that makes it possible to separate logic from view layer. They are functions that take 
                            <code>dispatch</code> and <code>getState</code> functions, and that may dispatch an action, make async actions, and may (or may not)
                            return something. Thunk-functions are dispatched in components code, and then handled by the <code>thunkMiddleware</code>.
                            Using thunks makes it easier to test logic, as only a function needs testing,`,
                            code: `                        
<pre>
const thunkFunction = async (dispatch, getStore) => {
    const store = getStore(); //accessing the store,
    const data = await fetch('/api/endpoint).then(
        res => dispatch({ type: 'action/type', payload: res.json() }),
        rej => dispatch({ type: 'action/dataFailed', payload: rej})
    )
}
</pre>`
                        },
                        {
                            info: `Thunk creators: a thunk-function from previous example may be written in a more generic way:`,
                            code: `
<pre>
const getData = (endpoint, actionTypeSuccess, actionTypeFail) => async (dispatch, getStore) => {
    const data = await fetch(endpoint).then(
        res => dispatch({ type: actionTypeSuccess, payload: res.json()}),
        rej => dispatch({ type: actionTypeFail, payload: rej })
    )
}

<div class="note">And usage:</div>
const MyComponent = (props) => {
    const dispatch = useDispatch();
    const storeSlice = useSelector(store => store.slice)
    useEffect(() => getData(URL + 'dataLocation', 'addDataToComponent', 'displayError'))
    return (
        &lt;ul>{data.map(item => &lt;li>{item}&lt;/li>)}&lt;/ul>
    )
}
</pre>
                            `
                        },

                        


                        {
                            info: `<code>createAsyncThunk</code>`,
                            code: `
<pre>
</pre>`
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
                    content:'redux.js',
                    href: 'https://redux.js.org/tutorials/fundamentals/part-6-async-logic#redux-middleware-and-side-effects',
                    description:'Tutorial'
                },
                {
                    elementType:'Link',
                    content:'redux.js',
                    href: 'https://redux.js.org/usage/writing-logic-thunks',
                    description:'Logic with thunks'
                },
            ]
        }
    ]
};

export default function getSideEffectsReduxData(){
    return data;
}