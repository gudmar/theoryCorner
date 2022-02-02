import getValidationData from './html/validation';
import getSemanticData from './html/semanticElements';
import getInputsData from './html/inputs';
import getIframeData from './html/iframes';


let theoryDataHtml = [
    getValidationData(),
    getSemanticData(),
    getInputsData(),
    getIframeData(),
 
]

export function getTheoryDataHtml(){
    return theoryDataHtml;
}