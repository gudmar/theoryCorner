
let data =     {
    summary: 'redux middleware',
    title: 'Redux middleware',
    searchKeywords:`

    `,
    cathegory: 'redux',
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'Understanding middleware'
                },



                {
                    elementType: 'Paragraph',
                    content: `
                    This is generaly <a href="https://redux.js.org/understanding/history-and-design/middleware" target="_blank">this article</a>.
                    I had to 'rewrite it' to understand the concept better.
                    `
                },

                {
                    elementType: 'UnsignedList',
                    content: [
                        `Redux middleware are functions that wrap original <code>store.dispatch</code> in a function that delivers some new functionalities,`,
                        `Middleware returns a modified dispatch method, that may be wrapped by another middleware, and a chain may be created,`,
                        `<code>next()</code> is a function being the modified <code>store.dispatch()</code> delivered by the previous function in the chain`,
                        `A middleware is function taking <code>store</code>, returning a function that takes the modified by previous middleware in the chain
                        dispatch function, returning a function taking an action. The last funciton, that takes this action has to return the modified 
                        dispatch function that may be used later by the next middleware`,
                    
                    ]
                },
                {
                    elementType: 'SmallHeadline',
                    content: `The template:`
                },
                {
                    elementType: 'Code',
                    content: `
<pre>
function middlewareTemplate(store){
    return function nextDispatch(next){
        return function dispatchAction(action){
            //Do some actions made before dispatch happens,
            const result = next(action); // This is the actual store.dispatch that is
            //modified by previous middleware in the chain
            //Do some actions after the dispatch happens

            return result
        }
    }
}

                <div class="note">Or with arrow functions</div>

const middlewareTempate = store => next => action => {
    //Do some actions made before dispatch happens,
    const result = next(action); // This is the actual store.dispatch that is
    //modified by previous middleware in the chain
    //Do some actions after the dispatch happens

    return result
}
</pre>                
                    `
                },

                {
                    elementType: 'SmallHeadline',
                    content: `Where is this function wrapping from:`
                },
                {
                    elementType: 'Paragraph',
                    content: `Based on logger example, from the mentioned article:`
                },

                {
                    elementType: 'NoteWarning',
                    content: `<code>store.dispatch</code> returns <code>Undefined</code>, but middleware may modify this and return something.
                    In actual middleware the modified <code>store.dispatch</code> is returned.`
                },

                {
                    elementType: 'HiddenCode',
                    content: [
                        {
                            info:`Basic wrapper function: not very convenient to call this function all the time`,
                            code:`
<pre>
function dispatchAndLog(store, action) {
    console.log('dispatching', action);
    store.dispatch(action)
    console.log('next state:', store.getState());
}
</pre>                            
                            `
                        },

                        {
                            info:`Monkey patching: overwritting existing <code>store.dispatch</code> with a new one`,
                            code:`
<pre>
const next = store.dispatch;
store.dispatch = function dispatchAndLog(action) {
    console.log('dispatching', action);
<div class="note">Note, that result is declared with the let keyword</div>    
    let result = next(action)
    console.log('next state:', store.getState());

    return result
}
</pre>                           
Now every call of the <code>store.dispatch</code> will result in call of the custom <code>dispatchAndLog</code> funcion in stead.
This is not the right approach, as it is not the clean code, 
                            `
                        },

                        {
                            info:`Returning the modified <code>store.dispatch</code> instead of monkey patching`,
                            code:`
<pre>
function logger(store){
    const next = store.dispatch;
    return function dispatchAndLog(action) {
                console.log('dispatching', action);
                let result = next(action)
                console.log('next state:', store.getState());
                return result;
            }
}
        <div class="note">Now this funciton may be applied with more similar functions in one call of some <code>applyMiddleware</code> function</div>

function applyMiddleware(store, middlewares) {
    middlewares = middlewares.slice();
    middlewares.reverse()
    middlewares.forEach(middleware => (store.dispatch = middleware(store)))
}

<div class="note">Above function will overwritte the original <code>store.dispatch</code> with the new function being the result of all
applied middleware funcitons</div>

</pre>                           
                            `
                        },


                        {
                            info:`It is better to return the modified <code>store.dispatch</code> instead,`,
                            code:`
<pre>
function logger(store){
    return function wrapDisaptchAndLog(next) {
        return function dispatchAndLog(action) {
            console.log('dispatching', action)
            let result = next(action);
            console.log('next state', store.getState())
            return result
        }
    }
}
<div class="note">Or the same with arrow functions</div>
const logger = store => next => action => {
    console.log('dispatching', action)
    let result = next(action);
    console.log('next state', store.getState())
    return result
}
</pre>                           


                            `
                        },



                    ]
                    
                }


                // {
                //     elementType: 'ListOfContent',
                //     content: [
                //         {id: 'x', title: 'a'},
                //         {id: 'y', title: 'b'},

                //     ]
                // },



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
                    content:'redux.js.org',
                    href: 'https://redux.js.org/usage/configuring-your-store#the-solution-configurestore',
                    description:'Applying middleware and enhancers with createStore'
                },
                {
                    elementType:'Link',
                    content:'redux.js.org',
                    href: 'https://redux.js.org/understanding/history-and-design/middleware',
                    description:`About middleware: very good explanation of where chain approach with nested functions took from. My article is 
                    a dygested version of this one.`
                },
            ]
        }
    ]
};

export default function getMiddlewareData(){
    return data;
}