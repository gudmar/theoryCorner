
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
                            <ul>
                            <li>If this function is not passed to the <code>connect</code>, then the wrapped component will not be subscribed to
                            the store and will not render when the store changes</li>
                            <li>May be passed as <code>(function mapState(state)})</code> or <code>(const mapState = (state) =>{})</code></li>
                            <li><code>state</code> is the whole store object, that the function is given,</li>
                            <li><code>ownProps</code> all the properties given to the wrapper component</li>
                            <li>Returns a plain object that contains store properties mapped to properties used in the component</li>
                            <li>Should not create new objects, as this will cause re-render</li>
                            <li>Should be fast</li>
                            <li>May return a function, in this case this function is treated as actual <code>mapStateTop
                        </ul>                            
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
<div class="note">Now shorthand; as o object</div>
<pre>
import { increment, decrement, reset } from './counterActionCreators'
 
function mapStateToProps(state) {
     return {
         counter: state.counter
     }
}
const mapDispatchToProps = {
    increment,
    decrement,
    reset
}

export default connect(mapStateToProps, mapDispatchToProps)(MyComponent)
</pre>
The rest use cases are <a href="https://react-redux.js.org/api/connect" target:"_blank">here</a>.
                            `,
                            Argument: '<span id="mapDispatchToProps">mapDispatchToProps?: Object | (dispatch, ownProps?) => Object</span>',
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
                                <li>A default <code>dispatch</code> will be supplied even if this function is not given,</li>
                                <li>Returns a set of functions that should be used to make changes to the store,</li>
                                <li>The component connected with the <code>mapDispathcToProps</code> function is not provided the <code>props.dispatch</code>
                                function anymore. Instead it has access to the functions defined in the <code>mapDispatchToProps</code></li>
                                <li><code>mapDispatchToProps</code> takes a mandatory <code>dispatch</code> argument, and the optional <code>ownProps</code>
                                that makes it not necessary to pass props to functions returned by the <code>mapDispatchToProps</code></li>
                            </ul>           
<div class="note">A redux-aware component. The component is given <code>props.dispatch</code> function by the <code>connect</code></div>
<pre>
connect()(MyComponent) // connect(null, null)(MyComponent)
connect(mapStateToProps)(MyComponent)


const MyComponent = (props) => {
    const dispatch = props.dispatch

    return (
        &lt;button onClick={()=>dispatch({type: 'INCREMENT'})> + &lt;button>}
    )
}
</pre>

<div class="note">And a redux-unaware component</div>
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

                            `,
                            Argument: '<code>mapDispatchToProps</code>: mapDispatch for short',
                            Type: `function`,
                            Takes: `
                            <ul>
                                <li><code>dispatch: Function</code>: function used to modify the sotre</li>
                                <li><code>ownProps?: Object</code>: causes this function invocation every time connected argument receives new props</li>
                            </ul>
                            `,
                            Returns: 'Object: each field is a function, handler for changing props in the store',
                            Description: `
                            Makes wrapped components unaware of the Redux. Instead of <code>props.dispatch</code> there will be concrete 
                            function handlers available in the component
                            `
                        },




                        {
                            [Symbol('title')]:'mergeProps',
                            [Symbol('code')]:`   
<div class="note">By default the wrapped component receives: <code>{...ownProps, ...stateProps, ...dispatchProps }</code> If any other mapping 
is required, this function should return desired object</div>
                            `,
                            Argument: 'mergeProps?: (stateProps, dispatchProps, ownProps) => Object',
                            Type: `function`,
                            Takes: `
                            <ul>
                                <li><code>stateProps</code></li>
                                <li><code>dispatchProps</code></li>
                                <li><code>ownProps</code></li>
                            </ul>
                            `,
                            Returns: 'Object',
                            Description: `
                            Maps state (store) properties to the given component properties,
                            `
                        },


                        {
                            [Symbol('title')]:'options',
                            [Symbol('code')]:`
                            <ul>
                                <li><code>context</code>: capable of delivering additional context to components in the <code>&lt;Provider></code>
                                and the connected component</li>
                                <li><code>pure</code>: default is ture. Assumes that the wrapped component is a pure component and relys only on
                                state delivered by props or redux store. Does additional checks to avoid unnecessary calls to the 
                                <code>mapStateToProps</code>, </code>mapDispatchToProps</code> and to avoid rendering. In 99% should not be set to false.</li>
                                <li><code>areStatesEqual(next, prev)</code> a function for comparing states. Default is <code>prev === next</code></li>
                                <li><code>areOwnPropsEqual: (next: Object, prev: Object) => boolean</code> default is shallow equality. For whitelisting props</li>
                                <li><code>areStatePropsEqual</code>: default <code>shallowEqual</code></li>
                                <li><code>areMergedPropsEqueal</code>: defaul <code>shallowEqual</code></li>
                                <li><code>forwardRef</code>: if true, adding a ref to the connected wrapper component will return the instance of the wrapped component</li>
                            </ul>
                            `,
                            Argument: 'options?: Object',
                            Type: `Object`,
                            Takes: `
                            context?: Object, 
                            pure?: boolean, 
                            areStatesEqual? function, 
                            areOwnPropsEqual?: function, 
                            areStatePropsEqual?: function, 
                            areMergedPropsEqual?: function,
                            forwardRef?: boolean
                            `,
                            Returns: 'Object',
                            Description: `
                            Maps state (store) properties to the given component properties,
                            `
                        },



                    ]
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

export default function getWithoutToolkitData(){
    return data;
}