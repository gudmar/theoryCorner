// SPELL CHECKED, CORRECT!
let stopWatchStateData =     {
    summary: 'stop watch',
    title: 'stop watch',
    searchKeywords: '',
    cathegory: 'Test components',
    content: [
        {
            elementType:'Headline-2',
            content:'Stop watch: useState'
        },
        {
            elementType:'Paragraph',
            content:`Please read in the React hooks about <code>useState</code>`
            
        },
        {
            elementType:'StopWatchState',
            content:[
            ]
        },
        {
            elementType: 'Code',
            content:`
<pre>
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
    return \`\${getMinutes(time)}:\${prefix0(getSeconds(time))}:\${prefix0(getMsec(time))}\`
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
    &lt;div className="col-12 text-center rounded">
        &lt;div className="col-md-6 col-sm-8 col-12 bg-secondary text-white text-center p-2 d-inline-block">
            &lt;div className="container h1">{convertTime(stopState.currentTime)}&lt;/div>
            &lt;div className="container">
                &lt;button type="button" onClick={start} className="btn  btn-light m-1">Start&lt;/button>
                &lt;button type="button" onClick={stop} className="btn  btn-light m-1">Stop&lt;/button>
                &lt;button type="button" onClick={restart} className="btn  btn-light m-1">Reset&lt;/button>
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

export default function getStopWatchStateData(){
    return stopWatchStateData;
}