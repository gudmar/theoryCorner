import getBasicReduxData from './Redux/basicRedux.js';
import getSideEffectsReduxData from './Redux/sideEffectsAsync.js'
let theoryDataRedux = [

    {
        summary: 'About',
        title: 'About',
        searchKeywords: 'redux reducer useReducer store dispatch state global state middleware',
        cathegory: 'redux',
        content: [
            {
                elementType:'Article',
                content:[
                    {
                        elementType:'Headline',
                        content:'About redux'
                    },
                    {
                        elementType: 'Paragraph',
                        content: `
                            Redux is a global state management library. Its usage is similar to the mediator pattern. 
                            It is often used with React, but does not have to. 
                        `
                    }
                ]
            },
        ]
    },
    getBasicReduxData(),
    getSideEffectsReduxData(),
    {
        summary: 'tables',
        title: 'tables',
        cathegory: 'js',
        content: [
            {
                elementType:'Article',
                content:[
                    {
                        elementType:'Headline',
                        content:'Tables'
                    },
                    {
                        elementType: 'Paragraph',
                        content: `
        
                        `
                    }
                ]
            },
        ]
    },
]

export function getTheoryDataRedux(){
    return theoryDataRedux;
}