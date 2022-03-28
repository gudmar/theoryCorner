import getBasicReduxData from './Redux/basicRedux.js';
import getSideEffectsReduxData from './Redux/sideEffectsAsync.js'
console.error('Start HERE:')
// useSelector: is a huck mapping state to 'props': https://levelup.gitconnected.com/react-redux-hooks-useselector-and-usedispatch-f7d8c7f75cdd
// const currentUser = useSelector(state => state.currentUser 
// useDispatch: returns a function that acts as a dispatch:
// dispatch: useDisaptch(),
// useEffeoct(() => {dispatch(allActions...)}))  https://levelup.gitconnected.com/react-redux-hooks-useselector-and-usedispatch-f7d8c7f75cdd
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