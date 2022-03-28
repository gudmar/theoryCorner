
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
                    content:'<span id="indexjs">Passing sotre in main js</span>'
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