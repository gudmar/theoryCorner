import getAtRulesData from "./scss/at-rules"
import getMixinFunctionData from "./scss/mixinsFunctions"
import getScssModulesData from "./scss/modules"
import getScssOperatorsData from "./scss/operatorsValuesInterpolations"
import getScssOverviewData from "./scss/overview"
import getVariablesData from "./scss/variables"



let theoryDataCss = [

    getAtRulesData(),
    getMixinFunctionData(),
    getScssModulesData(),
    getScssOperatorsData(),
    getScssOverviewData(),
    getVariablesData(),

    {
        summary: 'position',
        title: 'position',
        searchKeywords: 'absolute relative static sticky fixed z-index css',
        cathegory: 'scss',
        content: [
            {
                elementType:'Article',
                content:[
                    {
                        elementType:'Headline',
                        content:'About position'
                    },
                    {
                        elementType: 'Paragraph',
                        content: `
    
                        `
                    }
                ]
            },
        ]
    },

 
]

export function getTheoryDataScss(){
    return theoryDataCss;
}