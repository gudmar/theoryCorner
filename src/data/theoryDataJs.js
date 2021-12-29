import getJSFormValidationData from './js/formValidation.js';
import getDomAccessMethods from './js/DOMAccessMethods.js';
import getJSServerCommunicationData from './js/serverCommunication.js';
import getArrayMethods from './js/arrayMethods';
import  getDataTypes from './js/dataTypes';
import getJSOperatorsData from './js/operators';
import getStringMethods from './js/stringMethods';
import getJSObjectsData from './js/objects';
import getObjectMethodsData from './js/objectMethods';
import getReflectData from './js/reflect'
import getJSThisData from './js/this';
import getProxyData from './js/proxy';
import getBitWiseData from './js/bitWiseUseCases';
import getNumberRepresentationData from './js/numberRepresentation';
// import getDestructionAssignmentData from './js/descructiveAssignments';
import getDestructionAssignmentData2 from './js/destructiveAssignments_2';
let theoryDataJs = [

    {
        summary: 'strict mode',
        title: 'About strict mode',
        cathegory: 'js',
        content: [
            {
                elementType:'Article',
                content:[
                    {
                        elementType:'Headline',
                        content:'About strict mode'
                    },
                    {
                        elementType: 'Paragraph',
                        content: `
                            <b>Lorem ipsum</b> dolor sit amet, consectetur adipiscing elit. 
                            Vestibulum et lacinia arcu, ut tempor lacus. Integer euismod, est et pharetra eleifend, 
                            magna nibh congue nulla, eu ornare lacus sem eu leo. Sed aliquet tincidunt neque non tempor. 
                            Sed feugiat, massa at tempus tincidunt, tortor turpis rhoncus orci, nec cursus purus dui vel ipsum. 
                            Sed pellentesque sem nec dictum auctor. Morbi tempus lectus vitae ultrices volutpat. 
                            Vivamus convallis mauris urna. Phasellus rhoncus felis eget mi tincidunt malesuada. 
                            Pellentesque in velit viverra nunc ultrices maximus. Duis in leo dolor.             
                        `
                    }
                ]
            },
        ]
    },
    getDomAccessMethods(),
    {
        summary: 'cloasures',
        title: 'About cloasures',
        cathegory: 'js',
        content: [
            {
                elementType:'Article',
                content:[
                    {
                        elementType:'Headline',
                        content:'About cloasures'
                    },
                    {
                        elementType: 'Paragraph',
                        content: `
                            <b>Lorem ipsum</b> dolor sit amet, consectetur adipiscing elit. 
                            Vestibulum et lacinia arcu, ut tempor lacus. Integer euismod, est et pharetra eleifend, 
                            magna nibh congue nulla, eu ornare lacus sem eu leo. Sed aliquet tincidunt neque non tempor. 
                            Sed feugiat, massa at tempus tincidunt, tortor turpis rhoncus orci, nec cursus purus dui vel ipsum. 
                            Sed pellentesque sem nec dictum auctor. Morbi tempus lectus vitae ultrices volutpat. 
                            Vivamus convallis mauris urna. Phasellus rhoncus felis eget mi tincidunt malesuada. 
                            Pellentesque in velit viverra nunc ultrices maximus. Duis in leo dolor.             
                        `
                    }
                ]
            },
        ]
    },
    {
        summary: 'modules',
        title: 'About Modules',
        cathegory: 'js',
        content: [
            {
                elementType:'Article',
                content:[
                    {
                        elementType:'Headline',
                        content:'About modules'
                    },
                    {
                        elementType: 'Paragraph',
                        content: `
                            <b>Lorem ipsum</b> dolor sit amet, consectetur adipiscing elit. 
                            Vestibulum et lacinia arcu, ut tempor lacus. Integer euismod, est et pharetra eleifend, 
                            magna nibh congue nulla, eu ornare lacus sem eu leo. Sed aliquet tincidunt neque non tempor. 
                            Sed feugiat, massa at tempus tincidunt, tortor turpis rhoncus orci, nec cursus purus dui vel ipsum. 
                            Sed pellentesque sem nec dictum auctor. Morbi tempus lectus vitae ultrices volutpat. 
                            Vivamus convallis mauris urna. Phasellus rhoncus felis eget mi tincidunt malesuada. 
                            Pellentesque in velit viverra nunc ultrices maximus. Duis in leo dolor.             
                        `
                    }
                ]
            },
        ]
    },


    {
        summary: 'object descriptors',
        title: 'Object descriptors',
        cathegory: 'js',
        content: [
            {
                elementType:'Article',
                content:[
                    {
                        elementType:'Headline',
                        content:'Object descriptors'
                    },
                    {
                        elementType: 'Paragraph',
                        content: `
                            <b>Lorem ipsum</b> dolor sit amet, consectetur adipiscing elit. 
                            Vestibulum et lacinia arcu, ut tempor lacus. Integer euismod, est et pharetra eleifend, 
                            magna nibh congue nulla, eu ornare lacus sem eu leo. Sed aliquet tincidunt neque non tempor. 
                            Sed feugiat, massa at tempus tincidunt, tortor turpis rhoncus orci, nec cursus purus dui vel ipsum. 
                            Sed pellentesque sem nec dictum auctor. Morbi tempus lectus vitae ultrices volutpat. 
                            Vivamus convallis mauris urna. Phasellus rhoncus felis eget mi tincidunt malesuada. 
                            Pellentesque in velit viverra nunc ultrices maximus. Duis in leo dolor.             
                        `
                    }
                ]
            },
        ]
    },
    getJSFormValidationData(),
    getJSServerCommunicationData(),
    getArrayMethods(),
    getDataTypes(),
    getJSOperatorsData(),
    getStringMethods(),
    getJSObjectsData(),
    getObjectMethodsData(),
    getJSThisData(),
    getReflectData(),
    getProxyData(),
    getBitWiseData(),
    getNumberRepresentationData(),
    // getDestructionAssignmentData(),
    getDestructionAssignmentData2(),
]

export function getTheoryDataJs(){
    return theoryDataJs;
}