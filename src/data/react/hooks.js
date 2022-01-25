

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
                        `In case the state is set to the same value, react will not update children of affected component,`,
                        `It is possible to set an object as a value of the state, however when using the object setter
                        the whole object must be set, not the a single property, as the whole object would be overwritten`
                    ]
                },
                {
                    elementType:'Code',
                    content:`
                    <b class="text-danger">Overwritting the whole state</b>
<pre>
    function Car() {
        const [car, setCar] = useState({
            brand: "Skoda",
            model: "Favorit",
            year: "1992",
            color: "Claret"
        })
        useEffect(){
            <span class="bg-danger text-white p-1">setCar({model: "Forman"})</span>; 
            // !! ACHTUNG: This will set the whole object to {model: "Forman"}
            // No 'brand', 'year', or 'color' properties will be defined anymore
            <span class="bg-success text-white p-1">setCar({...car, model: 'Forman'})</span>; 
            // This is the right approach
        }
        return (
            &lt;React.Fragment>
                &lt;div>car.brand&lt;/div>
                &lt;div>car.model&lt;/div>
                &lt;div>car.year &lt;/div>
                &lt;div>car.color&lt;/div>
        )
    }
</pre>                    
                    `
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
                        the <code>args</code> changes. Can be used for conditional rendering.`,
                        `If the <code>useEffect</code> callback returns a function, this function will be treated as a <code>
                        componentDidUmount</code> hook, so will be run on umount of the component.`,
                        `<code>useEffect</code> is used after screen painting. If there is a need to run something before content is 
                        displayed, it would be better to use <code>useLayoutEffect</code> instead`,
                        
                    ]
                },


        {
            elementType:'SmallHeadline',
            content:'useLayoutEffect(didUpdate)'
        },

        {
            elementType:'Paragraph',
            content:`
                Thre only difference between <code>useLayoutEffect</code> and <code>useEffect</code> is time the 
                callback is triggered. In case of the <code>useLayoutEffect</code> the callback will be triggered before 
                content is displayed on the screen.`,
        },
        {
            elementType:'Paragraph',
            content:
                `The useLayoutEffect function takes only synchronous callbacks!, effecte are visible on screen, so 
                bettern not to make user wait.`
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
                        `When the context changes, all components using context will be rerendered,`,
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



                {
                    elementType:'SmallHeadline',
                    content:'useRef(initialValue)'
                },
                {
                    elementType:'UnsignedList',
                    content:[
                            `Retunrs an object called a reference. Than object has a property 'current' thats initial value is set to the 
                            useRef <code>initialValue</code> argument.`,
                            `The value hold in the current property is mutable and may be user by the developer as a normal variable would be.`,
                            `The change in the reference object <b>does not cause component to renrender</b>, and state would. This is one of 
                            differences between the object state and the reference,`,
                            `The change to the reference object is synchronous, and this makes it different from the state object, as 
                            state change is asynchronous. New value of the state is not available imediately after setting it.`,
                            `useRef may be used to access DOM elements:
                                <pre>
function SomeComponent(){
    let customRef = useRef();
    useEffect(()=>{customRef.current.fosuc()})
    // using customRef object to set focus on it
    ...
    return (
        &lt;div ref={customRef}></div>
    )
}
                                </pre>
                            `,
                            `Changes to the reference value should not be made in the body of the component function. The same rules apply as
                            with the component state. All changes made to those objects should be done in hooks. `,
                            `https://dmitripavlutin.com/react-useref-guide/`
                    ]
                },

                {
                    elementType:'SmallHeadline',
                    content:'useMemo(()=>computeExpensiveValue(a,b), arrOfDep)'
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        `All arguments taken by the callback passed to the <code>useMemo</code> should be provided in the 
                        <code>arrOfDep</code>,`,
                        `Computes the expensive value only if one of values given in <code>arrOfDep</code> changes,`,
                        `If none of values given inside the <code>arrOfDep</code> changes, the memorized value given by the
                        callback function is returned,`,
                        `Code should be written without the <code>useMemo</code> function, and this function should be added
                        at the end, as the performance boost, as it may be chosen to change <code>useMemo</code> functionality
                        in the future,`,
                        `If the <code>arrOfDep</code> is empty, the the value of the callback will be recomputed every time`
                    ]
                },
                {
                    elementType:'SmallHeadline',
                    content:'useCallback(computeExpensiveValueFunction, arrOfDep)'
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        `All arguments taken by the <code>computeExpensiveValueFunction</code> passed to the 
                        <code>useCallback</code>, should be provided in the <code>arrOfDep</code>,`,
                        `This function works the similar way that the <code>useMemo</code> does:
                        <code>useCallback(fn, deps)</code> is the same as <code>useMemeo(()=> fn, deps)</code>`
                    ]
                },
                {
                    elementType:'SmallHeadline',
                    content:'useReducer'
                },
                {
                    elementType:'Code',
                    content:`
<pre>
import {useReducer} from 'react';

function SomeComponent(){
    const [state, dispatch] = useReducer(reducer, initialState);

    const action = {type: 'ActionType'};
    function redurcer(state, action){
        let newState;
        switch (action.type) {
            case 'type1': 
                newState = {...state, someProp: 'newValue'};
                <span class="bg-danger text-white p-1">// Create a new state, do not mute</span>
                break;
            case 'type2':
                newState = {...state, someProp: 'newValue'};
                <span class="bg-danger text-white p-1">// Create a new state, do not mute</span>
                break;
            default:
                throw new Error('Action not defined');
        }
        return newState
    }
    return (
        &lt;button onClick={()=>dispatch(action)}>Button&lt;/button>
    )
}
</pre>                    
                    `
                },
                {
                    elementType:'Paragraph',
                    content:`
                    <code>useReducer</code> is the <b>rare usaged</b> competition for the <code>useState</code>.
                    The similar <code>useReducer</code> idea is used in the <b>Redux</b> state management library.
                    This hook will not be often used, but might come handy in case of the components with complicated 
                    states.
                    `
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        `<code>initialState</code> is the initial state value,`,
                        `<code>reducer</code> is a function, that returns the new value of the state. It is important, that
                        the new value of the state is the <b>copy</b> of the previous state. In case the mutated previous 
                        state is passed, react will not be able to detect changes and will not update the view,`,
                        `<code>state</code> is the state object reference. In case the <code>dispatch</code> function
                        is triggered, this reference will hold the new value of the object,`,
                        `<code>dispatch</code> is the function that is created for the current usage of the <code>useReducer</code>.
                        Calling this function will trigger the state update. Everything before this function call was just 
                        loading the gun, aiming at the target, but this function is like pulling the trigger,`,
                        `<code>action</code> is the object that tells the reducer how to create a new state object.`
                    ]
                },
                {
                    // THIS PARAGRAPH spelling checked
                    elementType:'Paragraph',
                    content:`
                    As mentioned before: this hook usage is similar to the Redux use cases. As there may be a problem with 
                    passing the state down and pulling events up to the common source of the truth, there is a library
                    holding the state globally, and make it possible to access this state from any part of the application.
                    This library is the Redux. It may be used not only for the React. It may be also used in pure JS for instance.
                    `
                },


                {
                    elementType:'SmallHeadline',
                    content:'useImperativeHandle'
                },
                {
                    elementType:'SmallHeadline',
                    content:'useDebugValue'
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
                {
                    elementType:'Link',
                    content:'dmitripavlutin.com',
                    href: 'https://dmitripavlutin.com/react-usereducer/',
                    description:'useReducer'
                },
            ]
        }
    ]
};

export default function getHooksData(){
    return data;
}





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





