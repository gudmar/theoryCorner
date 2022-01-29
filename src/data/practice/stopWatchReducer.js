let stopWatchReducerData =     {
    summary: 'stop watch reducer',
    title: 'stop watch state',
    searchKeywords: '',
    cathegory: 'Test components',
    content: [
        {
            elementType:'Headline-2',
            content:'Stop watch: useReducer'
        },
        {
            elementType:'Paragraph',
            content:`Please read in the React hooks about <code>useReducer</code>`
            
        },
        {
            elementType:'StopWatchReducer',
            content:[
            ]
        },
        {
            elementType: 'Code',
            content:`
<pre>
import { useEffect, useLayoutEffect, useReducer} from "react";

function reducer(state, action){
    if (action.type === "start") return {...state, running: true};
    if (action.type === "stop" ) return {...state, running: false};
    if (action.type === "restart") return {...state, currentTime: 0};
    if (action.type === "tick") {
        return {...state, currentTime: state.currentTime + 1};
    }
}   // May be placed outside the component
// Can be placed inside the component function, but will not have access to the 
// component scope anyway;


function StopWatchReducer(){
    let initialState = {
        currentTime: 0,
        running: false
    }
    const [stopState, dispatch] = useReducer(reducer, initialState);
    if (stopState === undefined) throw new Error()
    let interval = null;
    
    function getMsec(time){
        return time % (100);
    }
    function getSeconds(time){
        return ((time - getMsec(time)) / 100) % 60
    }
    function getMinutes(time){
        return Math.floor(time / (60 * 100));
    }
    function prefix0(nr){return nr < 10 ? '0'+nr:nr;}
    function convertTime(time){
        return \`\${getMinutes(time)}:\${prefix0(getSeconds(time))}:\${prefix0(getMsec(time))}\`
    }

    <div class="note note-danger">
If the <b>reducer</b> function was here, in the 
component scope, it would not have access to the component scope. Only <b>state</b> and <b>action</b>
attributes would be available
    </div>
    

    let actionStart   = {type: 'start'};
    let actionStop    = {type:'stop'};
    let actionRestart = {type:'restart'};
    let actionTick    = {type: 'tick'};
    

    useEffect(()=>{
        if(!stopState.running){
            return; // early return
        }
        interval = setInterval(()=>{
            dispatch(actionTick);
        }, 10)
        
        return ()=>{clearInterval(interval);}        
    }, [stopState.running])

    return (
        &lt;div className="col-12 text-center m-5">
            &lt;div className="col-md-6 col-sm-8 col-12 alert alert-dark bg-secondary text-white text-center p-2 d-inline-block">
                &lt;div className="container h1">{convertTime(stopState.currentTime)}</div>
                &lt;div className="container">
                    &lt;button type="button" onClick={()=>dispatch(actionStart)} className="btn  btn-light m-1">Start</button>
                    &lt;button type="button" onClick={()=>dispatch(actionStop)} className="btn  btn-light m-1">Stop</button>
                    &lt;button type="button" onClick={()=>dispatch(actionRestart)} className="btn  btn-light m-1">Reset</button>
                    <div class="note note-danger">dispatch has to be returned by the wrapping function,
                    or it will cause an infinite loop</div>
                &lt;/div>
            &lt;/div>
        &lt;/div>
    )
}
</pre>                
            `
        },

    ]
};

export default function getStopWatchReducerData(){
    return stopWatchReducerData;
}