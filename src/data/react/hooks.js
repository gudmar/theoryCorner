

let data =     {
    summary: 'react hooks',
    title: 'React hooks',
    searchKeywords:`React lifecycle methods render 
    `,
    cathegory: 'js',
    content: [

        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'Hooks'
                },

                {
                    elementType: 'Paragraph',
                    content: `
                    Each component in react has its lifecycle. Firstly it is created, then it is rendered, after this 
                    there may be a necessity to fetch some data from the server, then the component has to be mounted 
                    (placed on the screen). During its life it has to be updated, and finally it has to be demolished.
                    Between all those operations there is a necessity to place  some custom actions, like state updating,
                    element updating, fetching data etc. These actions have to be done in precise moments. For 
                    placing all those actions in the lifecycle of the component, there were introduced the lifecycle methods.
                    But lifecycle methods are for class components. And they may not be applied in case of the currently
                    encouraged function components. That is why there are <strong>react hooks</strong>: functinos 
                    that are hooked somewhere in the lifecycle of the function component. It is possible to 
                    do exectly the same things with hooks and with lifecycle methods. Lets take a look at those hooks.
                    `
                },
                {
                    elementType:'Headline-3',
                    content:'General rules regarding hooks and components'
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        `No state changing code allowed in the body of the component. All should be in the hooks,`,
                        `There can be a lot of hooks of the same type used in one component, each hook is used independantly,`,
                        `Hooks may be used only in components main scope or in other, custom hook functions. Usege of hooks inside 
                        other functions than directly in components or in other hooks if forbidden, as may lead to bugs,`,
                        `Hooks should be used in the function main scope, not in nested blocks of code or in loops, or conditional statements,`,

                    ]
                },

                {
                    elementType:'Headline-3',
                    content:'Custom hooks'
                },
                {
                    elementType:'UnsignedList',
                    content:[
                            `Custom hooks are functions that should be used to separate the reusable logic, 
                            that may be used in other components,`,
                            `It is allowed to use build in hooks inside custom hooks,`,
                            `Custom hooks should be written in the separate files, so it is easy to import them,`,
                            `Custom hooks names shuold start with the <b>use</b> word, so it is easy to tell hooks apart of the other functions,`,
                            `If the custom hook is used in different components, and uses a build in hook to, then the build in hook (the hook 
                                that is nested in the custom hook) scope is unique, so it is not sheared between any other components`
                    ]
                },
                {
                    elementType:'Code',
                    content:`
                    <pre>
import {useState, useEffect} from "react";

export default function useFetch(url){
    const [data, setData] = useState(null);

    useEffect(()=>{
        fetch(url)
            .then((response) => {return response.json();})
            .then((data) => setData(data));
    }, [url]);  // only if the url changes this will trigger,

    return [data]; // data is a promisse 
}
</pre>
                    `
                },



                {
                    elementType:'Headline-3',
                    content:'Hooks'
                },
                {
                    elementType:'UnsignedList',
                    content:[
                    ]
                },


                {
                    elementType:'SmallHeadline',
                    content:'useState(initialState)'
                },
                {
                    elementType:'Paragraph',
                    content:'const [state, setState] = useState(initialState);'
                },
                {
                    elementType:'Paragraph',
                    content:`Could be compared to the <code>setState(updater[, callback])</code> from the class components,`
                },

                {
                    elementType:'UnsignedList',
                    content:[
                        `Returns a stateful value and a function to update it`,
                        `During initial render the state becomes the same as <code>initialState</code>`,
                        `setState is a setter that should be used to set new state values`,
                        `Callbacks may be used as the arg of setState as 
                         <code>setState(prevState => prevState + 2)</code>`,
                        `If a function is passed to the setState setter, 
                        then the states value will be set to the value this function returns.`,
                        `In case the state is set to the same value, react will not update children of affected component.`
                    ]
                },


// useEffect(didUpdate);
//     NOTE:
//     `Mutations, subscriptions, timers, logging and other side effects are not allowed in the main body of a function component!
//     Or this will lead to bugs`,

//     `All side effects should be used in the useEffect callback.`,
//     `Callback of <code>useEffect</code> will run after the render is commited to the screen.`,
//     `<code>useEffect(()=>{})</code> launches <strong>after every completed render</strong> by default`,
//     `<code>useEffect(()=>{}, [args])</code> now useEffect will trigger <strong>only</strong> when any of values in 
//     the <code>args</code> changes. Can be used for conditional rendering.`
//     `If the <code>useEffect</code> callback returns a function, this function will be treated as a <code>
//     componentDidUmount</code> hook, so will be run on umount of the component.`,
//     `<code>useEffect</code> is used after screen painting. If there is a need to run something before content is 
//     displayed, it would be better to use <code>useLayoutEffect</code> instead`,

                {
                    elementType:'SmallHeadline',
                    content:'useEffect(didUpdate)'
                },
 
                {
                    elementType:'Paragraph',
                    content:`Concatenates both: <code>componentDidMount</code> and <code>componentDidUpdate</code>
                    lifecycle methods.`
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        `All side effects should be used in the useEffect callback.`,
                        `Callback of <code>useEffect</code> will run every time, after render is commited to the screen.`,
                        `<code>useEffect(()=>{})</code> launches <strong>after every completed render</strong> by default`,
                        `<code>useEffect(()=>{}, [args])</code> now useEffect will trigger <strong>only</strong> when any of values in 
                        the <code>args</code> changes. Can be used for conditional rendering.`
                        `If the <code>useEffect</code> callback returns a function, this function will be treated as a <code>
                        componentDidUmount</code> hook, so will be run on umount of the component.`,
                        `<code>useEffect</code> is used after screen painting. If there is a need to run something before content is 
                        displayed, it would be better to use <code>useLayoutEffect</code> instead`,
                        
                    ]
                },


                {
                    elementType:'SmallHeadline',
                    content:'useContext( )'
                },
 
                {
                    elementType:'Paragraph',
                    content:`
                    The context is an object holding some data that needs to be passed to the components that are 
                    deeply nested inside the component passing the context. Normally there would be props passed 
                    from the component to the child component. But the problem known as the <q>props drilling</q>
                    occures, when the props has to be passed deep.
                    `
                },
                {
                    elementType:'Paragraph',
                    content:`
                    Possible usages are passing the:
                    `
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        `global scope`,'application configurations,','user settings','preferred language','...'
                        
                    ]
                },
                {
                    elementType:'Paragraph',
                    content:`
                    How to use it?
                    `
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        `Create the context`, `Provide the context: every nested component has access to the context`, 
                        `Consume the context`,
                        `When the context changes, all components using context will be rerendered,`
                        `<code>useContext</code> returns the context, that was set in the other place,`
                        
                    ]
                },
                {
                    elementType:'Code',
                    content:
                    `
<b>Creating the context:</b>
<pre>
import { createContext } from 'react';
cons Context = createContext('some value');
</pre>              

<b>Providing the context</b>
Can be done with the &lt;Context.Provider value={val}> wrapping component.
Every component nested in the &lt;Context.Provider> will have access to the context
<pre>
function Compon() {
    cont val = 'initial context';
    return (
        &lt;Context.Provider value={val}>
            <SomeComponent/>
        &lt;Context.Provider>
    )
}

<b>Consumint the contest</b>
A):
import {useContext} from 'react';

function SomeComponent(){
    const val = useContext(Context);

    return (
        &lt;>
            <span>first usage: {val}</span>
            <span>Second usage: {val}</span>
        &lt;/>
    )
}

B):
function SomeComponent(){
    return (
        &lt;Context.Consumer>
            {value => &lt;span>{value}&lt;span>}
        &lt;Context.Consumer>
    )
}

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
                    content:'reactjs.org',
                    href: 'https://reactjs.org/docs/hooks-reference.html#useeffect',
                    description:'Hooks reference'
                },
                {
                    elementType:'Link',
                    content:'projects.wojtekmaj.pl',
                    href: 'https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/',
                    description:'Lifecycle in react'
                },
                {
                    elementType:'Link',
                    content:'dmitripavlutin.com',
                    href: 'https://dmitripavlutin.com/react-context-and-usecontext/',
                    description:'useContext'
                },
            ]
        }
    ]
};

export default function getHooksData(){
    return data;
}



// useEffect(didUpdate);
//     NOTE:
//     `Mutations, subscriptions, timers, logging and other side effects are not allowed in the main body of a function component!
//     Or this will lead to bugs`,

//     `All side effects should be used in useEffect callback.`,
//     `Callback of <code>useEffect</code> will run after the render is commited to the screen.`,
//     `<code>useEffect(()=>{})</code> launches <strong>after every completed render</strong> by default`,
//     `<code>useEffect(()=>{}, [args])</code> now useEffect will trigger <strong>only</strong> when any of values in 
//     the <code>args</code> changes. Can be used for conditional rendering.`
//     `If the <code>useEffect</code> callback returns a function, this function will be treated as a <code>
//     componentDidUmount</code> hook, so will be run on umount of the component.`,
//     `<code>useEffect</code> is used after screen painting. If there is a need to run something before content is 
//     displayed, it would be better to use <code>useLayoutEffect</code> instead`,

// useLayoutEffect(didUpdate);
//     `Thre only difference between <code>useLayoutEffect</code> and <code>useEffect</code> is time the callback is triggered.
//     In case of the <code>useLayoutEffect</code> the callback will be triggered before content is displayed on the screen.`,
//     `The useLayoutEffect function takes only synchronous callbacks!, effecte are visible on screen, so bettern not to
//     make user wait.`


// useRef(initialValue);
//     `Retunrs an object called a reference. Than object has a property 'current' thats initial value is set to the 
//     useRef <code>initialValue</code> argument.`,
//     `The value hold in the current property is mutable and may be user by the developer as a normal variable would be.`,
//     `The change in the reference object <b>does not cause component to renrender</b>, and state would. This is one of 
//     differences between the object state and the reference,`,
//     `The change to the reference object is synchronous, and this makes it different from the state object, as 
//     state change is asynchronous. New value of the state is not available imediately after setting it.`,
//     `useRef may be used to access DOM elements:
//         <pre>
//             function SomeComponent(){
//                 let customRef = useRef();
//                 useEffect(()=>{customRef.current.fosuc()})
//                 // using customRef object to set focus on it
//                 ...
//                 return (
//                     <div ref={customRef}></div>
//                 )
//             }
//         </pre>
//     `
//     `Changes to the reference value should not be made in the body of the component function. The same rules apply as
//     with the component state. All changes made to those objects should be done in hooks. `,
//     `https://dmitripavlutin.com/react-useref-guide/`





