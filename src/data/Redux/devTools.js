
let data =     {
    summary: 'DevTools',
    title: 'DevTools',
    searchKeywords:`

    `,
    cathegory: 'Redux',
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'Devtools'
                },



                {
                    elementType: 'Paragraph',
                    content: `
                    There is a great number of redux extentions capable of tracking a lot of things:
                    <a href = " " target="_blank"></a>. One of them is devtools, that may be installed as an extention in browser
                    `
                },

                {
                    elementType: 'HiddenCode',
                    content: [
                        {
                            info:`Instal extention in browser`,
                            code:``
                        },
                        {
                            info:`Instal extention in the project`,
                            code:`<code>npm install --save redux-devtools-extension</code>`
                        },
                        {
                            info:`Add as enhancer to the store`,
                            code:`
<pre>
<div class="note">Using with additional enhancers/middlewares</div>
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(...middleware),
  // other store enhancers if any
));

<div class="note">No additional enhancers/middlewares</div>
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

const store = createStore(reducer, /* preloadedState, */ devToolsEnhancer(
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
));
</pre>                            
                            `
                        },
                        {
                            info:`Usage outside production only`,
                            code:`
<pre>
<div class="note">No additional enhancers/middlewares</div>
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension/developmentOnly';
// import { devToolsEnhancer } from 'redux-devtools-extension/logOnlyInProduction';

const store = createStore(reducer, /* preloadedState, */ devToolsEnhancer(
  // options like actionSanitizer, stateSanitizer
));

<div class="note">Additional enhancers/middlewares</div>
import { createStore, applyMiddleware } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension/developmentOnly';
// import { devToolsEnhancer } from 'redux-devtools-extension/logOnlyInProduction';

const composeEnhancers = composeWithDevTools({
  // options like actionSanitizer, stateSanitizer
});
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(...middleware),
  // other store enhancers if any
));
</pre>                            
                            `
                        },

                    ]
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    Now devtools will be available in browser, making it possible to track store changes
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
                    content:'github',
                    href: 'https://github.com/zalmoxisus/redux-devtools-extension',
                    description:'Readme'
                },
            ]
        }
    ]
};

export default function getReduxDevToolsData(){
    return data;
}