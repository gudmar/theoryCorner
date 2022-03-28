
let data =     {
    summary: 'without toolkit',
    title: 'without toolkit',
    searchKeywords:`
        connect mapStateToProps mapDispatchToProps
    `,

    // https://react-redux.js.org/api/connect

    // https://react-redux.js.org/using-react-redux/connect-mapdispatch


    cathegory: 'redux',
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'How did it work before redux-toolbox was invented'
                },



                {
                    elementType: 'Paragraph',
                    content: `
                    `
                },


                {
                    elementType: 'ListOfContent',
                    content: [
                        {id: 'connect', title: 'connect()'},
                        {id: 'mapStateToProps', title: 'mapStateToProps(state, ownProps?) => Object'},
                        {id: 'mapDispatchToProps', title: 'mapDispatchToProps?: Object | (dispatch, ownProps?) => Object'},
                        {id: 'settingStore', title: 'Setting the store'},
                        {id: 'storeInComponent', title: 'Using store in the component'},
                        {id: 'indexjs', title: 'Passing store in main js file'},

                    ]
                },

            ]
        },
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline-3',
                    content:'<span id="connect">connect()</span>'
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        `<code>connect(mapStateToProps?, mapDispatchToProps?, mergeProps?, options?)(MyComponent)</code>,`,
                        `Wraps the given component and returns the component that is connected to the redux store, and has
                        properties like <code>props.dispatch</code>, or props that are mapped to some properties in the sore with
                        <code>mapStateToProps</code> and <code>mapDispatchToProps</code> functions,`,
                        `Is a wrapper,`,
                        `If none argument given, <code>export default connect()(MyComponent)</code>, then returns a component having access to the
                        <code>props.dispatch()</code> function and no subscriptions. This object does not listen to the store at all.`
                    ]
                },
                {
                    elementType:'SmallHeadline',
                    content:`
                    Arguments are:
                    `
                },

                {
                    elementType: 'ConditionalArray',
                    headItems: [
                        'Argument','Type','Takes', 'Returns', 'Description'
                    ],
                    content: [
                        {
                            [Symbol('title')]:'mapStateToProps',
                            [Symbol('code')]:`                       
                            <code>mapStateToProps?(state, ownProps): function => Object</code>
<pre>
//Example:
const mapStateToProps = (state) => (
        { 
            counter: state.counterA,
            toDos: state.toDosList,
        }
    )
// Now wrapped component has 
// props.counter pointing to the store.counterA
// props.toDosList pointing to the store.toDosList
</pre>
                            `,
                            Argument: '<code>mapStateToProps</code>',
                            Type: `function`,
                            Takes: `
                            <ul>
                                <li><code>state</code></li>
                                <li><code>ownProps?</code></li>
                            </ul>
                            `,
                            Returns: 'Object',
                            Description: `
                            Maps state (store) properties to the given component properties,
                            `
                        },


                        {
                            [Symbol('title')]:'mapDispatchToProps',
                            [Symbol('code')]:`               
                            <ul>
                                <li>If this function is not passed to the <code>connect</code>, then the wrapped component will not be subscribed to
                                the store and will not render when the store changes</li>
                                <li>May be passed as <code>(function mapState(state)})</code> or <code>(const mapState = (state) =>{})</code></li>
                                <li><code>state</code> is the whole store object, that the function is given,</li>
                                <li><code>ownProps</code> all the properties given to the wrapper component</li>
                                <li>Returns a plain object that contains store properties mapped to properties used in the component</li>
                                <li>Should not create new objects, as this will cause re-render</li>
                                <li>Should be fast</li>
                            </ul>        
                            <code>mapStateToProps?(state, ownProps): function => Object</code>
<pre>
//Example:
const mapStateToProps = (state) => (
        { 
            counter: state.counterA,
            toDos: state.toDosList
        }
    )
</pre>                            
                            `,
                            Argument: '<code>mapStateToProps</code>',
                            Type: `function`,
                            Takes: `
                            <ul>
                                <li><code>state</code></li>
                                <li><code>ownProps?</code></li>
                            </ul>
                            `,
                            Returns: 'Object',
                            Description: `
                            Maps state (store) properties to the given component properties.
                            Called every time the store changes (if called with only one parameter), or every time 
                            the store or parameters given to the component change (based on shallow comparition, if two 
                            arguments are given)
                            `
                        },



                    ]
                },
                {
                    elementType: 'Code',
                    content: `
<pre>
connect()(MyComponent) // connect(null, null)(MyComponent)
connect(mapStateToProps)(MyComponent)
</pre>                    
And in the component
<pre>
const MyComponent = (props) => {
    const dispatch = props.dispatch

    return (
        &lt;button onClick={()=>dispatch({type: 'INCREMENT'})> + &lt;button>}
    )
}
<div className="note">Note, that in above case the button has to be aware of the redux. The component is aware of the redux</div>
</pre>
                    `
                    
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    Now the component <code>MyComponent</code> will be given the <code>props.dispatch</code> property, that is the 
                    dispatch function, that may be used to update the store.
                    `
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    In case <code>mapStateToProps</code> is provided, the component props will be updated when store is updated. This is a subscription.
                    `
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    In above cases the component must be redux aware.
                    `
                },


                {
                    elementType:'Headline-3',
                    content:`<span id="mapStateToProps">mapStateToProps(state, ownProps?) => Object</span>`
                },
                {
                    elementType: 'UnsignedList',
                    content: [
                        `Called every time the store changes`,
                        `Informs subscribed element about the change in the sotre,`,
                        `Optional. If not given to connect function, the component will not be subscribed to changes in the store,`,
                        `Returns an Object`
                    ]
                    
                },
                {
                    elementType:'Headline-3',
                    content:'<span id="mapDispatchToProps">mapDispatchToProps?: Object | (dispatch, ownProps?) => Object</span>'
                },
                {
                    elementType: 'UnsignedList',
                    content: [
                        `A default <code>dispatch</code> will be supplied even if this function is not given,`,
                        `Returns a set of functions that should be used to make changes to the store,`,
                        `The component connected with the <code>mapDispathcToProps</code> function is not provided the <code>props.dispatch</code>
                        function anymore. Instead it has access to the functions defined in the <code>mapDispatchToProps</code>`,
                        `<code>mapDispatchToProps</code> takes a mandatory <code>dispatch</code> argument, and the optional <code>ownProps</code>
                        that makes it not necessary to pass props to functions returned by the <code>mapDispatchToProps</code>`
                    ]
                },

                {
                    elementType: 'Code',
                    content: `
                    <div class="note">Without passing <code>ownProps</code></div>
<pre>
render() {
    return <button onClick = {() => this.props.toggleTodoItem(this.props.todoItemsId)}
}

const toggleTodo = payload => {return {type: 'TOGGLE', payload: payload}}

const mapDispatchToProps = dispatch => {
    return {
        toggleTodoItem: todoItemsId => dispatch(toggleTodo(todoId))
    }
}
</pre>

<div class="note">Passing <code>ownProps</code></div>
<pre>
render() {
    return <button onClick = {() => this.props.toggleTodoItem()}
}

const toggleTodo = payload => {return {type: 'TOGGLE', payload: payload}}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        toggleTodoItem: todoItemsId => dispatch(toggleTodo(ownProps.todoId))
    }
}
</pre>
<div class="note">More than just one reducer mapped:</code></div>
<pre>
const increase = () => {return {type: 'ADD', payload: 1}};
const decrease = () => {return {type: 'ADD', payload: -1}};
const addToCounter = (payload) => {return {typa: 'ADD', payload: payload}}
const reset = () => {return {type: 'SET', payload: 0}}

cosnt mapDispatchToProps = dispatch => {
    return {
        increaseCounter: dispatch(increase()),
        decreaseCounter: dispatch(decrease()),
        addToCounter: dispatch(addToCounter(value)),
        reset: dispatch(reset())
    }
}
</pre>
<div class="note">And in Counter component:</code></div>
<pre>
const Counter = (props) => {
    return (
        &lt;div>
            &lt;span>&lt;/span>
        &lt;/div>
    )
}
</pre>

                    `
                    
                },



                {
                    elementType:'Headline-3',
                    content:'<span id="settingStore">Setting the store</span>'
                },
                {
                    elementType:'Headline-3',
                    content:'<span id="storeInComponent">Using store in the component</span>'
                },
                {
                    elementType:'Headline-3',
                    content:'<span id="indexjs">Passing store in main js</span>'
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
                    content:'react-redux.js',
                    href: 'https://react-redux.js.org/using-react-redux/connect-mapstate',
                    description:'mapStateToProps function'
                },
                {
                    elementType:'Link',
                    content:'react-redux.js',
                    href: 'https://react-redux.js.org/using-react-redux/connect-mapdispatch',
                    description:'mapDispatchToProps function'
                },
            ]
        }
    ]
};

export default function getSideEffectsReduxData(){
    return data;
}