import { useEffect, useLayoutEffect, useReducer, useRef } from "react";

function StopWatchReducer(){
    let initialState = {
        currentTime: 0,
        running: false
    }
    const [stopState, dispatch] = useReducer(reducer, initialState);
    console.log(stopState)
    console.log(initialState)
    if (stopState === undefined) throw new Error()
    let actionTick = null;
    let interval = null;
    
    let currentTimeRef = useRef(0);
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
        return `${getMinutes(time)}:${prefix0(getSeconds(time))}:${prefix0(getMsec(time))}`
    }
    
    function reducer(state, action){
        console.log(state);
        console.log(action);
        switch (action.type){
            case 'start':{
                return {...state, running: true};break;
            }
            case 'stop':{
                return {...state, running: false};
            }
            default: return state
        }
        // if (action.type === "start") return {...state, running: true};
        // if (action.type === "stop" ) return {...state, running: false};
        // return state;
        // if (action.type === "restart") return {...state, currentTime: 0};
        // if (action.type === "tick") return {...state, currentTime: currentTimeRef};
    }
    let actionStart   = {type: 'start'};
    let actionStop    = {type:'stop'};
    let actionRestart = {type:'restart'};
    // let actionTick    = {type: 'tick'};
    
    
    

    useEffect(()=>{
        if(!stopState.running){
            return; // early return
        } else {
            // interval = setInterval(()=>{
            //     // currentTimeRef.current += 1;
            //     // dispatch(actionTick);
            //     // setStopState({...stopState, currentTime: currentTime.current});
            // }, 10)
        }
        return ()=>{console.log('clearInt');clearInterval(interval);}        
    // })
    }, [stopState.running])

    return (
        <div className="col-12 text-center m-5">
            <div className="col-md-6 col-sm-8 col-12 alert alert-dark bg-secondary text-white text-center p-2 d-inline-block">
                <div className="container h1">{convertTime(stopState.currentTime)}</div>
                <div className="container">
                    <button type="button" onClick={dispatch(actionStart)} className="btn  btn-light m-1">Start</button>
                    <button type="button" onClick={dispatch(actionStop)} className="btn  btn-light m-1">Stop</button>
                    <button type="button" onClick={dispatch(actionRestart)} className="btn  btn-light m-1">Reset</button>
                </div>
            </div>
        </div>
    )
}

export default StopWatchReducer;