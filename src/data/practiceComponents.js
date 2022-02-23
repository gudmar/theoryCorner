import  getStopWatchStateData  from './practice/stopWatchState'
import  getStopWatchReducerData  from './practice/stopWatchReducer'
import getFlexDemoData from './practice/flexDemoPractice'

let practiceComponents = [

    getStopWatchStateData(),
    getStopWatchReducerData(),
    getFlexDemoData(),
 
]

export function getPracticeComponents(){
    return practiceComponents;
}