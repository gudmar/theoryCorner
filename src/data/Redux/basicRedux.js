
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
                        the current state and the action object. The <i>new</i> state means, that the object returned by the reducer has to be a 
                        copy of the current state, not just a mutation. Only different state objects are distinguished in react, and only different 
                        state objects will make content rerender. In redux this is the same. Only different object states will make subscribers 
                        informed about the state change,`,
                        `<code>action</code> is a object with two fields: <code>type</code> and <code>payload</code>. Type informs the reducer
                        how the current state should change, and <code>payload</code> is data related to the change,`,
                        `<code>dispatch</code> a method that may be called on the <code>store</code> object, to change current state. Takes an 
                        action as an argument,`,
                        `<code>store</code> an object holding the global application state,`,
                        `<code>store.getState()</code>: a method that may be called on the store object to get current state.`
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
                    content:'<span id="settingState">Setting state</span>'
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
import { myReducer } from '...';
import { someOptionalReducer } from '...';

export default configureStore({
    reducer: {
        firstReducer: myReducer,
        nextReducer:  someOptionalReducer
    }
})
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