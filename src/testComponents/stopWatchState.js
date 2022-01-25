import { useEffect, useLayoutEffect, useState, useRef } from "react";

function StopWatchState(){
    let initialState = {
        currentTime: 0,
        running: false
    }
    let interval = null;
    
    let currentTime = useRef(0);
    const [stopState, setStopState] = useState(initialState);
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
    function start(){setStopState({...stopState, running: true});}
    function stop(){setStopState({...stopState, running: false});}
    function restart(){setStopState({...stopState, currentTime: 0}); currentTime.current = 0;}

    useEffect(()=>{
        if(!stopState.running){
            return; // early return
        } else {
            interval = setInterval(()=>{
                currentTime.current += 1;
                setStopState({...stopState, currentTime: currentTime.current});
            }, 10)
        }
        return ()=>{console.log('clearInt');clearInterval(interval);}        
    }, [stopState.running])

    return (
        <div className="col-sm-12 col-lg-6 col-xl-3 col-xxl-4 bg-secondary text-white">
            <div className="container">{convertTime(stopState.currentTime)}</div>
            <div className="container">
                <button type="button" onClick={start} className="btn btn-outline-primary">Start</button>
                <button type="button" onClick={stop} className="btn btn-outline-primary">Stop</button>
                <button type="button" onClick={restart} className="btn btn-outline-primary">Reset</button>
            </div>
        </div>
    )
}

export default StopWatchState;