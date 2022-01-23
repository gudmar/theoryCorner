// SPELL CHECKED, CORRECT!

let data =     {
    summary: 'react lifecycle methods',
    title: 'React lifecycle methods',
    searchKeywords:`React lifecycle methods render constructor componentDidMount componentDidUpdate componentWillUpdate
    componentWillUnmount shouldComponentUpdate getDerivedStateFromProps getShapshotBeforeUpdate 
    getDerivedStateFromError componentDidCatch 
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
                    do some operations like component modifications during this process. Some events should be directly
                    timed: for example server communication should take place after the element is rendered, but
                    before its view is changed. To support making some operations in direct moments of the component 
                    lifecycle, the <code>lifecycle methods</code> are introduced. Lifecycle methods are available only
                    in the react class components. In case functions are used to implement components, react hooks should 
                    be used instead.
                    `
                },
                {
                    elementType: 'SmallHeadline',
                    content: `Call order`
                },
                {
                    elementType: 'Image',
                    name: 'reactLifecycle.png',
                    alt: 'lifecycle methods call order'
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
                        `<b>React fragments</b>: a structure letting to avoid wrapping the list of parallel elements 
                        in not needed divs, for example a lot of <code>&lt;td></code> elements may be wrapped in a
                        &ltReact.fragment> instead,`,
                        `<b>Portals</b>: elements allowing to render a child node into another place in the DOM 
                            (for example,
                            in case a button opens a modal, modal is in the root DOM element, and button opening it is 
                            nested somewhere),`,
                        `Chains of chars or numbers, that will be rendered a text node,`,
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
                    Not mandatory, used to set initial state or handle events. Should not be used for subscriptions!
                    `
                },
                {
                    elementType: 'UnsignedList',
                    content: [
                        `The constructor is not mandatory,`,
                        `<code>super(props)</code> is mandatory if constructor is present,`,
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
                    Mounting is the process of placing the element in the DOM, so this method is called directly after
                    the element is rendered and inserted into the DOM. This is a good place for:
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
                        the screen, so user will not see this. However, it is better to set state directly in the 
                        constructor if possible, as this may cause some performance issues,`,
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
                    Invoked after actualization, but <b>not</b> after initial rendering and mounting, in this case 
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
                        update, so not visible. However, this will cause performance issues,`,
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
                    of the component that will be deleted in a while. Component once removed is lost forever and will
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
                    changes in the component view, this method might return false. In this case components view will not be 
                    updated. This is for improving performance. Deep comparation should not be used, child components
                    may be updated anyway, in the future this method may be used only as a suggestion for react engine.
                    Invoked just before the <code>componentDidUpdate</code>. This is not invoked before the initial 
                    component render. <b>Rare usage</b>
                    `
                },

                {
                    elementType: 'Headline-3',
                    content: `static getDerivedStateFromProps(props, state)`
                },                
                {
                    elementType: 'Paragraph',
                    content: `
                    Called before <b>every</b> initial render and update renders. Should return an object updating the state, or
                    null if no update needed. <b>Rare usage</b>. It should be considered to use:
                    `
                },
                {
                    elementType: 'UnsignedList',
                    content: [
                        '<code>componentDidUpdate</code>,',
                        `memoization techniques,`, `fully controlled component, or fully uncontrolled component with
                        the key`
                    ]
                },
                {
                    elementType: 'Code',
                    content: 
                    `
<pre>
class SomeComponent extends Component {
    state = ...

    static getDerivedStateFromProps(props, state){
        if (props.val !== state.prevPropsVal || state.prevOtherVal !== state.otherVal){
            return {prevPropsVal ....}
        }
        return null;
    }
    render ....
}
</pre>                    
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
                    nothing needs to be adjusted. The value returned by this method will be sent to the <code>
                    componentDidUpdate</code>. If this method returns null, then nothing will be passed to the 
                    <code>componentDidUpdate</code> and this method will have no effect. In case this 
                    method returns something additional render will take place, but this will not be
                    visible on the screen. May be used with the
                    <code>React.createRef()</code>. Can be used to handle, for example scrollbars positions 
                    in case it is needed. <b>Rare usage</b>
                    `
                },
                {
                    elementType: 'Code',
                    content: 
`
<pre>
class MovableElement extends React.Component {
    constructor(props){
        super(props);
        this.movableElRef = React.createRef();
    }

    getShapshotBeforeUpdate(prevProps, prevState){
        if (prevProps.positionX &lt; props.positionX) {return 1}
        if (prevProps.positionX === props.positionX) {return null}
        return -1
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        if (snapshot === 1) {...}
        if (snapshot === -1) {...}
        ...
    }

    render(){
        return(
            &lt;div ref={this.movableElRef}>..&lt;/div>
        )
    }
}
</pre>
`                        
                    
                },



                {
                    elementType: 'Headline-3',
                    content: `getDerivedStateFromError(error)`
                },                
                {
                    elementType: 'Paragraph',
                    content: `
                    Invoked <b>in the render</b> phase, so should never have any side effects. Good for 
                    rendering an alternative component in case of an error. Not good for catching actual errors.
                    Errors will make their way up to the window object if not caught by the <code>componentDidCatch()</code>
                    method in the production environment. 
                    `
                },
                {
                    elementType: 'Code',
                    content: `
<pre>
class ErrorHandler extends React.component {
    constructor(props){
        super(props);
        this.state = {hasError: false};
    }
    static getDerivedStateFromError(error){
        return {hasError: true};
    }

    componentDidCatch(error, info){
        // will catch error in the production environment
        // can cause side effects like state change
        // in commit phase
        // error is the error tha was thrown,
        // info is the component that thrown the error
        log(info.componentStack)
    }

    render(){
        if (this.state.hasError) {
            ....  // NOK case
        } 
        return ... // OK case
    }
}
</pre>                    
                    `
                },

                {
                    elementType: 'Headline-3',
                    content: `componentDidCatch(error, info)`
                },                
                {
                    elementType: 'Paragraph',
                    content: `
                    Invoked in the commit phase, so may be used with side effects. Good for logging errors.
                    Catches an error not letting it travel up the tree (only in case of the production environment,
                    as in the development all errors will make their way up to the <code>window</code> object
                    anyway). <code>error</code> is the error that was thrown, and <code>info</code> is the
                    object that is thrown the error.
                    `
                },

            ]
        },

        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline-2',
                    content:'Depraciated methods'
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        `<code>componentWillMount()</code>: now changed to <code>UNSAFE_componentWillMount()</code>`,
                        `<code>componentWillReceiveProps()</code>: now <code>UNSAFE_componentWillReceiveProps()</code>`,
                        `<code>componentWillUpdate()</code>: now <code>UNSAFE_componentWillUpdate()</code>`,
                    ]
                },
            ]
        },

        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline-2',
                    content:'Other methods'
                },
                {
                    elementType:'SmallHeadline',
                    content:`
                    <code>setState(updater[, callback])</code>
                    `
                },
                {
                    elementType:'Paragraph',
                    content:`
                    The only place the state may be assigned directly is the constructor of the component. In any other 
                    place the <code>setState</code> method should be used, or bugs may occur. The <code>setState</code>
                    method is asynchronous, and many calls of this method may be combined so that state is updated
                    only once in the cycle. Each change to the state causes the component to update if <code>
                    componentShouldUpdate()</code> lifecycle method does not return false.
                    It should be avoided to use nested state, as in this case components will not update, as 
                    only the flat structure of the state object is compared.
                    `
                },
                {
                    elementType:'Paragraph',
                    content:`
                    The optional callback function is invoked after the state is changed. As there is a 
                    <code>componentDidUpdate</code> method, it is better to avoid setting this callback argument.
                    `
                },

                {
                    elementType:'SmallHeadline',
                    content:`
                    <code>forceUpdate(callback)</code>
                    `
                },
                {
                    elementType:'Paragraph',
                    content:`
                    This method forces the render method invocation, and component update, not taking into account the
                    <code>shouldComponentUpdate()</code> method. This method just forces an additional render.
                    It is better to avoid it and use natural state and props changes.
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
                    content:'projects.wojtekmaj.pl',
                    href: 'https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/',
                    description:'Lifecycle in react'
                },

                {
                    elementType:'Link',
                    content:'https://pl.reactjs.org',
                    href: 'https://pl.reactjs.org/docs/react-component.html#constructor',
                    description:'Lifecycle in react'
                },
            ]
        }
    ]
};

export default function getReactLifecycleData(){
    return data;
}




