import getJasmineAsyncData from './jasmine/asyncTesting';
import getJasmineGettingStartedData from './jasmine/gettingStarted';
import getMatchersData from './jasmine/matchers';
import getJasmineTestStructureData from './jasmine/testStructure';
import getSpyData from './jasmine/spies'


let theoryDataJasmine = [
    getJasmineAsyncData(),
    getJasmineGettingStartedData(),
    getJasmineTestStructureData(),
    getMatchersData(),
    getSpyData(),



]

export function getTheoryDataJasmine(){
    return theoryDataJasmine;
}