import { useEffect, useLayoutEffect } from "react";

// https://reactjs.org/docs/hooks-reference.html#useeffect

const [state, setState] = useState(initialState);
    `Returns a stateful value and a function to update it`,
    `During initial render the state becomes the same as <code>initialState</code>`,
    `setState is a setter that should be used to set new state values`,
    `Callbacks may be used as the arg of setState as <code>setState(prevState => prevState + 2)</code>`,
    `If a function is passed to the setState setter, then the states value will be set to the value this function
    returns.`,
    `In case the state is set to the same value, react will not update children of affected component.`

useEffect(didUpdate);
    NOTE:
    `Mutations, subscriptions, timers, logging and other side effects are not allowed in the main body of a function component!
    Or this will lead to bugs`,

    `All side effects should be used in useEffect callback.`,
    `Callback of <code>useEffect</code> will run after the render is commited to the screen.`,
    `<code>useEffect(()=>{})</code> launches <strong>after every completed render</strong> by default`,
    `<code>useEffect(()=>{}, [args])</code> now useEffect will trigger <strong>only</strong> when any of values in 
    the <code>args</code> changes. Can be used for conditional rendering.`
    `If the <code>useEffect</code> callback returns a function, this function will be treated as a <code>
    componentDidUmount</code> hook, so will be run on umount of the component.`,
    `<code>useEffect</code> is used after screen painting. If there is a need to run something before content is 
    displayed, it would be better to use <code>useLayoutEffect</code> instead`,

useLayoutEffect(didUpdate);
    `Thre only difference between <code>useLayoutEffect</code> and <code>useEffect</code> is time the callback is triggered.
    In case of the <code>useLayoutEffect</code> the callback will be triggered before content is displayed on the screen.`