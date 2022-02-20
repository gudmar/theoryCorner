import getDataTypesPythonData from "./python/dataTypes"
import getStringPythonData from "./python/strings"
import getOperatorsPythonData from "./python/operators"


let theoryDataCss = [

    getDataTypesPythonData(),
    getStringPythonData(),
    getOperatorsPythonData(),
    // {
    //     summary: 'position',
    //     title: 'position',
    //     searchKeywords: 'absolute relative static sticky fixed z-index css',
    //     cathegory: 'scss',
    //     content: [
    //         {
    //             elementType:'Article',
    //             content:[
    //                 {
    //                     elementType:'Headline',
    //                     content:'About position'
    //                 },
    //                 {
    //                     elementType: 'Paragraph',
    //                     content: `
    
    //                     `
    //                 }
    //             ]
    //         },
    //     ]
    // },

 
]

export function getTheoryDataPython(){
    return theoryDataCss;
}