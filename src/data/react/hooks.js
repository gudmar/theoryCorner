

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
                    content:'Lifecycle methods'
                },

                {
                    elementType: 'Paragraph',
                    content: `
                    Each component in react has its lifecycle, and its phases. Firlsty it is constructed, then rendered,
                    then it lives, so may be modified, and at the end it is demolished. There is a necessity to 
                    do some operations like component modifications during this proces. Some events should be directly
                    timed: for example server communication should take place after the elemnet is renedered, but
                    before its view is changed. To support making some operations in direct moments of the components 
                    lifecycle, the <code>lifecycle methods</code> are introduced. Lifecycle methods are available only
                    in the react class components. In case functions are used to implement components, react hooks shold 
                    be used instead.
                    `
                },
                {
                    elementType: 'Headline-3',
                    content: `render()`
                },                
                {
                    elementType: 'Paragraph',
                    content: `
                    A pure function (not state changing), checks props and state and returns one of the following:
                    `
                },
                {
                    elementType: 'UnsignedList',
                    content: [
                        `<b>React elements</b>,`,
                        `<b>React fragments</b>: a structure letting to avoid wrapping the list of paralel elements 
                        in not needed divs, for example a lot of <code>&lt;td></code> elements may be wrapped in a
                        &ltReact.fragment> instead,`,
                        `<b>Portals</b>: elements allowing to render a child node into other place in the DOM (for example
                            in case a button opens a modal, modal is in the root DOM element, and button opening it is 
                            nested somewhere),`,
                        `Chains of chars or numbers, that will be rendered a text nodes,`,
                        `A logical type, that if null or false will make component not to render,`
                    ]
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    The render component is mandatory in class based components,
                    `
                },


                {
                    elementType: 'Headline-3',
                    content: `constructor(props)`
                },                
                {
                    elementType: 'Paragraph',
                    content: `
                    Not mandatory, used to set initial state or handel events. Should not be used for subscriptions!
                    `
                },
                {
                    elementType: 'UnsignedList',
                    content: [
                        `Constructor is not mandatory,`,
                        `super(props) is mandatory if constructor is created,`,
                        `<code>setState()</code> should <b>not</b> be used in the constructor, the constructor is the
                        only place where state should be assigned directly: <code>this.state = ...</code>`,
                        `No subscriptions here,`
                    ]
                },


                {
                    elementType: 'Headline-3',
                    content: `componentDidMount()`
                },                
                {
                    elementType: 'Paragraph',
                    content: `
                    Mounting is the proces of placing the element in the DOM, so this method is called directly after
                    the element is rendered and inserted into DOM. This is a good place for:
                    `
                },
                {
                    elementType: 'UnsignedList',
                    content: [
                        `Subscriptions, (remember to use <code>componentWillUmount</code> in this case)`,
                        `Server requests,`,
                        `Communication with web workers,`,
                        `If <code>setState()</code> is used in <code>componentDidMount</code>, then there will be an 
                        extra rendering taking place, but this extra rendering will finish before browser updates 
                        the screen, so user will not see this. However it is better to set state directly in the 
                        constructor if possible, as this may cause some performance issures,`,
                        `This method will not be called after updates, only after initial render and mount`
                    ]
                },


                {
                    elementType: 'Headline-3',
                    content: `componentDidUpdate()`
                },                
                {
                    elementType: 'Paragraph',
                    content: `
                    Invoked after actualization, but <b>not</b> after inintial rendering and mounting, in this case 
                    <code>componentDidMount</code> should be used. This method will not be invoked if <code>
                    shouldComponentUpdate</code> returns false. Use <code>componentDidUpdate</code> to:
                    `
                },
                {
                    elementType: 'UnsignedList',
                    content: [
                        `DOM operations when the element was actualized,`,
                        `Server requests,`,
                        `<code>setState()</code> may be used here, will cause extra rendering, but before screen 
                        update, so not visible. Hovewer this will cause performance issues,`,
                        `<b>NOTE</b> <code>setState()</code> if used here, should be wrapped in a conditional statement,
                        or will end up with the infinite loop,`
                    ]
                },



                {
                    elementType: 'Headline-3',
                    content: `componentWillUnmount()`
                },                
                {
                    elementType: 'Paragraph',
                    content: `
                    This is invoked just before the element is removed from the DOM, and the component is deleted.
                    <code>setState()</code> should not be used here, as there is no point in modification of the state 
                    of the component that will be deleted in a while. Compontent once removed is lost forever and will
                    never be mounted again. Instead a new instance will be created. Should be used for cleaning after the 
                    component:
                    `
                },
                {
                    elementType: 'UnsignedList',
                    content: [
                        `unsubscriptions,`, `cancelation of server requests,`, `clearing timers and intervals`
                    ]
                },




                {
                    elementType: 'Headline-3',
                    content: `shouldComponentUpdate(nextProps, nextState)`
                },                
                {
                    elementType: 'Paragraph',
                    content: `
                    Future state and props should be compared and in case the change in the component would not cause
                    change in the component view, this method might return false. In this case components view will not be 
                    updated. This is for improvind performance. Deep comparation should not be used, child components
                    may be updated anyway, in future this method may be used only as a suggestion for react engine.
                    Invoked just before the <code>componentDidUpdate</code>. This is not invoked before initial 
                    component render. <b>Rare usage</b>
                    `
                },





                {
                    elementType: 'Headline-3',
                    content: `getShapshotBeforeUpdate()`
                },                
                {
                    elementType: 'Paragraph',
                    content: `
                    Invoked just after render, and just before the element will be updated in the DOM, to be sure
                    nothing need to be adjusted. The value returned by this method will be send to the <code>
                    componentDidUpdate</code>. If this method returns null, then noting will be passed to the 
                    <code>componentDidUpdate</code> and this method will have no effect. May be used with the
                    <code>React.createRef()</code>. Can be used to handle for example scrollbars positions 
                    in case it is needed. <b>Rare usage</b>
                    `
                },
                {
                    elementType: 'UnsignedList',
                    content: [
                        
                    ]
                },


            ]
        },
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
                    The react lifecycle methods were places, where some sideeffects that should take place on precise
                    moments should be placed in react classes. For example 
                    `
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    The react lifecycle methods were places, where some sideeffects that should take place on precise
                    moments should be placed in react classes. For example 
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
            ]
        }
    ]
};

export default function getHooksData(){
    return data;
}

// General rules regarding hooks:
//     `No state changing code allowed in the body of the component. All should be in the hooks,`,
//     `There can be a lot of hooks of the same type used in one component, each hook is used independantly,`,
//     `Hooks may be used only in components main scope or in other, custom hook functions. Usege of hooks inside 
//     other functions than directly in components or in other hooks if forbidden, as may lead to bugs,`,
//     `Hooks should be used in the function main scope, not in nested blocks of code or in loops, or conditional statements,`,

// Custom hooks:
//     `Custom hooks are functions that should be used to separate the reusable logic, that may be used in other components,`,
//     `It is allowed to use build in hooks inside custom hooks,`,
//     `Custom hooks should be written in the separate files, so it is easy to import them,`,
//     `Custom hooks names shuold start with the <b>use</b> word, so it is easy to tell hooks apart of the other functions,`,
//     `If the custom hook is used in different components, and uses a build in hook to, then the build in hook (the hook 
//         that is nested in the custom hook) scope is unique, so it is not sheared between any other components`
    
//     Here a custom hook example

// const [state, setState] = useState(initialState);
//     `Returns a stateful value and a function to update it`,
//     `During initial render the state becomes the same as <code>initialState</code>`,
//     `setState is a setter that should be used to set new state values`,
//     `Callbacks may be used as the arg of setState as <code>setState(prevState => prevState + 2)</code>`,
//     `If a function is passed to the setState setter, then the states value will be set to the value this function
//     returns.`,
//     `In case the state is set to the same value, react will not update children of affected component.`

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





