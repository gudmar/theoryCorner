

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
                    The react lifecycle methods were places, where some sideeffects that should take place on precise
                    moments should be placed in react classes. For example 
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
                    content:'projects.wojtekmaj.pl',
                    href: 'https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/',
                    description:'Lifecycle in react'
                },
            ]
        }
    ]
};

export default function getReactLifecycleData(){
    return data;
}




