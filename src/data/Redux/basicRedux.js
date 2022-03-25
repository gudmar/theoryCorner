
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
                        {id: 'mostSimple', title: 'Most simple counter app'},
                        {id: 'storageConfiguration', title: 'Storage configuration'},
                        {id: 'settingState', title: 'Setting state'},
                        {id: 'gettingState', title: 'Getting state'},
                        {id: 'reducerSlices', title: 'Reducer slices'},

                    ]
                },

            ]
        },
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline-3',
                    content:'<span id="installation">Installation</span>'
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        `<code>npm install @reduxjs/toolkit</code>: core and tools such as Redux Thunk and Reselect,`,
                        `<code>npm install redux</code>: for intalling stable redux core,`,
                        `<code>npm install react-redux</code>: for installing react bindings,`,
                        `<code>npm install --save-dev @redux-devtools/core</code> for installing developer tools,`,
                        `<code>npx create-react-app my-app --template redux</code> for creation of react app with redux template for js,`,
                        `<code>npx create-react-app my-app --template redux-typescript</code> creation of react app with redux and typescript,`,
                        `<code>pure function</code>: a function that does not change the state of the application in any way. The only thing that
                        the funciton does is create some output based on the input. Nothing else.`
                    ]
                },
            ]
        },
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline-3',
                    content:'<span id="concept">Concept</span>'
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        `<code>state</code>: describes the current look, feel and data in applicatoin background. Some part of application state may
                        not be visible, only in memory. Every mouse move, hoover may change the application state. State is often represented by an 
                        object or many objects. State does not have to be global,`,
                        `<code>reducer</code>: a pure function taking an action and the current state, and returning new state calculated on basis of 
                        the current state and the object returned by the action. The <i>new</i> state means, that the object returned by the reducer has to be a 
                        copy of the current state, not just a mutation. Only different state objects are distinguished in react, and only different 
                        state objects will make content rerender. In redux this is the same. Only different object states will make subscribers 
                        informed about the state change,`,
                        `<code>action</code> is an js object with two fields: <code>type</code> and <code>payload</code>. Type informs the reducer
                        how the current state should change, and <code>payload</code> is data related to the change,`,
                        `<code>dispatch</code> a method that may be called on the <code>store</code> object, to change current state. Takes an 
                        action as an argument,`,
                        `<code>store</code> an object holding the global application state,`,
                        // `<code>store.getState()</code>: a method that may be called on the store object to get current state.`
                    ]
                },
                {
                    elementType:'SmallHeadline',
                    content:'Important rules:'
                },
                {
                    elementType:'NoteWarning',
                    content:`Reducer creates a new object, cannot modify existing state,`,
                },
                {
                    elementType:'NoteWarning',
                    content:`Always modify the state with the reducer, do not modify it directly!,`,
                },
                {
                    elementType:'NoteWarning',
                    content:`A reducer has to be a pure function,`,
                },
                {
                    elementType:'Code',
                    content:`
                    Below is possible, but will cause difficult to debug problems. This will mutate the state without 
                    informing subscribers about the change!
<pre>
let state = store.getState();
state.someProp = someProp + 1;
</pre>                    
                    `,
                },
                {
                    elementType:'NoteWarning',
                    content:`It is a stupid thing to do to set whole application state as global. It creates mess. That is why not 
                    whole application state should be managed by redux. Local states shuld be tracked localy within local object, 
                    prop-drilling or with context. Only elements used by distant components and by many components may be globalized,`,
                },

                {
                    elementType:'NoteWarning',
                    content:`No asynchronous logic in reducers,`,
                },


                {
                    elementType:'Headline-3',
                    content:'<span id="mostSimple">Most simple counter app</span>'
                },                

                {
                    elementType:'SmallHeadline',
                    content:'A provider'
                },                
                {
                    elementType:'Paragraph',
                    content:`
                    There needs to be a provider for the global context in the whole applicaton:
                    `
                },    
                {
                    elementType:'Code',
                    content:`
                    src/index.js
<pre>
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import myReducer from './features/myCounter/MyCounterReducer';
const store = createStore(myReducer, {counter: 1});
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
</pre>                    
                    `
                },    


                {
                    elementType:'Paragraph',
                    content:`
                    Now for the <code>App</code> component:
                    `
                },    
                {
                    elementType:'Code',
                    content:`
                    src/index.js
<pre>
import React from 'react';;
import { Counter } from './....';
import MyCounter from './....';

function App() {
  return (
    <div>
      <h2>My counter</h2>
      <MyCounter />
    </div>
  );
}

export default App;
</pre>                    
                    `
                },   
                {
                    elementType:'Paragraph',
                    content:`
                    Now for the <code>MyCounter</code> component:
                    `
                }, 

                {
                    elementType:'Code',
                    content:`
                    src/index.js
<pre>
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, setValue} from './actions';
import styles from './MyCounter.module.css';

const MyCounter = () => {
    const currentVal = useSelector(state => state.counter)
    const dispatch = useDispatch();
    const inc = () => {dispatch(increment())}
    const dec = () => {dispatch(decrement())}
    const change = (e) => {dispatch(setValue(parseInt(e.target.value)))}
    const log = () => {console.log(currentVal)}

    return (
        <div className="wrapper">
            <button onClick={dec}>-</button>
            <input type="number" value = {currentVal} onChange={change}></input>
            <button onClick={inc}>+</button>
            <button onClick={log}>log</button>
        </div>
          )
}

export default MyCounter;
</pre>                    
                    `
                },   


                            



                {
                    elementType:'Headline-3',
                    content:'<span id="storageConfiguration">Store configuration</span>'
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    Before state may be set, the store (the global state object) has to be created:
                    `
                },
                {
                    elementType: 'Code',
                    content: `
<pre>
// in app/store.js
import { configureStore } from '@redux/toolkit';
import { counterReducer } from '...';
import { addCommentReducer } from '...';

export default configureStore({
    reducer: {
        counter: counterReducer,
        comment:  commentReducer
    }
})
</pre>                    
                    `
                },

                {
                    elementType: 'Paragraph',
                    content: `
                    In above case there are two functions responsible for states realted to two different features.
                    To modify the state of application one must refer to the concrete reducer, and then to 
                    the action:
                    `
                },
                {
                    elementType: 'Code',
                    content: `
<pre>
//changing state of counter:
store.dispatch("counter/increment");
store.dispatch("counter/decrement");
store.dispatch("counter/reset");
</pre>                    
                    `
                },        
                {
                    elementType: 'Paragraph',
                    content: `
                    Now to change comment state:
                    `
                },
                {
                    elementType: 'Code',
                    content: `
<pre>
//changing state of counter:
store.dispatch("comment/add");
store.dispatch("comment/remove");
store.dispatch("comment/edit");
</pre>                    
                    `
                }, 
                {
                    elementType: 'Paragraph',
                    content: `
                    In general the first part of the dispatch string is the reducer that action refers to, and the second 
                    argument is the action type that needs to be performed on storage. This way redux knows what function 
                    needs to be called with the action type.
                    `
                },          
                {
                    elementType:'SmallHeadline',
                    content:'Root reducer'
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    Above little/part reducers are called <b>slice reducers</b>. They apply only actions related to some feature.
                    In general <code>configureStore</code> demands a single root. In such case PROBABLY the prefix indicating the 
                    reducer is not needed. However action types may not repete. Combining slice reducers to a root reducer may 
                    be acomplished in two ways:
                    `
                },   
                {
                    elementType: 'Code',
                    content: `

<pre>
function rootReducer(state = {}, action) {
    return {
        counter: counterReducer(state.counter, action),
        comment: commentReducer(state.comment, action)
    }
}

excport default configureStore({
    reducer: {
        rootReducer: rootReducer
    }
})
</pre>                    
                    `
                }, 
                {
                    elementType: 'Paragraph',
                    content: `
                    Or with a <code>combineReducers</code> function:
                    `
                },   
                {
                    elementType: 'Code',
                    content: `

<pre>
const rootReducer = combineReducers({
    counter: counterReducer,
    comment: commentReducer
})
</pre>                    
                    `
                },   
                
                
                {
                    elementType:'Headline-3',
                    content:'<span id="settingState">Setting state</span>'
                },

                {
                    elementType:'Paragraph',
                    content:`Store configuration in <code>app/store.js</code> is ready:`
                },



                {
                    elementType: 'Code',
                    content: `
<pre>
// in app/store.js
import { configureStore } from '@redux/toolkit';
import { counterReducer } from '...';

export default configureStore({
    reducer: {
        counter: counterReducer,
        comment:  commentReducer
    }
})
</pre>                    
                    `
                },

                {
                    elementType:'Paragraph',
                    content:`The reducer is needed:`
                },

                {
                    elementType: 'Code',
                    content: `
                    counterReducer.js
<pre>
function(state, action){
    switch (action.type) {
        case 'increment':
            return {...state, counter: state.counter + 1}
            break;
        case 'decrement':
            return {...state, counter: state.counter - 1}
            break;
        case 'reset':
            return {...state, counter: 0}
            break;
        case 'incrementStep':
            return {...state, counter: state.counter + action.payload}
            break;
        case 'decrementStep':
            return {...state, counter: state.counter - action.payload}
            break;
        case 'setValue':
            return {...state, counter: action.payload}
            break;

        default:
            return state;
    }
}
</pre>                    
                    `
                },

                {
                    elementType:'Paragraph',
                    content:`Actions are needed`
                },


                {
                    elementType: 'Code',
                    content: `
                    counterActions.js
<pre>
const increment = () => {type:'counter/increment'};
const decrement = () => {type:'counter/decrement'};
const incrementStep = step => {type:'counter/incrementStep', payload: step};
const decrementStep = step => {type:'counter/decrementStep', payload: step};
const setValue = value => {type:'counter/setValue', payload: value};

</pre>                    
                    `
                },

                {
                    elementType:'Headline-3',
                    content:'<span id="settingState">Setting state</span>'
                },


                
                {
                    elementType:'Headline-3',
                    content:'<span id="gettingState">Getting state</span>'
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