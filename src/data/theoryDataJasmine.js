import getJasmineAsyncData from './jasmine/asyncTesting';
import getJasmineGettingStartedData from './jasmine/gettingStarted';
import getMatchersData from './jasmine/matchers';
import getJasmineTestStructureData from './jasmine/testStructure';
import getSpyData from './jasmine/spies'
import getJusmineAngularData from './jasmine/testingAngular'


let theoryDataJasmine = [
    getJasmineAsyncData(),
    getJasmineGettingStartedData(),
    getJasmineTestStructureData(),
    getMatchersData(),
    getSpyData(),
    getJusmineAngularData()



]
console.log(getJasmineAsyncData())

export function getTheoryDataJasmine(){
    return theoryDataJasmine;
}