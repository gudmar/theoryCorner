import  getStopWatchStateData  from './practice/stopWatchState'
import  getStopWatchReducerData  from './practice/stopWatchReducer'

let practiceComponents = [

    getStopWatchStateData(),
    getStopWatchReducerData(),
 
]

export function getPracticeComponents(){
    return practiceComponents;
}