
let data =     {
    summary: 'store subscribe',
    title: 'Store subscribe',
    searchKeywords:`
        subscribe redux store state
    `,
    cathegory: 'redux',
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'<code>subscribe</code> method'
                },



                {
                    elementType: 'Paragraph',
                    content: `
                        <code>const unsubscribe = store.subscribe(callback)</code> takes a callback that will be executed on store state change, and returns a
                        function that needs to be run when there is need to unsubscribe.
                    `
                },

                {
                    elementType: 'UnsignedList',
                    content: [
                        `Component using subscribe function has to have its own state, that will be manipulated by the subscription,`,
                        `State needs to be imported,`,
                        `There is a <code>store.dispatch</code> method available to change global state,`,
                        `The callback passed to the subscription function will be executed every time store changes, so there is a need to implement a 
                        comparation function, so component will know when to change its own state,`
                    ]
                },

                {
                    elementType: 'Code',
                    content: `
                      <div class="note">store.js</div>
<pre>
import { createStore } from 'redux';
import oldCounterReducer from '../features/oldCounter/oldCounterReducer';
import oldTaskReducer from '../features/oldTasks/oldTasksReducer';
import shoppingReducer from '../features/shoppingChart_subscribe/shoppingChartReducer';

const defaultState = {
    conuter: 0, tasks: [], shopping: []
}

const rootReducer = (state = {counter: 2, tasks: 'someTask'}, action) => {
    return {
        counter: oldCounterReducer(state.counter, action),
        tasks: oldTaskReducer(state.tasks, action),
        shopping: shoppingReducer(state.shopping, action)
    }
}

const oldStore = createStore(rootReducer, defaultState)
console.log(JSON.stringify(oldStore.getState()))
export {rootReducer, oldStore} 
</pre>              
            <div class="note">A reducer file:</div>

<pre>
import defaultState from '../../app/defaultState';

const ShoppingReducer = (state, action) => {
    if (state === undefined) return defaultState;
    switch (action.type) {
        case 'shopping/add':{
            return [...state, action.payload]
        }
        case 'shopping/pop':{
            if (state.length < 0) return state;
            let copyOfState = [...state];
            copyOfState.pop();
            return copyOfState;
        }
        case 'shopping/remove':{
            if (state.length < 0) return state;
            if (action.payload < 0) return state;
            if (action.payload >= state.length) return state;
            let copyOfState = [...state];
            copyOfState.splice(action.payload, 1);
            return copyOfState;
        }
        default: return state;
    }
}
export default ShoppingReducer;
</pre>            
<div class="note">The component</div>
<pre>
import styles from './shoppingChart.module.css';
import { useEffect, useState } from 'react';
import { oldStore } from '../../app/oldStore';

const ShoppingChart = (props) => {
    const store = oldStore;
    const [ownState, setOwnState] = useState([]);
    // Subscribed component seems to must have an own state !!!

    const salesItems = ['chair', 'lamp', 'desk', 'bed', 'container']

    const setSalesItem = (e) => store.dispatch({type:'shopping/add', payload: e.target.innerText});
    const removeSalesItem = (e) => store.dispatch({type: 'shopping/remove', payload: parseInt(e.target.getAttribute('data-index'))})

    const getSalesItems = () => salesItems.map((item) => (
        &lt;span key={item} className={styles.salesItem} onClick = {setSalesItem}>{item}&lt;/span>
    ))

    const getChosenItems = () => ownState.map((item, index) => (
        &lt;span key={index} className={styles.salesItem} data-index = {index} onClick={removeSalesItem}>{item}&lt;/span>
    )) 

    const updateOwnState = (newState) => {
        console.log('update')
        if (ownState.length != newState.length) setOwnState(newState);
    }

    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            console.log('Shopping chart subscribed'); 
            updateOwnState(store.getState().shopping);
        });
        return () => {
            console.log('Unsubscribed shopping chart');
            return unsubscribe();
        }
        // returns unsubscribe function, that will be called when component is unmounted
    }, [])

    return (
        &lt;div className="shopping-chart" style={{maxWidth: '300px'}}>
            &lt;h3 className={styles.h3}>Shopping-chart</h3>
            &lt;p>Uses <code>store.subscribe()</code> Click an item to add to a 'shopping chart'. Click on an item in the shopping chart to remove it.</p>
            &lt;div className={styles.wrapper}>
                &lt;div className={styles.saleItems}>
                    {getSalesItems()}
                &lt;/div>
                &lt;div className={styles.selectedSaleItems}>
                    {getChosenItems()}
                &lt;/div>
            &lt;/div>
        &lt;/div>
    )
}

export default ShoppingChart;
</pre>
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
                    content:'Developer mozilla',
                    href: ' ',
                    description:'Tutorial'
                },
            ]
        }
    ]
};

export default function getStoreSubscribeData(){
    return data;
}