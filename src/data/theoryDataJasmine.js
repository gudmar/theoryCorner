import getJasmineAsyncData from './jasmine/asyncTesting';
import getJasmineGettingStartedData from './jasmine/gettingStarted';
import getMatchersData from './jasmine/matchers';
import getJasmineTestStructureData from './jasmine/testStructure';


let theoryDataJasmine = [
    getJasmineAsyncData(),
    getJasmineGettingStartedData(),
    getMatchersData(),
    getJasmineTestStructureData(),



]

export function getTheoryDataJasmine(){
    return theoryDataJasmine;
}