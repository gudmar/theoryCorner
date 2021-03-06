
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
                            [Symbol('title')]:'configureStore',
                            [Symbol('code')]:`   
                            <div class="note">Simplest usage</div>
<pre>
import  { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

const store = configureStore({reducer: rootReducer});
export default store;
</pre>               
                            <div class="note">Adding more reducers as an object</div>
<pre>
import { configureStore } from '@reduxjs/toolkit';
import { counterReducer, toDosReducer } from './reducers';

const store = configureStore({
    reducer: {
        counter: counterReducer, 
        toDos: toDosReducer
    }
})
// Now <code>combineReducers</code> will be invoked on both reducers to form a root reducer
</pre>                            
                        <div class="note">More reducers as a function</div>
<pre>
import { configureStore } from '@reduxjs/toolkit';
import { counter, toDos } from './reducers';
import { combineReducers } from 'redux';

const store = configureReducer({
    reducer: combineReducers({counter, toDos})
})
</pre>
                        <div class="note">And a bigger example</div>
<pre>
<div class="note">counterReducer.js</div>
import { Reducer } from '@reduxjs/toolkit'
declare const reducer: Reducer<{}>
export default reducer

<div class="note">toDosReducer.js</div>
import { Reducer } from '@reduxjs/toolkit'
declare const reducer: Reducer<{}>
export default reducer

<div class="note">store.js</div>
import { configureStore } from '@reduxjs/toolkit'

// example middleware
import logger from 'redux-logger'

// example enhancer
import { reduxBatch } from '@manaflair/redux-batch'

import todosReducer from './todos/todosReducer'
import counter from './counter/counterReducer'


const reducer = {
    counter: counterReducer,
    toDos: toDosReducer
}

const initialState = {
    counter: 4,
    toDos: [
        'Eat', 'Code', 'Sleep', 'Repete'
    ]
}

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState: initialState,
    enhancers: [reduxBatch],
})
</pre>                        
                            `,
                            Function: '<span id="configureStore">configureStore</span>',
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
                        
                        


                        {
                            [Symbol('title')]:'combineReducers',
                            [Symbol('code')]:`   
                            The <code>combineReducers</code> function checks if all reducers are valid, so a reducer to be valid has to:
                            <ul>
                                <li>Always return a state object</li>
                                <li>Never return <code>undefined</code></li>
                                <li>In case it does not handle a specific action type, has to return the same state (in this case not a new one)</li>
                                <li>In all other cases the reducer has to return a new store object (a copy)</li>
                            </ul>
<pre>
rootReducer = combineReducers({counter: counterReducer, toDos: toDosRecurcer})
// now slaces will be named: counter and toDos,
// Actions will be referred as: 'counter/add' or 'toDos/add'
</pre>                        
                            `,
                            Function: '<span id="combineReducers">combineReducers</span>',
                            Arguments: `
                            <code>reducers</code>: an object having slice-names as keys, and reducer names as values,
                            `,
                            Returns: 'A root reducer',
                            Description: `
                            Checks if reducers can be merged to a single root reducer, and if so returns this root reducer. 
                            Each fraction-reducer is a slice: a reducer for handling a single functionality in the application.
                            It is easier to deal with slices than with a single huge instance.
                            In case the returned root reducer is called, each fraction-reducer will be called with given set of arguments,
                            and all give states will be merged,
                            `
                        },     
                        


                        {
                            [Symbol('title')]:'createSlice',
                            [Symbol('code')]:`
                            <ul>
                            <li><code>createSlice</code> uses Immer library, that detects changes to the state and makes the state change without mutating it, 
                            so not need to worry about immutability</li>
                            <li>The function in the <code>reducers</code> section of the <code>createSlice</code> should either <b>return a new state</b>
                            or <b>mutate existing one</b>, but <b>never both</b> at the same time, as this will cause an error</li>
                            </ul>
                            <div class="note">counterSlice.js</div>
<pre>
import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {value: 0},
    reducers: {
<div class="note note-warning warning">No need to worry about state copying, as Immer library takes care of everything</div>
        increment: state => state.value += 1;
        decrement: state => state.value -= 1;
        setValue: (state, action) => state.value = action.payload;

    }
})

export const { increment, decrement, setValue } = counterSLice.actions;
export default counterSlice.reducer;
</pre>                            
                            <div class="note">toDosSlice.js</div>
<pre>
import { createSlice } from '@reduxjs/toolkit'

export const toDosSlice = createSlice({
    name: 'toDosSlice',
    initialState: {list: []},
    reducers: {
        add: (state, action) => state.push(action.payload),
        pop: (state, action) => state.pop(action.payload),
        remove: (state, action) => state.splice(action.payload, 1),
        edit: (state, action) => state = action.payload,
    }
})

export const { add, pop, remove, edit } = toDosSlice.actions;
export default toDosSlice.reducer;
</pre>
<div class="note">Now configure store</div>
<pre>
const store = configureStore({
    counter,
    toDos,
})
</pre>

                            `,
                            Function: '<span id="createSlice">createSlice</span>',
                            Arguments: `
                            <code>descriptor</code>: an object having:
                            <ul>
                                <li><code>name</code>: a slice name that is going to be a prefix in the action name,</li>
                                <li><code>initialState</code>: the initial state that the slice has,</li>
                                <li><code>reducers</code>: an object with keys being names of actions that may be pefrormed on the store/slice, and 
                                values being <b>functions that modify original state</b>. No copying states here, as the <b>Immer library</b> 
                                based on proxies takes care of returning the copy of original state</li>
                            </ul>
                            `,
                            Returns: `<code>{ actions, reducer }</code> object, where <code>actions</code> is an object having keys that are names of 
                            actions, and values actions themselves`,
                            Description: `
                            Creates a slice reducer and actions needed to modify state related to this reducer,
                            `
                        },    
                        
                        

                        {
                            [Symbol('title')]:'bindActionCreators',
                            [Symbol('code')]:`
<pre>
<div class="note">Instead of </div>
const mapDispatchToProps = dispatch => {
    return {
        increase: () => {dispatch(counter.increase())},
        decrease: () => {dispatch(counter.decrease())},
        set: (value) => {dispatch(counter.set(action.payload))}
    }
}

<div class="note">this may be done</div>
const mapDispatchToProps = dispatch => (
    {...bindActionCreeators(counterActions, dispatch)}
)
</pre>
                            `,
                            Function: '<span id="bindActionCreators">bindActionCreators</span>',
                            Arguments: `
                                <ul>
                                    <li><code>actionCreators</code>
                                    <li><code>dispatch</code>: the dispatch function that will be binded to the actionCreators</li>
                                </ul>
                            `,
                            Returns: ``,
                            Description: `
                            Binds dispatch method with actions, so they may be used under props in a component that is unaware of redux. 
                            This method may be used with <code>mapDispatchToProps</code>, but instead of manual construction of the whole 
                            object, just action creators and dispatch function are passed,
                            `
                        },    


                    ]
                },


                {
                    elementType: 'Headline-3',
                    content: '<span id="provider">Providing the store</span>'
                },

                {
                    elementType: 'Paragraph',
                    content: `To provide the storage in an application tree (a component with all descendants), just wrap it in the <code>Provider</code>
                    `
                },
                {
                    elementType: 'SmallHeadline',
                    content: 'Props'
                },
                {
                    elementType: 'UnsignedList',
                    content: [
                        `<code>store</code>: the store instance that will be available in wrapped components,`,
                        `<code>children</code>: ReactElements wrapped by the <code>Provider</code>, where the store will be available,`,
                        `<code>context</code>: additionaly to the store, context can be provided by the <code>Provider</code>, but this context must be provided 
                        to each connected component,`,
                    ]
                },
                {
                    elementType: 'Code',
                    content: `
<pre>
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { App } from './App';
import store from './store.js';

ReactDOM.render(
    &lt;Provider store={store}>
        &lt;App />
    &lt;/Provider
    document.getElementById('root')
})
</pre>                        
                    `
                },


                {
                    elementType:'Headline-3',
                    content: 'Hooks'
                },





                {
                    elementType: 'ConditionalArray',
                    headItems: [
                        'Hook', 'Arguments', 'Returns', 'Description'
                    ],
                    content: [
                        {
                            [Symbol('title')]:'useSelector',
                            [Symbol('code')]:`   
<pre>
import { useSelector } from 'react-redux';

const SomeComponent = (props) => {
    const someValue = useSelector(state => state.someValue);

    return (
        &lt;span>{someValue}&lt;/span>
    )
    // now every time someValue property of the store changes,
    // the component will be updated,
}
</pre>
                            `,
                            Hook: '<span id="useSelector">useSelector</span>',
                            Arguments: `
                            <ul>
                            <li><code>store => store[selector]</code>: a callback function taking the store object and returning the part of the 
                            store,</li>
                            <li><code>equalityFn</code></li>: optional, 
                            `,
                            Returns: 'Selected part of the store',
                            Description: `
                            Subscribes to the store, and if there is a change to the store, the returned value is updated,
                            `
                        },    
                        
                        



                        {
                            [Symbol('title')]:'useDispatch',
                            [Symbol('code')]:`   
<pre>
import { useDispatch } from 'react-redux';

const SomeComponent = (props) => {
    const dispatch = useDispatch();

    return (
        &lt;button onClick={() => dispatch({type: 'buttonClicked})}>someButton&lt;button>
    )
    // now every time the button is clicked, the action is dispatched,
    // The component has to be wrapped with the Provider for this to work
}
</pre>
                            `,
                            Hook: '<span id="useDispatch">useDispatch</span>',
                            Arguments: ` - 
                            `,
                            Returns: 'The <code>dispatch</code> function,',
                            Description: `
                            Returns the <code>dispatch</code> function
                            `
                        }, 


                        {
                            [Symbol('title')]:'useStore',
                            [Symbol('code')]:`   
<pre>
import { useStore } from 'react-redux';

const SomeComponent = (props) => {
    const store = useStore();

    return (
        &lt;div>{store.getState()}&lt;/div>
    )
<div class='note note-error error'>Do not use like this, there is the
reference to the store, so value {store.getState()} will not update.
Use <code>useSelector</code> instead</div>
}
</pre>
                            `,
                            Hook: '<span id="useStore">useStore</span>',
                            Arguments: ` - 
                            `,
                            Returns: 'The reference to the original store',
                            Description: `
                            Returns the reference to the oryginal store. Returned value will not cause update,
                            may be used to for example swap reducer,
                            `
                        }, 
                        
                        

  
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
                    content:'redux-toolkit.js.org',
                    href: 'https://redux-toolkit.js.org/api/configureStore',
                    description:'Tutorial: configureStore'
                },
                {
                    elementType:'Link',
                    content:'redux-toolkit.js.org',
                    href: 'https://redux.js.org/api/combinereducers',
                    description:'Tutorial: combineReducers'
                },
                {
                    elementType:'Link',
                    content:'redux-toolkit.js.org',
                    href: 'https://react-redux.js.org/tutorials/quick-start#what-youve-learned',
                    description:'Tutorial: createSlice'
                },
                {
                    elementType:'Link',
                    content:'medium.com',
                    href: 'https://medium.com/geekculture/understanding-createslice-in-redux-toolkit-reactjs-eca8d20f45d7',
                    description:'createSlice'
                },
                {
                    elementType:'Link',
                    content:'redux.js.org',
                    href: 'https://redux.js.org/api/bindactioncreators',
                    description:'bindActionCreators'
                },

                {
                    elementType:'Link',
                    content:'medium.com',
                    href: 'https://medium.com/@kristenleach24/how-and-when-to-use-bindactioncreators-afe1f2d5f819',
                    description:'bindActionCreators'
                },

                {
                    elementType:'Link',
                    content:'react-redux.js.org: hooks',
                    href: 'https://react-redux.js.org/api/hooks',
                    description:'React redux hooks'
                },

                {
                    elementType:'Link',
                    content:'redux-toolkit',
                    href: 'https://redux-toolkit.js.org/usage/immer-reducers',
                    description:'Immer library usage'
                },
                
            ]
        }
    ]
};

export default function getReduxToolkitData(){
    return data;
}